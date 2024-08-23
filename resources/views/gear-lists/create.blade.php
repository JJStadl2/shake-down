@extends('layouts.header-footer')
@section('title', 'Create Grear List | ')
@section('content')
<div class="container">
    <h1 style="margin-bottom: 5px;">Create a Gear List</h1>
    <p style="margin-bottom: 5px;">Once we have these details, you can add items.</p>
    <form method="post" action="{{ route('list-store') }}">

            <div class="create-list-form-header">
                    @csrf
                    <div class="mb-3">
                        <label for="listName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="listName" name="listName" value="{{ old('listName') }}" required/>
                    </div>
                    <div class="mb-3">
                    <label for="listNotes" class="form-label">List Notes</label>
                    <textarea class="form-control" id="listNotes" name="listNotes" aria-describedby="listHelp" >{{ old('listNotes') }}</textarea>
                    <div id="listHelp" class="list-form-text">Things like trip location, length, milage, weather.</div>
                    </div>
                    <div class="mb-3">
                        <label for="sortBy" class="form-label">Sort</label>
                        <select class="form-control" id="sortBy" name="sortBy">
                            <option value="category"  @if(old('sortBy') === 'category') selected @endif>Category</option>
                            <option value="item_asc"  @if(old('sortBy') === 'item_asc') selected @endif >Item Name (A-Z)</option>
                            <option value="item_desc"   @if(old('sortBy') === 'item_desc') selected @endif>Item Name (Z-A)</option>
                            <option value="weight_asc"  @if(old('sortBy') === 'weight_asc') selected @endif>Weight (Low-High)</option>
                            <option value="weight_desc"  @if(old('sortBy') === 'weight_desc') selected @endif>Weight (High-Low)</option>
                            <option value="dont" @if(old('sortBy') === 'dont') selected @endif>Don't Sort</option>
                        </select>

                    </div>
                    <div class="">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>

            </div>
    </form>
    <div class="form-footer"></div>
</div>
@endsection
