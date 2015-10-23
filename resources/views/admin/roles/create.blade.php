@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	        <!-- Page Heading -->
	        <div class="row">
	            <div class="col-lg-12">
	                <h1 class="page-header">{{ $title = trans('roles.rolcreate_title') }}</h1>
	                <ol class="breadcrumb">
	                    <li>
	                        <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	                    </li>
	                    <li>
	                        <i class="fa fa-users"></i>  <a href="{{ route('admin.roles.index') }}">{{ trans('roles.rol_title') }}</a>
	                    </li>
	                     <li class="active">
    	                    <i class="fa fa-file-o"></i> {{ $title }}
    	                </li>
	                </ol>
	            </div>
	        </div><!-- /.row -->

	        <div class="row">
	            <div class="col-xs-12">

	            	@include('partials.messages')

	            	{!! Form::open(['route' => 'admin.roles.store', 'method' => 'POST', 'class' => 'form-horizontal']) !!}

						@include('admin.roles.partials.fields')

            		 	<p class="text-right">
            		 		<button type="submit" class="btn btn-primary">Agregar</button>
            		 	</p>

	            	{!! Form::close() !!}

	            </div>
	        </div><!-- /.row -->

	    </div><!-- /.container-fluid -->

	</div><!-- /#page-wrapper -->

@endsection