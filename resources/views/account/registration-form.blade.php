@extends('layouts.header-footer')
@section('content')
<div class="container">
    <div class="form-container">
        <h1>Sign Up</h1>
        <form class="registration-form" method="post" action="{{ route('register') }}">
            @csrf
            <div class="mb-3">
                <label for="inputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputName" name="inputName" value="{{ old('inputName') }}" required/>
              </div>
            <div class="mb-3">
              <label for="inputEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="inputEmail" name="inputEmail" aria-describedby="emailHelp" value="{{ old('inputEmail') }}" required/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword" name="inputPassword" required/>
              <input type="checkbox" class="form-control-check" onclick="showPassword('inputPassword');"/><span>&nbsp;Show</span>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required/>
                <input type="checkbox" class="form-control-check" onclick="showPassword('confirmPassword');"/><span>&nbsp;Show</span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
    <div class="form-footer"></div>
</div>
@endsection
