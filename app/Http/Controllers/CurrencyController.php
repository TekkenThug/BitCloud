<?php

namespace App\Http\Controllers;

use App\Services\CurrencyService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    /**
     * Get currencies
     */
    public function get(CurrencyService $currencyService, Request $request): JsonResponse
    {
        return response()->json(['data' => $currencyService->getLatestTrends($request->query('limit', 100))]);
    }
}
