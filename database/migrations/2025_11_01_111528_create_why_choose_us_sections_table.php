<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('why_choose_us_sections', function (Blueprint $table) {
            $table->id();
            $table->string('title_part_1');
            $table->string('title_part_2');
            $table->string('subtitle_part_1');
            $table->string('subtitle_part_2');
            $table->json('features')->nullable();
            $table->json('stats')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('why_choose_us_sections');
    }
};