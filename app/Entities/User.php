<?php

namespace Wactas\Entities;

use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends Entity implements AuthenticatableContract, CanResetPasswordContract
{
    use Authenticatable, CanResetPassword;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'job', 'password', 'status', 'role_id', 'area_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    public function role()
    {
        return $this->belongsTo(Role::getClass());
    }

    public function area()
    {
        return $this->belongsTo(Area::getClass());
    }

    public function setPasswordAttribute($value)
    {
        if (!empty($value)) {
            $this->attributes['password'] = bcrypt($value);
        }
    }

    public function isAdmin()
    {
        return $this->role_id === 1;
    }

    public function is($role)
    {
        return $this->role_id === $role;
    }

    public function scopeName($query, $name)
    {
        if (trim($name) != '') {
            $query->where('name', 'LIKE', "%$name%");
        }
    }

    public function scopeRoleId($query, $role_id)
    {
        if ($role_id != '') {
            $query->where('role_id', $role_id);
        }
    }

    public function scopeAreaId($query, $area_id)
    {
        if ($area_id != '') {
            $query->where('area_id', $area_id);
        }
    }
}
