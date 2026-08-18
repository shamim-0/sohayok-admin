<?php
// app/Models/StudentProgress.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentProgress extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'course_id',
        'chapter_id',
        'lesson_id',
        'is_completed',
        'completed_at',
        'progress_data'
    ];

    protected $casts = [
        'is_completed' => 'boolean',
        'completed_at' => 'datetime',
        'progress_data' => 'array'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}