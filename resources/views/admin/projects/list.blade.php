@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	    	<div class="container-fluid">

	    	    <!-- Page Heading -->
	    	    <div class="row">
	    	        <div class="col-lg-12">
	    	            <h1 class="page-header">{{ $title = trans('projects.project_title') }}</h1>
	    	            <ol class="breadcrumb">
	    	                <li>
	    	                    <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	    	                </li>
	    	                <li class="active">
	    	                    <i class="fa fa-suitcase"></i> {{ $title }}
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
	    	        <div class="col-xs-12">
	    	            <div class="table-responsive">
	    	            	<div class="row">
	    	            		<div class="col-md-4">
	    	            			<p><a href="{{ route('admin.projects.create') }}" class="btn btn-success">Agregar Proyecto</a></p>
	    	            			<p id="js-total">Hay {{ $projects->total() }} proyectos</p>
	    	            		</div>
	    	            		<div class="col-md-8">
			            			{!! Form::open(['route' => 'admin.projects.index', 'method' => 'GET', 'class' => 'form-inline pull-right']) !!}

		    	            			{{-- <div class="form-group">
											{!! Form::text('name', $name, ['class' => 'form-control', 'placeholder' => 'Nombre' ]) !!}
										</div> --}}

										<?php $options = [
												'' => 'Filtrar por Tipo',
												'DIG' => 'Digital',
												'CRE' => 'Creativo'
											];
										?>

			            				<div class="form-group">
			            					{!! Form::select('typeProject', $options, $type, ['class' => 'form-control']) !!}
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
	    	                            <th>Tipo</th>
	    	                            <th>Estado</th>
	    	                            <th>Fecha</th>
	    	                            <th>Acciones</th>
	    	                        </tr>
	    	                    </thead>
	    	                    <tbody>
	    	                    	@if (count($projects))
		    	                        @foreach($projects as $project)
		    	                        	@include('admin.projects.partials.item')
		    	                        @endforeach
		    	                    @else
		    	                    	<tr>
		    	                    		<td colspan="6"><span class="text-info">No se encontró registros</span></td>
		    	                    	</tr>
	    	                        @endif
	    	                    </tbody>
	    	                </table>
	    	            </div>

						{!! $projects->appends(['typeProject' => $type])->render() !!}

	    	        </div>
	    	    </div><!-- /.row -->

	    	</div><!-- /.container-fluid -->

	    </div><!-- /.container-fluid -->

	</div>
	<!-- /#page-wrapper -->

	{!! Form::open(['id' => 'form-delete', 'route' => ['admin.projects.destroy', ':id'], 'method' => 'DELETE']) !!}
	{!! Form::close() !!}

@endsection