
<div class="row">

    <div class="col-md-2"></div>
    <input type="hidden" name="isMaster" id="isMaster" value="true"/>
    <input type="hidden" name="listId" id="listId" data-column-name="list_id" value="{{ $gearList->id }}"/>
    <input type="hidden" name="userId" id="userId" data-column-name="user_id" value="{{ $user->id }}"/>
    <div class="col-md-3 mb-3">
        <label class="form-control-label" for="sortBy" class="form-label">Sort By</label>

        <select class="form-control" id="sortBy" name="sortBy" data-column-name="sort"  onchange="updateList(this,{{ $gearList->id }})">
            @foreach($sortingOptions as $option)
            <option value="{{ $option->value }}"  @if($gearList->sort === $option->value) selected @endif>{{ $option->display }}</option>
            @endforeach
        </select>

    </div>
    <div class="col-md-3 mb-3">
        <label class="form-control-label" for="viewOption" class="form-label">View Options</label>
        <select class="form-control" id="viewOptions" name="viewOptions" data-column-name="list_items"  onchange="updateList(this,{{ $gearList->id }})">
            <option value="1" @if($gearList->list_items) selected @endif >List by Item</option>
            <option value="0"  @if(!$gearList->list_items) selected @endif  >Group by Category</option>
        </select>

    </div>
    <div class="col-md-2 mt-2" style="margin-left: -5%;">
        <input style="width: 30%; margin-top:7%; margin-left:35%;" class="form-control" type="number" id='linesToAdd' name="linesToAdd"
            min='1' value="1" />
    </div>
    <div class="col-md-2 mb-3" style="margin-right: -9%;">
        <button style="margin-left: -150%; margin-top:10%;" class="btn btn-primary btn-sm py-2 px-3" data-bs-toggle="modal" data-bs-target="#addMasterItemModal"  onclick="addMasterListItem();">+ Gear</button>
    </div>

</div>
<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-1"></div>
    <div class="col-md-3">

    </div>
    <div class="col-md-3 mb-3">

    </div>

    <div class="col-md-2 mb-3">

    </div>
</div>


