<?php

namespace Wactas\Http\Controllers\Admin;

use Wactas\Http\Controllers\Controller;
use Wactas\Repositories\EmployeeRepository;
use Wactas\Entities\Employee;
use Wactas\Http\Requests\EmployeeRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Wactas\Entities\Customer;
use Wactas\Entities\EmployeeEmail;
use Wactas\Entities\EmployeePhone;

class EmployeesController extends Controller
{
    /**
     * @var EmployeeRepository
     */
    private $employeeRepository;

    public function __construct(EmployeeRepository $employeeRepository)
    {
        $this->employeeRepository = $employeeRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $name = $request->get('name');
        $customer_id = $request->get('customer_id');

        $employees = $this->employeeRepository->filterPaginate($name, $customer_id);
        $customers = Customer::get();

        return view('admin.employees.list', compact('employees', 'customers', 'name', 'customer_id'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $customers = Customer::get();

        return view('admin.employees.create', compact('customers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(EmployeeRequest $request)
    {
        $employee = new Employee($request->all());
        $employee->save();
        Session::flash('success', 'Se agregó correctamente');

        return redirect()->route('admin.employees.edit', $employee->id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function add(EmployeeRequest $request)
    {
        $employee = new Employee($request->all());
        $employee->status = true;
        $employee->save();

        $email = $request->get('email');
        $success = $this->employeeRepository->addEmail($employee, $email);

        if ($request->ajax()) {
            return response()->json(compact('success', 'employee'));
        }

        exit;
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
        $employee = $this->employeeRepository->getEmployee($id);
        $customers = Customer::get();

        return view('admin.employees.edit', compact('employee', 'customers'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update($id, EmployeeRequest $request)
    {
        $employee = $this->employeeRepository->findOrFail($id);

        if (is_null($request->input('status'))) {
            $employee->status = 0;
        }

        $employee->fill($request->all());
        $employee->save();
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
        $employee = $this->employeeRepository->findOrFail($id);
        $success = $employee->delete();

        if ($request->ajax()) {
            return response()->json(compact('success'));
        }

        Session::flash('danger', 'Se eliminó correctamente');

        return redirect()->route('admin.employees.index');
    }

    public function deleteEmail($id, Request $request)
    {
        $email = EmployeeEmail::findOrFail($id);
        $employee = $this->employeeRepository->findOrFail($email->employee_id);
        $success = $this->employeeRepository->delEmail($employee, $id);

        if ($request->ajax()) {
            return response()->json(compact('success'));
        }

        $customers = Customer::get();

        Session::flash('danger', 'Se eliminó correctamente');

        return redirect()->route('admin.employees.edit', compact('employee', 'customers'));
    }

    public function addEmail(Request $request)
    {
        $employee = $this->employeeRepository->findOrFail($request->get('employee_id'));
        $employeeEmail = $this->employeeRepository->addEmail($employee, $request->get('email'));
        $success = false;
        if (count($employeeEmail)) {
            $success = true;
        }

        if ($request->ajax()) {
            return response()->json(compact('success', 'employeeEmail'));
        }

        $customers = Customer::get();

        Session::flash('success', 'Se agregó correctamente');

        return redirect()->route('admin.employees.edit', compact('employee', 'customers'));
    }

    public function deletePhone($id, Request $request)
    {
        $phone = EmployeePhone::findOrFail($id);
        $employee = $this->employeeRepository->findOrFail($phone->employee_id);
        $success = $this->employeeRepository->delPhone($employee, $id);

        if ($request->ajax()) {
            return response()->json(compact('success'));
        }

        $customers = Customer::get();

        Session::flash('danger', 'Se eliminó correctamente');

        return redirect()->route('admin.employees.edit', compact('employee', 'customers'));
    }

    public function addPhone(Request $request)
    {
        $employee = $this->employeeRepository->findOrFail($request->get('employee_id'));
        $employeePhone = $this->employeeRepository->addPhone($employee, $request->get('phone'));
        $success = false;
        if (count($employeePhone)) {
            $success = true;
        }

        if ($request->ajax()) {
            return response()->json(compact('success', 'employeePhone'));
        }

        $customers = Customer::get();

        Session::flash('success', 'Se agregó correctamente');

        return redirect()->route('admin.employees.edit', compact('employee', 'customers'));
    }
}
