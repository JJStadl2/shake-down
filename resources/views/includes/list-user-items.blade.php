<div class="item-list-option-container">
    <div class="row">
        <div class="col-md-2 mb-3"></div>
        <div class="col-md-3 mb-3">


        </div>

        <div class="col-md-2 mt-2">

        </div>
        <div class="col-md-2 mb-3" style="margin-right: -9%;">

        </div>
        <div class="col-md-2 mb-3" style="margin-top: 1%;">



        </div>


    </div>
</div>
<div class="gear-items-container">
<input type="hidden" id="listByItems" data-column-name="list_items" value="" />
<table class="table table-dark sortable" data-category-id="list-items">
    <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">Item</th>
            <th scope="col">Category</th>
            <th scope="col">UOM</th>
            <th class="master-number-th" scope="col">Weight</th>
            <th scope="col"></th>
            <th scope="col">Actions</th>

        </tr>
    </thead>
    <tbody id="item-table-body">
        @php $i = 1; @endphp
        @if (!empty($gearListItems))
            @foreach ($gearListItems as $item)
                <tr data-id="{{ $item->id }}">
                    <input type="hidden" data-column-name="id" id="id-{{ $i }}" name="id[]"
                    value="{{ $item->id }}" />
                    <input type="hidden"
                    id="totalLineWeight-{{ $i }}"
                    name="totalLineWeight[]"
                    value="{{ floatval($item->item_weight) ?? 0 }}" />
                    <input  type="hidden"
                    id="packedAmount-{{ $i }}" name="pakedAmount[]"
                    value="{{ 1 }}" />
                    <th scope="row">

                        <i class="fas fa-grip-vertical"></i>
                    </th>
                    <td>
                        <input class="form-control" type="text" data-column-name="item_name"
                            id="itemName-{{ $i }}" name="itemName[]" placeholder="Item Name"
                            value="{{ $item->item_name ?? '' }}" onblur="updateListItem(this);"/>
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
                        <input type="hidden" id="uom-{{ $i }}" value="{{ $item->uom }}"/>
                            <input class="form-check-input us-radio for-conversion" type="radio"
                                data-column-name="in_ounces"  name="uom-{{ $i }}-[]"
                                id="uom-oz-{{ $i }}" @if ($item->in_ounces) checked @endif
                                onchange="updateItemUOM({{ $i }}, this);"/>
                            <label class="form-check-label us-radio" id="uom-oz-label-{{ $i }}"
                                for="uom-oz-{{ $i }}">
                                OZ
                            </label>
                            <input class="form-check-input us-radio for-conversion" type="radio"
                                data-column-name="in_lbs" name="uom-{{ $i }}-[]"
                                id="uom-lbs-{{ $i }}" @if ($item->in_lbs) checked @endif
                                onchange="updateItemUOM({{ $i }}, this);"/>
                            <label class="form-check-label us-radio" id="uom-lbs-label-{{ $i }}"
                                for="uom-lbs-{{ $i }}">
                                LBS
                            </label>

                            <input class="form-check-input metric-radio for-conversion" type="radio"
                                data-column-name="in_grams" name="uom-{{ $i }}-[]"
                                id="uom-gram-{{ $i }}" @if ($item->in_grams) checked @endif
                                onchange="updateItemUOM({{ $i }}, this);"/>
                            <label class="form-check-label metric-radio" id="uom-gram-label-{{ $i }}"
                                for="uom-gram-{{ $i }}">
                                G
                            </label>
                            <input class="form-check-input metric-radio for-conversion" type=radio
                                data-column-name="in_kilos" name="uom-{{ $i }}-[]"
                                id="uom-kg-{{ $i }}" @if ($item->in_kilos) checked @endif
                                onchange="updateItemUOM({{ $i }}, this);"/>
                            <label class="form-check-label metric-radio" id="uom-kg-label-{{ $i }}"
                                for="uom-kg-{{ $i }}">
                                KG
                            </label>


                    </td>
                    <td>
                        <input class="form-control" type="number" data-column-name="item_weight"
                            id="itemWeight-{{ $i }}" name="itemWeight[]"
                            value="{{ $item->item_weight ?? 0 }}"
                            onblur="updateListItem(this);" />
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
                    {{-- <td>
                        <button  class="btn btn-success btn-sm" title="Assign to List"  data-bs-toggle="modal"   data-bs-target="#AssignItemToListModal" onclick="showListAssignModal('{{ $item->id }}','{{ $item->item_name }}')" >
                            <i class="fas fa-clipboard-list"></i>
                        </button>

                    </td> --}}

                    <td id="btn-td-{{ $i }}">
                        <button  class="btn btn-success btn-sm" title="Assign to List"  data-bs-toggle="modal"   data-bs-target="#AssignItemToListModal" onclick="showListAssignModal('{{ $item->id }}','{{ $item->item_name }}')" >
                            <i class="fas fa-clipboard-list"></i>
                        </button>
                        <button id="deleteItemBtn-{{ $i }}" class="btn btn-sm btn-danger" title="Delete Item" data-href="/destroy-list-item/{{ $item->id }}" data-object-type='item:' data-object-name='{{ $item->item_name }}' data-list-name="master" data-object-id="{{ $item->id }}" data-bs-toggle="modal" data-bs-target="#deleteAlertModal" onclick="confirmDelete(this)">
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
