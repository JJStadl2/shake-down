@extends('layouts.header-footer')
@section('content')
<div class="container">
    <div class="form-container">
        <form method="post" action="{{ route('register') }}">
            @csrf
            <div class="mb-3">
                <label for="inputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputName" name="inputName" required/>
              </div>
            <div class="mb-3">
              <label for="inputEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="inputEmail" name="inputEmail" aria-describedby="emailHelp" required/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword" name="inputPassword" required/>
              <input type="checkbox" class="form-control-check" showPassword('inputPassword')/><span>&nbsp;Show Password</span>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required/>
                <input type="checkbox" class="form-control-check" showPassword('confirmPassword')/><span>&nbsp;Show Password</span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
</div>
@endsection
