<?php

namespace Wactas\Http\Controllers\Admin;

use Wactas\Http\Controllers\Controller;
use Wactas\Entities\Customer;
use Wactas\Http\Requests\CustomerRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Wactas\Repositories\CustomerRepository;

class CustomersController extends Controller
{
    /**
     * @var CustomerRepository
     */
    private $customerRepository;

    public function __construct(CustomerRepository $customerRepository)
    {
        $this->customerRepository = $customerRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $customers = Customer::paginate(15);

        return view('admin.customers.list', compact('customers'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('admin.customers.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(CustomerRequest $request)
    {
        $customer = new Customer($request->all());
        $customer->code = $customer->name;
        $customer->save();
        Session::flash('success', 'Se agregó correctamente');

        return redirect()->route('admin.customers.edit', $customer->id);
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
        $customer = $this->customerRepository->findOrFail($id);

        return view('admin.customers.edit', compact('customer'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update($id, CustomerRequest $request)
    {
        $customer = $this->customerRepository->findOrFail($id);

        if (is_null($request->input('status'))) {
            $customer->status = 0;
        }

        $customer->fill($request->all());
        $customer->save();
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
        $customer = $this->customerRepository->findOrFail($id);
        $success = $customer->delete();

        if ($request->ajax()) {
            return response()->json(compact('success'));
        }

        Session::flash('danger', 'Se eliminó correctamente');

        return redirect()->route('admin.customers.index');
    }
}
