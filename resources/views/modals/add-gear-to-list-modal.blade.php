  <!-- Modal structure -->


  <div class="modal fade" id="gearSearchModal" tabindex="-1" aria-labelledby="gearSearchModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="gearSearchModalLabel">Add Your Gear</h5>
        <button type="button" class="btn-close modal-x" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form action="/add-user-gear-to-list/{{ $gearList->id }}" method="post" >
            @csrf
            <div class="modal-body custom-scrollbar">
                Search your existing gear and add it to this list.
                <div>

                    <table class="table table-dark">
                        <thead>
                            <tr>

                                <th scope="col">Item</th>
                                <th scope="col">Category</th>
                                <th class="master-number-th" scope="col">Weight</th>
                                <th scope="col">UOM</th>
                                <th scope="col">Add</th>


                            </tr>
                        </thead>
                        <tbody id="add-item-table-body">


                        </tbody>
                    </table>
                </div>
            </div>

            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Add</button>
            </div>
        </form>
    </div>
    </div>
</div>


