<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ItemCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //TODO add unassigned
        $categoryCheck = DB::table('item_categories')->get();

        if(count($categoryCheck)){
            return;
        }
            //seed categories table for dropdown
         $categories = [
            'clothes',
             'worn_clothes',
             'rain_gear',
             'packs',
             'consumables',
             'shelter',
             'fire~water_treatment',
             'luxury_item',
             'tech',
             'cooking',
             'tools',
             'emergency',
             'sleep_system',
             'unassigned'
         ];
         sort($categories);

         $sql = "INSERT INTO item_categories('value','category','ordinal') VALUES (?,?,?) ";

         $i = 1;
         foreach($categories as $category){

             $value = $category;
             $category = str_replace('_',' ',$category);
             $category = str_replace('~','/',$category);
             $category = ucwords($category);
             $params = [$value, $category,$i];

             try{
                 DB::insert($sql,$params);
             }catch(\Exception $e){
                 Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                 continue;
             }
             $i++;
         }
    }
}
