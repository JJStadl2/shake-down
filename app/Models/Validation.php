<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Validation extends Model
{
    use HasFactory;

    public static function validateRegistration($request){

        $password = trim($request->inputPassword) ?? false;
        $confirmPassword = trim($request->confirmPassword) ?? false;

        //confirm the passwords match
        if(strcmp($password,$confirmPassword) !== 0){
            return false;
        }
        return true;



    }
}
