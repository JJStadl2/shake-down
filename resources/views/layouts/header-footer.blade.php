<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title'){{ config('app.name') }}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <script src="{{ mix('js/app.js') }}" type="application/javascript"></script>
    <script src="{{ mix('js/manifest.js') }}" type="application/javascript"></script>
    <script src="{{ mix('js/vendor.js') }}" type="application/javascript"></script>
</head>
<body>
    <div class="wrapper">
           <header class="header">
                <nav class="nav nav-header">
                    <a href="/" class="nav-link"><img src="/images/Logos/logo-no-background.png" alt="ShakeDown"
                        style="width: 100px;"></a>
                    @if(Auth::check())
                        <a href="/dashboard" class="nav-link-text">Dashboard</a>
                        <a href="/logout" class="nav-link-text">Log Out</a>
                    @else
                        <a href="/login" class="nav-link-text">Login</a>
                        <a href="/register" class="nav-link-text">Sign Up</a>
                    @endif

                    <a href="/about" class="nav-link-text">About</a>
                    <a href="/faqs" class="nav-link-text">Faqs</a>

                </nav>

        </header>
        @include('messages.alerts')
        @yield('content')
        <div class="push"></div>
    </div>
    <footer class="footer">
        <p>&copy; 2024 ShakeDown. All rights reserved.</p>

    </footer>
    @stack('footerscripts')
    @yield('js')
</body>

</html>
