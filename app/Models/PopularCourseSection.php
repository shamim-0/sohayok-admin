<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PopularCourseSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_part_1',
        'title_part_2', 
        'subtitle_part_1',
        'subtitle_part_2'
    ];

    // Get first popular course section content (since we'll have only one)
    public static function getContent()
    {
        return self::first();
    }

    // Get full title
    public function getFullTitleAttribute()
    {
        return $this->title_part_1 . ' ' . $this->title_part_2;
    }

    // Get full subtitle
    public function getFullSubtitleAttribute()
    {
        return $this->subtitle_part_1 . ' ' . $this->subtitle_part_2;
    }
}