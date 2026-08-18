<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromoCode extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'course_id',
        'discount_amount',
        'discount_type',
        'valid_from',
        'valid_until',
        'usage_limit',
        'used_count',
        'is_active',
        'description'
    ];

    protected $casts = [
        'valid_from' => 'datetime',
        'valid_until' => 'datetime',
        'is_active' => 'boolean'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function isValid()
    {
        if (!$this->is_active) {
            return false;
        }

        if ($this->usage_limit && $this->used_count >= $this->usage_limit) {
            return false;
        }

        $now = now();
        if ($this->valid_from && $now->lt($this->valid_from)) {
            return false;
        }

        if ($this->valid_until && $now->gt($this->valid_until)) {
            return false;
        }

        return true;
    }

    public function calculateDiscount($originalAmount)
    {
        if ($this->discount_type === 'percentage') {
            return ($originalAmount * $this->discount_amount) / 100;
        }

        return min($this->discount_amount, $originalAmount);
    }
}