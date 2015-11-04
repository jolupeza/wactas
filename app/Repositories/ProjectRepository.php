<?php

namespace Wactas\Repositories;

use Wactas\Entities\Project;
use Illuminate\Support\Facades\Session;

class ProjectRepository extends BaseRepository
{
    public function getModel() 
    {
        return new Project();
    }

    public function filterPaginate($type)
    {
        return Project::type($type)
                ->where('customer_id', Session::get('customer_id'))
                ->paginate(15);
    }
}