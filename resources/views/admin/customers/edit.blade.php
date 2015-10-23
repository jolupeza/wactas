@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	        <!-- Page Heading -->
	        <div class="row">
	            <div class="col-lg-12">
	                <h1 class="page-header">{{ $title = trans('customers.customeredit_title') }} {{ $customer->name }} <span class="pull-right"><a href="{{ route('admin.customers.create') }}" class="btn btn-success">Agregar Cliente</a></span></h1>
	                <ol class="breadcrumb">
	                    <li>
	                        <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	                    </li>
	                    <li>
	                        <i class="fa fa-university"></i>  <a href="{{ route('admin.customers.index') }}">{{ trans('customers.customer_title') }}</a>
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

	            	{!! Form::model($customer, ['route' => ['admin.customers.update', $customer->id], 'method' => 'PUT', 'class' => 'form-horizontal']) !!}

						@include('admin.customers.partials.fields')

            		 	<p class="text-right">
            		 		<button type="submit" class="btn btn-primary">Editar</button>
            		 	</p>

	            	{!! Form::close() !!}

	            </div>
	        </div><!-- /.row -->

	    </div><!-- /.container-fluid -->

	</div><!-- /#page-wrapper -->

@endsection