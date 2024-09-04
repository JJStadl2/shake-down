<?php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class SerpApiService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://serpapi.com/',
            'timeout'  => 10.0,
            'verify' => false,
        ]);
    }

    public function getProductSpecifications($productQuery)
    {
        return $this->asinAPI($productQuery);
        $response = $this->client->get('search', [
            'query' => [
                'q' => $productQuery.' hiking backpacking',
                'tbm' => 'shop',
                'api_key' => config('app.serp_api_key'),
            ],
        ]);
        $results = json_decode($response->getBody(), true);
        Log::debug(__FILE__.' '.__LINE__.' results from curl: '.print_r($results,true));
        return $this->extractSpecifications($results);
      //  return json_decode($response->getBody(), true);
    }
    protected function extractSpecifications($results)
    {
        $specifications = [];

        if (!empty($results['shopping_results'])) {
            foreach ($results['shopping_results'] as $result) {
                $specifications[] = [
                    'title' => $result['title'] ?? '',
                    'price' => $result['price'] ?? '',
                    'store' => $result['source'] ?? '',
                    'link'  => $result['link'] ?? '',
                    'description' => $result['description'] ?? '',
                    'weight' => $this->extractWeight($result['description'] ?? ''),
                ];
            }
        }

        return $specifications;
    }

    protected function extractWeight($description)
    {
        $weight = '';

        // Regular expression to match weight patterns like "2 lbs", "200 grams", etc.
        $weightPattern = '/(\d+(\.\d+)?\s*(lbs|pounds|oz|ounces|g|grams|kg|kilograms|Weight|Claimed Weight))/i';

        if (preg_match($weightPattern, $description, $matches)) {
            $weight = $matches[0]; // Capture the matched weight information
        }

        return $weight;
    }
    protected function asinAPI($productQuery){
        # set up the request parameters
$queryString = http_build_query([
    'api_key' => config('app.asin_api_key'),
      'type' => 'product',
      'amazon_domain' => 'amazon.com',
      'search_term' => $productQuery
    ]);

    # make the http GET request to ASIN Data API
    $ch = curl_init(sprintf('%s?%s', 'https://api.asindataapi.com/request', $queryString));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    # the following options are required if you're using an outdated OpenSSL version
    # more details: https://www.openssl.org/blog/blog/2021/09/13/LetsEncryptRootCertExpire/
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    curl_setopt($ch, CURLOPT_TIMEOUT, 180);

    $api_result = curl_exec($ch);
    curl_close($ch);
    $results = json_decode($api_result,true);
    Log::debug(__FILE__.' '.__LINE__.' asin api results: '.print_r($results,true));
    return $results;

    }
}
