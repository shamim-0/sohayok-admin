<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SelfExamResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'subject',
        'correct',
        'wrong',
        'obtain_mark',
        'answersheet',
        'taken_time',
    ];

    protected $casts = [
        'answersheet' => 'array', // auto json encode/decode
    ];

    // Relation with user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
