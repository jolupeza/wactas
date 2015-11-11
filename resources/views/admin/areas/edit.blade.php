@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	        <!-- Page Heading -->
	        <div class="row">
	            <div class="col-lg-12">
	                <h1 class="page-header">{{ $title = trans('areas.areaedit_title') }} {{ $area->name }} <span class="pull-right"><a href="{{ route('admin.areas.create') }}" class="btn btn-success">Agregar Área</a></span></h1>
	                <ol class="breadcrumb">
	                    <li>
	                        <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	                    </li>
	                    <li>
	                        <i class="fa fa-clone"></i>  <a href="{{ route('admin.areas.index') }}">{{ trans('areas.area_title') }}</a>
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

	            	{!! Form::model($area, ['route' => ['admin.areas.update', $area->id], 'method' => 'PUT', 'class' => 'form-horizontal']) !!}

						@include('admin.areas.partials.fields')

            		 	<p class="text-right">
            		 		<button type="submit" class="btn btn-primary">Editar</button>
            		 	</p>

	            	{!! Form::close() !!}

	            </div>
	        </div><!-- /.row -->

	    </div><!-- /.container-fluid -->

	</div><!-- /#page-wrapper -->

@endsection