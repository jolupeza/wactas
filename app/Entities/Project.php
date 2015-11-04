<?php namespace Wactas\Entities;

class Project extends Entity {

    protected $fillable = ['name', 'type', 'description', 'objectives', 'status', 'customer_id'];
    
    public function customer()
    {
        return $this->belongsTo(Customer::getClass());
    }
    
    public function employees()
    {
        return $this->belongsToMany(Employee::getClass(), 'project_employees')->withTimestamps();
    }
    
    public function scopeType($query, $type)
    {
        if ($type != "") {
            $query->where('type', $type);
        }
    }

}
