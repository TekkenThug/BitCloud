<?php

namespace App\Http\Controllers;

use App\Services\CurrencyService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    private CurrencyService $currencyService;

    public function __construct()
    {
        $this->currencyService = new CurrencyService();
    }

    /**
     * Get trends
     */
    public function get(Request $request): JsonResponse
    {
        return response()->json(['data' => $this->currencyService->getLatestTrends($request->query('limit', 100))]);
    }
}
