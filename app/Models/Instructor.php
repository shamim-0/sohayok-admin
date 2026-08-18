<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'bio',
        'education',
        'image',
        'order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function getImageUrlAttribute()
    {
        return $this->image ? asset('storage/' . $this->image) : asset('images/default-instructor.jpg');
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'course_instructors')
            ->withPivot('order')
            ->withTimestamps();
    }

    public function courseInstructors()
    {
        return $this->hasMany(CourseInstructor::class);
    }
}