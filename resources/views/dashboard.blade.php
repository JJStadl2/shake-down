@extends('layouts.header-footer')
@section('content')
<div class="container">

    <div class="container">
        <div style="padding-top: 5%; padding-bottom: 5%;" class="row">
            <div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-img-top view-card"></div>
                    <div class="card-body">
                    {{-- <h5 class="card-title">Lists</h5> --}}
                    <p class="card-text">View Saved Gear Lists</p>
                    <a href="/lists" class="btn btn-primary">View</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-img-top create-card"></div>
                    <div class="card-body">
                    {{-- <h5 class="card-title">Create</h5> --}}
                    <p class="card-text">Create a New List</p>
                    <a href="/list" class="btn btn-primary">Create</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-img-top gallery-card"></div>
                    <div class="card-body">
                    {{-- <h5 class="card-title">Gallery</h5> --}}
                    <p class="card-text">View Trip Pics From Users</p>
                    <a href="/list" class="btn btn-primary">View</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
@endsection
