<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class GearListItems extends Model
{
    use HasFactory;
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
        'in_pounds',
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
     * @return void
     * Uses raw sql because it is more readable than Eloquent for this specific query.
     */
    public static function getSortedListItems($listId, $sort){

        $by = $sort[0];
        $order = $sort[1];

        $sql =' SELECT *
                FROM gear_list_items
                WHERE list_id = ?';

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

