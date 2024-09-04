<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\SerpApiService;
use Illuminate\Support\Facades\Log;

class GearSearchController extends Controller
{
    protected $serpApiService;

    public function __construct(SerpApiService $serpApiService)
    {
        $this->serpApiService = $serpApiService;
    }

    public function search(Request $request)
    {
        Log::debug(__FILE__.' '.__LINE__.' request in search: '.print_r($request->input(),true));
        // $this->validate($request, [
        //     'query' => 'required|string|max:255',
        // ]);

        $query = $request->input('search');
        $specifications = $this->serpApiService->getProductSpecifications($query);

        return response()->json([
            'query' => $query,
            'specifications' => $specifications,
        ]);
    }
}
