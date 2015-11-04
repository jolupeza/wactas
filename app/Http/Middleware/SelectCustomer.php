<?php namespace Wactas\Http\Middleware;

use Closure;
use Illuminate\Session\Store;

class SelectCustomer {

    /**
     * @var Store
     */
    private $session;

    public function __construct(Store $session) 
    {
        $this->session = $session;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$this->session->has('customer_id')) {
            return redirect()->to('admin');
        }
        return $next($request);
    }

}
