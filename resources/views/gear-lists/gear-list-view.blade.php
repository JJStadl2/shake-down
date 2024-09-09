@extends('layouts.header-footer')
@section('title','Gear | ')
@section('content')
@include('modals.search-modal')
@include('modals.gear-list-chart-modal')


@if($gearList->list_items)
    @include('gear-lists.gear-list-by-item')
@else
    @include('gear-lists.gear-list-by-category')
@endif
