    <div class="row">
        <div class="col-md-4" style="margin-right: 5%"></div>
        <div id="weightWarning-div" class="col-md-4 alert alert-warning" style="text-align: center;@if($gearList->baseWeight > $gearList->maxPackWeight) display:block; @else display:none;@endif"> The base weight  ({{  number_format($gearList->baseWeight,2,'.',',') }}  @if($gearList->uom === 'us') LBS @else (KG) @endif ) of the items on this list have exceeded the weight for the type/style of hike selected for this list.</div>
        <div class="col-md-4"></div>

    </div>

    </div>

    <form class="list-item-form">
        <input type="hidden" id="listItems" data-column-name="list_items" value="{{ $gearList->list_items }}"/>
        <table class="table table-dark sortable" data-category-id="list-items">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Item</th>
                <th scope="col">Category</th>
                <th scope="col">UOM</th>
                <th scope="col">Weight</th>
                <th scope="col"># Packed</th>
                <th scope="col">Total Packed Weight</th>
                <th scope="col"></th>
                <th scope="col">Remove</th>

            </tr>
            </thead>
            <tbody id="item-table-body">
                @php $i = 1; @endphp
                @if(!empty($gearListItems))
                    @foreach($gearListItems as $item)

                        <tr data-id="{{ $item->id }}">
                            <input type="hidden" data-column-name="id" id="id-{{ $i }}" name="id[]" value="{{ $item->id}}"/>
                            <th scope="row"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
                                <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                              </svg></th>
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
                            <td class="uom-td">
                                @if($item->in_ounces || $item->in_lbs)
                                    <input class="form-check-input us-radio for-conversion" type="radio" data-column-name="in_ounces" name="uom-{{ $i }}-[]" id="uom-oz-{{ $i }}" @if($item->in_ounces) checked  @endif onchange="convertMeasurement({{ $i }});"/>
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
                                        G
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
                                <input  class="form-control for-total-list-weight" type="number" data-column-name="total_line_weight" id="totalLineWeight-{{ $i }}" name="totalLineWeight[]" value="{{floatval($item->total_line_weight) ?? floatval(($item->item_weight * $item->amount))}}" readonly />
                            </td>
                            <td class="uom-td">
                                @if($item->in_ounces)
                                    <label class="form-check-label us-radio" id="line-uom-label-{{ $i }}" for="uom-oz-{{ $i }}">
                                        OZ
                                    </label>
                                @elseif( $item->in_lbs)
                                    <label class="form-check-label us-radio" id="line-uom-label-{{ $i }}" for="uom-lbs-{{ $i }}">
                                        LBS
                                    </label>
                                @elseif($item->in_grams)
                                    <label class="form-check-label metric-radio" id="line-uom-label-{{ $i }}" for="uom-gram-{{ $i }}">
                                        G
                                    </label>
                                @else
                                    <label class="form-check-label metric-radio" id="line-uom-label-{{ $i }}" for="uom-kg-{{ $i }}">
                                        KG
                                    </label>
                                @endif

                            </td>

                            <td id="btn-td-{{ $i }}">
                                <a id="deleteBtn-{{ $i }}" href="/remove-list-item/{{ $item->id }}" class="btn btn-primary btn-sm  py-2">x</a>
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

