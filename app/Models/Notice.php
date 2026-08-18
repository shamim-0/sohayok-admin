<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'link',
        'pdf_file',
        'is_active',
        'publish_date',
        'expire_date',
        'order'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'publish_date' => 'datetime',
        'expire_date' => 'datetime'
    ];

    // Check if notice is currently active
    public function getIsCurrentlyActiveAttribute()
    {
        if (!$this->is_active) {
            return false;
        }

        $now = now();
        
        if ($this->publish_date && $now->lt($this->publish_date)) {
            return false;
        }

        if ($this->expire_date && $now->gt($this->expire_date)) {
            return false;
        }

        return true;
    }

    // Get file type
    public function getFileTypeAttribute()
    {
        if ($this->pdf_file) {
            return 'pdf';
        }
        if ($this->link) {
            return 'link';
        }
        return 'text';
    }

    // Scope for active notices
    public function scopeActive($query)
    {
        return $query->where('is_active', true)
                    ->where(function($q) {
                        $q->whereNull('publish_date')
                          ->orWhere('publish_date', '<=', now());
                    })
                    ->where(function($q) {
                        $q->whereNull('expire_date')
                          ->orWhere('expire_date', '>=', now());
                    });
    }

    // Scope for published notices
    public function scopePublished($query)
    {
        return $query->active()->orderBy('order')->orderBy('created_at', 'desc');
    }
}