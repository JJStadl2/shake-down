<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ListSortingOptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $optionCheck = DB::table('list_sorting_options')->get();

        if(count($optionCheck)){
            return;
        }

        $options = [
            ['value'=>'cat_asc','display'=>'Item Category(A-Z)','ordinal'=>1,'order_by'=>'item_category ASC'],
            ['value'=>'cat_desc','display'=>'Item Category(Z-A)','ordinal'=>2, 'order_by'=>'item_category DESC'],
            ['value'=>'name_asc','display'=>'Item Name(A-Z)','ordinal'=>3, 'order_by'=>'item_name ASC'],
            ['value'=>'name_desc','display'=>'Item Name(Z-A)','ordinal'=>4, 'order_by'=>'item_name DESC'],
            ['value'=>'weight_asc','display'=>'Item Weight(Low-High)','ordinal'=>5, 'order_by'=>'minimum_unit_weight ASC'],
            ['value'=>'weight_desc','display'=>'Item Weight(High-Low)','ordinal'=>6, 'order_by'=>'minimum_unit_weight DESC'],
            ['value'=>'dont','display'=>"Don't Sort",'ordinal'=>7, 'order_by'=>'id ASC'],
            ['value'=>'drag_drop','display'=>"Manual (User Drag & Drop)",'ordinal'=>8, 'order_by'=>'list_order ASC'],

          ];

          foreach($options as $class){

             $sql = "INSERT INTO list_sorting_options( ";
             $params = [];

             foreach($class as $key => $value){
                 $sql.= ' '.$key.',';
             }

             $sql = rtrim($sql,',');
             $sql .=' )VALUES( ';

             foreach($class as $key => $value){
                 $sql.= ' ?,';
                 $params[]=$value;
             }

             $sql = rtrim($sql,',');
             $sql.= ')';

              try{
                  DB::insert($sql,$params);
              }catch(\Exception $e){
                  Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                  continue;
              }

          }
    }
}
