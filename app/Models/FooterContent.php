<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FooterContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'logo_path',
        'brand_description',
        'play_store_url',
        'app_store_url',
        'address',
        'phone',
        'email',
        'privacy_policy_url',
        'terms_conditions_url',
        'refund_policy_url',
        'about_us_url',
        'courses_url',
        'notice_url',
        'contact_url',
        'facebook_url',
        'youtube_url',
        'linkedin_url',
        'twitter_url',
        'instagram_url',
        'copyright_text',
    ];
}