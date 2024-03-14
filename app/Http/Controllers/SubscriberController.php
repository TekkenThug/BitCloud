<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubscriberRequest;
use App\Http\Requests\UnsubscribeRequest;
use App\Services\SubscriberService;

class SubscriberController extends Controller
{
    /**
     * Subscribe to newsletter
     */
    public function post(SubscriberService $subscriberService, SubscriberRequest $request)
    {
        $validated = $request->validated();

        return response()->json([
            'data' => $subscriberService->subscribeToNewsletter($validated['email']),
            'message' => 'You successfully subscribed to newsletter',
        ]);
    }

    /**
     * Unsubscribe from newsletter
     */
    public function destroy(SubscriberService $subscriberService, UnsubscribeRequest $request)
    {
        $validated = $request->validated();
        try {
            $subscriberService->unsubscribeFromNewsletter($validated['email']);

            return response()->json([
                'message' => 'You successfully unsubscribed from newsletter',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function unsubscribe(SubscriberService $subscriberService, string $email)
    {
        try {
            $subscriberService->unsubscribeFromNewsletter($email);

            return response()->view('unsubscribe', ['message' => 'You successfully unsubscribed from newsletter']);
        } catch (\Exception $e) {
            return response()->view('unsubscribe', ['message' => $e->getMessage()]);
        }
    }
}
