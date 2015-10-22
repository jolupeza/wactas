<?php

namespace Wactas\Providers;

use Collective\Html\HtmlServiceProvider as CollectiveHtmlServiceProvider;
use Wactas\Components\HtmlBuilder;

class HtmlServiceProvider extends CollectiveHtmlServiceProvider
{
    /**
     * Register the HTML builder instance.
     */
    protected function registerHtmlBuilder()
    {
        $this->app->bindShared('html', function ($app) {
            return new HtmlBuilder($app['config'], $app['view'], $app['url']);
        });
    }
}
