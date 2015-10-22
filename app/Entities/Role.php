<?php

namespace Wactas\Entities;

class Role extends Entity
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['role', 'description', 'status'];

    public function users()
    {
        return $this->hasMany(User::getClass());
    }
}
