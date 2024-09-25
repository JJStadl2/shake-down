<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class Validation extends Model
{
    use HasFactory;

    public static function validateRegistration($request){

        return (strcmp($request->inputPassword, $request->confirmPassword) === 0) ? true : false;
    }
}
