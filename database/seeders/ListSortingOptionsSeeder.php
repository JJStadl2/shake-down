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
        $classes = [
            ['value'=>'cat_asc','display'=>'Item Category(A-Z)','ordinal'=>1],
            ['value'=>'cat_desc','display'=>'Item Category(Z-A)','ordinal'=>2],
            ['value'=>'name_asc','display'=>'Item Name(A-Z)','ordinal'=>3],
            ['value'=>'name_desc','display'=>'Item Name(Z-A)','ordinal'=>4],
            ['value'=>'weight_asc','display'=>'Item Weight(Low-High)','ordinal'=>5],
            ['value'=>'weight_desc','display'=>'Item Weight(High-Low)','ordinal'=>6],
            ['value'=>'dont','display'=>"Don't Sort",'ordinal'=>7],

          ];

          foreach($classes as $class){

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
