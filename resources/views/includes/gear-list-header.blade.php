<div class="row">

    <div class="col-md-1"></div>
    <input type="hidden" name="listId" id="listId" data-column-name="list_id" value="{{ $gearList->id }}"/>
    <input type="hidden" name="userId" id="userId" data-column-name="user_id" value="{{ $user->id }}"/>
    <input type="hidden" name="isMaster" id="isMaster" value="false"/>
    <input type="hidden" id="classWarningValue" value="{{$gearList->classWarningValue}}"/>
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
        <label class="form-control-label">Base Weight ({{ $gearList->weightUom }})</label>
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


