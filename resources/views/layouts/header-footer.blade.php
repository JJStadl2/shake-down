<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title'){{ config('app.name') }}</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    {{-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script> --}}
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
                    <a href="/register" class="nav-link-text">Sign Up</a>
                    <a href="/login" class="nav-link-text">Login</a>
                    @if(Auth::check())
                        <a href="/dashboard" class="nav-link-text">Dashboard</a>
                    @endif
                    <a href="/about" class="nav-link-text">About</a>
                    <a href="/logout" class="nav-link-text">Log Out</a>
                </nav>

        </header>
        @include('messages.alerts')
        @yield('content')
        <footer class="footer">
             <p>&copy; 2024 ShakeDown. All rights reserved.</p>

        </footer>
    </div>
    @stack('footerscripts')
    @yield('js')
</body>
</html>
