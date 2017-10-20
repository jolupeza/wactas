<?php
//use Wactas\Entities\Customer;

/**
 * @return \Wactas\Entities\User
 */
function currentUser()
{
    return auth()->user();
}

function hasCustomer()
{
    return session()->get('customer_id');
}

/*
 * 
 * @return \Wactas\Entities\Customer
 */
//function getCustomer()
//{
//    return Customer::findOrFail(session()->get('customer_id'));
//}

