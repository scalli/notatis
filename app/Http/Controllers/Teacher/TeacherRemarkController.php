<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Models\Teacher;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TeacherRemarkController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(Teacher $teacher)
    {
        $remarks = $teacher->remarks;

        return $this->showAll($remarks);
    }

}
