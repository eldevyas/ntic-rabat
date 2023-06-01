<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('username')->nullable();
            $table->string('first_name')->nullable()->after('name');
            $table->string('last_name')->nullable()->after('first_name');
        });

        DB::statement("UPDATE users SET first_name = SUBSTRING_INDEX(name, ' ', 1), last_name = SUBSTRING_INDEX(SUBSTRING_INDEX(name, ' ', 2), ' ', -1) WHERE first_name IS NULL AND last_name IS NULL");

        Schema::table('users', function (Blueprint $table) {
            $table->string('username')->default(DB::raw("CONCAT(LOWER(first_name), '_', LOWER(last_name))"))->change();
            $table->string('first_name')->change();
            $table->string('last_name')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['username', 'first_name', 'last_name']);
        });
    }
};
