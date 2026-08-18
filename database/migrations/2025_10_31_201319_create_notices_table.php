<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('notices', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('link')->nullable();
            $table->string('pdf_file')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamp('publish_date')->nullable();
            $table->timestamp('expire_date')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();

            $table->index(['is_active', 'publish_date', 'expire_date']);
            $table->index('order');
        });
    }

    public function down()
    {
        Schema::dropIfExists('notices');
    }
};