<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        DB::statement("ALTER TABLE lessons MODIFY COLUMN video_type ENUM('youtube', 'hls', 'googledrive', 'facebook', 'youtube_stream') NULL");

        Schema::table('lessons', function (Blueprint $table) {
            $table->dateTime('scheduled_at')->nullable()->after('video_url');
        });
    }

    public function down(): void
    {
        Schema::table('lessons', function (Blueprint $table) {
            $table->dropColumn('scheduled_at');
        });

        DB::statement("ALTER TABLE lessons MODIFY COLUMN video_type ENUM('youtube', 'hls', 'googledrive', 'facebook') NULL");
    }
};
