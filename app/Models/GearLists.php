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
        $weightUom = 'LBS';

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
            $weightUom = 'KG';
        }

        $gearList->totalPackWeight = $totalPackWeight;
        $gearList->baseWeight = $baseWeight;
        $gearList->maxPackWeight = $maxListWeight;
        $gearList->weightUom = $weightUom;

    }
    public static function getChartData($gearList, $sort){

        $gearListItems = GearListItems::getSortedListItems($gearList->id,$sort,$gearList->uom);
        $categories = DB::table('item_categories')->orderBy('category','asc')->get(['category','value']);
        $listData = [];
        $labels = [];
        $weights =[];
        $colors = [
            '#FF851B',
            '#FF5733',
            '#FFC300',
            '#DFFF00',
            '#00FF7F',
            '#00CED1',
            '#4682B4',
            '#7B68EE',
            '#9400D3',
            // '#FF69B4',
            '#FF4500',
            '#A52A2A',
            // '#708090',
            '#2E8B57'
        ];

        $unassignedColor =  '#FF69B4';
        $consumableColor = '#708090';

        $i = 0;
        foreach($categories as $category){
            if($category->value === 'consumables'){
                $listData[ $category->value] = ['label'=>$category->category,'weight'=>0, 'color'=>$consumableColor];
            }else{
                $listData[ $category->value] = ['label'=>$category->category,'weight'=>0, 'color'=>$colors[$i]];
                $i++;
            }

        }

        $listData[ 'unassigned'] =['label'=>'Unassigned','weight'=>0,'color' =>  $unassignedColor];

        foreach($gearListItems as $item){
            $category = 'unassigned';
            if(array_key_exists($item->item_category,$listData)){
                $category = $item->item_category;
            }
            $weight = $listData[$category]['weight'];
            $weight += $item->total_line_weight;
            $listData[$category]['weight'] = $weight;

        }

        $chartColors = [];
        foreach($listData as $data){
            if($data['weight'] > 0){
                $labels[] = $data['label'];
                $weights[] = $data['weight'];
                $chartColors[] = $data['color'];
            }

        }

        $chartData = ['labels'=>$labels,'data'=>$weights,'colors'=> $chartColors];
        return $chartData;
    }
}
