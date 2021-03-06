@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	    	<div class="container-fluid">

	    	    <!-- Page Heading -->
	    	    <div class="row">
	    	        <div class="col-lg-12">
	    	            <h1 class="page-header">{{ $title = trans('employees.employee_title') }}</h1>
	    	            <ol class="breadcrumb">
	    	                <li>
	    	                    <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	    	                </li>
	    	                <li class="active">
	    	                    <i class="fa fa-male"></i> {{ $title }}
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
	    	            	<div class="row">
	    	            		<div class="col-md-4">
	    	            			<p><a href="{{ route('admin.employees.create') }}" class="btn btn-success">Agregar Empleado</a></p>
	    	            			<p id="js-total">Hay {{ $employees->total() }} empleados</p>
	    	            		</div>
	    	            		<div class="col-md-8">
			            			{!! Form::open(['route' => 'admin.employees.index', 'method' => 'GET', 'class' => 'form-inline pull-right']) !!}

		    	            			<div class="form-group">
											{!! Form::text('name', $name, ['class' => 'form-control', 'placeholder' => 'Nombre' ]) !!}
										</div>

										<?php $options[''] = 'Filtrar por Cliente'; ?>
			            				@foreach ($customers as $customer)
			            				    <?php $options[$customer->id] = $customer->name; ?>
			            				@endforeach

			            				<div class="form-group">
			            					{!! Form::select('customer_id', $options, $customer_id, ['class' => 'form-control']) !!}
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
	    	                            <th>Cargo</th>
	    	                            <th>Cliente</th>
	    	                            <th>Estado</th>
	    	                            <th>Acciones</th>
	    	                        </tr>
	    	                    </thead>
	    	                    <tbody>
	    	                    	@if (count($employees))
		    	                        @foreach($employees as $employee)
		    	                        	@include('admin.employees.partials.item')
		    	                        @endforeach
		    	                    @else
		    	                    	<tr>
		    	                    		<td colspan="6"><span class="text-info">No se encontró registros</span></td>
		    	                    	</tr>
	    	                        @endif
	    	                    </tbody>
	    	                </table>
	    	            </div>

						{!! $employees->appends(['name' => $name, 'customer_id' => $customer_id])->render() !!}

	    	        </div>
	    	    </div><!-- /.row -->

	    	</div>
	    	<!-- /.container-fluid -->

	    </div>
	    <!-- /.container-fluid -->

	</div>
	<!-- /#page-wrapper -->

	{!! Form::open(['id' => 'form-delete', 'route' => ['admin.employees.destroy', ':id'], 'method' => 'DELETE']) !!}
	{!! Form::close() !!}

@endsection