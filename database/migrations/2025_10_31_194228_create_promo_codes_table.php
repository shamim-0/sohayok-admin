<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('promo_codes', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->foreignId('course_id')->nullable()->constrained()->onDelete('cascade');
            $table->decimal('discount_amount', 10, 2);
            $table->enum('discount_type', ['percentage', 'fixed'])->default('percentage');
            $table->date('valid_from')->nullable();
            $table->date('valid_until')->nullable();
            $table->integer('usage_limit')->nullable();
            $table->integer('used_count')->default(0);
            $table->boolean('is_active')->default(true);
            $table->text('description')->nullable();
            $table->timestamps();

            $table->index(['course_id', 'is_active']);
            $table->index(['valid_until', 'is_active']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('promo_codes');
    }
};