<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seed.
     *
     * @return void
     */
    public function run()
    {
        // Create Stagiaire role
        Role::create([
            'name' => 'stagiaire',
        ]);

        // Create Admin role
        Role::create([
            'name' => 'admin',
        ]);

        // Output the result
        $this->command->info('Roles seeded successfully.');
    }
}