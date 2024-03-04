<?php

namespace App\Http\Controllers;

use App\Http\Requests\Users\RegisterRequest;
use App\Services\UserService;
use Illuminate\Http\Request;

/**
 * @group Users
 */
class UserController extends Controller
{
    /**
     * Get current authenticated user
     *
     * @authenticated
     */
    public function me(Request $request): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'data' => $request->user(),
        ]);
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
