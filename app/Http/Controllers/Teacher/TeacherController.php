<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;


class TeacherController extends ApiController
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $teachers =Teacher::all();
        return $this->showAll($teachers);

//        $teachers = User::query()->where('role','=','1')->get();
//        return $this->showAll($teachers);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $rules = [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ];

        $this->validate($request, $rules);

        $data = $request->all();
        $data = $this->sanitizeData($data);

        $user_id = DB::table('users')->insertGetId($data);
        $user = User::find($user_id);

        return $this->showOne($user, 201);
    }

    public function multipleTeachers(Request $request){

       $savedTeachers = [];

        $data_arr = $request->all();
        foreach ($data_arr as $data) {
            $sanitzedData = $this->sanitizeData($data);

            $user_id = DB::table('users')->insertGetId($sanitzedData);
            $user = User::find($user_id);

           array_push($savedTeachers, $user);
        }

        $savedTeachers = collect($savedTeachers);

        return $this->showAll($savedTeachers, 201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Teacher $teacher)
    {
        return $this->showOne($teacher);

        //        $user = Teacher::query()->findOrFail($id);
//
//
//        $user = User::query()->findOrFail($id);
//
//        if($user->role != User::TEACHER_USER){
//            return $this->errorResponse('This is not a teacher you are trying to access.', 409);
//        }
//
//        return $this->showOne($user);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $user = User::query()->findOrFail($id);

        if($user->role != User::TEACHER_USER){
            return $this->errorResponse('This is not a teacher you are trying to access.', 409);
        }

        if($user->role != User::TEACHER_USER){
            return $this->errorResponse('This is not a teacher you are trying to modify', 409);
        }

        $rules = [
            'email' => 'email|unique:users,email,' . $user->id,
            'password' => 'min:6|confirmed',
            'admin' => Rule::in([User::ADMIN_USER, User::REGULAR_USER ]),
        ];

        if($request->filled('firstName')){
            $user->firstName = $request->firstName;
        }

        if($request->filled('lastName')){
            $user->lastName = $request->lastName;
        }

        if($request->filled('email') && $user->email != $request->email){
            $user->verified = User::UNVERIFIED_USER;
            $user->verification_token = User::generateVerificationCode();
            $user->email = $request->email;
        }

        if($request->filled('password')){
            $user->password = bcrypt($request->password);
        }

        // if($request->filled('admin')){
        //     if(!$user->isVerified()){
        //         return $this->errorResponse('Only verified users can modify the Admin field', 409);
        //     }

        //     $user->admin = $request->admin;
        // }

        if($request->hasFile('image')){
            $rules_image = [
                'image' => 'image'
            ];
            $this->validate($request, $rules_image);
            Storage::delete($user->image);
            $user->image = $request->image->store('','images');
        }

        if($request->filled('class1')){
            return $this->errorResponse('A teacher can\'t have a class', 409);
        }

        $user->role = User::TEACHER_USER;;
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Teacher $teacher)
    {


        //        $user = User::query()->findOrFail($id);
//
//        if($teacher->role != User::TEACHER_USER){
//            return $this->errorResponse('This is not a teacher you are trying to access.', 409);
//        }

        Storage::delete($teacher->image);
        $teacher->delete();

        return $this->showOne($teacher);
    }

    private function isTeacher($user){
        if($user->role == User::TEACHER_USER)
            return true;
        else
            return false;
    }

    private function sanitizeData($data){
        
        $data['username'] = $data['email'];
        $data['password'] = bcrypt($data['password']);
        $data['verified'] = User::UNVERIFIED_USER;
        $data['verification_token'] = User::generateVerificationCode();
        $data['admin'] = User::REGULAR_USER;
        // if($request->has('image')){
        //     $rules_image = [
        //         'image' => 'image'
        //     ];
        //     $this->validate($request, $rules_image);
        //     $data['image'] = $request->image->store('','images');
        // }
        // else{
        //     $data['image'] = null;
        // }
        $data['role'] = 3; //Teacher role is 3
        $data['created_at'] = now();
        $data['updated_at'] = now();
        $data['lastLoginDate'] = now();

        return $data;
    }
}
