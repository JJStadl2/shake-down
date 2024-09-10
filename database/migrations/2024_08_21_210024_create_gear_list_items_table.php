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
            $table->bigInteger('user_id');
            $table->string('item_name')->nullable();
            $table->string('item_category')->nullable();
            $table->float('item_weight')->default(0);
            $table->float('minimum_unit_weight')->default(0);
            $table->boolean('in_grams')->default(false);
            $table->boolean('in_kilos')->default(false);
            $table->boolean('in_ounces')->default(true);
            $table->boolean('in_lbs')->default(false);
            $table->float('amount')->default(1);
            $table->float('total_line_weight')->default(0);
            $table->integer('list_order')->default(0);
            $table->integer('category_order')->default(0);
            $table->timestamps();
            $table->softDeletes();
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
