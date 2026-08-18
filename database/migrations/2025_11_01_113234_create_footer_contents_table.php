<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('footer_contents', function (Blueprint $table) {
            $table->id();
            
            // Brand Section
            $table->string('logo_path')->nullable();
            $table->text('brand_description');
            $table->string('play_store_url')->nullable();
            $table->string('app_store_url')->nullable();
            
            // Contact Section
            $table->string('address');
            $table->string('phone');
            $table->string('email');
            
            // Support Links
            $table->string('privacy_policy_url');
            $table->string('terms_conditions_url');
            $table->string('refund_policy_url');
            
            // Quick Links
            $table->string('about_us_url');
            $table->string('courses_url');
            $table->string('notice_url');
            $table->string('contact_url');
            
            // Social Media Links
            $table->string('facebook_url')->nullable();
            $table->string('youtube_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('twitter_url')->nullable();
            $table->string('instagram_url')->nullable();
            
            // Copyright
            $table->string('copyright_text');
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('footer_contents');
    }
};