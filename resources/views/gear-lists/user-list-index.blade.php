{{-- TODO-> change icons to buttons? --}}
@extends('layouts.header-footer')
@section('title','Grear Lists | ')
@section('content')
<div class="btn-header-container" >
    <div class="row">
        <div class="col-md-4">
            <a href="/gear-list" class="btn btn-primary  btn-sm mt-2 py-2 px-3" >Create</a>
        </div>
        <div class="col-md-4">

        </div>
        <div class="col-md-4">
            <a href="/all-list-items" class="btn btn-primary btn-sm mt-2 py-2 px-3" style="float: right;">Your Gear</a>
        </div>
    </div>
</div>
<br>

<div class="container">


    <table class="table table-dark" style="width:100%" >
        <thead>
          <tr>

            <th scope="col">Name</th>
            <th scope="col">Notes</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>
            @php $i = 1; @endphp
            @foreach($gearLists as $gearList)
          <tr>

            <td>{{ $gearList->name }}</td>
            <td>{{ $gearList->notes }}</td>
            <td>{{ date_format( $gearList->created_at, 'm-d-Y') ?? '' }}</td>
            <td>{{ date_format( $gearList->updated_at, 'm-d-Y') }}</td>
            {{-- <td><a href='/edit-gear-list/{{ $gearList->id }}'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 32 32">
                    <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z" fill="white"></path>
                    </svg>
                    </a>
            </td>
            <td><a href='/list-items/{{ $gearList->id }}'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" fill="white"></svg></a></td>
            <td><a href="/destroy-list/{{ $gearList->id }}"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z" fill="white"></path>
                </svg></a>
            </td> --}}
            <td><a href='/gear-list/{{ $gearList->id }}' class="btn btn-primary btn-sm py-2">Edit</a>
            </td>
            <td><a href='/list-items/{{ $gearList->id }}' class="btn btn-primary btn-sm py-2"> Items</a></td>
            <td><a href="/destroy-list/{{ $gearList->id }}"   class="btn btn-primary btn-sm py-2"> Delete</a>
            </td>
          </tr>
          @php $i++; @endphp
          @endforeach


        </tbody>
      </table>
</div>
@endsection
