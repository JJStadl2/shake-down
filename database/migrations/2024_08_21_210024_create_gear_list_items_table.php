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
        Schema::create('gear_list_items', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('list_id');
            $table->string('item_name');
            $table->string('item_category');
            $table->float('item_weight');
            $table->boolean('in_grams')->default(false);
            $table->boolean('in_kilos')->default(false);
            $table->boolean('in_ounces')->default(true);
            $table->boolean('in_lbs')->default(true);
            $table->integer('amount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gear_list_items');
    }
};
