<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class listClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         //seed list classes table for dropdown
         $classes = [
           ['type'=>'sul','display'=>'Super UL','description'=>'<=5LBS BPW','ordinal'=>1],
           ['type'=>'ul','display'=>'Ultra Light','description'=>'<=10LBS BPW','ordinal'=>2],
           ['type'=>'lw','display'=>'Light','description'=>'<=20LBS BPW','ordinal'=>3],
           ['type'=>'tr','display'=>'Traditional','description'=>'<=30LBS BPW','ordinal'=>4],
           ['type'=>'hvy','display'=>'Heavy','description'=>'<40LBS BPW','ordinal'=>5],
           ['type'=>'mule','display'=>'Pack Mule','description'=>'>=40LBS BPW','ordinal'=>6],

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
