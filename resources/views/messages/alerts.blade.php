@if ($errors->any() || session('success') || session('error') || session('info') || !session('opt-out') )
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-3 pt-4" style="text-align: center;">
                        {{-- @if ($errors->any())
                        <div class="alert alert-danger" role="alert">
                            <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                            </ul>
                        </div>
                        @endif --}}
                        @if (session('success'))
                        <div class="alert alert-success" role="alert">
                            {{ session('success') }}
                        </div>
                        @endif
                        @if (session('error'))
                        <div class="alert alert-danger" role="alert">
                            {{ session('error') }}
                        </div>
                        @endif
                        @if ( session('info') )
                        <div class="alert alert-info" role="alert">
                            {{ session('info') }}
                        </div>
                        @endif

                    </div>
                </div>
            </div>
            @endif
