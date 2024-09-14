@extends('layouts.header-footer')
@section('title','Gear | ')
@section('content')
@include('modals.search-modal')
@include('modals.gear-list-chart-modal')
<div class="list-item-form-container">
    <div class="row">
        <div class="col-md-4">
            <a href="/gear-lists" class="btn btn-primary btn-sm mt-2 py-2 px-3" style="float:left;margin-left:12%">Back to Gear Lists</a>

        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <input type="hidden" data-column-name="uom" id="uom" name="uom" value="{{$gearList->uom}}"/>
            <input type="hidden" id="maxPackWeight" value="{{ $gearList->maxPackWeight }}"/>
            <input type="hidden" id="listByItems" data-column-name="list_items" value="{{ $gearList->list_items }}" />
            <a href="/all-list-items" class="btn btn-primary py-2" style="float: right;">View All Gear</a>
            {{-- <button class="btn btn-primary btn-sm mt-2 py-2 px-3" style="float:right; margin-right -2%;" id="listChartBtn" data-bs-toggle="modal" data-bs-target="#gearListChartModal">
               See Analytics
               </button> --}}
        </div>
    </div>
    <div class="gear-list-container">
        @include('includes.gear-list-header')


    </div>
    @if((bool)$gearList->list_items)
        @include('gear-lists.gear-list-by-item')
    @else
        {{-- @include('gear-lists.test') --}}
         @include('gear-lists.sortable-gear-by-category')
    @endif
</div>
@endsection
