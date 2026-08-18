<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->decimal('price', 10, 2)->default(0);
            $table->decimal('offer_price', 10, 2)->nullable();
            $table->enum('status', ['draft', 'published', 'archived'])->default('draft');
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->text('description')->nullable();
            $table->text('more_description')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('whatsapp_link')->nullable();
            $table->string('facebook_link')->nullable();
            $table->string('telegram_link')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('courses');
    }
};