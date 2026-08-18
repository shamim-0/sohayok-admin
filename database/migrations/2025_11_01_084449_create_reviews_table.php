<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('school_college');
            $table->text('comment');
            $table->integer('rating')->default(5);
            $table->string('image')->nullable();
            $table->boolean('is_active')->default(true);
            $table->integer('order')->default(0);
            $table->timestamps();

            $table->index(['is_active', 'order']);
            $table->index('rating');
        });
    }

    public function down()
    {
        Schema::dropIfExists('reviews');
    }
};