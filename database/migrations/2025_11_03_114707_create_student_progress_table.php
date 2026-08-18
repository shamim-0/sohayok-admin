<?php
// database/migrations/xxxx_xx_xx_xxxxxx_create_student_progress_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('student_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->foreignId('chapter_id')->constrained()->onDelete('cascade');
            $table->foreignId('lesson_id')->constrained()->onDelete('cascade');
            $table->boolean('is_completed')->default(false);
            $table->timestamp('completed_at')->nullable();
            $table->json('progress_data')->nullable(); // Additional progress data
            $table->timestamps();

            // Unique constraint to prevent duplicate progress entries
            $table->unique(['user_id', 'course_id', 'lesson_id']);
        });

        Schema::create('student_chapter_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->foreignId('chapter_id')->constrained()->onDelete('cascade');
            $table->integer('completed_lessons')->default(0);
            $table->integer('total_lessons')->default(0);
            $table->float('progress_percentage')->default(0);
            $table->timestamp('started_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();

            $table->unique(['user_id', 'course_id', 'chapter_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('student_chapter_progress');
        Schema::dropIfExists('student_progress');
    }
};