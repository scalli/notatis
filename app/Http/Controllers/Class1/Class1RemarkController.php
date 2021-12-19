<?php

namespace App\Http\Controllers\Class1;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Models\Class1;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Class1RemarkController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Class1 $class1)
    {
        $remarks = DB::table('remarks')
            ->join('users as users1', 'users1.id', '=', 'student_id')
            ->join('class1s', 'class1s.id', '=', 'users1.class1_id')
            ->select('remarks.*')
            ->where('class1s.id', '=', $class1->id)
            ->get();

        //        $remarks = $class1->students()->with('remarks')
//            ->get()
//            ->pluck('remarks');

        return $this->showAll($remarks);
    }

}
