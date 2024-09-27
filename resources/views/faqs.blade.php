@extends('layouts.header-footer')
@section('title','About | ')
@section('content')


<div class="container faqs-container">
    <h1 class="faqs-title">Frequently Asked Questions</h1>

    <div class="faq-item">
        <p class="faq-question">Q: What is ShakeDown?</p>
        <p class="faq-answer">A: ShakeDown is a web application that allows you to create and manage gear lists for backpacking, camping, and other outdoor adventures. It helps you stay organized by keeping all your essential gear in one place.</p>
    </div>

    <div class="faq-item">
        <p class="faq-question">Q: How do I create a new gear list?</p>
        <p class="faq-answer">A: You can create a new gear list by clicking on the "Create Your Gear List" button found on the homepage or the "Create" button below.</p>
    </div>

    <div class="faq-item">
        <p class="faq-question">Q: Can I edit or delete items from my gear list?</p>
        <p class="faq-answer">A: Yes, you can easily add, edit, or remove items from your gear list using the intuitive interface. Simply navigate to your gear list and use the available options to manage your items.</p>
    </div>

    <div class="faq-item">
        <p class="faq-question">Q: Is ShakeDown free to use?</p>
        <p class="faq-answer">A: Yes, ShakeDown is completely free to use. You can create and manage as many gear lists as you need.</p>
    </div>

    <div class="faq-item">
        <p class="faq-question">Q: Who developed ShakeDown?</p>
        <p class="faq-answer">A: ShakeDown was developed by Josiah J. Stadler, a skilled full-stack developer with a passion for web development and the great outdoors. With a background in Computer Science and experience in building responsive, user-friendly applications, Josiah created ShakeDown to make managing gear lists easier for fellow adventurers.</p>
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
