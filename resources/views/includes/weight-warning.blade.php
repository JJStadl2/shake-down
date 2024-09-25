<div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-1"></div>
    <div id="weightWarning-div" class="col-md-5 alert alert-warning"
        style="text-align: center;@if ($gearList->baseWeight > $gearList->maxPackWeight) display:block; @else display:none; @endif">Base
        weight ({{ number_format($gearList->baseWeight, 2, '.', ',').' '.$gearList->weightUom }}) exceedes the weight for the '{{ $gearList->classWarningValue }}' style of hiking.
    </div>
    <div class="col-md-4"></div>

</div>
