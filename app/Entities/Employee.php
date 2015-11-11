<?php

namespace Wactas\Entities;

class Employee extends Entity
{
    protected $fillable = ['name', 'job', 'status', 'customer_id'];

    public function customer()
    {
        return $this->belongsTo(Customer::getClass());
    }

    public function emails()
    {
        return $this->hasMany(EmployeeEmail::getClass());
    }

    public function phones()
    {
        return $this->hasMany(EmployeePhone::getClass());
    }

    public function projects()
    {
        return $this->belongsToMany(Project::getClass(), 'project_employees')->withTimestamps();
    }

    public function scopeName($query, $name)
    {
        if (trim($name) != '') {
            $query->where('name', 'LIKE', "%$name%");
        }
    }

    public function scopeCustomerId($query, $customer_id)
    {
        if ($customer_id != '') {
            $query->where('customer_id', $customer_id);
        }
    }

    public function inProject(Project $project)
    {
        return $this->projects()->where('project_id', $project->id)->count();
    }
}
