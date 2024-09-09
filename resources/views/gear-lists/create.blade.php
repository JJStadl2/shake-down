@extends('layouts.header-footer')
@section('title', 'Create Grear List | ')
@section('content')

<div class="container">

    <div class="row">
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
            <form method="post" action="{{ route('list-store') }}">

                    <div class="create-list-form-header">
                        <h1 class="form-h1" style="text-align: center;">Create a Gear List</h1>
                        <div id="listHelp" class="list-form-text">You can add items once it is created.</div>

                            @csrf
                            <div class="mb-3">
                                <label for="listName" class="form-label">Name</label>
                                <input type="text" class="form-control" id="listName" name="listName" value="{{ old('listName') }}" placeholder="Enter the List's Name" required/>
                            </div>
                            <div class="mb-3">
                            <label for="listNotes" class="form-label">List Notes</label>
                            <textarea class="form-control" id="listNotes" name="listNotes" aria-describedby="listHelp" placeholder="Things like trip location, milage, weather and /or group size." >{{ old('listNotes') }}</textarea>
                            </div>
                            <div class="mb-3">
                                <label for="sortBy" class="form-label">Sort By</label>
                                <select class="form-control" id="sortBy" name="sortBy">
                                    @foreach($sortOptions as $option)
                                    <option value="{{ $option->value }}"  @if(old('sortBy') === $option->value) selected @endif>{{ $option->display }}</option>
                                    @endforeach
                                </select>

                            </div>
                            <div class="mb-3">
                                <label for="listClass" class="form-label">Type</label>
                                <select class="form-control" id="listClass" name="listClass" required>
                                    <option value=""  @if(old('listClass') ==='') selected @endif>Select Style of Hiking </option>
                                    @foreach($listClasses as $class)
                                    <option value="{{ $class->type }}"  @if(old('listClass') === $class->type) selected @endif>{{ $class->display.' - '.$class->description }}</option>
                                    @endforeach
                                </select>

                            </div>
                            <div class="mb-3">
                                <label for="uom" class="form-label">Measurement</label>
                                <select class="form-control" id="uom" name="uom">
                                    <option value="us"  @if(old('uom') === 'us') selected @endif>US(OZ/LBS)</option>
                                    <option value="metric"  @if(old('uom') === 'metric') selected @endif >Metric(GR/KG)</option>
                                </select>

                            </div>
                            <div class="mb-3">
                                <label for="list_items" class="form-label">View</label>
                                <select class="form-control" id="list_items" name="list_items">
                                    <option value="1" selected>List By Item</option>
                                    <option value="0" >List By Category</option>
                                </select>

                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary">Create</button>
                            </div>

                    </div>
            </form>
        </div>
    </div>
    <div class="form-footer"></div>
</div>
@endsection
