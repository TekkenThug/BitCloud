@extends('mails.layouts.base')

@section('content')
    <tr>
        <td>
            <p>
                Hello, {{ $email ?? "user" }}! Thank you to registration on BitCloud!
            </p>

            <p>
                Please, confirm your email address for further work on our site.
            </p>

            <p>
                For confirmation, just <a href="{{ $link }}">click on this link</a>
            </p>
        </td>
    </tr>
@endsection
