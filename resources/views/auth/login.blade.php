@extends('layouts.header-footer')
@section('content')
<div class="container">
    <h1>Login form</h1>
    <div class="form-container">
        <form method="post" action="{{ route('login') }}">
            @csrf
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" value="{{ old('email') }}" required/>

            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" name="password" required/>
              {{-- <input type="checkbox" class="form-control-check" onclick="showPassword();"/><span>&nbsp;Show Password</span> --}}
            </div>
             <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
</div>
@endsection
