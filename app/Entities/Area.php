<?php

namespace Wactas\Entities;

class Area extends Entity
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name'];

    public function users()
    {
        return $this->hasMany(User::getClass());
    }
}
