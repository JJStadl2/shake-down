
<div class="master-gear-items-catergory-container">
    @php $categoryCounter = 1; @endphp
    <div class="parent-container">
    @foreach ($sortedItemCategories as $itemCat)
        @if (in_array($itemCat->value, $selectedCategories))
            <div class="draggable-container"  data-category-value="{{$itemCat->value}}">
            <div class="item-collapsible-header" >
                <span>

                <i class="fas fa-grip-vertical"></i>
                </span>
                {{ $itemCat->category }}
                <span class="item-arrow">&#9660;</span>

            </div>
            <div class="item-collapsible-content">
                <table class="table table-dark sortable" data-category-id="list-items">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Item</th>
                            <th scope="col">Category</th>
                            <th scope="col">UOM</th>
                            <th class="master-number-th" scope="col">Weight</th>
                            {{-- <th class="master-number-th" scope="col"># Packed</th>
                            <th class="master-number-th" scope="col">Total Packed Weight</th> --}}
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="categoryTable-{{ $categoryCounter }}">
                        @php $i = 1; @endphp
                        @foreach ($gearListItems as $item)
                            @if ($item->item_category === $itemCat->value)
                                <tr data-id="{{ $item->id }}">
                                    <input type="hidden" data-column-name="id" id="id-{{ $i }}" name="id[]"
                                        value="{{ $item->id }}" />
                                    <input type="hidden" data-column-name="amount"
                                    id="packedAmount-{{ $i }}" name="pakedAmount[]"
                                    value="{{  1 }}" />
                                    <input type="hidden"
                                    data-column-name="total_line_weight" id="totalLineWeight-{{ $i }}"
                                    name="totalLineWeight[]"
                                    value="{{  floatval($item->item_weight) }}"/>

                                    <th scope="row">
                                        <i class="fas fa-grip-vertical"></i>
                                    </th>
                                    <td>
                                        <input class="form-control" type="text" data-column-name="item_name"
                                            id="itemName-{{ $i }}" name="itemName[]" placeholder="Item Name"
                                            value="{{ $item->item_name ?? '' }}" onblur="updateListItem(this)" />
                                    </td>
                                    <td>
                                        <select class="form-control" id="itemCategory-{{ $i }}"
                                            name="itemCategory[]" data-column-name="item_category"
                                            onchange="updateListItem(this)">
                                            <option value="">Choose</option>
                                            @foreach ($itemCategories as $category)
                                                <option value="{{ $category->value }}"
                                                    @if ($item->item_category === $category->value) selected @endif>
                                                    {{ $category->category }}</option>
                                            @endforeach
                                        </select>
                                    </td>
                                    <td class="uom-td">
                                        @if ($item->in_ounces || $item->in_lbs)
                                        <input type="hidden" id="uom-{{ $i }}" value="us"/>
                                            <input class="form-check-input us-radio for-conversion" type="radio"
                                                data-column-name="in_ounces" name="uom-{{ $i }}-[]"
                                                id="uom-oz-{{ $i }}"
                                                @if ($item->in_ounces) checked @endif
                                                onchange="convertMeasurement({{ $i }});" />
                                            <label class="form-check-label us-radio" id="uom-oz-label-{{ $i }}"
                                                for="uom-oz-{{ $i }}">
                                                OZ
                                            </label>
                                            <input class="form-check-input us-radio for-conversion" type="radio"
                                                data-column-name="in_lbs" name="uom-{{ $i }}-[]"
                                                id="uom-lbs-{{ $i }}"
                                                @if ($item->in_lbs) checked @endif
                                                onchange="convertMeasurement({{ $i }});" />
                                            <label class="form-check-label us-radio" id="uom-lbs-label-{{ $i }}"
                                                for="uom-lbs-{{ $i }}">
                                                LBS
                                            </label>
                                        @else
                                        <input type="hidden" id="uom-{{ $i }}" value="metric"/>
                                            <input class="form-check-input metric-radio for-conversion" type="radio"
                                                data-column-name="in_grams" name="uom-{{ $i }}-[]"
                                                id="uom-gram-{{ $i }}"
                                                @if ($item->in_grams) checked @endif
                                                onchange="convertMeasurement({{ $i }});" />
                                            <label class="form-check-label metric-radio"
                                                id="uom-gram-label-{{ $i }}"
                                                for="uom-gram-{{ $i }}">
                                                G
                                            </label>
                                            <input class="form-check-input metric-radio for-conversion" type=radio
                                                data-column-name="in_kilos" name="uom-{{ $i }}-[]"
                                                id="uom-kg-{{ $i }}"
                                                @if ($item->in_kilos) checked @endif
                                                onchange="convertMeasurement({{ $i }});" />
                                            <label class="form-check-label metric-radio"
                                                id="uom-kg-label-{{ $i }}" for="uom-kg-{{ $i }}">
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

                                 
                                    <td class="uom-td">
                                        @if ($item->in_ounces)
                                            <label class="form-check-label us-radio"
                                                id="line-uom-label-{{ $i }}"
                                                for="uom-oz-{{ $i }}">
                                                OZ
                                            </label>
                                        @elseif($item->in_lbs)
                                            <label class="form-check-label us-radio"
                                                id="line-uom-label-{{ $i }}"
                                                for="uom-lbs-{{ $i }}">
                                                LBS
                                            </label>
                                        @elseif($item->in_grams)
                                            <label class="form-check-label metric-radio"
                                                id="line-uom-label-{{ $i }}"
                                                for="uom-gram-{{ $i }}">
                                                G
                                            </label>
                                        @else
                                            <label class="form-check-label metric-radio"
                                                id="line-uom-label-{{ $i }}"
                                                for="uom-kg-{{ $i }}">
                                                KG
                                            </label>
                                        @endif

                                    </td>

                                    <td>
                                        <button  class="btn btn-success btn-sm" title="Assign to List"  data-bs-toggle="modal"   data-bs-target="#AssignItemToListModal" onclick="showListAssignModal('{{ $item->id }}','{{ $item->item_name }}')" >
                                            <i class="fas fa-clipboard-list"></i>
                                        </button>

                                    </td>

                                    <td id="btn-td-{{ $i }}">
                                        <button id="deleteItemBtn-{{ $i }}" class="btn btn-sm btn-danger" title="Delete Item" data-href="/destroy-list-item/{{ $item->id }}" data-object-type='item:' data-object-name='{{ $item->item_name }}' data-list-name="master" data-object-id="{{ $item->id }}" data-bs-toggle="modal" data-bs-target="#deleteAlertModal" onclick="confirmDelete(this)">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>

                                </tr>
                            @endif
                            @php $i++; @endphp
                        @endforeach
                    </tbody>
                </table>
              </div>
            @php $categoryCounter++; @endphp
            </div>
        @endif
    @endforeach
    </div>
    <input type="hidden" id='final-i' value="{{ $i }}" />
</div>
