<?php

namespace Wactas\Repositories;

use Wactas\Entities\User;

class UserRepository extends BaseRepository
{
    public function getModel()
    {
        return new User();
    }

    public function filterPaginate($name, $role_id, $area_id)
    {
        return User::name($name)
                ->roleId($role_id)
                ->areaId($area_id)
                ->with('role')
                ->with('area')
                ->paginate(15);
    }
}
