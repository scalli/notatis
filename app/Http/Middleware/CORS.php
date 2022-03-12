<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // header(string: 'Access-Control-Allow-Origin: *');  
        // header(string: 'Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS'); 
        // header(string: 'Access-Control-Allow-Headers: Origin, Content-Type, Authorization'); 

        return $next($request);
    }
}
