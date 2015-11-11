@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	    	<div class="container-fluid">

	    	    <!-- Page Heading -->
	    	    <div class="row">
	    	        <div class="col-lg-12">
	    	            <h1 class="page-header">{{ $title = trans('users.user_title') }}</h1>
	    	            <ol class="breadcrumb">
	    	                <li>
	    	                    <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	    	                </li>
	    	                <li class="active">
	    	                    <i class="fa fa-user"></i> {{ $title }}
	    	                </li>
	    	            </ol>

	            		@include('partials.flash')

	            		<div id="js-msg-success" class="alert alert-success Alertjs" role="alert"></div>
	            		<div id="js-msg-info" class="alert alert-info Alertjs" role="alert"></div>
	            		<div id="js-msg-warning" class="alert alert-warning Alertjs" role="alert"></div>
	            		<div id="js-msg-danger" class="alert alert-danger Alertjs" role="alert"></div>
	    	        </div>
	    	    </div>
	    	    <!-- /.row -->

	    	    <div class="row">
	    	        <div class="col-xs-12">
	    	            <div class="table-responsive">
	    	            	{{-- <p><a href="{{ route('admin.users.create') }}" class="btn btn-success">Agregar Usuario</a></p>
	    	            	<p id="js-total">Hay {{ $users->total() }} usuarios</p> --}}

	    	            	<div class="row">
	    	            		<div class="col-md-4">
	    	            			<p><a href="{{ route('admin.users.create') }}" class="btn btn-success">Agregar Usuario</a></p>
	    	            			<p id="js-total">Hay {{ $users->total() }} usuarios</p>
	    	            		</div>
	    	            		<div class="col-md-8">
			            			{!! Form::open(['route' => 'admin.users.index', 'method' => 'GET', 'class' => 'form-inline pull-right']) !!}

		    	            			<div class="form-group">
											{!! Form::text('name', $name, ['class' => 'form-control', 'placeholder' => 'Nombre' ]) !!}
										</div>

										<?php $options[''] = 'Filtrar por Perfil'; ?>
			            				@foreach ($roles as $role)
			            				    <?php $options[$role->id] = $role->role; ?>
			            				@endforeach

			            				<div class="form-group">
			            					{!! Form::select('role_id', $options, $role_id, ['class' => 'form-control']) !!}
			            				</div>

			            				<?php $options = array(); $options[''] = 'Filtrar por Áreas'; ?>
			            				@foreach ($areas as $area)
			            				    <?php $options[$area->id] = $area->name; ?>
			            				@endforeach

			            				<div class="form-group">
			            					{!! Form::select('area_id', $options, $area_id, ['class' => 'form-control']) !!}
			            				</div>

			            				<button class="btn btn-default" type="submit">Filtrar</button>

									{!! Form::close() !!}
	    	            		</div>
	    	            	</div>


	    	                <table class="table table-bordered table-hover table-striped">
	    	                    <thead>
	    	                        <tr>
	    	                            <th>Id</th>
	    	                            <th>Nombre</th>
	    	                            <th>Email</th>
	    	                            <th>Estado</th>
	    	                            <th>Perfil</th>
	    	                            <th>Área</th>
	    	                            <th>Acciones</th>
	    	                        </tr>
	    	                    </thead>
	    	                    <tbody>
	    	                        @foreach($users as $user)
	    	                        	@include('admin.users.partials.item')
	    	                        @endforeach
	    	                    </tbody>
	    	                </table>
	    	            </div>

						{!! $users->appends(['name' => $name, 'role_id' => $role_id, 'area_id' => $area_id])->render() !!}

	    	        </div>
	    	    </div><!-- /.row -->

	    	</div>
	    	<!-- /.container-fluid -->

	    </div>
	    <!-- /.container-fluid -->

	</div>
	<!-- /#page-wrapper -->

	{!! Form::open(['id' => 'form-delete', 'route' => ['admin.users.destroy', ':id'], 'method' => 'DELETE']) !!}
	{!! Form::close() !!}

@endsection