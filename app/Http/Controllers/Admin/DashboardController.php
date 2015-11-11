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
    private $customerRepository;

    /**
     * Create a new controller instance.
     */
    public function __construct(CustomerRepository $customerRepository)
    {
        $this->middleware('auth');
        $this->customerRepository = $customerRepository;
    }

    /**
     * Show the application dashboard to the user.
     *
     * @return Response
     */
    public function index()
    {
        $customers = $this->customerRepository->newQuery()->get();
//        $customers = $this->customerRepository->newQuery()->where('master', false)->get();
        return view('admin.dashboard.index', compact('customers'));
    }

    public function selectCustomer($id, Request $request)
    {
        $customer = $this->customerRepository->findOrFail($id);
        $success = false;
        if (count($customer)) {
            Session::put('customer_id', $id);
            Session::put('customer_name', $customer->name);
            $success = true;
        }

        if ($request->ajax()) {
            return response()->json(compact('success'));
        }
        exit;
    }
}
