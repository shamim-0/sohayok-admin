<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    // Single-row config table (same pattern as `heroes`, `footer_contents`, etc.)
    // — the admin panel only ever create-or-updates the first (and only) row.
    public function up(): void
    {
        Schema::create('app_versions', function (Blueprint $table) {
            $table->id();
            $table->string('version_name'); // human-readable, e.g. "1.3.0"
            $table->unsignedInteger('version_code'); // latest Play Store versionCode
            $table->unsignedInteger('min_version_code'); // below this, the app is force-updated
            $table->boolean('is_force_update')->default(false); // manual kill-switch, independent of min_version_code
            $table->string('update_url')->nullable(); // Play Store listing URL
            $table->text('update_message')->nullable(); // optional message shown in the update dialog
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('app_versions');
    }
};
