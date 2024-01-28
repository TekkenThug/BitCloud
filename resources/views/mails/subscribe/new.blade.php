@extends('mails.layouts.base')

@section('content')
    <tr>
        <td>
            Hello, {{ $email ?? "user" }}! Thank you to subscribing on newsletter!
        </td>
    </tr>
@endsection

@section('footer')
    <tr>
        <td>
            If you want to unsubscribe, please, click to <a href="https://google.com" target="_blank">this link</a>
        </td>
    </tr>
@endsection
