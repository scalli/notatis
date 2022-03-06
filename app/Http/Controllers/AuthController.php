<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

class AuthController extends Controller
{

    public function registerstudent(Request $request)
    {
    // $validatedData = $request->validate([
    // 'name' => 'required|string|max:255',
    //                    'email' => 'required|string|email|max:255|unique:users',
    //                    'password' => 'required|string|min:8',
    // ]);

    //       $user = User::create([
    //               'name' => $validatedData['name'],
    //                    'email' => $validatedData['email'],
    //                    'password' => Hash::make($validatedData['password']),
    //        ]);

    $rules = [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ];

        $this->validate($request, $rules);

        $data = $request->all();
        $data['password'] = Hash::make($request->password);
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

        $user = User::create($data);

    $token = $user->createToken('auth_token',['studentpower'])->plainTextToken;

    return response()->json([
                  'access_token' => $token,
                       'token_type' => 'Bearer',
    ]);
    }//end of registerStudent method

    public function registerteacher(Request $request)
    {

    $rules = [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ];

        $this->validate($request, $rules);

        $data = $request->all();
        $data['password'] = Hash::make($request->password);
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
        $data['role'] = 1;
        $data['created_at'] = now();
        $data['updated_at'] = now();

        $user = User::create($data);


    $token = $user->createToken('auth_token',['teacherpower'])->plainTextToken;

    return response()->json([
                  'access_token' => $token,
                       'token_type' => 'Bearer',
    ]);
    }//end of registerteacher method


    public function login(Request $request)
    {
    
    //Not working code to change database for different schools --> dangerous?
     // Config::set('database.connections.sqlite', Config::get('database.connections.gomad'));
     // DB::purge('sqlite');
     // DB::reconnect('sqlite');

    if (!Auth::attempt($request->only('email', 'password'))) {
    return response()->json([
    'message' => 'Invalid login details'
               ], 401);
           }

    $user = User::where('email', $request['email'])->firstOrFail();

    
    // if($user->admin == 'true'){
    //     //User is an admin
    //     $token = $user->createToken('auth_token',['adminpower'])->plainTextToken;
    // }    

    // if($user->role == 0){
    //     //User is a student
    //     $token = $user->createToken('auth_token',['studentpower'])->plainTextToken;
    // }

    // if($user->role == 1){
    //     //User is a teacher
    //     $token = $user->createToken('auth_token',['teacherpower'])->plainTextToken;
    // }
    
    // $token = $user->createToken('auth_token')->plainTextToken;

    // return response()->json([
    //            'access_token' => $token,
    //            'token_type' => 'Bearer',
    // ]);


     return request()->user();


    // return response()->json([
    //            'user' => $user,
    // ]);

    }//end of method login


    public function logout(Request $request){
        Auth::guard('web')->logout();
    }    

    public function me(Request $request)
    {
        return $request->user();
    }
}
