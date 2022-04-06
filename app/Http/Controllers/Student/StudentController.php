<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\User\UserController;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class StudentController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $students = Student::all();

        return $this->showAll($students);

//        $students = Student::query()->where('role','=','0')->get();

//        $students = DB::table('users')
//            ->join('class1s', 'users.class1', '=', 'class1s.id')
//            ->join('schoolyears', 'schoolyears.id', '=', 'class1s.schoolyear_id')
//            ->select('users.*', 'class1s.class1', 'schoolyears.schoolyear')
//            ->where('role', User::STUDENT_USER)
//            ->get();
//
//        return $this->showAll($students);
    }

    // public function getParents (){
        
    // }

    public function getStudentsBySchoolyearAndCurrentClass (int $schoolyearfilter){

        $students = DB::table('users')
           ->join('class1s', 'users.class1_id', '=', 'class1s.id')
           ->join('schoolyears', 'schoolyears.id', '=', 'class1s.schoolyear_id')
           ->select('users.*', 'class1s.class1', 'schoolyears.schoolyear')
           ->where('role', User::STUDENT_USER)
           ->where('class1s.schoolyear_id', '=', $schoolyearfilter)
           ->select('users.id','users.firstName', 'users.lastName', 'users.email', 'users.username',
                    'users.password', 'users.language', 'users.lastLoginDate', 'users.active', 'users.role',
                    'users.class1_id', 'class1s.class1')
           ->get();



       return $this->showAll($students);

    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ];

        $this->validate($request, $rules);

        $data = $request->all();
        $data['password'] = bcrypt($request->password);
        $data['verified'] = User::UNVERIFIED_USER;
        $data['verification_token'] = User::generateVerificationCode();
        $data['admin'] = User::REGULAR_USER;
        if($request->has('image')){
            $rules_image = [
                'image' => 'image'
            ];
            $this->validate($request, $rules_image);
            $data['image'] = $request->image->store('','images');
        }
        else{
            $data['image'] = null;
        }
        $data['role'] = 0;
        $data['created_at'] = now();
        $data['updated_at'] = now();

        $user_id = DB::table('users')->insertGetId($data);
        $user = User::find($user_id);

        return $this->showOne($user, 201);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show(Student $student)
    {


        return $this->showOne($student);


        //$student = User::query()->findOrFail($id);

//        $student = Student::where('role', '=', Student::STUDENT_USER)->findOrFail($id);
//
//        if($this->isStudent($student)){
//            return $this->showOne($student);
//        }
//
//        else return $this->errorResponse('The requested user is not a student.', 404);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function showCompleteStudent($id)
    {
        $student = DB::table('users')
            ->join('class1s', 'users.class1_id', '=', 'class1s.id')
            ->join('schoolyears', 'schoolyears.id', '=', 'class1s.schoolyear_id')
            ->select('users.*', 'class1s.class1', 'schoolyears.schoolyear')
            ->where('users.id', '=', $id)
            ->first();

        if($this->isStudent($student)){
            return response()->json($student, 200);
        }

        else return $this->errorResponse('The requested user is not a student.', 404);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        $user = User::query()->findOrFail($id);

        if($user->role != User::STUDENT_USER){
            return $this->errorResponse('This is not a student you are trying to modify', 409);
        }

        $rules = [
            'email' => 'email|unique:users,email,' . $user->id,
            'password' => 'min:6|confirmed',
            'admin' => Rule::in([User::ADMIN_USER, User::REGULAR_USER ]),
        ];

        if($request->filled('name')){
            $user->name = $request->name;
        }

        if($request->filled('email') && $user->email != $request->email){
            $user->verified = User::UNVERIFIED_USER;
            $user->verification_token = User::generateVerificationCode();
            $user->email = $request->email;
        }

        if($request->filled('password')){
            $user->password = bcrypt($request->password);
        }

        if($request->filled('admin')){
            if(!$user->isVerified()){
                return $this->errorResponse('Only verified users can modify the Admin field', 409);
            }

            $user->admin = $request->admin;
        }

        if($request->hasFile('image')){
            $rules_image = [
                'image' => 'image'
            ];
            $this->validate($request, $rules_image);
            Storage::delete($user->image);
            $user->image = $request->image->store('','images');
        }

        if($request->filled('class1')){
            $user->class1 = $request->class1;
        }

        $user->role = User::STUDENT_USER;
        $user->updated_at = now();

        if(!$user->isDirty()){
            return $this->errorResponse('You haven\'t made any changes', 422);
        }

        $user->save();
        return $this->showOne($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy(Student $student)
    {

        //$user = User::query()->findOrFail($id);
//
//        if($student->role != User::STUDENT_USER){
//            return $this->errorResponse('This is not a student you are trying to modify', 409);
//        }

        Storage::delete($student->image);
        $student->delete();

        return $this->showOne($student);
    }

    private function isStudent($user){
        if($user->role == User::STUDENT_USER)
            return true;
        else
            return false;
    }
}
