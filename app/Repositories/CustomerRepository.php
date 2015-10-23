<?php

namespace Wactas\Repositories;

use Wactas\Entities\Customer;

class CustomerRepository extends BaseRepository
{
    public function getModel() 
    {
        return new Customer();
    }

}