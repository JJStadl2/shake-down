@extends('layouts.header-footer')
@section('content')
<div class="container">

    <div class="container">
        <div class="row" style="padding-top: 2.5%; padding-bottom: 2.5%;" >
            <div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-img-top create-card"></div>
                    <div class="card-body">
                    <p class="card-text">Create a New List</p>
                    <a href="/gear-list" class="btn btn-primary">Create</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
            </div>
            <div class="col-lg-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-img-top view-card"></div>
                    <div class="card-body">
                    <p class="card-text">View Saved Gear Lists</p>
                    <a href="/gear-lists" class="btn btn-primary">View</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection
