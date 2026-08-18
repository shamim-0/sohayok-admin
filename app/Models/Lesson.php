<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'chapter_id',
        'title',
        'content_type',
        'order',
        'video_type',
        'video_url',
        'scheduled_at',
        'time',
        'mark',
        'negative_mark',
        'passing_mark',
        'file_path',
        'file_name'
    ];

    protected $casts = [
        'scheduled_at' => 'datetime',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }
    public function result()
    {
        return $this->hasOne(QuizResult::class, 'lesson_id')
        ->where('user_id', auth()->id());
    }
}