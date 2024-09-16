@extends('layouts.header-footer')
@section('title','Gear | ')
@section('content')

<div class="list-item-form-container">
    <div class="row">
        <div class="col-md-4">
            <a href="/gear-lists" class="btn btn-primary btn-sm mt-2 py-2 px-3" style="float:left;margin-left:12%">Back to Gear Lists</a>

        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4">


            {{-- <input type="hidden" id="listByItems" data-column-name="list_items" value="{{ $gearList->list_items }}" /> --}}

        </div>
    </div>
    <div class="gear-list-container">
        @include('includes.user-items-header')


    </div>
    @if((bool)$options->list_items)
        @include('includes.list-user-items')
    @else
         {{-- @include('includes.sortable-gear-by-category') --}}
    @endif
</div>
@endsection
