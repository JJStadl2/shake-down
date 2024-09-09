
    @foreach ($itemCategories as $itemCat)
        @if (in_array($itemCat->value, $selectedCategories))
            <div class="item-collapsible-header">
                {{ $itemCat->category }}
                <span class="item-arrow">&#9660;</span>
                </div>
                <div class="item-collapsible-content">
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Category</th>
                                <th scope="col">UOM</th>
                                <th scope="col">Weight</th>
                                <th scope="col"># Packed</th>
                                <th scope="col">Total Packed Weight</th>
                                <th scope="col"></th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        @php $i = 1; @endphp
                        @foreach ($gearListItems as $item)
                            @if ($item->item_category === $itemCat->value)
                                <!-- Collapsible row with form inputs and headers -->
                                <tr>
                                    <td colspan="9">
                                        <div class="card card-body" style="background-color: #212529;">
                                            <form id='category-form-{{ $i }}' method="post"
                                                action="/list-items/{{ $gearList->id }}">
                                                <input type="hidden" data-column-name="id" id="id-{{ $i }}"
                                                    name="id[]" value="{{ $item->id }}" />
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <input type="text" class="form-control"
                                                                id="itemName-{{ $i }}" name="itemName[]"
                                                                value="{{ $item->item_name ?? '' }}"
                                                                onblur="updateListItem(this)" />
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
                                                        <td>
                                                            <!-- Radio buttons for UOM -->
                                                            <div>
                                                                @if ($item->in_ounces || $item->in_lbs)
                                                                    <input class="form-check-input us-radio for-conversion"
                                                                        type="radio" data-column-name="in_ounces"
                                                                        name="uom-{{ $i }}-[]"
                                                                        id="uom-oz-{{ $i }}"
                                                                        @if ($item->in_ounces) checked @endif
                                                                        onchange="convertMeasurement({{ $i }});" />
                                                                    <label class="form-check-label us-radio"
                                                                        for="uom-oz-{{ $i }}">OZ</label>
                                                                    <input class="form-check-input us-radio for-conversion"
                                                                        type="radio" data-column-name="in_lbs"
                                                                        name="uom-{{ $i }}-[]"
                                                                        id="uom-lbs-{{ $i }}"
                                                                        @if ($item->in_lbs) checked @endif
                                                                        onchange="convertMeasurement({{ $i }});" />
                                                                    <label class="form-check-label us-radio"
                                                                        for="uom-lbs-{{ $i }}">LBS</label>
                                                                @else
                                                                    <input class="form-check-input metric-radio for-conversion"
                                                                        type="radio" data-column-name="in_grams"
                                                                        name="uom-{{ $i }}-[]"
                                                                        id="uom-gram-{{ $i }}"
                                                                        @if ($item->in_grams) checked @endif
                                                                        onchange="convertMeasurement({{ $i }});" />
                                                                    <label class="form-check-label metric-radio"
                                                                        for="uom-gram-{{ $i }}">Grams</label>
                                                                    <input class="form-check-input metric-radio for-conversion"
                                                                        type="radio" data-column-name="in_kilos"
                                                                        name="uom-{{ $i }}-[]"
                                                                        id="uom-kg-{{ $i }}"
                                                                        @if ($item->in_kilos) checked @endif
                                                                        onchange="convertMeasurement({{ $i }});" />
                                                                    <label class="form-check-label metric-radio"
                                                                        for="uom-kg-{{ $i }}">KG</label>
                                                                @endif
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <input type="number" class="form-control"
                                                                id="itemWeight-{{ $i }}" name="itemWeight[]"
                                                                value="{{ $item->item_weight ?? 0 }}"
                                                                onblur="updateListItem(this);getLineTotalWeight('{{ $i }}')" />
                                                        </td>
                                                        <td>
                                                            <input type="number" class="form-control"
                                                                id="packedAmount-{{ $i }}" name="packedAmount[]"
                                                                value="{{ $item->amount ?? 1 }}"
                                                                onblur="updateListItem(this);getLineTotalWeight('{{ $i }}')" />
                                                        </td>
                                                        <td>
                                                            <input type="number" class="form-control"
                                                                id="totalLineWeight-{{ $i }}"
                                                                name="totalLineWeight[]"
                                                                value="{{ floatval($item->total_line_weight) ?? floatval($item->item_weight * $item->amount) }}"
                                                                readonly />
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
                                                                    Grams
                                                                </label>
                                                            @else
                                                                <label class="form-check-label metric-radio"
                                                                    id="line-uom-label-{{ $i }}"
                                                                    for="uom-kg-{{ $i }}">
                                                                    KG
                                                                </label>
                                                            @endif

                                                        </td>

                                                        <td id="btn-td-{{ $i }}">
                                                            <a id="deleteBtn-{{ $i }}"
                                                                href="/remove-list-item/{{ $item->id }}"
                                                                class="btn btn-primary btn-sm  py-2">x</a>
                                                        </td>


                                                    </tr>

                                                </tbody>

                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @endif
                            @php $i++; @endphp
                        @endforeach

                    </table>
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-3">

                            <button class="btn btn-secondary btn-sm mt-2 py-2 px-3" onclick="addListItem();">+ Line</button>


                        </div>
                        <div class="col-md-3"> </div>
                        <div class="col-md-3"> <button type="submit" class="btn btn-primary"> Save</button></div>
                    </div>
                </div>
        @endif
    @endforeach
    <input type="hidden" id='final-i' value="{{ $i }}" />

