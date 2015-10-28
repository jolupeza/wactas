@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	        <!-- Page Heading -->
	        <div class="row">
	            <div class="col-lg-12">
	                <h1 class="page-header">{{ $title = trans('employees.employeeedit_title') }} {{ $employee->name }} <span class="pull-right"><a href="{{ route('admin.employees.create') }}" class="btn btn-success">Agregar Empleado</a></span></h1>
	                <ol class="breadcrumb">
	                    <li>
	                        <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	                    </li>
	                    <li>
	                        <i class="fa fa-male"></i>  <a href="{{ route('admin.employees.index') }}">{{ trans('employees.employee_title') }}</a>
	                    </li>
	                     <li class="active">
    	                    <i class="fa fa-pencil-square-o"></i> {{ $title }}
    	                </li>
	                </ol>

	            	@include('partials.flash')

            		<div id="js-msg-success" class="alert alert-success Alertjs" role="alert"></div>
            		<div id="js-msg-info" class="alert alert-info Alertjs" role="alert"></div>
            		<div id="js-msg-warning" class="alert alert-warning Alertjs" role="alert"></div>
            		<div id="js-msg-danger" class="alert alert-danger Alertjs" role="alert"></div>
	            </div>
	        </div><!-- /.row -->

	        <div class="row">
	            <div class="col-md-7">

	            	@include('partials.messages')

	            	{!! Form::model($employee, ['route' => ['admin.employees.update', $employee->id], 'method' => 'PUT', 'class' => 'form-horizontal']) !!}

						@include('admin.employees.partials.fields')

            		 	<p class="text-right">
            		 		<button type="submit" class="btn btn-primary">Editar</button>
            		 	</p>

	            	{!! Form::close() !!}

	            </div><!-- end col-md-7 -->

	            <div class="col-md-5">
					<div class="panel panel-info">
						@include('admin.employees.partials.emails')
					</div><!-- end panel -->

					<div class="panel panel-info">
						@include('admin.employees.partials.phones')
					</div><!-- end panel -->
	            </div><!-- end col-md-5 -->
	        </div><!-- /.row -->

	    </div><!-- /.container-fluid -->

	</div><!-- /#page-wrapper -->

	{!! Form::open(['id' => 'form-delete', 'route' => ['admin.employee.delete_email', ':id'], 'method' => 'DELETE']) !!}
	{!! Form::close() !!}

	{!! Form::open(['id' => 'form-delete', 'route' => ['admin.employee.delete_phone', ':id'], 'method' => 'DELETE']) !!}
	{!! Form::close() !!}

@endsection