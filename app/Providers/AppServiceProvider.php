<?php

namespace App\Providers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // HTTP macros
        Http::macro('currency', function () {
            return Http::withHeaders([
                'X-CMC_PRO_API_KEY' => config("api.market_api_key"),
            ])->baseUrl(config("api.market_api_url"));
        });

        // Default password rule
        Password::defaults(function () {
            return Password::min(6)->mixedCase()->numbers()->symbols();
        });
    }
}
