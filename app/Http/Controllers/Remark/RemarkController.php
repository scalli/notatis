<?php

namespace App\Http\Controllers\Remark;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Models\Remark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

class RemarkController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
     //working code to change database for different schools --> dangerous?
     // Config::set('database.connections.sqlite', Config::get('database.connections.gomad'));
     // DB::purge('sqlite');
     // DB::reconnect('sqlite');

        $remarks = Remark::all();

    //$remarks = Remark::on('gomad')->get();

        return $this->showAll($remarks);

//        $remarks = DB::table('remarks')
//            ->join('users as users1', 'users1.id', '=', 'student_id')
//            ->join('users as users2', 'users2.id', '=', 'teacher_id')
//            ->join('remark_options', 'remark_options.id', '=', 'remarks.remarkoption_id')
//            ->join('severities', 'severities.id', '=', 'remarks.severity_id')
//            ->select('users1.name as student', 'users2.name as teacher', 'remarks.*', 'remark_options.option',
//                'severities.severity_score', 'severities.severity_description')
//            ->get();
    }


    public function showFilteredRemarks(Request $request){

            // $student_id = $request->input('student_id');
            // $teacher_id = $request->input('teacher_id');
            // $remarkoption_id = $request->input('remarkoption_id');
            // $class1_id = $request->input('class1_id');
            // $start_date = $request->input('start_date');
            // $end_date = $request->input('end_date');
            // $severity_id = $request->input('severity_id');

            if($request->input('studentId') != 0){
                $student_id = $request->input('studentId');
            }
            else{$student_id = null;}
            
            if($request->input('studentId') != 0){
                $teacher_id = $request->input('authorId');            
            }
            else{$teacher_id = null;}
            
            
            // $remarkoption_id = $request->input('remarkoption_id');
            // $class1_id = $request->input('class1Id');

            if($request->input('class1Id') != 0){
                $class1_id = $request->input('class1Id');            
            }
            else{$class1_id = null;}

            $start_date = $request->input('fromDate');
            $end_date = $request->input('toDate');
            $severity_ids = $request->input('severities');
            //dd($severity_ids);

            $remarks = DB::table('remarks')
                ->join('users as students', 'students.id', '=', 'remarks.student_id')
                ->join('users as teachers', 'teachers.id', '=', 'remarks.teacher_id')
                ->join('remark_options', 'remark_options.id', '=', 'remarks.remarkoption_id')
                ->join('severities', 'severities.id', '=', 'remarks.severity_id')
                ->join('class1s', 'class1s.id', '=', 'students.class1_id')
                ->select('remarks.*')
                ->when($student_id, function ($query, $student_id) {
                    return $query->where('remarks.student_id', '=', $student_id);
                })
                ->when($teacher_id, function ($query, $teacher_id) {
                    return $query->where('remarks.teacher_id', '=', $teacher_id);
                })
                // ->when($remarkoption_id, function ($query, $remarkoption_id) {
                //     return $query->where('remarks.remarkoption_id', '=', $remarkoption_id);
                // })
                ->when($severity_ids, function ($query, $severity_ids) {
                    return $query->whereIn('remarks.severity_id', $severity_ids);
                })
                ->when($class1_id, function ($query, $class1_id) {
                    return $query->where('students.class1_id', '=', $class1_id);
                })
                ->when($start_date, function ($query, $start_date) {
                    return $query->where('remarks.date', '>=', $start_date);
                })
                ->when($end_date, function ($query, $end_date) {
                    return $query->where('remarks.date', '<=', $end_date);
                })
                ->get();

//        return response()->json($student_id, 200);

        return $this->showAll($remarks);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
