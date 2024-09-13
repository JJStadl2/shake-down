@extends('layouts.header-footer')
@section('title','Gear | ')
@section('content')
@include('modals.search-modal')
@include('modals.gear-list-chart-modal')
<div class="list-item-form-container">

    <div class="gear-list-container">
        @include('includes.gear-list-header')


    </div>
    @if($gearList->list_items)
        @include('gear-lists.gear-list-by-item')
    @else
        {{-- @include('gear-lists.test') --}}
         @include('gear-lists.sortable-gear-by-category')
    @endif
</div>
@endsection
