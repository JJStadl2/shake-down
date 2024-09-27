<!-- Modal structure -->
<div class='modal-container'>
    <div class="modal fade" id="addMasterItemModal" tabindex="-1" aria-labelledby="addMasterItemModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addMasterItemModalLabel">Add New Items</h5>
            <button  type="button" class="btn-close modal-x" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <form action="/add-gear-items" method="post">
            @csrf
            <div class="modal-body">
              <div class="table-responsive">
                <table class="table table-dark" data-category-id="list-items">
                  <thead>
                    <tr>
                      {{-- <th scope="col"></th> --}}
                      <th scope="col">Item</th>
                      <th scope="col">Category</th>
                      <th scope="col">UOM</th>
                      <th scope="col">Weight</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody id="modal-item-table-body">

                    <input type="hidden" name="newItemCount" id='newItemCount' value="" />
                  </tbody>
                </table>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
