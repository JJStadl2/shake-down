<!-- Modal structure -->
<div class='modal-container'>
    <div class="modal fade" id="addMasterItemModal" tabindex="-1" aria-labelledby="addMasterItemModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" style="max-width: 90%;"> <!-- Adjust the width of the modal here -->
        <div class="modal-content" style="font-family:'Roboto', sans-serif;color: #f5f5f5;background-color: #1a1a1a;">
          <div class="modal-header">
            <h5 class="modal-title" id="addMasterItemModalLabel">Add</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="color: #f5f5f5;background-color: #1a1a1a;"></button>
          </div>

          <form action="/add-gear-items" method="post">
            @csrf
            <div class="modal-body">
              <div class="table-responsive"> <!-- Add table-responsive to make the table scrollable on smaller screens -->
                <table class="table table-dark sortable" data-category-id="list-items">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Item</th>
                      <th scope="col">Category</th>
                      <th scope="col">UOM</th>
                      <th scope="col">Weight</th>
                      <th scope="col">Remove</th>
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
