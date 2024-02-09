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
            'avatar' => "https://64.media.tumblr.com/80821e34530a5cb103d9f89febf5f7c6/89c03ce0fe23ab77-a6/s250x400/f26a83acc622d5098363e22a9e847b05b8249181.png",
            'remember_token' => Str::random(10),
        ]);
    }
}
