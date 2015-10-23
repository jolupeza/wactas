<?php
    return array(

        'menu' => array(
            'admin'       => array(
                'title' => 'Dashboard',
                'icon'  => 'fa-dashboard'
            ),
            'admin.customers.index' => array(
                'title' => 'Gestión de Clientes',
                'icon'  => 'fa-university',
            ),
            'admin.users.index' => array(
                'title' => 'Gestión de Usuarios',
                'icon'  => 'fa-users',
                'submenu_id' => 'sm-users',
                'submenu' => array(
                    array(
                        'title' => 'Usuarios',
                        'icon'  => 'fa-user',
                        'url'   => 'admin.users.index'
                    ),
                    array(
                        'title' => 'Perfiles',
                        'icon'  => 'fa-users',
                        'url'   => 'admin.roles.index'
                    )
                )
            )
        )
    );