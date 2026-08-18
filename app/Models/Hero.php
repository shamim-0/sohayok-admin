<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle'
    ];

    // Get first hero content (since we'll have only one)
    public static function getContent()
    {
        return self::first();
    }
}