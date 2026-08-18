<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'exam_id',
        'student_id',
        'answer_file',
        'obtained_marks',
        'feedback',
        'submitted_at'
    ];

    protected $casts = [
        'submitted_at' => 'datetime',
        'obtained_marks' => 'integer'
    ];

    public function exam()
    {
        return $this->belongsTo(Exam::class);
    }

    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }

    // Check if passed
    public function isPassed()
    {
        return $this->obtained_marks >= $this->exam->passing_marks;
    }
}