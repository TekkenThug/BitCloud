<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => env('TEST_USER_EMAIL'),
            'email_verified_at' => now(),
            'password' => Hash::make(env('TEST_USER_PASSWORD')),
            'remember_token' => Str::random(10),
        ]);
    }
}
