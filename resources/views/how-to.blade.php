@extends('layouts.header-footer')
@section('title',' How It Works | ')
@section('content')

    <div class="container mt-5">
        <h1 class="text-center">How Shakedown Works</h1>
        <p class="text-center">Learn how to manage your gear effectively with Shakedown.</p>

        <!-- Introduction Section -->
        <div class="gear-section">
            <h2>Introduction</h2>
            <p>Shakedown allows you to manage your hiking gear by organizing it into different categories. To get the most out of the app, it’s important to understand the differences between a <span class="tooltip-custom" data-bs-toggle="tooltip" data-bs-placement="top" title="A collection of items grouped for a specific trip or purpose.">Gear List</span>, <span class="tooltip-custom" data-bs-toggle="tooltip" data-bs-placement="top" title="An individual item added to a specific list. It can be customized for each list.">Gear List Item</span>, and a <span class="tooltip-custom" data-bs-toggle="tooltip" data-bs-placement="top" title="Items stored in the 'Your Gear' section, available for use in multiple lists.">User Item/Master Item</span>.</p>
        </div>

        <!-- Gear List Section -->
        <div class="gear-section">
            <h2>What is a Gear List?</h2>
            <p>
                A <strong>Gear List</strong> is a collection of gear tailored for a specific trip or purpose.
                Think of it like a checklist for all the gear you'll need on a particular trip.
            </p>
            <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#gearListExample" aria-expanded="false" aria-controls="gearListExample">
                Show Example
            </button>
            <div class="collapse mt-2" id="gearListExample">
                <div class="card card-body">
                    Example: "Summer Hiking Trip" list could include your tent, sleeping bag, and cooking supplies.
                </div>
            </div>
        </div>

        <!-- Gear List Item Section -->
        <div class="gear-section">
            <h2>What is a Gear List Item?</h2>
            <p>
                A <strong>Gear List Item</strong> is any specific item added to a Gear List. You can add items directly from the "Your Gear" section (more on that below), or you can create new items directly in a list.
            </p>
            <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#gearListItemExample" aria-expanded="false" aria-controls="gearListItemExample">
                Show Example
            </button>
            <div class="collapse mt-2" id="gearListItemExample">
                <div class="card card-body">
                    Example: A tent on your "Winter Camping" list is a Gear List Item. You can edit it just for this trip (e.g., to note that you're bringing extra stakes).
                </div>
            </div>
        </div>

        <!-- User Item / Master Item Section -->
        <div class="gear-section">
            <h2>What is a User Item/Master Item?</h2>
            <p>
                Items stored in the <strong>Your Gear</strong> section work like a <strong>Gear Shed</strong>. These items can be reused across different lists, and any changes made to these items are reflected in all the lists where they’re used.
            </p>
            <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#userItemExample" aria-expanded="false" aria-controls="userItemExample">
                Show Example
            </button>
            <div class="collapse mt-2" id="userItemExample">
                <div class="card card-body">
                    Example: Add a tent to your Gear Shed once, and you can include it in both your "Summer Hiking" and "Backpacking" lists. Any changes made to this tent (like updating its weight) will be reflected in all lists where it’s used.
                </div>
            </div>
        </div>

        <!-- Adding Items Section -->
        <div class="gear-section">
            <h2>Adding Items to Your Gear</h2>
            <p>
                When you add an item to the <strong>Your Gear</strong> section, it becomes available for use in any Gear List. This works just like storing equipment in a real-life gear shed.
            </p>
            <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#addingItemsExample" aria-expanded="false" aria-controls="addingItemsExample">
                Show Example
            </button>
            <div class="collapse mt-2" id="addingItemsExample">
                <div class="card card-body">
                    Example: Add a new item like "Hiking Poles" to Your Gear. Once added, you can include this item in any gear list you create (e.g., "Mountain Climbing Gear" or "Day Hike List").
                </div>
            </div>
        </div>

        <!-- Editing and Deleting Items Section -->
        <div class="gear-section">
            <h2>Editing and Deleting Items</h2>
            <p>
                <strong>In Your Gear:</strong> Any edits or deletions made to items in the "Your Gear" section will update all gear lists that include the item.<br>
                <strong>In a Gear List:</strong> Once an item is saved to a list, any edits made in the list will be specific to that list only.
            </p>
            <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#editingItemsExample" aria-expanded="false" aria-controls="editingItemsExample">
                Show Example
            </button>
            <div class="collapse mt-2" id="editingItemsExample">
                <div class="card card-body">
                    Example: Editing the weight of a tent in Your Gear will update its weight in all lists. Editing the tent's name directly in the "Winter Camping" list, however, will not affect the "Summer Hiking" list.
                </div>
            </div>
        </div>

        <!-- Footer Section with Suggestions -->
        {{-- <div class="gear-section">
            <h2>Improve Your Experience</h2>
            <p>We recommend the following enhancements to improve your user experience:</p>
            <ul>
                <li><strong>Include Images:</strong> Visual aids such as diagrams or screenshots can help clarify how the Your Gear section interacts with gear lists.</li>
                <li><strong>Video Tutorial:</strong> A quick tutorial video can guide users through the process of adding and managing gear.</li>
                <li><strong>Link Placement:</strong> Place this page in the Help or FAQ section, and on the gear list creation page for easy access.</li>
            </ul>
        </div> --}}
    </div>


    <!-- Bootstrap JS and Popper.js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Enable tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    </script>
@endsection

