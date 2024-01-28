<?php

namespace App\Http\Controllers;

use App\Http\Requests\UnsubscribeRequest;
use App\Services\SubscriberService;
use App\Http\Requests\SubscriberRequest;

class SubscriberController extends Controller
{
    public function post(SubscriberService $subscriberService, SubscriberRequest $request)
    {
        $validated = $request->validated();

        return response()->json([
            'data' => $subscriberService->subscribeToNewsletter($validated['email']),
            'message' => 'You successfully subscribed to newsletter'
        ]);
    }

    public function destroy(SubscriberService $subscriberService, UnsubscribeRequest $request)
    {
        $validated = $request->validated();
        try {
            $subscriberService->unsubscribeFromNewsletter($validated['email']);

            return response()->json([
                'message' => 'You successfully unsubscribed from newsletter'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ]);
        }
    }
}
