<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'lesson_id',
        'course_id',
        'answers',
        'negative_mark',
        'total_correct',
        'total_wrong',
        'total_unanswered',
        'total_marks',
        'total_questions',
        'obtained_marks',
        'passing_status',
        'time_spent',
        'submitted_at'
    ];

    protected $casts = [
        'answers' => 'array',
        'negative_mark' => 'decimal:2',
        'total_marks' => 'decimal:2',
        'obtained_marks' => 'decimal:2',
        'submitted_at' => 'datetime',
    ];

    // Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}