<?php

namespace Wactas\Http\Middleware;

use Closure;
use Illuminate\Auth\Guard;
use Illuminate\Session\Store;

abstract class IsType
{
    /**
     * @var Store
     */
    private $session;

    /**
     * @var Guard
     */
    private $auth;

    public function __construct(Guard $auth, Store $session)
    {
        $this->auth = $auth;
        $this->session = $session;
    }

    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$this->auth->user()->is($this->getType())) {
            if ($request->ajax()) {
                return response('Unauthorized.', 401);
            } else {
                return redirect()->to('auth/login');
            }
        }

        return $next($request);
    }

    abstract public function getType();
}
