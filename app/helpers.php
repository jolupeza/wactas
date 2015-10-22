<?php

/**
 * @return \Wactas\Entities\User
 */
function currentUser()
{
    return auth()->user();
}
