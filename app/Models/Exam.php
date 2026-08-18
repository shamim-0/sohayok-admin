<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'created_by',
        'subject',
        'title',
        'instruction',
        'total_marks',
        'passing_marks',
        'deadline',
        'status',
        'question_file'
    ];

    protected $casts = [
        'deadline' => 'datetime',
        'total_marks' => 'integer',
        'passing_marks' => 'integer'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function submissions()
    {
        return $this->hasMany(ExamSubmission::class);
    }

    // Check if exam is expired
    public function isExpired()
    {
        return now()->gt($this->deadline);
    }

    // Auto-update status based on deadline
    public function updateStatus()
    {
        if ($this->isExpired() && $this->status != 'expired') {
            $this->update(['status' => 'expired']);
        }
    }
}