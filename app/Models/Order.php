<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'course_id',
        'promo_code_id',
        'order_id',
        'amount',
        'discount',
        'final_amount',
        'used_coupon',
        'status',
        'payment_method',
        'account_number',
        'phone_number',
        'transaction_id',
        'paid_at',
        'payment_details',
        'college_name',
        'district_name',
        'hsc_batch'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function promoCode()
    {
        return $this->belongsTo(PromoCode::class);
    }
}