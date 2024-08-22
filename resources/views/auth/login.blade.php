@extends('layouts.header-footer')
@section('content')
<div class="container">
    <h1>Log In</h1>
    <div class="form-container">
        <form class="login-form" method="post" action="{{ route('login') }}">
            @csrf
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" value="{{ old('email') }}" required/>

            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" name="password" required/>
              <input type="checkbox" class="form-control-check" onclick="showPassword('password');"/><span>&nbsp;Show</span>
            </div>
            <div>
                <button type="submit" class="btn btn-primary">Login</button>
                <a  href="/register" class="btn btn-primary">Create an Account</a>

            </div>
          </form>
    </div>
</div>
@endsection
