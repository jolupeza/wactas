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
                'submenu_id' => 'sm-customers',
                'submenu' => array(
                    array(
                        'title' => 'Clientes',
                        'icon'  => 'fa-university',
                        'url'   => 'admin.customers.index'
                    ),
                    array(
                        'title' => 'Empleados',
                        'icon'  => 'fa-male',
                        'url'   => 'admin.employees.index'
                    )
                )
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