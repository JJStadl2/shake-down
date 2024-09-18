@extends('layouts.header-footer')
@section('title', 'Edit Grear List | ')
@section('content')

<div class="btn-header-container" >
    <div class="row">
        <div class="col-md-4">
            <a href="/gear-lists" class="btn btn-primary btn-sm mt-2 py-2 px-3" style="float:left;margin-left:12%">Gear Lists</a>

        </div>
        <div class="col-md-4">

        </div>
        <div class="col-md-4">
            <a href="/all-list-items" class="btn btn-primary btn-sm mt-2 py-2 px-3" style="float: right;">Your Gear</a>
        </div>
    </div>
</div>
<div class="container">

    {{-- <div class="row"> --}}

            <form method="post" action="{{ route('list-edit') }}">
                    <input type="hidden" name="id" value="{{$gearList->id}}"/>
                    <div class="create-list-form-header">
                        <h1 class="form-h1" style="text-align: center;">Edit {{ $gearList->name ?? '' }}</h1>


                            @csrf
                            <div class="mb-3">
                                <label for="listName" class="form-label">Name</label>
                                <input type="text" class="form-control" id="listName" name="name" value="{{ $gearList->name ?? old('name') ?? '' }}" placeholder="Enter the List's Name" required/>
                            </div>
                            <div class="mb-3">
                            <label for="listNotes" class="form-label">List Notes</label>
                            <textarea class="form-control" id="listNotes" name="notes" aria-describedby="listHelp" placeholder="Things like trip location, milage, weather and /or group size." >{{  $gearList->notes ?? old('notes') ?? '' }}</textarea>
                            </div>
                            <div class="mb-3">
                                <label for="sortBy" class="form-label">Sort By</label>
                                <select class="form-control" id="sortBy" name="sort">
                                    @foreach($sortOptions as $option)
                                    <option value="{{ $option->value }}"  @if($gearList->sort === $option->value) selected @endif>{{ $option->display }}</option>
                                    @endforeach
                                </select>

                            </div>
                            <div class="mb-3">
                                <label for="listClass" class="form-label">Type</label>
                                <select class="form-control" id="listClass" name="list_class" required>
                                    <option value=""  @if($gearList->list_class ==='') selected @endif>Select Style of Hiking </option>
                                    @foreach($listClasses as $class)
                                    <option value="{{ $class->type }}"  @if($gearList->list_class === $class->type) selected @endif>{{ $class->display.' - '.$class->description }}</option>
                                    @endforeach
                                </select>

                            </div>
                            <div class="mb-3">
                                <label for="uom" class="form-label">Measurement</label>
                                <select class="form-control" id="uom" name="uom" onchange="showConvrsionAlert();">
                                    <option value="us"  @if($gearList->uom === 'us') selected @endif>US(OZ/LBS)</option>
                                    <option value="metric"  @if($gearList->uom === 'metric') selected @endif >Metric(G/KG)</option>
                                </select>

                            </div>
                            <div class="mb-3">
                                <label for="list_items" class="form-label">View</label>
                                <select class="form-control" id="list_items" name="list_items">
                                    <option value="1">List By Item</option>
                                    <option value="0"  @if(empty($gearList->list_items)) selected @endif >Group By Category</option>
                                </select>

                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>

                    </div>
            </form>

    <div class="form-footer"></div>
</div>
@endsection
