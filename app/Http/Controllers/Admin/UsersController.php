<?php namespace Wactas\Http\Controllers\Admin;

use Wactas\Http\Controllers\Controller;
use Wactas\Entities\User;
use Wactas\Entities\Role;
use Wactas\Http\Requests\CreateUserRequest;
use Wactas\Http\Requests\EditUserRequest;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class UsersController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
            $users = User::with('role')->paginate(15);
            return view('admin.users.list', compact('users'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
            $roles = Role::get();
            return view('admin.users.create', compact('roles'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(CreateUserRequest $request)
	{            
            $user = new User($request->all());
            $user->save();
            Session::flash('success', 'Se agregó correctamente');
            return redirect()->route('admin.users.edit', $user->id);
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
            $user = User::findOrFail($id);
            $roles = Role::get();
            
            return view('admin.users.edit', compact('user', 'roles'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(EditUserRequest $request, $id)
	{
            $user = User::findOrFail($id);
            
            if (is_null($request->input('status')))
            {
                $user->status = 0;
            }
            
            $user->fill($request->all());
            $user->save();
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
            $user = User::findOrFail($id);
            $success = $user->delete();
            
            if ($request->ajax()) {
                return response()->json(compact('success'));
            }
            
            Session::flash('danger', 'Se eliminó correctamente');
            return redirect()->route('admin.users.index');
	}
}
