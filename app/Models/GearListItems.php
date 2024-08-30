<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GearListItems extends Model
{
    use HasFactory;

    public static int $usConversionFactor = 16;
    public static int $metricConversionFactor = 1000;
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'list_id',
        'item_name',
        'item_category',
        'item_weight',
        'in_grams',
        'in_ounces',
        'in_lbs',
        'in_kilos',
        'amount'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [

    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [

        ];
    }

    /**
     * getSortedListItems
     *
     * @param  mixed $listId
     * @param  mixed $sort
     * @return object
     * Uses raw sql because it is more readable than Eloquent for this specific query.
     * SOrts based on smallest scale unit of measure when sorting by weight.
     */
    public static function getSortedListItems($listId, $sort, $uom){

        $by = $sort[0];
        $order = $sort[1];
        Log::debug(__FILE__.' '.__LINE__.' sort arr: '.print_r($sort,true));

        if($uom === 'us'){
            $conversionFactor = self::$usConversionFactor;
        }else{
            $conversionFactor = self::$metricConversionFactor;
        }

        if(!str_contains($by,'weight')){

            $sql =' SELECT *
                    FROM gear_list_items';
        }else{
            $sql = " SELECT *,
                    CASE
                        WHEN (in_grams = 1 OR in_ounces = 1) THEN item_weight
                        WHEN (in_lbs = 1 OR in_kilos = 1) THEN item_weight * $conversionFactor
                        ELSE 0
                    END AS item_unit_weight
                    FROM gear_list_items";

            $by = 'item_unit_weight';
        }

        $sql.= ' WHERE list_id = ? ';

        $sql.=" ORDER BY $by COLLATE NOCASE $order";

        $params = [$listId];

        try{
           $gearListItems = DB::select($sql,$params);
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return [];
        }

        return $gearListItems;

    }
}

