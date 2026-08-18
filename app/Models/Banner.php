<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    // Scope for active banners
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // Scope for ordered banners
    public function scopeOrdered($query)
    {
        return $query->orderBy('order');
    }

    // Scope for featured banners (active and ordered)
    public function scopeFeatured($query)
    {
        return $query->active()->ordered();
    }
}