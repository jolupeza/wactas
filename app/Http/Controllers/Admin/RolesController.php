<?php namespace Wactas\Http\Controllers\Admin;

use Wactas\Http\Controllers\Controller;
use Wactas\Entities\Role;
use Wactas\Http\Requests\RoleRequest;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class RolesController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
            $roles = Role::paginate(15);
            return view('admin.roles.list', compact('roles'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
            return view('admin.roles.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(RoleRequest $request)
	{
            $role = new Role($request->all());
            $role->save();
            Session::flash('success', 'Se agregó correctamente');
            return redirect()->route('admin.roles.edit', $role->id);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
            $role = Role::findOrFail($id);
            return view('admin.roles.edit', compact('role'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(RoleRequest $request, $id)
	{
            $role = Role::findOrFail($id);
            
            if (is_null($request->input('status')))
            {
                $role->status = 0;
            }
            
            $role->fill($request->all());
            $role->save();
            Session::flash('success', 'Se actualizó correctamente');
            return redirect()->back();
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id, Request $request)
	{
            $role = Role::findOrFail($id);
            $success = $role->delete();
            
            if ($request->ajax()) {
                return response()->json(compact('success'));
            }
            
            Session::flash('danger', 'Se eliminó correctamente');
            return redirect()->route('admin.roles.index');
	}
}
