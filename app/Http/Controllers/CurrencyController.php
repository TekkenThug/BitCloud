<?php

namespace App\Http\Controllers;

use App\Services\CurrencyService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * @group Currencies
 */
class CurrencyController extends Controller
{
    private CurrencyService $currencyService;

    public function __construct()
    {
        $this->currencyService = new CurrencyService();
    }

    /**
     * Get currencies
     *
     * @authenticated
     */
    public function get(Request $request): JsonResponse
    {
        return response()->json(['data' => $this->currencyService->getLatestTrends($request->query('limit', 100))]);
    }
}
