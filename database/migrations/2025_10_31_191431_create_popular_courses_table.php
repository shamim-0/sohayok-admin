<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('popular_courses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->integer('order')->default(0);
            $table->timestamps();

            $table->unique(['course_id']);
            $table->index('order');
        });
    }

    public function down()
    {
        Schema::dropIfExists('popular_courses');
    }
};