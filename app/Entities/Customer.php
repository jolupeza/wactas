<?php namespace Wactas\Entities;

class Customer extends Entity 
{
    protected $fillable = ['name', 'code', 'address', 'status'];
    
    public function employees()
    {
        return $this->hasMany(Employee::getClass());
    }
    
    public function setCodeAttribute($value)
    {
        $characters = strtoupper($value);
        $code = strtoupper(substr($value, 0, 3));
        
        // Verify exists code generate
        if ($this->checkCode($code)) {
            while ($this->checkCode($code)) {
                $code = substr($code, 0, 1) . $characters[rand(0, strlen($characters) - 1)] . $characters[rand(0, strlen($characters) - 1)];
            }
        }
        
        $this->attributes['code'] = $code;
    }
    
    private function checkCode($value)
    {
        return Customer::where('code', $value)->count();
    }
}
