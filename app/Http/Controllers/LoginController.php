<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Resources\Users\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

/**
 * @group Authentication
 */
class LoginController extends Controller
{
    /**
     * Login in application
     *
     * @param LoginRequest $request
     *
     * @bodyParam email string User email
     * @bodyParam password string User password
     *
     * @response {
     *     "data": {
     *         "id": 1,
     *         "email": "test@gmail.com",
     *         "first_name": "Sam",
     *         "last_name": "Jenkins",
     *         "avatar": "https://avatarlink.jpeg"
     *     },
     *     "message": "Successfully login"
     * }
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request): \Illuminate\Http\JsonResponse
    {
        $credentials = $request->validated();

        if (Auth::attempt($credentials)) {
            if (!Auth::user()->hasVerifiedEmail()) {
                Auth::logout();

                return response()->json([
                    'message' => 'Please, verify email address',
                ], Response::HTTP_UNAUTHORIZED);
            }

            $request->session()->regenerate();

            return response()->json([
                'data' => new UserResource(Auth::user()),
                'message' => 'Successfully login',
            ]);
        }

        return response()->json([
            'message' => 'Incorrect credentials',
        ], Response::HTTP_UNAUTHORIZED);
    }

    /**
     * Logout from application
     *
     * @param Request $request
     *
     * @authenticated
     *
     * @response {
     *     "message": "Successfully logout"
     * }
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request): \Illuminate\Http\JsonResponse
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Successfully logout',
        ]);
    }
}
