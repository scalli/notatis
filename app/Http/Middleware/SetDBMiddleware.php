<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

class SetDBMiddleware
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
     // dd($request->headers_list());
     Config::set('database.connections.sqlite', Config::get('database.connections.'.$request->subdomain));
     DB::purge('sqlite');
     DB::reconnect('sqlite');

        return $next($request);
    }
}
