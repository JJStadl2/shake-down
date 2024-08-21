@extends('layouts.header-footer')
@section('content')
<div class="container">
    <h1 style="text-align: center;">Dashboard </h1>
    <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Lists</h5>
                <p class="card-text">View Saved Gear Lists</p>
                <a href="/lists" class="btn btn-primary">View</a>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Create</h5>
                <p class="card-text">Create a New List</p>
                <a href="/list" class="btn btn-primary">Create</a>
                </div>
            </div>
        </div>
        <div class="col-lg-2"></div>
    </div>
</div>
@endsection
