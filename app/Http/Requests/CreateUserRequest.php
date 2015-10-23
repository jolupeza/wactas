<?php namespace Wactas\Http\Requests;

use Wactas\Http\Requests\Request;

class CreateUserRequest extends Request {

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
                    'name'        => 'required',
                    'email'       => 'required|email|unique:users,email',
                    'password'    => 'required|min:6|same:re-password',
                    're-password' => 'required|min:6',
                    'role_id'     => 'required',
		];
	}

}