<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title'){{ env('APP_NAME') }}</title>
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
            <div class="container">
                {{-- <h1 class="logo">ShakeDown</h1> --}}
                <nav class="nav">
                    <a href="/" class="nav-link">Home</a>
                    <a href="/register" class="nav-link">Sign Up</a>
                    <a href="/login" class="nav-link">Login</a>
                    <a href="/gear-lists" class="nav-link">My Gear Lists</a>
                    <a href="/about" class="nav-link">About</a>
                </nav>
            </div>
        </header>
        @include('messages.alerts')
        @yield('content')
        <footer class="footer">
            <div class="container">
                <p>&copy; 2024 Hiking Gear Manager. All rights reserved.</p>
            </div>
        </footer>
    </div>
    @stack('footerscripts')
    @yield('js')
</body>
</html>
