<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Services\CurrencyService;

class CurrencyController extends Controller
{
    private CurrencyService $currencyService;

    public function __construct()
    {
        $this->currencyService = new CurrencyService();
    }

    /**
     * Get trends
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function get(Request $request): JsonResponse {
        return response()->json($this->currencyService->getLatestTrends($request->query('limit')));
    }
}
