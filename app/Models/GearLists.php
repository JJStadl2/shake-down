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
        'list_items'
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
    public static function getSortingOptions($key = false){

        $sql = 'SELECT *
                FROM list_sorting_options
                ORDER BY ordinal ASC';

        try{
            $options = DB::select($sql);
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            return [];
        }

        if(!$key){
            return $options;
        }else{
            foreach($options as $option){
                if($option->value === $key){
                    return $option;
                }
            }
        }



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
        $fromWeight = true;
        $gearListItems = GearListItems::getSortedListItems($gearList->id,$sort,$gearList->uom,$fromWeight);
        $maxListWeight = self::getlistClassByKey($gearList->list_class);
        $listClassWarning = $maxListWeight->display;

        if($gearList->uom === 'us'){
            $maxListWeight = $maxListWeight->us_max_weight;
            $weightUom = 'LBS';
        }else{
            $maxListWeight = $maxListWeight->metric_max_weight;
            $weightUom = 'KG';
        }

        foreach($gearListItems as $item){
            $line_weight = ($item->item_unit_weight * $item->amount);
            $totalPackWeight+= $line_weight;

            if($item->item_category !== 'consumables' ){
                $baseWeight+= $line_weight;
            }
        }


        if($gearList->uom === 'us'){
            $baseWeight = $baseWeight/GearListItems::$usConversionFactor;
            $totalPackWeight = $totalPackWeight/GearListItems::$usConversionFactor;
        }else{
            $baseWeight = $baseWeight/GearListItems::$metricConversionFactor;
            $totalPackWeight = $totalPackWeight/GearListItems::$metricConversionFactor;

        }

        $gearList->totalPackWeight = $totalPackWeight;
        $gearList->baseWeight = $baseWeight;
        $gearList->maxPackWeight = $maxListWeight;
        $gearList->weightUom = $weightUom;
        $gearList->classWarningValue = $listClassWarning;

    }
    public static function getChartData($gearList){

        if($gearList->uom === 'us'){
            $conversionFactor = GearListItems::$usConversionFactor;
        }else{
            $conversionFactor = GearListItems::$metricConversionFactor;
        }

        $sort = ['item_weight','ASC'];
        $gearListItems = GearListItems::getSortedListItems($gearList->id,$sort,$gearList->uom);
        Log::debug(__FILE__.' '.__LINE__.' list items for chart: '.print_r($gearListItems,true));
        $categories = DB::table('item_categories')->orderBy('category','asc')->get(['category','value']);
        Log::debug(__FILE__.' '.__LINE__.' categories for chart: '.print_r($categories,true));
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
            }
            elseif( $category->value === 'unassigned'){
                $listData[ $category->value] =['label'=>'Unassigned','weight'=>0,'color' =>  $unassignedColor];

            }
            else{
                $listData[ $category->value] = ['label'=>$category->category,'weight'=>0, 'color'=>$colors[$i]];
                $i++;
            }

        }

        //TODO fix unassigned
        foreach($gearListItems as $item){
             $category = 'unassigned';
            if(array_key_exists($item->item_category,$listData)){
                $category = $item->item_category;
            }
            $weight = $listData[$category]['weight'];
            $weight += ($item->item_unit_weight * $item->amount)/$conversionFactor;
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

        $chartData = ['labels'=>$labels,'weights'=>$weights,'colors'=> $chartColors];
        Log::debug(__FILE__.' '.__LINE__.' chart data for chart: '.print_r($chartData,true));
        return $chartData;
    }
}
