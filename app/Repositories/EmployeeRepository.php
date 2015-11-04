<?php

namespace Wactas\Repositories;

use Wactas\Entities\Employee;
use Illuminate\Support\Facades\Session;

class EmployeeRepository extends BaseRepository
{
    public function getModel() 
    {
        return new Employee();
    }
    
    protected function selectEmployee()
    {
        return $this->newQuery()->with('emails', 'phones');
    }
    
    public function filterPaginate($name, $customer_id)
    {
        return Employee::name($name)
                ->customerId($customer_id)
                ->with('customer')
                ->paginate(15);
    }
    
    public function getEmployee($id)
    {
        return $this->selectEmployee()
                ->findOrFail($id);
    }
    
    public function getEmployeeCustomer()
    {
        return $this->newQuery()
                ->select('employees.id', 'employees.name', 'customers.master as master')
                ->join('customers', function($join){
                    $join->on('employees.customer_id', '=', 'customers.id');
                })
                ->where('customer_id', Session::get('customer_id'))
                ->orWhere(function($query){
                    $query->where('customers.master', 1);
                })
                ->orderBy('customers.master', 'desc')
                ->get();
    }
    
    public function addEmail(Employee $employee, $email)
    {
        return $employee->emails()->create([
           'email'  => $email
        ]);      
    }
    
    public function delEmail(Employee $employee, $id)
    {
        return $employee->emails()->find($id)->delete();
    }
    
    public function addPhone(Employee $employee, $phone)
    {
        return $employee->phones()->create([
           'phone' => $phone
        ]);
    }
    
    public function delPhone(Employee $employee, $id)
    {
        return $employee->phones()->find($id)->delete();
    }
}