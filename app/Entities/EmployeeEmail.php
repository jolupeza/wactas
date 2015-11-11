<?php


namespace Wactas\Entities;

class EmployeeEmail extends Entity
{
    protected $fillable = ['email', 'employee_id'];

    public function employee()
    {
        return $this->belongsTo(Employee::getClass());
    }
}
