@extends('layouts.header-footer')
@section('title','About | ')
@section('content')

<div class="container about-container">
    <h1 class="about-title">About ShakeDown</h1>
    <div class="about-content">
        <p>Welcome to <strong>ShakeDown</strong>! This app is your ultimate tool for creating and managing gear lists for backpacking, camping, and other outdoor adventures. Whether you're planning a weekend trip or a multi-week trek, ShakeDown helps you stay organized by keeping track of all your essential gear in one place.</p>

        <p>ShakeDown was developed by <strong>Josiah J. Stadler</strong>, a skilled full-stack developer with a passion for building responsive and user-friendly web applications. Josiah has a background in Computer Science with a concentration in Data Science and extensive experience in PHP, JavaScript, and modern web frameworks like Laravel. As an outdoor enthusiast, he understands the challenges of managing gear lists for different trips, and ShakeDown is designed to make this process as seamless as possible.</p>

        <p>With ShakeDown, you can create multiple gear lists, categorize your items, and easily add or remove items as needed. The intuitive user interface ensures that your gear is always in check, so you can focus on enjoying your adventures.</p>
    </div>

    <div class="btn-container">
        @if(Auth::user())
        <a href="/gear-list" class="btn btn-primary btn-sm mt-2 py-2 px-3">Create Your Gear List</a>
        @else
        <a href="/register" class="btn btn-primary btn-sm mt-2 py-2 px-3">Create Your Account</a>
        @endif

    </div>
</div>
@endsection
