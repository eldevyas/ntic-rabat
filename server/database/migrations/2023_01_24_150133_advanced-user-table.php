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
        //
        // users table
        Schema::table('users', function (Blueprint $table) {
            // column name default to first plus last name
            $table->string('username')->default(DB::raw("CONCAT(LOWER(first_name), '_', LOWER(last_name))"))->change();
            $table->string('first_name')->after('name')->change();
            $table->string('last_name')->after('first_name')->change();
            // make email column unique
            // profile picture
            $table->string('profile_picture')->nullable()->change();
        });

        // update the first_name and last_name with the value of the name column
        DB::statement("UPDATE users SET first_name = SUBSTRING_INDEX(name, ' ', 1), last_name =
SUBSTRING_INDEX(SUBSTRING_INDEX(name, ' ', 2), ' ', -1) where first_name is null and last_name is null ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['username', 'first_name', 'last_name', 'profile_picture']);
            $table->string('email')->change();
        });
    }
};
