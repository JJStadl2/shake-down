@extends('layouts.header-footer')
@section('title','Gear | ')
@section('content')
@include('modals.add-gear-to-list-modal')
@include('modals.gear-list-chart-modal')
@include('modals.delete-alert-modal')
<div class="list-item-form-container">
    <div class="row">
        <div class="col-md-4">
            <a href="/gear-lists" class="btn btn-primary btn-sm mt-2 py-2 px-3" style="float:left;margin-left:12%">Gear Lists</a>

        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <input type="hidden" data-column-name="uom" id="uom" name="uom" value="{{$gearList->uom}}"/>
            <input type="hidden" id="maxPackWeight" value="{{ $gearList->maxPackWeight }}"/>
            <input type="hidden" id="listByItems" data-column-name="list_items" value="{{ $gearList->list_items }}" />
            <a href="/all-list-items" class="btn btn-primary btn-sm mt-2 py-2 px-3" style="float: right;">Your Gear</a>
        </div>
    </div>
    <div class="gear-list-container">
        @include('includes.gear-list-header')


    </div>
    @if((bool)$gearList->list_items)
        @include('includes.gear-list-by-item')
    @else
         @include('includes.sortable-gear-by-category')
    @endif
</div>
@endsection
