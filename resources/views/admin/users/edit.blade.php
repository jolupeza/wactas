@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	        <!-- Page Heading -->
	        <div class="row">
	            <div class="col-lg-12">
	                <h1 class="page-header">{{ $title = trans('users.useredit_title') }} {{ $user->name }} <span class="pull-right"><a href="{{ route('admin.users.create') }}" class="btn btn-success">Agregar Usuario</a></span></h1>
	                <ol class="breadcrumb">
	                    <li>
	                        <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	                    </li>
	                    <li>
	                        <i class="fa fa-users"></i>  <a href="{{ route('admin.users.index') }}">{{ trans('users.user_title') }}</a>
	                    </li>
	                     <li class="active">
    	                    <i class="fa fa-pencil-square-o"></i> {{ $title }}
    	                </li>
	                </ol>
	            </div>
	        </div><!-- /.row -->

	        <div class="row">
	            <div class="col-xs-12">

	            	@include('partials.messages')

	            	@include('partials.flash')

	            	{!! Form::model($user, ['route' => ['admin.users.update', $user->id], 'method' => 'PUT', 'class' => 'form-horizontal js-frm']) !!}

						@include('admin.users.partials.fields')

            		 	<p class="text-right">
            		 		<button type="submit" class="btn btn-primary">Editar</button>
            		 	</p>

	            	{!! Form::close() !!}

	            </div>
	        </div><!-- /.row -->

	    </div><!-- /.container-fluid -->

	</div><!-- /#page-wrapper -->

@endsection