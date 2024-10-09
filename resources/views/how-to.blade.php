@extends('layouts.header-footer')
@section('title',' How It Works | ')
@section('content')

    <div class="container how-to-container mt-5">
        <h1 class="text-center how-to-title">How Shakedown Works</h1>
        <p class="text-center" style="font-weight: bold">Learn how to manage your gear effectively with Shakedown.</p>

        <!-- Introduction Section -->
        <div class="gear-section">
            <h2 class="how-to-question">Introduction</h2>
            <p>Shakedown allows you to manage your hiking gear by organizing it into different categories. To get the most out of the app, it’s important to understand the differences between a <span class="tooltip-custom" data-bs-toggle="tooltip" data-bs-placement="top" title="A collection of items grouped for a specific trip or purpose.">Gear List</span>, <span class="tooltip-custom" data-bs-toggle="tooltip" data-bs-placement="top" title="An individual item added to a specific list. It can be customized for each list.">Gear List Item</span>, and a <span class="tooltip-custom" data-bs-toggle="tooltip" data-bs-placement="top" title="Items stored in  your Gear Shed, available for use in multiple lists.">Gear Shed Item</span>.</p>
        </div>

        <!-- Gear List Section -->
        <div class="gear-section">
            <h2 class="how-to-question">What is a Gear List?</h2>
            <p>
                A <strong>Gear List</strong> is a collection of gear tailored for a specific trip or purpose.
                Think of it like a checklist for all the gear you'll need on a particular trip.
            </p>
            <button  class="btn btn-primary btn-sm mt-2 py-2 px-3" data-bs-toggle="collapse" data-bs-target="#gearListExample" aria-expanded="false" aria-controls="gearListExample">
                Example
            </button>
            <div class="collapse mt-2" id="gearListExample">
                <div class="card card-body how-to-card">
                    <button type="button" class="btn-close modal-x btn-sm" data-bs-dismiss="gearListExample" aria-label="Close" onclick="hideExample(this)"></button>
                    "Summer Hiking Trip" list could include your tent, sleeping bag, and cooking supplies.
                </div>
            </div>
        </div>

        <!-- Gear List Item Section -->
        <div class="gear-section">
            <h2 class="how-to-question">What is a Gear List Item?</h2>
            <p>
                A <strong>Gear List Item</strong> is any specific item added to a Gear List. You can add items directly from the your Gear Shed (more on that below), or you can create new items directly in a list, which automatically adds it to your Gear Shed.
            </p>
            <button  class="btn btn-primary btn-sm mt-2 py-2 px-3" data-bs-toggle="collapse" data-bs-target="#gearListItemExample" aria-expanded="false" aria-controls="gearListItemExample">
                Example
            </button>
            <div class="collapse mt-2" id="gearListItemExample">
                <div class="card card-body how-to-card">
                    <button type="button" class="btn-close modal-x btn-sm" data-bs-dismiss="gearListItemExample" aria-label="Close" onclick="hideExample(this)"></button>
                    A tent on your "Winter Camping" list is a Gear List Item. You can edit it just for this trip (e.g., to note that you're bringing extra stakes).
                </div>
            </div>
        </div>

        <!-- User Item / Master Item Section -->
        <div class="gear-section">
            <h2 class="how-to-question">What is a Gear Shed Item?</h2>
            <p>
               Items stored here can be reused across different lists, and any changes made to these items are reflected in all the lists where they’re used. Just like a real <strong>Gear Shed</strong>.
            </p>
            <p>
                One of the best ways to get started is to add all your gear here first.
            </p>
            <button  class="btn btn-primary btn-sm mt-2 py-2 px-3" data-bs-toggle="collapse" data-bs-target="#userItemExample" aria-expanded="false" aria-controls="userItemExample">
                Example
            </button>
            <div class="collapse mt-2" id="userItemExample">
                <div class="card card-body how-to-card">
                    <button type="button" class="btn-close modal-x btn-sm" data-bs-dismiss="userItemExample" aria-label="Close" onclick="hideExample(this)"></button>
                     Add a tent to your Gear Shed once, and you can include it in both your "Summer Hiking" and "Backpacking" lists. Any changes made to this tent in your Gear Shed (like updating its weight) will be reflected in all lists where it’s used.
                </div>
            </div>
        </div>

        <!-- Adding Items Section -->
        <div class="gear-section">
            <h2 class="how-to-question">Adding Items to Your Gear Shed</h2>
            <p>
                When you add an item to your <strong>Gear Shed</strong>, it becomes available for use in any Gear List. This works just like storing equipment in a real-life gear shed.
            </p>
            <button  class="btn btn-primary btn-sm mt-2 py-2 px-3" data-bs-toggle="collapse" data-bs-target="#addingItemsExample" aria-expanded="false" aria-controls="addingItemsExample">
                Example
            </button>
            <div class="collapse mt-2" id="addingItemsExample">
                <div class="card card-body how-to-card">
                    <button type="button" class="btn-close modal-x btn-sm" data-bs-dismiss="addingItemsExample" aria-label="Close" onclick="hideExample(this)"></button>
                    Add a new item like "Hiking Poles" to your Gear Shed. Once added, you can quickly add it to any gear list you create by using the 'Your Gear' button on the Gear List page (e.g., "Mountain Climbing Gear" or "Day Hike List").
                </div>
            </div>
        </div>

        <!-- Editing and Deleting Items Section -->
        <div class="gear-section" style="padding-bottom: 1.5%;">
            <h2 class="how-to-question">Editing and Deleting Items</h2>
            <p>
                <strong>In your Gear Shed:</strong> Any edits or deletions made to items in your Gear Shed will update all gear lists that include the item. You can add or remove items from all your Gear Lists here.<br>
                <strong>In a Gear List:</strong> When an item is added to a list it is automatically added to your Gear Shed. Once it is saved to the list, any edits made to it in the list will be specific to that list only.<br>

            </p>
            <button  class="btn btn-primary btn-sm mt-2 py-2 px-3" data-bs-toggle="collapse" data-bs-target="#editingItemsExample" aria-expanded="false" aria-controls="editingItemsExample">
                Example
            </button>
            <div class="collapse mt-2" id="editingItemsExample">
                <div class="card card-body how-to-card">
                    <button type="button" class="btn-close modal-x btn-sm" data-bs-dismiss="editingItemsExample" aria-label="Close" onclick="hideExample(this)"></button>
                    Editing the weight of a tent in your Gear Shed will update its weight in all lists. Editing the tent's weight directly in the "Winter Camping" list, however, will not affect the "Summer Hiking" list.
                </div>
            </div>
        </div>

    </div>


    <!-- Bootstrap JS and Popper.js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Enable tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        document.querySelectorAll('button[data-bs-toggle="collapse"]').forEach(function (button) {
            let target = button.getAttribute('data-bs-target').substring(1);
            button.id = `${target}-btn`;
            button.addEventListener('click', function () {
            button.style.display = 'none';
            });
        });
        function hideExample(element){
            let target = document.getElementById(element.getAttribute('data-bs-dismiss'));
            document.getElementById(`${target.id}-btn`).style.display = '';
            target.classList.remove('show');

        }

    </script>
@endsection

