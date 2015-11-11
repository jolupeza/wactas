<?php

namespace Wactas\Entities;

class Project extends Entity
{
    protected $fillable = ['name', 'type', 'description', 'objectives', 'status', 'customer_id'];

    public function customer()
    {
        return $this->belongsTo(Customer::getClass(), 'customer_id');
    }

    public function employees()
    {
        return $this->belongsToMany(Employee::getClass(), 'project_employees')->withTimestamps();
    }

    public function minutes()
    {
        return $this->hasMany(Minute::getClass());
    }

    public function scopeType($query, $type)
    {
        if ($type != '') {
            $query->where('type', $type);
        }
    }
}
