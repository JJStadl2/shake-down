@foreach ($itemCategories as $itemCat)
    @if (in_array($itemCat->value, $selectedCategories))
        <div class="item-collapsible-header row-sortable" data-category-id="{{ $itemCat->value }}" data-ordinal="{{ $itemCat->ordinal }}">
            {{ $itemCat->category }}
            <span class="item-arrow">&#9660;</span>
        </div>
        <div class="item-collapsible-content">
            <table class="table table-dark sortable" data-category-id="{{ $itemCat->value }}">
                <thead>
                    <tr>
                        <th scope="col">#</th>
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
                <tbody>
                    @php $i = 1; @endphp
                    @foreach ($gearListItems as $item)
                        @if ($item->item_category === $itemCat->value)
                            <tr data-id="{{ $item->id }}">
                                <td>
                                    <input type="text" class="form-control" id="itemName-{{ $i }}" name="itemName[]" value="{{ $item->item_name ?? '' }}" onblur="updateListItem(this)" />
                                </td>
                                <!-- Add the rest of your form fields here -->
                                <td id="btn-td-{{ $i }}">
                                    <a id="deleteBtn-{{ $i }}" href="/remove-list-item/{{ $item->id }}" class="btn btn-primary btn-sm py-2">x</a>
                                </td>
                            </tr>
                        @endif
                        @php $i++; @endphp
                    @endforeach
                </tbody>
            </table>
        </div>
    @endif
@endforeach
<input type="hidden" id='final-i' value="{{ $i }}" />
