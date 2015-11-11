<?php

namespace Wactas\Repositories;

use Wactas\Entities\Employee;
use Wactas\Entities\Project;

class MemberRepository
{
    public function add(Employee $employee, Project $project)
    {
        if ($employee->inProject($project)) {
            return false;
        }

        $employee->projects()->attach($project);

        return true;
    }

    public function remove(Employee $employee, Project $project)
    {
        if (!$employee->inProject($project)) {
            return false;
        }

        $employee->projects()->detach($project);

        return true;
    }
}
