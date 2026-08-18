<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Chapter extends Model
{
    use HasFactory;

    protected $fillable = [
        'course_id',
        'order',
        'name',
    ];

    protected $casts = [
        'order' => 'integer',
    ];

    /**
     * Get the course that owns the chapter.
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }
    public function lessons(): HasMany
    {
        return $this->hasMany(Lesson::class);
    }
    /**
     * Boot method to automatically set order when creating new chapter.
     */

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($chapter) {
            if (empty($chapter->order)) {
                $lastOrder = static::where('course_id', $chapter->course_id)
                    ->max('order');
                $chapter->order = ($lastOrder ?? 0) + 1;
            }
        });
    }

}