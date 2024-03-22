<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rules\Password;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|unique:users|email',
            'password' => ['required', Password::defaults()],
            'confirmPassword' => 'required|same:password',
            'agreement' => 'accepted',
            'first_name' => 'required|min:2',
            'last_name' => 'required|min:2',
            'birthdate' => [
                'required',
                'date_format:Y-m-d',
                'before:'.Carbon::now()->subYears(18)->format('Y-m-d'),
            ],
        ];
    }
}
