<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppVersion extends Model
{
    use HasFactory;

    protected $fillable = [
        'version_name',
        'version_code',
        'min_version_code',
        'is_force_update',
        'update_url',
        'update_message',
    ];

    protected $casts = [
        'is_force_update' => 'boolean',
        'version_code' => 'integer',
        'min_version_code' => 'integer',
    ];

    // There's only ever one row — same convention as Hero::getContent().
    public static function current()
    {
        return self::first();
    }
}
