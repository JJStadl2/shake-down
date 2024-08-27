@extends('layouts.header-footer')
@section('title','Grear List with items | ')
@section('content')
<div class="list-item-form-container">
    {{-- add header update form --}}
    <div class="form-container">
            <div class="row">
                <div class="col-md-1 mb-3">
                    <h4>Name</h4>
                </div>
                <div class="col-md-3 mb-3">
                    <input type="text" class="form-control" id="listName" name="listName" data-column-name="name" value="{{ $gearList->name ?? '' }}"/>
                </div>
                <div class="col-md-1 mb-3">
                    <h4>Notes</h4>
                </div>
                <div class="col-md-3 mb-3">
                    <textarea type="text" class="form-control" id="listNotes" name="listNotes" data-column-name="notes">{{ $gearList->notes ?? '' }}</textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-md-1 mb-3">
                    <h4>UOM</h4>
                </div>
                <div class="col-md-3 mb-3">
                    <select class="form-control" id="uom" name="uom" onchange="updateUOM(this.value)">
                        <option value="us"  @if($gearList->uom === 'us') selected @endif>US(OZ/LBS)</option>
                        <option value="metric"  @if($gearList->uom === 'metric') selected @endif >Metric(GR/KG)</option>
                    </select>
                </div>

                <input type="hidden" data-column-name="uom" id="list-uom" name="list_uom" value="{{$gearList->uom}}"/>

            </div>
            <div class="row">
                <div class="col-md-1 mb-3"> </div>
                <div class="col-md-2 mb-3">
                    <button class="btn btn-primary" onclick="addListItem();">+ Item</button>
                </div>
                <div class="col-md-2 mb-3">
                    <button style="margin-left: -25%;" class="btn btn-primary" >Update</button>
                </div>
            </div>
    </div>

    <form class="list-item-form">
        <table class="table table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                {{-- <th scope="col">cat?</th> --}}
                <th scope="col">Weight</th>
                {{-- <th scope="col">UOM</th> --}}
                <th scope="col"># Packed</th>
                <th scope="col">Total Packed Weight</th>
                {{-- <th scope="col"></th>
                <th scope="col"></th> --}}
                <th scope="col">UOM</th>
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
                                {{-- onchange update item by id --}}
                                <input type="text" data-column-name="item_name" id="itemName-{{ $i }}" name="itemName[]" placeholder="Enter the name of the item"  value="{{ $item->item_name}}"/>
                            </td>
                            {{-- <td>cat?</td> --}}
                            <td>
                                {{-- onchange update item by id --}}
                                <input type="number" data-column-name="item_weight" id="itemWeight-{{ $i }}" name="itemWeight[]" value="{{ $item->item_weight}}"/>
                            </td>
                            <td class="form-check">
                                    <input class="form-check-input" type="radio" data-column-name="in_ounces" name="uom-{{ $i }}" id="uom-oz[]" @if($item->in_ounces) checked @endif>
                                    <label class="form-check-label" for="uom-oz-{{ $i }}">
                                        Ounces
                                    </label>
                                <input class="form-check-input" data-column-name="in_grams" name="uom-{{ $i }}" id="uom-gram[]" @if($item->in_grams) checked @endif>
                                    <label class="form-check-label" for="uom-gram-{{ $i }}">
                                        Grams
                                    </label>
                                </div>
                            </td>
                            <td>
                                {{-- onchange update item by id --}}
                                <input type="number" data-column-name="amount" id="packesAmount-{{ $i }}" name="pakedAmount[]" placeholder="How many are you bringing?" value="{{ $item->item_weight}}"/>
                            </td>
                            <td> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                                <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z" fill="white"></path>
                                </svg>
                            </td>
                            {{-- <td><a href='/list-item/{{ $item->id}}/destroy' <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                                <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z" fill="white"></path>
                                </svg></a>
                            </td> --}}

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
