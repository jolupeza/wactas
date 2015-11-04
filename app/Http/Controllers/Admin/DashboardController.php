<?php

namespace Wactas\Http\Controllers\Admin;

use Wactas\Http\Controllers\Controller;
use Wactas\Repositories\CustomerRepository;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

    /**
     * @var CustomerRepository
     */
    private $customerReposiroty;

    /**
     * Create a new controller instance.
     */
    public function __construct(CustomerRepository $customerReposiroty)
    {
        $this->middleware('auth');
        $this->customerReposiroty = $customerReposiroty;
    }

    /**
     * Show the application dashboard to the user.
     *
     * @return Response
     */
    public function index()
    {
        $customers = $this->customerReposiroty->newQuery()->where('master', false)->get();
        return view('admin.dashboard.index', compact('customers'));
    }
    
    public function selectCustomer($id, Request $request)
    {
        $customer = $this->customerReposiroty->findOrFail($id);
        $success = FALSE;
        if (count($customer)) {
            Session::put('customer_id', $id);
            $success = TRUE;
        }       
        
        if ($request->ajax()) {
            return response()->json(compact('success'));
        }
        exit;
    }
}
