<?php

namespace App\Services;

use App\Models\Subscriber;

class SubscriberService {
    public function subscribeToNewsletter(string $email)
    {
        return Subscriber::create([
            'email' => $email
        ]);
    }
}