<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\GearListItems;
use Illuminate\Database\Eloquent\SoftDeletes;

class GearLists extends Model
{
    use HasFactory;
    use SoftDeletes;

    public static float $metricMaxWeightConversionFactor = 2.2;

      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'user_id',
        'notes',
        'uom',
        'sort',
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
     * getSortingOptions
     *
     * @return array<int, object>
     */
    public static function getSortingOptions(){

        $sql = 'SELECT *
                FROM list_sorting_options
                ORDER BY ordinal ASC';

        try{
            $options = DB::select($sql);
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return [];
        }
        return $options;

    }

    /**
     * getlistClasses
     *
     * @return array<int, object>
     */
    public static function getlistClasses(){

        $sql = 'SELECT *
                FROM list_classes
                ORDER BY ordinal ASC';

        try{
            $classes = DB::select($sql);
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return [];
        }
        return $classes;

    }


    /**
     * getlistClassByKey
     *
     * @param  mixed $key
     * @return object
     */
    public static function getlistClassByKey($key){

        try{
            $class = DB::table('list_classes')->where('type',$key)->first();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return [];
        }
        return $class;

    }


    /**
     * checkWeight
     *
     * @param  mixed $gearList
     * @return object
     */
    public static function checkWeight(&$gearList){

        $baseWeight = 0;
        $totalPackWeight = 0;
        $sort = ['item_weight','ASC'];
        $gearListItems = GearListItems::getSortedListItems($gearList->id,$sort,$gearList->uom);
        $maxListWeight = self::getlistClassByKey($gearList->list_class);
        $maxListWeight = $maxListWeight->max_weight;

        foreach($gearListItems as $item){
            if($item->item_category !== 'consumables' ){
                $baseWeight+= $item->item_unit_weight;
            }

            $totalPackWeight+= $item->item_unit_weight;
        }

        if($gearList->uom === 'us'){
            $baseWeight = $baseWeight/GearListItems::$usConversionFactor;
            $totalPackWeight = $totalPackWeight/GearListItems::$usConversionFactor;
        }else{
            $baseWeight = $baseWeight/GearListItems::$metricConversionFactor;
            $totalPackWeight = $totalPackWeight/GearListItems::$metricConversionFactor;
            $maxListWeight = $maxListWeight * self::$metricMaxWeightConversionFactor;
        }

        $gearList->totalPackWeight = $totalPackWeight;
        $gearList->baseWeight = $baseWeight;
        $gearList->maxPackWeight = $maxListWeight;

    }
}
