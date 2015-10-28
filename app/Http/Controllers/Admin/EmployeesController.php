<?php namespace Wactas\Http\Controllers\Admin;

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
	    $employees = Employee::name($request->get('name'))->customerId($request->get('customer_id'))->with('customer')->paginate(15);
            $customers = Customer::get();

            return view('admin.employees.list', compact('employees', 'customers'));
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
            $employee = $this->employeeRepository->getEmployee($id);
            $customers = Customer::get();
            return view('admin.employees.edit', compact('employee', 'customers'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id, EmployeeRequest $request)
	{
	    $employee = $this->employeeRepository->findOrFail($id);
            
            if (is_null($request->input('status')))
            {
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
	 * @param  int  $id
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
            $success = $email->delete();
            
            if ($request->ajax()) {
                return response()->json(compact('success'));
            }
            
            $employee = $this->employeeRepository->findOrFail($email->employee_id);
            $customers = Customer::get();
            
            Session::flash('danger', 'Se eliminó correctamente');
            return redirect()->route('admin.employees.edit', compact('employee', 'customers'));
        }
        
        public function addEmail(Request $request)
        {
            $employeeEmail = new EmployeeEmail($request->all());
            
            $success = $employeeEmail->save();
            
            if ($request->ajax()) {
                return response()->json(compact('success', 'employeeEmail'));
            }
            
            $employee = $this->employeeRepository->findOrFail($employeeEmail->employee_id);
            $customers = Customer::get();
            
            Session::flash('success', 'Se agregó correctamente');
            return redirect()->route('admin.employees.edit', compact('employee', 'customers'));
        }
        
        public function deletePhone($id, Request $request)
        {
            $phone = EmployeePhone::findOrFail($id);
            $success = $phone->delete();
            
            if ($request->ajax()) {
                return response()->json(compact('success'));
            }
            
            $employee = $this->employeeRepository->findOrFail($phone->employee_id);
            $customers = Customer::get();
            
            Session::flash('danger', 'Se eliminó correctamente');
            return redirect()->route('admin.employees.edit', compact('employee', 'customers'));
        }
        
        public function addPhone(Request $request)
        {
            $employeePhone = new EmployeePhone($request->all());
            $success = $employeePhone->save();
            
            if ($request->ajax()) {
                return response()->json(compact('success', 'employeePhone'));
            }
            
            $employee = $this->employeeRepository->findOrFail($employeePhone->employee_id);
            $customers = Customer::get();
            
            Session::flash('success', 'Se agregó correctamente');
            return redirect()->route('admin.employees.edit', compact('employee', 'customers'));
        }
}
