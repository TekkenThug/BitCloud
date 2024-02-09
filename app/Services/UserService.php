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
            'email' => $data['email'],
            'password' => Hash::make($data['password'], ['rounds' => 12]),
        ]);

        event(new Registered($user));

        return $user;
    }
}
