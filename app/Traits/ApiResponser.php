<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;

trait ApiResponser{
    private function successResponse($data, $code){
        return response()->json($data, $code);
    }

    protected function errorResponse($message, $code){
        return response()->json(['error' => $message, 'code' => $code]);
    }

    protected function showAll(Collection $collection, $code = 200){
        $collection = $this->sortData($collection);
        // $collection = $this->cacheResponse($collection);
        return $this->successResponse(['data' => $collection], $code);
    }

    protected function showOne(Model $model, $code = 200){
        return $this->successResponse(['data' => $model], $code);
    }

    protected function showMessage($message, $code = 200){
        return $this->successResponse(['data' => $message], $code);
    }

    protected function sortData(Collection $collection){

        if(request()->has('sort_by')){
            $attribute = request()->sort_by;

            $collection = $collection->sortBy($attribute);
        }
        return $collection;
    }

    protected function cacheResponse($data){

        $url = request()->url();
        $queryParams = request()->query(); 

        ksort($queryParams); 

        $queryString = http_build_query($queryParams);

        $fullUrl = "{$url}?{$queryString}";

        return Cache::remember($fullUrl, 30, function() use($data){
            return $data;
        });
    }
}


