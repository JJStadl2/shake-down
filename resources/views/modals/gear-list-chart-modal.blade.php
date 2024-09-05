  <!-- Modal structure -->


  <div class="modal fade" id="gearListChartModal" tabindex="-1" aria-labelledby="gearListChartModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content" style="font-family:'Roboto', sans-serif;color: #f5f5f5;background-color: #1a1a1a;">
        <div class="modal-header">
        <h5 class="modal-title" id="gearListChartModalLabel">{{ $gearList->name }}</h5>
        <button style="background-color: #f5f5f5" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
            <div class="modal-body">
                <canvas id="gearChart"></canvas>
            </div>
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-4">
                    <label class="form-control-label">BPW</label>
                    <span id="modalBaseWeight" >{{ number_format($gearList->baseWeight,2,'.',',') ?? 0 }}</span>
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-4">
                    <label class="form-control-label">TPW</label>
                    <span id="modalTotalWeight">{{ number_format($gearList->totalPackWeight,2,'.',',') ?? 0 }}</span>
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            {{-- <button type="submit" class="btn btn-primary">Search</button> --}}
            </div>

    </div>
    </div>
</div>

