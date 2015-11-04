<?php

namespace Wactas\Repositories;

use Wactas\Entities\Employee;
use Wactas\Entities\Project;

class MemberRepository
{
    public function add(Employee $employee, Project $project)
    {
        if ($employee->inProject($project)) {
            return FALSE;
        }
        
        $employee->projects()->attach($project);
        return TRUE;
    }
    
    public function remove(Employee $employee, Project $project)
    {
        if (!$employee->inProject($project)) {
            return FALSE;
        }
        
        $employee->projects()->detach($project);
        return TRUE;
    }
}

