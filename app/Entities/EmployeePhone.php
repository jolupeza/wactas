<?php namespace Wactas\Entities;

class EmployeePhone extends Entity 
{

    protected $fillable = ['phone', 'employee_id'];
    
    public function employee()
    {
        return $this->belongsTo(Employee::getClass());
    }

}
