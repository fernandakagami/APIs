<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->longtext('description');
            $table->string('postal_code');
            $table->string('country_name');
            $table->string('region_name');
            $table->string('city');
            $table->longtext('address');
            $table->string('name');
            $table->text('short_description');
            $table->text('photos');
            $table->decimal('stars', 3, 2);
            $table->text('amenities');
            $table->string('category');
            $table->foreignId('owners_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotels');
    }
};
