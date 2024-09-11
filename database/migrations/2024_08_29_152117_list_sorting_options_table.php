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
        Schema::create('list_sorting_options', function (Blueprint $table) {
            $table->id();
            $table->string('value')->unique();
            $table->string('display')->unique();
            $table->integer('ordinal');
            $table->string('order_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('list_sorting_options');
    }
};
