<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ListClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $classCheck = DB::table('list_classes')->get();

        if(count($classCheck)){
            return;
        }
         //seed list classes table for dropdown
         $classes = [
           ['type'=>'sul','display'=>'Super Ultra Light','description'=>'5LBS/2.4KG or Less BPW','ordinal'=>1, 'us_max_weight'=>5,'metric_max_weight'=>2.4],
           ['type'=>'ul','display'=>'Ultra Light','description'=>'10LBS/4.5KG or Less BPW','ordinal'=>2, 'us_max_weight'=>10, 'metric_max_weight'=>4.5],
           ['type'=>'lw','display'=>'Light','description'=>'20LBS/9KG or Less BPW','ordinal'=>3, 'us_max_weight'=>20, 'metric_max_weight'=>9],
           ['type'=>'tr','display'=>'Traditional','description'=>'30LBS/13.5KG or Less BPW','ordinal'=>4, 'us_max_weight'=>30, 'metric_max_weight'=>13.5],
           ['type'=>'hvy','display'=>'Heavy','description'=>'Less than 40LBS/18KG BPW','ordinal'=>5, 'us_max_weight'=>40, 'metric_max_weight'=>18],
           ['type'=>'mule','display'=>'Pack Mule','description'=>'40LBS/18KG or More BPW','ordinal'=>6, 'us_max_weight'=>100, 'metric_max_weight'=>45.4],

         ];

         foreach($classes as $class){

            $sql = "INSERT INTO list_classes( ";
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
