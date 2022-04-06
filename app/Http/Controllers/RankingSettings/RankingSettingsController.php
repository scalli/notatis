<?php

namespace App\Http\Controllers\RankingSettings;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ApiController;
use App\Models\RankingSettings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;

class RankingSettingsController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $RankingSettings = DB::table('ranking_settings')
        //             ->get();

        // $RankingSettings = RankingSettings::query()->get();

        $RankingSettings = DB::table('ranking_settings')
        ->select('id as ranking_settings_id', 'ranking_start_total', 'one_penalty', 
                    'two_penalty', 'three_penalty', 'four_penalty', 'ranking_start_date',
                    'ranking_end_date', 'last_updated')
        ->get();

        // $RankingSettings = (array) $RankingSettings;

        // for ($i = 0; $i < sizeof($RankingSettings); $i++) {
        //   $RankingSettings[$i] = $RankingSettings[$i]->$language;
        // }

        // foreach ($HTMLText as &$value) {
        //   $value = $value->nl;
        // }  

        return $this->showAll($RankingSettings);
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
