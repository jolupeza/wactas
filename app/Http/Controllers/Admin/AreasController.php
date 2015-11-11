<?php

namespace Wactas\Http\Controllers\Admin;

use Wactas\Http\Controllers\Controller;
use Wactas\Entities\Area;
use Wactas\Http\Requests\AreaRequest;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class AreasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $areas = Area::paginate(15);

        return view('admin.areas.list', compact('areas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('admin.areas.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(AreaRequest $request)
    {
        $area = new Area($request->all());
        $area->save();
        Session::flash('success', 'Se agregó correctamente');

        return redirect()->route('admin.areas.edit', $area->id);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit($id)
    {
        $area = Area::findOrFail($id);

        return view('admin.areas.edit', compact('area'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update(AreaRequest $request, $id)
    {
        $area = Area::findOrFail($id);
        $area->fill($request->all());
        $area->save();
        Session::flash('success', 'Se actualizó correctamente');

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function destroy($id, Request $request)
    {
        $area = Area::findOrFail($id);
        $success = $area->delete();

        if ($request->ajax()) {
            return response()->json(compact('success'));
        }

        Session::flash('danger', 'Se eliminó correctamente');

        return redirect()->route('admin.areas.index');
    }
}
