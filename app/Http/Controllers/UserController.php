<?php

namespace App\Http\Controllers;

use App\Http\Requests\Users\RegisterRequest;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function me(Request $request): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'data' => $request->user()
        ]);
    }

    public function register(UserService $userService, RegisterRequest $request): \Illuminate\Http\JsonResponse
    {
        $validated = $request->validated();

        $userService->registerNewUser($validated);

        return response()->json([
            'message' => 'User registration successfully! Please, confirm your email'
        ]);
    }
}
