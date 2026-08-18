<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseFeature extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'title',
        'value',
        'icon',
        'order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    // Relationship with course
    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    // Default icons for common features
    public function getIconClassAttribute()
    {
        if ($this->icon) {
            return $this->icon;
        }

        // Default icons based on title
        $defaultIcons = [
            'recorded' => 'fas fa-video',
            'live' => 'fas fa-broadcast-tower',
            'pdf' => 'fas fa-file-pdf',
            'exam' => 'fas fa-clipboard-list',
            'support' => 'fas fa-headset',
            'duration' => 'fas fa-clock',
            'access' => 'fas fa-calendar-alt',
        ];

        foreach ($defaultIcons as $key => $icon) {
            if (stripos($this->title, $key) !== false) {
                return $icon;
            }
        }

        return 'fas fa-star';
    }
}