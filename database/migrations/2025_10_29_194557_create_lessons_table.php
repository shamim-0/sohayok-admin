<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->foreignId('chapter_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->enum('content_type', ['video', 'quiz', 'lecture_sheet', 'slide']);
            $table->integer('order')->default(0);
            
            // Video fields
            $table->enum('video_type', ['youtube', 'hls', 'googledrive', 'facebook'])->nullable();
            $table->string('video_url')->nullable();
            
            // Quiz fields
            $table->integer('time')->nullable()->comment('Time in minutes');
            $table->integer('mark')->nullable();
            $table->decimal('negative_mark', 5, 2)->nullable();
            $table->integer('passing_mark')->nullable();
            
            // File fields
            $table->string('file_path')->nullable();
            $table->string('file_name')->nullable();
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('lessons');
    }
};