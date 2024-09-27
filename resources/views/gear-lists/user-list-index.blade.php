{{-- TODO-> change icons to buttons? --}}
@extends('layouts.header-footer')
@section('title','Grear Lists | ')
@section('content')
@include('modals.delete-alert-modal')
<div class="btn-header-container" >
    <div class="row">
        <div class="col-md-4">
            <a href="/gear-list" class="btn btn-primary  btn-sm mt-2 py-2 px-3" >Create</a>
        </div>
        <div class="col-md-4">

        </div>
        <div class="col-md-4">
            <a href="/all-list-items" class="btn btn-primary btn-sm mt-2 py-2 px-3" style="float: right;">Your Gear</a>
        </div>
    </div>
</div>
<br>

<div class="container">


    <table class="table table-dark" style="width:100%" >
        <thead>
          <tr>

            <th scope="col">Name</th>
            <th scope="col">Notes</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th style="text-align: center;" scope="col">Actions</th>
            {{-- <th scope="col">Items</th>
            <th scope="col">Delete</th> --}}

          </tr>
        </thead>
        <tbody>
            @php $i = 1; @endphp
            @foreach($gearLists as $gearList)
          <tr>

            <td>{{ $gearList->name }}</td>
            <td>{{ $gearList->notes }}</td>
            <td>{{ date_format( $gearList->created_at, 'm-d-Y') ?? '' }}</td>
            <td>{{ date_format( $gearList->updated_at, 'm-d-Y') }}</td>
            <td>
            <div class="btn-group d-flex justify-content-center" role="group" >

                <a href='/gear-list/{{ $gearList->id }}' class="btn btn-sm btn-primary" style="padding: .25rem .5rem; margin-right:.5rem;"  title="Edit List">
                    <i class="fa fa-pencil-alt"></i>
                </a>
                <a href='/list-items/{{ $gearList->id }}' class="btn btn-sm btn-success" style=" margin-right:.5rem;"title="View Items">
                    <i class="fa fa-list"></i>
                </a>
                <button id="deleteListBtn-{{ $i }}" class="btn btn-sm btn-danger" title="Delete List"  data-object-type="list:"  data-object-name='{{ $gearList->name }}' data-object-id="{{ $gearList->id }}" data-href='/destroy-list/{{ $gearList->id }}' data-bs-toggle="modal" data-bs-target="#deleteAlertModal"  onclick="confirmDelete(this)">
                    <i class="fa fa-trash"></i>
                </button>

            </div>
            </td>

          </tr>
          @php $i++; @endphp
          @endforeach


        </tbody>
      </table>
</div>
@endsection
