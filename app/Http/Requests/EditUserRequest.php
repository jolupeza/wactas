<?php namespace Wactas\Http\Requests;

use Wactas\Http\Requests\Request;
use Illuminate\Routing\Route;

class EditUserRequest extends Request 
{

    /**
     * @var Route
     */
    private $route;

    public function __construct(Route $route) 
    {
       
        $this->route = $route;
    }
    
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
                    'email'       => 'required|unique:users,email,' . $this->route->getParameter('users'),
                    'password'    => 'min:6|same:re-password',
                    're-password' => 'min:6',
                    'role_id'     => 'required',
		];
	}

}
