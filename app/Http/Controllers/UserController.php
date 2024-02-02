<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function me(Request $request): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'data' => $request->user()
        ]);
    }
}
