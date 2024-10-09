  <!-- Modal structure -->


    <div class="modal fade" id="productSearchModal" tabindex="-1" aria-labelledby="productSearchModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="productSearchModalLabel">Search for Gear</h5>
            <button type="button" class="btn-close modal-x" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {{-- action="/search-api" method="get" --}}
            <form >

                <div class="modal-body">
                    Search specs for gear and automatically add them to your list.
                    <div>

                            <input class="form-control" type="text" id="search" name="search" placeholder="Product Name and Brand"/>

                    </div>
                </div>

                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Search</button>
                </div>
            </form>
        </div>
        </div>
    </div>

