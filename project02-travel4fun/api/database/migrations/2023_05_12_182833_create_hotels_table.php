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
            $table->string('postal_code')->nullable();
            $table->string('country_name')->nullable();
            $table->string('region_name')->nullable();
            $table->string('city')->nullable();
            $table->longtext('address')->nullable();
            $table->string('name')->nullable();
            $table->text('short_description')->nullable();
            $table->text('photos')->nullable();
            $table->decimal('stars', 3, 2)->nullable();            
            $table->foreignId('categories_id')->nullable();
            $table->foreignId('users_id')->constrained()->onDelete('cascade')->nullable();
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
