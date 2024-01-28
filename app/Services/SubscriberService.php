<?php

namespace App\Services;

use App\Jobs\SubscriberJoinJob;
use App\Models\Subscriber;
use Exception;

class SubscriberService {
    public function subscribeToNewsletter(string $email)
    {
        $subscriber = Subscriber::create([
            'email' => $email
        ]);

        SubscriberJoinJob::dispatch($subscriber);

        return $subscriber;
    }

    /**
     * @throws Exception
     */
    public function unsubscribeFromNewsletter(string $email)
    {
        $subscriber = Subscriber::where('email', $email)->first();

        if (!$subscriber) {
            throw new Exception('User is not subscribed');
        }

        return $subscriber->delete();
    }
}
