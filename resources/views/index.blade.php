<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <title>Crypto exchange</title>
</head>

<body>
    <div id="root"></div>
    @viteReactRefresh
    @vite(['resources/frontend/main.tsx'])
</body>

</html>
