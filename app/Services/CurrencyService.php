<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class CurrencyService
{
    /**
     * Currency for comparing with all cryptocurrencies
     *
     * @var 'USD'
     */
    private string $comparedCurrency = 'USD';

    /**
     * Get latest trends
     *
     * @param  int  $limit  - limit of currencies
     * @return array|array[]
     */
    public function getLatestTrends(int $limit = 100)
    {
        $response = Http::currency()->get('/v1/cryptocurrency/listings/latest', [
            'limit' => $limit,
        ]);

        return array_map(function ($item) {
            $imageUrl = Storage::disk('local')->exists("public/images/currency-icons/{$item['symbol']}.svg") ?
                Storage::url("public/images/currency-icons/{$item['symbol']}.svg") :
                Storage::url('public/images/currency-icons/default.svg');

            return [
                'id' => $item['id'],
                'name' => $item['name'],
                'shortName' => $item['symbol'],
                'price' => $item['quote'][$this->comparedCurrency]['price'],
                'percentageForDay' => $item['quote'][$this->comparedCurrency]['percent_change_24h'],
                'percentageForWeek' => $item['quote'][$this->comparedCurrency]['percent_change_7d'],
                'marketCap' => $item['quote'][$this->comparedCurrency]['market_cap'],
                'volume' => $item['quote'][$this->comparedCurrency]['volume_24h'],
                'icon' => $imageUrl,

                // FAKE DATA
                'quote' => [
                    [
                        'date' => date('Y-m-d', strtotime('-3 day')),
                        'value' => rand(1, $item['quote'][$this->comparedCurrency]['price']),
                    ],
                    [
                        'date' => date('Y-m-d', strtotime('-2 day')),
                        'value' => rand(1, $item['quote'][$this->comparedCurrency]['price']),
                    ],
                    [
                        'date' => date('Y-m-d', strtotime('-1 day')),
                        'value' => rand(1, $item['quote'][$this->comparedCurrency]['price']),
                    ],
                    [
                        'date' => date('Y-m-d'),
                        'value' => $item['quote'][$this->comparedCurrency]['price'],
                    ],
                ],
            ];
        }, $response->json()['data']);
    }
}
