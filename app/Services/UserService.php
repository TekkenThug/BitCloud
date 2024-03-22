<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function registerNewUser(array $data)
    {
        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'], ['rounds' => 12]),
            'birthdate' => $data['birthdate'],
        ]);

        event(new Registered($user));

        return $user;
    }
}
