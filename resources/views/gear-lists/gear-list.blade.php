@extends('layouts.header-footer')
@section('title','Grear List with items | ')
@section('content')
<div class="list-item-form-container">
    {{-- add header update form --}}
    <div class="form-container">
        <input type="hidden" data-column-name="uom" id="uom" name="uom" value="{{$gearList->uom}}"/>
        <div class="row">
            <div class="col-md-2"></div>
            <input type="hidden" name="listId" id="listId" data-column-name="list_id" value="{{ $gearList->id }}"/>
            <div class="col-md-1"></div>
            <div class="col-md-3">
                <label style="display: inline-block" class="form-control-label">Name</label>
                <input type="text" class="form-control" id="listName" name="listName" data-column-name="name" value="{{ $gearList->name ?? '' }}" onblur="updateList(this,{{ $gearList->id }})"/>
            </div>
            <div class="col-md-3 mb-2">
                <label class="form-control-label">Notes</label>
                <textarea type="text" class="form-control" id="listNotes" name="listNotes" data-column-name="notes"  onblur="updateList(this,{{ $gearList->id }})">{{ $gearList->notes ?? '' }}</textarea>
            </div>
            <div class="col-md-2"></div>
        </div>
        <div class="row">
            <div class="col-md-2"></div>
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
            <div class="col-md-2 mb-3"></div>
        </div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-1"></div>
            <div class="col-md-2 mb-3">
            </div>
            <div class="col-md-2 mb-3">
                <div class="d-grid gap-2">
                    <button class="btn btn-primary mt-3" onclick="addListItem();">+ Item</button>
                </div>
            </div>


            <div class="col-md-2 mb-3">

            </div>
            <div class="col-md-2 mb-3">

            </div>
            <div class="col-md-1 mb-3"></div>
        </div>

        </div>
        <div class="row"></div>
    </div>

    <form class="list-item-form">
        <table class="table table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Category</th>
                <th scope="col">UOM</th>
                <th scope="col">Weight</th>
                <th scope="col"># Packed</th>
                <th scope="col">Total Packed Weight</th>
                <th scope="col">Remove</th>

            </tr>
            </thead>
            <tbody id="item-table-body">
                @php $i = 1; @endphp
                @if(!empty($gearListItems))
                    @foreach($gearListItems as $item)

                        <tr>
                            <input type="hidden" data-column-name="id" id="id-{{ $i }}" name="id[]" value="{{ $item->id}}"/>
                            <th scope="row">{{ $i }}</th>
                            <td>

                                <input class="form-control" type="text" data-column-name="item_name" id="itemName-{{ $i }}" name="itemName[]" placeholder="Item Name"  value="{{ $item->item_name ?? ''}}" onblur="updateListItem(this)"/>
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
                                @if($item->in_ounces || $item->in_lbs)
                                    <input class="form-check-input us-radio for-conversion" type="radio" data-column-name="in_ounces" name="uom-{{ $i }}-[]" id="uom-oz-{{ $i }}" @if($item->in_ounces) checked @endif onchange="convertMeasurement({{ $i }});"/>
                                    <label class="form-check-label us-radio" id="uom-oz-label-{{ $i }}" for="uom-oz-{{ $i }}">
                                        OZ
                                    </label>
                                    <input class="form-check-input us-radio for-conversion" type="radio" data-column-name="in_lbs"  name="uom-{{ $i }}-[]" id="uom-lbs-{{ $i }}" @if($item->in_lbs) checked @endif onchange="convertMeasurement({{ $i }});" />
                                        <label class="form-check-label us-radio" id="uom-lbs-label-{{ $i }}" for="uom-lbs-{{ $i }}">
                                            LBS
                                        </label>
                                @else
                                    <input class="form-check-input metric-radio for-conversion" type="radio" data-column-name="in_grams"  name="uom-{{ $i }}-[]" id="uom-gram-{{ $i }}" @if($item->in_grams) checked @endif onchange="convertMeasurement({{ $i }});"/>
                                    <label class="form-check-label metric-radio" id="uom-gram-label-{{ $i }}" for="uom-gram-{{ $i }}">
                                        Grams
                                    </label>
                                    <input class="form-check-input metric-radio for-conversion" type=radio data-column-name="in_kilos" name="uom-{{ $i }}-[]" id="uom-kg-{{ $i }}" @if($item->in_kilos) checked @endif onchange="convertMeasurement({{ $i }});" />
                                        <label class="form-check-label metric-radio" id="uom-kg-label-{{ $i }}" for="uom-kg-{{ $i }}">
                                            KG
                                        </label>
                                @endif

                            </td>
                            <td>
                                <input  class="form-control" type="number" data-column-name="item_weight" id="itemWeight-{{ $i }}" name="itemWeight[]" value="{{ $item->item_weight ?? 0}}" onblur="updateListItem(this);getLineTotalWeight('{{ $i }}')" />
                            </td>
                            <td>
                                <input  class="form-control" type="number" data-column-name="amount" id="packedAmount-{{ $i }}" name="pakedAmount[]" value="{{ $item->amount ?? 1}}" onblur="updateListItem(this);getLineTotalWeight('{{ $i }}')" />
                            </td>
                            <td>
                                <input  class="form-control" type="number" data-column-name="total_line_weight" id="totalLineWeight-{{ $i }}" name="totalLineWeight[]" value="{{floatval($item->total_line_weight) ?? floatval(($item->item_weight * $item->amount))}}" onblur="updateListItem(this);" />
                            </td>
                            <td id="btn-td-{{ $i }}">
                                <a id="deleteBtn-{{ $i }}" href="/destroy-list-item/{{ $item->id }}" class="btn btn-primary btn-sm  py-2">x</a>
                            </td>

                        </tr>
                    @php $i++; @endphp
                    @endforeach

                @endif
                <input type="hidden" id='final-i' value="{{ $i }}"/>
            </tbody>
        </table>
    </form>

</div>
@endsection
