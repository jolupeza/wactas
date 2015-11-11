<?php

namespace Wactas\Http\Middleware;

class IsAdmin extends IsType
{
    public function getType()
    {
        return 1;
    }
}
