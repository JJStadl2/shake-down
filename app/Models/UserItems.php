<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class UserItems extends Model
{
    use HasFactory;

    protected $fillable = [
        'list_id',
        'user_id',
        'item_id'
    ];

    public function createAndReturnId($listId){
        $userItem = new UserItems();
        $user = Auth::user();
        $userItem->user_id = $user->id;
        $userItem->list_id = $listId;
        try {
            $userItem->save();
        } catch (\Exception $e) {
            Log::error(__FILE__ . ' ' . __LINE__ . ' ' . $e->getMessage());
           return 0;
        }
        $userItem->item_id = $userItem->id;
        $userItem->save();
        return $userItem->id;

    }

    public static function getListItemsArray ($userItemId = false){
        $userId = Auth::user()->id;

        try{
            if(!$userItemId){
                $userListItems =  UserItems::where('user_id',$userId)->get(['item_id','list_id']);

            }else{
                $userListItems =  UserItems::where('user_id',$userId)->where('item_id',$userItemId)->get(['item_id','list_id']);

            }


        }catch(\Exception $e){
           Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
          $userListItems = [];
        }

        $listItems = [];
        $listItems_2 = [];

        foreach($userListItems as $item){
            $list_id = $item->list_id;
            $item_id = $item->item_id;
            if(!isset($listItems[$list_id])){
                $listItems[$list_id] = [];

            }

            $listItems[$list_id][] = $item_id;

        }

        return $listItems;
    }
    public static function getUserListAsArray($userId){

        return UserItems::where('user_id',$userId)->pluck('list_id')->toArray();
    }
    public static function getItemAssignments($userItemId){

        $userId = Auth::user()->id;

        try{

            $itemAssignments =  UserItems::where('user_id',$userId)->where('item_id',$userItemId)->get(['item_id','list_id']);

        }catch(\Exception $e){
           Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
           $itemAssignments = [];
        }

        $assignements = [];

        foreach($itemAssignments as $item){
             $assignements[] = $item->list_id;
        }

        return $assignements;
    }

    public static function manageListAssigments($request){
        $listIds = $request->listIds ?? [];
        $userItemId = $request->assignItemId ?? false;
        $userId = Auth::user()->id;
        $response = ['status'=>1,'msg'=>'Item assigned.'];
        $failedLIstIds = [];

        try{

            $itemListAssignments = UserItems::where('user_id',$userId)->where('item_id',$userItemId)->pluck('list_id')->toArray();
        }catch(\Exception $e){
            Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
            $itemListAssignments = [];

        }
        if(empty($itemListAssignments)){
            $response['status'] = 0;
            $response['msg'] = 'Cannot find this item in this user account.';
           // return $response;
           // return 0;
        }

        foreach($itemListAssignments as $key => $value){

            $index = array_search(intval($value),$listIds);

            if($index !== false){
               unset($listIds[$index]);
            }else{
                try{
                    UserItems::where('list_id',$value)->where('item_id',$userItemId)->update(['list_id'=>'']);
                    GearListItems::where('list_id',$value)->where('user_item_id',$userItemId)->delete();
                }catch(\Exception $e){
                    Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                    $failedLIstIds[] = $value;
                    continue;
                }

            }
        }

        foreach($listIds as $listId){
            if(!in_array($listId,$failedLIstIds)){

                $userItem = new UserItems();
                $userItem->list_id = $listId;
                $userItem->item_id = $userItemId;
                $userItem->user_id = $userId;

                $gearItem = new GearListItems();
                $gearItem->createAndAssignNewItem($gearItem,$userItemId);
                $gearItem->list_id = $listId;

                try{
                    $userItem->save();
                }catch(\Exception $e){
                    Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                    $failedLIstIds[] = $listId;
                    $userItem = false;
                    continue;
                }

                if(!empty($userItem)){
                    try{
                        $gearItem->save();
                    }catch(\Exception $e){
                        Log::error(__FILE__.' '.__LINE__.' '.$e->getMessage());
                        $failedLIstIds[] = $listId;
                        continue;
                    }
                }
            }

        }
        if(!empty($failedLIstIds)){
            $response['status'] = 0;
            $response['msg'] = 'Error while updating some item assignments. Please try again later';
        }
        return $response;
    }
}
