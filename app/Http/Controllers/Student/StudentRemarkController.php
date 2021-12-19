<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentRemarkController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Student $student)
    {
        $remarks = $student->remarks;

        return $this->showAll($remarks);
    }


}
