<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('self_exam_results', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('subject');
            $table->integer('correct');
            $table->integer('wrong');
            $table->float('obtain_mark');
            $table->json('answersheet');
            $table->integer('taken_time'); // seconds
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('self_exam_results');
    }
};
