<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhyChooseUsSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_part_1',
        'title_part_2',
        'subtitle_part_1',
        'subtitle_part_2',
        'features',
        'stats',
    ];

    protected $casts = [
        'features' => 'array',
        'stats' => 'array',
    ];
}