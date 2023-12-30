<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\SubscriberService;
use App\Http\Requests\SubscriberRequest;

class SubscriberController extends Controller
{
    private SubscriberService $subscriberService;

    public function __construct()
    {
        $this->subscriberService = new SubscriberService();
    }

    public function post(SubscriberRequest $request)
    {
        $validated = $request->validated();

        return response()->json([
            'data' => $this->subscriberService->subscribeToNewsletter($validated['email']),
            'message' => 'You success subscribed to newsletter'
        ]);
    }
}
