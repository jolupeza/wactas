<?php

namespace Wactas\Repositories;

use Wactas\Entities\Minute;

class MinuteRepository extends BaseRepository
{
    public function getModel()
    {
        return new Minute();
    }

    public function filterPaginate($id, $name)
    {
        return Minute::name($name)
                ->where('project_id', $id)
                ->with('project')
                ->paginate(15);
    }
}
