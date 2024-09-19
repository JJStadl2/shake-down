<!-- Modal structure -->
<div class='modal-container'>
    <div class="modal fade" id="AssignItemToListModal" tabindex="-1" aria-labelledby="AssignItemToListModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content" style="font-family:'Roboto', sans-serif;color: #f5f5f5;background-color: #1a1a1a;">
          <div class="modal-header">
            <h5 class="modal-title" id="AssignItemToListModalLabel"></h5>
            <button style="background-color: #f5f5f5" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <form action="/assign-to-gear-list" method="post">
            <input type='hidden' id='itemIdforAssign' name="assignItemId" value=""/>
            @csrf
            <div class="modal-body">
              {{-- <div class="table-responsive"> --}}
                <table class="table table-dark">
                  <thead>
                    <tr>
                      {{-- <th scope="col"></th> --}}
                      <th scope="col">List Name</th>
                      <th scope="col">Assigned</th>

                    </tr>
                  </thead>
                  <tbody id="modal-assign-item-table-body">

                  </tbody>
                </table>
              {{-- </div> --}}
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
