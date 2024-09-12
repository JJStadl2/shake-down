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
        Schema::create('list_classes', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('display');
            $table->string('description');
            $table->integer('ordinal');
            $table->float('us_max_weight');
            $table->float('metric_max_weight');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('list_classes');
    }
};
