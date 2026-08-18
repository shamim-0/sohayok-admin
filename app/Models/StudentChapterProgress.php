<?php
// app/Models/StudentChapterProgress.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentChapterProgress extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'course_id',
        'chapter_id',
        'completed_lessons',
        'total_lessons',
        'progress_percentage',
        'started_at',
        'completed_at'
    ];

    protected $casts = [
        'started_at' => 'datetime',
        'completed_at' => 'datetime'
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
}