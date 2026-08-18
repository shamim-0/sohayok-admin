<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('quiz_results', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('lesson_id')->constrained()->onDelete('cascade');
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->json('answers');
            $table->decimal('negative_mark', 3, 2)->default(0);
            $table->integer('total_correct');
            $table->integer('total_wrong');
            $table->integer('total_unanswered');
            $table->decimal('total_marks', 5, 2);
            $table->integer('total_questions');
            $table->decimal('obtained_marks', 5, 2); 
            $table->enum('passing_status', ['passed', 'failed']);
            $table->integer('time_spent');
            $table->timestamp('submitted_at');
            $table->timestamps();

            // Indexes for better performance
            $table->index(['user_id', 'lesson_id']);
            $table->index(['course_id', 'passing_status']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('quiz_results');
    }
};