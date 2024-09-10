<div class="row">
    <div class="col-md-4" style="margin-right: 5%"></div>
    <div id="weightWarning-div" class="col-md-4 alert alert-warning"
        style="text-align: center;@if ($gearList->baseWeight > $gearList->maxPackWeight) display:block; @else display:none; @endif"> The base
        weight ({{ number_format($gearList->baseWeight, 2, '.', ',') }} @if ($gearList->uom === 'us')
            LBS
        @else
            (KG)
        @endif ) of the items on this list have exceeded the weight for the type/style of hike
        selected for this list.</div>
    <div class="col-md-4"></div>

</div>
