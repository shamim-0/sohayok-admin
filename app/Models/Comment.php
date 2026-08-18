<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{


    protected $fillable = [
        'text',
        'lesson_id',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    
    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

}
