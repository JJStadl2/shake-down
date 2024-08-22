@extends('layouts.header-footer')
@section('title', 'Create Grear List | ')
@section('content')
<div class="container">
    <h1 style="text-align: center; margin-bottom: 5px;">Create a Gear List</h1>
    <form method="post" action="{{ route('store') }}">
        <div class="row" id='list-builder'>
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
                            <option value="dont">Don't Sort</option>
                            <option value="item_asc">Item Name (A-Z)</option>
                            <option value="item_desc">Item Name (Z-A)</option>
                            <option value="category">Category</option>
                            <option value="weight_asc">Weight (Low-High)</option>
                            <option value="weight_desc">Weight (High-Low)</option>
                        </select>

                    </div>
                    <div class="">
                        <button class="btn btn-primary" onclick="addListItem();">+ Item</button>
                        <button type="submit" class="btn btn-primary">Save List</button>
                    </div>

            </div>

            <div class="add-list-items-form">
                    <div class="mb-3">
                        <label for="listName" class="form-label">Item</label>
                        <input type="text" class="form-control" id="listName" name="listName" placeholder="Enter Item Name" required/>
                        </div>
                    <div class="mb-3">
                        <label for="itemCategory" class="form-label">Category</label>
                        <select class="form-control" id="itemCategory" name="itemCategory">
                        <option value="">Choose</option>
                        <option value="clothes">Clothes</option>
                        <option value="worn_clothes">Worn Clothes</option>
                        <option value="rain_gear">Rain Gear</option>
                        <option value="packs">Packs</option>
                        <option value="consumable">Consumable</option>
                        <option value="shelter">Shelter</option>
                        <option value="fire_and_water_treatment">Fire/Water Treatment</option>
                        <option value="luxury_item">Luxury Item</option>
                        </select>

                    </div>
            </div>
            <div class="list-item-details">
                <div class="mb-3">
                    <label for="packedAmount" class="form-label">Number Packed</label>
                    <input type="number" class="form-control" id="packedAmount" name="packedAmount" value="{{ old('packedAmount') ?? 1 }}" />
                </div>
                <div class="mb-3">
                    <label for="weight" class="form-label">Weight</label>
                    <input type="number" class="form-control" id="weight" name="weight" value="{{ old('weight') ?? 0 }}" />
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="uom" id="uom_oz" checked>
                    <label class="form-check-label" for="uom_oz">
                        Ounces
                    </label>
                </div>
                <input class="form-check-input" type="radio" name="uom" id="uom_gram">
                    <label class="form-check-label" for="uom_gram">
                        Grams
                    </label>
                </div>
            </div>
    </form>
    </div>




            {{-- <div class="form-row">
                <div class="form-collapsible-header">Additional Form Email Options  <span class="form-arrow">&#9660;</span></div>
                <div class="form-collapsible-content">
                    <div class="form-row">
                        <label class="label-col" for="email-cc">Email CC</label>
                        <div class="input-col">
                            <input id="email-cc" type="text" name="email_cc" autocomplete="off"
                                   value="{{ old('email_cc') }}">
                        </div>
                        <div class="input-notes">
                            <span class="note">Comma separated list.</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <label class="label-col" for="email-bcc">Email BCC</label>
                        <div class="input-col">
                            <input id="email-bcc" type="text" name="email_bcc" autocomplete="off"
                                   value="{{ old('email_bcc') }}">
                        </div>
                        <div class="input-notes">
                            <span class="note">Comma separated list.</span>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="label-col">Send User Confirmation Email?</div>
                        <div class="input-col has-checkbox">
                            <label><input id="user_confirmation_email" type="checkbox"
                                          name="user_confirmation_email">
                                <span>Yes</span></label>
                        </div>
                        <div class="input-notes">

                        </div>
                    </div>
                </div>
            </div> --}}
          {{-- </form>
    </div> --}}
    <div class="form-footer"></div>
</div>
@endsection
