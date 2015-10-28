<?php

namespace Wactas\Repositories;

use Wactas\Entities\Employee;

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
    
    public function getEmployee($id)
    {
        return $this->selectEmployee()
                ->findOrFail($id);
    }

}