@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	    	<div class="container-fluid">

	    	    <!-- Page Heading -->
	    	    <div class="row">
	    	        <div class="col-lg-12">
	    	            <h1 class="page-header">{{ $title = trans('areas.area_title') }}</h1>
	    	            <ol class="breadcrumb">
	    	                <li>
	    	                    <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	    	                </li>
	    	                <li class="active">
	    	                    <i class="fa fa-clone"></i> {{ $title }}
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
	    	            	<p><a href="{{ route('admin.areas.create') }}" class="btn btn-success">Agregar Área</a></p>
	    	            	<p id="js-total">Hay {{ $areas->total() }} áreas</p>
	    	                <table class="table table-bordered table-hover table-striped">
	    	                    <thead>
	    	                        <tr>
	    	                            <th>Id</th>
	    	                            <th>Área</th>
	    	                            <th>Acciones</th>
	    	                        </tr>
	    	                    </thead>
	    	                    <tbody>
	    	                        @foreach($areas as $area)
	    	                        	@include('admin.areas.partials.item')
	    	                        @endforeach
	    	                    </tbody>
	    	                </table>
	    	            </div>

						{!! $areas->render() !!}

	    	        </div>
	    	    </div><!-- /.row -->

	    	</div>
	    	<!-- /.container-fluid -->

	    </div>
	    <!-- /.container-fluid -->

	</div>
	<!-- /#page-wrapper -->

	{!! Form::open(['id' => 'form-delete', 'route' => ['admin.areas.destroy', ':id'], 'method' => 'DELETE']) !!}
	{!! Form::close() !!}

@endsection