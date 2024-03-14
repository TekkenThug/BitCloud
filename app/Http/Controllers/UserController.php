<?php

namespace App\Http\Controllers;

use App\Http\Requests\Users\RegisterRequest;
use App\Http\Resources\Users\UserResource;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Get current authenticated user
     */
    public function me(): UserResource
    {
        return new UserResource(Auth::user());
    }

    /**
     * Register new user
     */
    public function register(UserService $userService, RegisterRequest $request): \Illuminate\Http\JsonResponse
    {
        $validated = $request->validated();

        $userService->registerNewUser($validated);

        return response()->json([
            'message' => 'User registration successfully! Please, confirm your email',
        ]);
    }
}
