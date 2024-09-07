@extends('layouts.header-footer')
@section('title','Gear | ')
@section('content')
@include('modals.search-modal')
@include('modals.gear-list-chart-modal')

<div class="list-item-form-container">
    <div class="form-container">
        <h2 class="mb-4" style="text-align: center; margin-right: -5%">NEW Your List</h2>
        <input type="hidden" data-column-name="uom" id="uom" name="uom" value="{{$gearList->uom}}"/>
        <input type="hidden" id="maxPackWeight" value="{{ $gearList->maxPackWeight }}"/>
        <input type="hidden" id="chartData" value="{{ $chartData }}"/>

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
                <label class="form-control-label">Base Weight  @if($gearList->uom === 'us') (LBS) @else (KG) @endif </label>
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

    <!-- Table to display gear list items -->
    <table class="table table-dark">
        @php $i = 1; @endphp
        @foreach($itemCategories as $itemCat)
        @if(in_array($itemCat->value,$selectedCategories))
        {{-- <div class="form-collapsible-header">  <span class="from-arrow">&#9660;</span></div>
                    <div class="form-collapsible-content"> --}}
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>{{ $itemCat->category }}</th>
                    <th>
                        <button class="btn btn-secondary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm-{{ $i }}" aria-expanded="false" aria-controls="collapseForm-{{ $i }}">
                            Expand
                        </button>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tbody id="item-table-body">
                @foreach($gearListItems as $item)
                    @if($item->item_category === $itemCat->value)
                        <!-- Collapsible row with form inputs and headers -->
                            <tr class="collapse" id="collapseForm-{{ $i }}">
                                <td colspan="9">
                                    <div class="card card-body" style="background-color: #212529;">
                                        <form>
                                            <table class="table table-dark">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Item</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Weight</th>
                                                        <th scope="col"># Packed</th>
                                                        <th scope="col">Total Packed Weight</th>
                                                        <th scope="col">UOM</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <input type="text" class="form-control" id="itemName-{{ $i }}" name="itemName[]" value="{{ $item->item_name ?? '' }}" onblur="updateListItem(this)"/>
                                                        </td>
                                                        <td>
                                                            <select class="form-control" id="itemCategory-{{ $i }}" name="itemCategory[]" data-column-name="item_category" onchange="updateListItem(this)">
                                                                <option value="">Choose</option>
                                                                @foreach($itemCategories as $category)
                                                                    <option value="{{ $category->value }}" @if($item->item_category === $category->value) selected @endif>{{ $category->category }}</option>
                                                                @endforeach
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <input type="number" class="form-control" id="itemWeight-{{ $i }}" name="itemWeight[]" value="{{ $item->item_weight ?? 0 }}" onblur="updateListItem(this);getLineTotalWeight('{{ $i }}')" />
                                                        </td>
                                                        <td>
                                                            <input type="number" class="form-control" id="packedAmount-{{ $i }}" name="packedAmount[]" value="{{ $item->amount ?? 1 }}" onblur="updateListItem(this);getLineTotalWeight('{{ $i }}')" />
                                                        </td>
                                                        <td>
                                                            <input type="number" class="form-control" id="totalLineWeight-{{ $i }}" name="totalLineWeight[]" value="{{ floatval($item->total_line_weight) ?? floatval(($item->item_weight * $item->amount)) }}" readonly />
                                                        </td>
                                                        <td>
                                                            <!-- Radio buttons for UOM -->
                                                            <div>
                                                                @if($item->in_ounces || $item->in_lbs)
                                                                    <input class="form-check-input us-radio for-conversion" type="radio" data-column-name="in_ounces" name="uom-{{ $i }}-[]" id="uom-oz-{{ $i }}" @if($item->in_ounces) checked @endif onchange="convertMeasurement({{ $i }});"/>
                                                                    <label class="form-check-label us-radio" for="uom-oz-{{ $i }}">OZ</label>
                                                                    <input class="form-check-input us-radio for-conversion" type="radio" data-column-name="in_lbs" name="uom-{{ $i }}-[]" id="uom-lbs-{{ $i }}" @if($item->in_lbs) checked @endif onchange="convertMeasurement({{ $i }});"/>
                                                                    <label class="form-check-label us-radio" for="uom-lbs-{{ $i }}">LBS</label>
                                                                @else
                                                                    <input class="form-check-input metric-radio for-conversion" type="radio" data-column-name="in_grams" name="uom-{{ $i }}-[]" id="uom-gram-{{ $i }}" @if($item->in_grams) checked @endif onchange="convertMeasurement({{ $i }});"/>
                                                                    <label class="form-check-label metric-radio" for="uom-gram-{{ $i }}">Grams</label>
                                                                    <input class="form-check-input metric-radio for-conversion" type="radio" data-column-name="in_kilos" name="uom-{{ $i }}-[]" id="uom-kg-{{ $i }}" @if($item->in_kilos) checked @endif onchange="convertMeasurement({{ $i }});"/>
                                                                    <label class="form-check-label metric-radio" for="uom-kg-{{ $i }}">KG</label>
                                                                @endif
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        {{-- <td> <button type="submit" class="btn btn-primary btn-sm mt-2 py-2 px-3"> Save</button></td> --}}
                                                        <td>
                                                            <input  class="form-control" type="number" id='linesToAdd' name="linesToAdd" min='1' value="1"/>
                                                        </td>
                                                        <td>
                                                            <button class="btn btn-primary btn-sm mt-2 py-2 px-3" onclick="addListItem();">+ Lines</button>
                                                        </td>
                                                        <td> <button type="submit" class="btn btn-primary btn-sm mt-2 py-2 px-3"> Save</button></td>
                                                    </tr>

                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </td>
                        </tr>

                        @endif

                @endforeach
                @php $i++; @endphp
                @endif
                @endforeach


            <input type="hidden" id='final-i' value="{{ $i }}"/>
        </tbody>
    </table>
</div>

<button id="searchGearBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productSearchModal">
    Search for gear
</button>

@endsection
