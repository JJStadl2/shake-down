    <div class="item-list-option-container">
        <div class="row">
            <div class="col-md-2 mb-3"></div>
            <div class="col-md-3 mb-3">
                <label class="form-control-label" for="viewOption" class="form-label">View Options</label>
                <select class="form-control" id="viewOptions" name="viewOptions" data-column-name="list_items" onchange="updateList(this,{{ $gearList->id }})">

                    <option value="1"  @if($gearList->list_items) selected @endif>List by Items</option>
                    <option value="0"  @if(!$gearList->list_items) selected @endif>Group by Category</option>
                </select>

            </div>

            <div class="col-md-2 mt-2">
                <input style="width: 30%; margin-top:7%; margin-left:35%;" class="form-control" type="number" id='linesToAdd' name="linesToAdd"
                    min='1' value="1" />
            </div>
            <div class="col-md-2 mb-3" style="margin-right: -9%;">
                <button style="margin-left: -150%; margin-top:10%;" class="btn btn-primary btn-sm py-2 px-3" onclick="addListItem();">+ Gear</button>
            </div>
            <div class="col-md-2 mb-3" style="margin-top: 1%;">

                <button  id="listChartBtn" class="btn btn-primary btn-sm mt-2 py-2 px-3"  data-bs-toggle="modal" data-bs-target="#gearListChartModal">
                    Analytics
                    </button>
                    <button id="searchGearBtn" class="btn btn-primary btn-sm mt-2 py-2 px-3" style="float: right;"  data-bs-toggle="modal" data-bs-target="#productSearchModal">
                        Search
                        </button>

            </div>


        </div>
    </div>
    <div class="weight-warning-containter">
        @include('includes.weight-warning')
    </div>



<div class="gear-items-container">
    <input type="hidden" id="listByItems" data-column-name="list_items" value="{{ $gearList->list_items }}" />
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
            @if (!empty($gearListItems))
                @foreach ($gearListItems as $item)
                    <tr id="row-{{ $i }}" data-id="{{ $item->id }}">
                        <input type="hidden" data-column-name="id" id="id-{{ $i }}" name="id[]"
                            value="{{ $item->id }}" />
                        <th scope="row"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
                                <path
                                    d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg></th>
                        <td>
                            <input class="form-control" type="text" data-column-name="item_name"
                                id="itemName-{{ $i }}" name="itemName[]" placeholder="Item Name"
                                value="{{ $item->item_name ?? '' }}" onblur="updateListItem(this)" />
                        </td>
                        <td>
                            <select class="form-control" id="itemCategory-{{ $i }}" name="itemCategory[]"
                                data-column-name="item_category" onchange="updateListItem(this)">
                                <option value="">Choose</option>
                                @foreach ($itemCategories as $category)
                                    <option value="{{ $category->value }}"
                                        @if ($item->item_category === $category->value) selected @endif>{{ $category->category }}
                                    </option>
                                @endforeach
                            </select>
                        </td>
                        <td class="uom-td">
                            @if ($item->in_ounces || $item->in_lbs)
                                <input class="form-check-input us-radio for-conversion" type="radio"
                                    data-column-name="in_ounces" name="uom-{{ $i }}-[]"
                                    id="uom-oz-{{ $i }}" @if ($item->in_ounces) checked @endif
                                    onchange="convertMeasurement({{ $i }});" />
                                <label class="form-check-label us-radio" id="uom-oz-label-{{ $i }}"
                                    for="uom-oz-{{ $i }}">
                                    OZ
                                </label>
                                <input class="form-check-input us-radio for-conversion" type="radio"
                                    data-column-name="in_lbs" name="uom-{{ $i }}-[]"
                                    id="uom-lbs-{{ $i }}" @if ($item->in_lbs) checked @endif
                                    onchange="convertMeasurement({{ $i }});" />
                                <label class="form-check-label us-radio" id="uom-lbs-label-{{ $i }}"
                                    for="uom-lbs-{{ $i }}">
                                    LBS
                                </label>
                            @else
                                <input class="form-check-input metric-radio for-conversion" type="radio"
                                    data-column-name="in_grams" name="uom-{{ $i }}-[]"
                                    id="uom-gram-{{ $i }}" @if ($item->in_grams) checked @endif
                                    onchange="convertMeasurement({{ $i }});" />
                                <label class="form-check-label metric-radio" id="uom-gram-label-{{ $i }}"
                                    for="uom-gram-{{ $i }}">
                                    G
                                </label>
                                <input class="form-check-input metric-radio for-conversion" type=radio
                                    data-column-name="in_kilos" name="uom-{{ $i }}-[]"
                                    id="uom-kg-{{ $i }}" @if ($item->in_kilos) checked @endif
                                    onchange="convertMeasurement({{ $i }});" />
                                <label class="form-check-label metric-radio" id="uom-kg-label-{{ $i }}"
                                    for="uom-kg-{{ $i }}">
                                    KG
                                </label>
                            @endif

                        </td>
                        <td>
                            <input class="form-control" type="number" data-column-name="item_weight"
                                id="itemWeight-{{ $i }}" name="itemWeight[]"
                                value="{{ $item->item_weight ?? 0 }}"
                                onblur="updateListItem(this);getLineTotalWeight('{{ $i }}')" />
                        </td>
                        <td>
                            <input class="form-control" type="number" data-column-name="amount"
                                id="packedAmount-{{ $i }}" name="pakedAmount[]"
                                value="{{ $item->amount ?? 1 }}"
                                onblur="updateListItem(this);getLineTotalWeight('{{ $i }}')" />
                        </td>
                        <td>
                            <input class="form-control for-total-list-weight" type="number"
                                data-column-name="total_line_weight" id="totalLineWeight-{{ $i }}"
                                name="totalLineWeight[]"
                                value="{{ floatval($item->total_line_weight) ?? floatval($item->item_weight * $item->amount) }}"
                                readonly />
                        </td>
                        <td class="uom-td">
                            @if ($item->in_ounces)
                                <label class="form-check-label us-radio" id="line-uom-label-{{ $i }}"
                                    for="uom-oz-{{ $i }}">
                                    OZ
                                </label>
                            @elseif($item->in_lbs)
                                <label class="form-check-label us-radio" id="line-uom-label-{{ $i }}"
                                    for="uom-lbs-{{ $i }}">
                                    LBS
                                </label>
                            @elseif($item->in_grams)
                                <label class="form-check-label metric-radio" id="line-uom-label-{{ $i }}"
                                    for="uom-gram-{{ $i }}">
                                    G
                                </label>
                            @else
                                <label class="form-check-label metric-radio" id="line-uom-label-{{ $i }}"
                                    for="uom-kg-{{ $i }}">
                                    KG
                                </label>
                            @endif

                        </td>

                        <td id="btn-td-{{ $i }}">
                                <button id="deleteItemBtn-{{ $i }}" class="btn btn-sm btn-danger" title="Delete Item" data-href='/remove-list-item/{{ $item->id }}' data-object-type='item:' data-object-name='{{ $item->item_name }}' data-list-name="{{ $gearList->name }}" data-object-id="{{ $item->id }}" data-bs-toggle="modal" data-bs-target="#deleteAlertModal" onclick="confirmDelete(this)">
                                    <i class="fa fa-trash"></i>
                                </button>
                        </td>

                    </tr>
                    @php $i++; @endphp
                @endforeach

            @endif
            <input type="hidden" id='final-i' value="{{ $i }}" />
        </tbody>
    </table>
</form>

</div>
