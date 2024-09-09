@extends('layouts.header-footer')
@section('title','Gear | ')
@section('content')
@include('modals.search-modal')
@include('modals.gear-list-chart-modal')
<div class="list-item-form-container">

    <div class="gear-list-container">
        <h2 class="mb-4" style="text-align: center; margin-right: -5%"> {{ $gearList->name }}</h2>
        <input type="hidden" data-column-name="uom" id="uom" name="uom" value="{{$gearList->uom}}"/>
        <input type="hidden" id="maxPackWeight" value="{{ $gearList->maxPackWeight }}"/>

        <div class="row">
            <div class="col-md-1"></div>
            <input type="hidden" name="listId" id="listId" data-column-name="list_id" value="{{ $gearList->id }}"/>
            <input type="hidden" name="userId" id="userId" data-column-name="user_id" value="{{ $user->id }}"/>
            <div class="col-md-1"></div>
            <div class="col-md-3">
                <label style="display: inline-block" class="form-control-label">Name</label>
                <input type="text" class="form-control" id="listName" name="listName" data-column-name="name" value="{{ $gearList->name ?? '' }}" onblur="updateList(this,{{ $gearList->id }})"/>
            </div>
            <div class="col-md-3 mb-2">
                <label class="form-control-label">Notes</label>
                <textarea type="text" class="form-control" id="listNotes" name="listNotes" data-column-name="notes"  onblur="updateList(this,{{ $gearList->id }})">{{ $gearList->notes ?? '' }}</textarea>
            </div>
            <div class="col-md-2">
                <label class="form-control-label">Base Weight ({{ $gearList->weightUom }})</label>
                <input type="text" class="form-control" id="baseWeight" name="baseWeight" value="{{ number_format($gearList->baseWeight,2,'.',',') ?? 0 }}" readonly/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-1"></div>
            <div class="col-md-3">
                <label class="form-control-label">Type</label>
                <select class="form-control" id="listClass" name="listClass" data-column-name="list_class" onchange="updateList(this,{{ $gearList->id }})">
                    <option value=""  @if(old('listClass') ==='') selected @endif>Select Style of Hiking </option>
                    @foreach($listClasses as $class)
                        <option value="{{ $class->type }}"  @if($gearList->list_class === $class->type) selected @endif>{{ $class->display.' - '.$class->description }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-3 mb-3">
                <label class="form-control-label" for="sortBy" class="form-label">Sort By</label>
                <select class="form-control" id="sortBy" name="sortBy" data-column-name="sort" onchange="updateList(this,{{ $gearList->id }})">
                    @foreach($sortingOptions as $option)
                    <option value="{{ $option->value }}"  @if($gearList->sort === $option->value) selected @endif>{{ $option->display }}</option>
                    @endforeach
                </select>

            </div>

            <div class="col-md-2 mb-3">
                <label class="form-control-label">Total Pack Weight ({{ $gearList->weightUom }})</label>
                <input type="text" class="form-control" id="totalPackWeight" name="totalPackWeight" value="{{ number_format( $gearList->totalPackWeight,2,'.',',') ?? 0 }}" readonly/>
            </div>
        </div>
        <div class="row">
                <div class="col-md-3 mb-3" style="margin-right: 8%;" ></div>
            <div class="col-md-2 mt-2">
                <input style="width: 30%; margin-left: 75.5%" class="form-control" type="number" id='linesToAdd' name="linesToAdd" min='1' value="1"/>
            </div>
            <div class="col-md-2 mb-3">
                <button class="btn btn-primary btn-sm mt-2 py-2 px-3" onclick="addListItem();">+ Lines</button>
            </div>
            <div class="col-md-2 mb-3">
                <button class="btn btn-primary btn-sm mt-2 py-2 px-3" style="margin-left: -72%" id="listChartBtn" data-bs-toggle="modal" data-bs-target="#gearListChartModal">
                    Analytics
                   </button>
            </div>


        </div>

    </div>
    @if($gearList->list_items)
        @include('gear-lists.gear-list-by-item')
    @else
        @include('gear-lists.gear-list-by-category')
    @endif
</div>
@endsection
