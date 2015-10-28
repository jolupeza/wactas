@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	        <!-- Page Heading -->
	        <div class="row">
	            <div class="col-lg-12">
	                <h1 class="page-header">{{ $title = trans('employees.employeecreate_title') }}</h1>
	                <ol class="breadcrumb">
	                    <li>
	                        <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	                    </li>
	                    <li>
	                        <i class="fa fa-male"></i>  <a href="{{ route('admin.employees.index') }}">{{ trans('employees.employee_title') }}</a>
	                    </li>
	                     <li class="active">
    	                    <i class="fa fa-file-o"></i> {{ $title }}
    	                </li>
	                </ol>
	            </div>
	        </div><!-- /.row -->

	        <div class="row">
	            <div class="col-md-7">

	            	@include('partials.messages')

	            	{!! Form::open(['route' => 'admin.employees.store', 'method' => 'POST', 'class' => 'form-horizontal']) !!}

						@include('admin.employees.partials.fields')

            		 	<p class="text-right">
            		 		<button type="submit" class="btn btn-primary">Agregar</button>
            		 	</p>

	            	{!! Form::close() !!}

	            </div><!-- end col-md-7 -->
	            <div class="col-md-5">
					{{-- <div class="panel panel-info">
						@include('admin.employees.partials.emails')
					</div><!-- end panel --> --}}
	            </div><!-- end col-md-5 -->
	        </div><!-- /.row -->

	    </div><!-- /.container-fluid -->

	</div><!-- /#page-wrapper -->

@endsection