<?php

namespace Wactas\Entities;

class ProjectEmployee extends Entity
{
    public function project()
    {
        return $this->belongsTo(Project::getClass());
    }

    public function employee()
    {
        return $this->belongsTo(Employee::getClass());
    }
}
