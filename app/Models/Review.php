<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'school_college',
        'comment',
        'rating',
        'image',
        'is_active',
        'order'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'rating' => 'integer'
    ];

    // Rating validation
    public function setRatingAttribute($value)
    {
        $this->attributes['rating'] = max(1, min(5, $value));
    }

    // Get stars for display
    public function getStarsAttribute()
    {
        return str_repeat('⭐', $this->rating);
    }

    // Get formatted rating
    public function getFormattedRatingAttribute()
    {
        return number_format($this->rating, 1);
    }

    // Scope for active reviews
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // Scope for ordered reviews
    public function scopeOrdered($query)
    {
        return $query->orderBy('order')->orderBy('created_at', 'desc');
    }

    // Scope for featured reviews (active and ordered)
    public function scopeFeatured($query)
    {
        return $query->active()->ordered();
    }
}