<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->string('order_id')->unique();
            $table->decimal('amount', 10, 2);
            $table->string('used_coupon')->nullable();
            $table->decimal('discount', 10, 2)->default(0);
            $table->enum('status', ['pending', 'completed', 'failed'])->default('pending');
            $table->enum('payment_method', ['bkash', 'nagad']);
            $table->string('account_number');
            $table->string('phone_number');
            $table->string('transaction_id');
            $table->decimal('final_amount', 10, 2); // Add this field
            $table->foreignId('promo_code_id')->nullable()->constrained()->onDelete('set null');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('orders');
    }
};