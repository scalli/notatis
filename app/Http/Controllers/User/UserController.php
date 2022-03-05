<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\ApiController;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class UserController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $users = User::query()->get();

        return $this->showAll($users);
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(User $user)
    {
        //Old school way by giving he id instead of injecting the user
        //$user = User::query()->findOrFail($id);

        return $this->showOne($user);
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, User $user)
    {
        //Old school way by giving he id instead of injecting the user
        //$user = User::query()->findOrFail($id);

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
    public function destroy(User $user)
    {
        //Old school way by giving he id instead of injecting the user
        //$user = User::query()->findOrFail($id);

        Storage::delete($user->image);
        $user->delete();

        return $this->showOne($user, 201);
    }

    public function verify($token){
        $user = User::where('verification_token', $token)->firstOrFail();

        $user->verified = User::VERIFIED_USER;
        $user->verification_token = null;

        $user->save();

        return $this->showMessage('The account has been successfully verified.');
    }

}
