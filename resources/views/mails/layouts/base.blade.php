<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>BitCloud</title>

    <style>
        .mail {
            max-width: 720px;
            width: 100%;
            margin: 0 auto;
            font-family: 'Poppins', sans-serif;
            padding: 24px 48px;
            font-size: 18px;
            line-height: 24px;
            color: #FCFCFD;
            background-color: #141416;
        }

        .mail__head th {
            padding-bottom: 32px;
        }

        .mail__head img {
            display: block;
            width: 200px;
        }

        .mail a {
            color: #3772FF;
        }

        .mail__content td {
            padding-bottom: 24px;
        }

        .mail__footer {
            font-size: 12px;
            line-height: 16px;
            color: #777E90;
        }

        .mail__footer td {
            border-top: 1px solid #353945;
            padding-top: 20px;
        }
    </style>
</head>
<body>
    <table class="mail">
        <thead class="mail__head">
            @section('header')
                <tr>
                    <th>
                        <img src="https://i.ibb.co/z8YpTnH/logo.png" alt="BitCloud" />
                    </th>
                </tr>
            @show
        </thead>

        <tbody class="mail__content">
            @yield('content')
        </tbody>

        <tfoot class="mail__footer">
            @yield('footer')
        </tfoot>
    </table>
</body>
</html>
