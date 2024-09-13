{{-- @for($i=1 ; $i < 10; $i++)
<div class="list-group nested-sortable">
    <div class="list-group-item nested-{{ $i }}">Item {{ $i }}</div>
</div>
@endfor

 --}}
 <div class="parent-container">
    <div class="collapsible-container" data-id="1">
      <div class="item-collapsible-header">Header 1</div>
      <div class="content">Content for header 1</div>
    </div>

    <div class="collapsible-container" data-id="2">
      <div class="item-collapsible-header">Header 2</div>
      <div class="content">Content for header 2</div>
    </div>

    <div class="collapsible-container" data-id="3">
      <div class="item-collapsible-header">Header 3</div>
      <div class="content">Content for header 3</div>
    </div>
  </div>

