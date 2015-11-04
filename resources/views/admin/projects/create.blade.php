@extends('layout')

@section('content')

	<div id="page-wrapper">

	    <div class="container-fluid">

	        <!-- Page Heading -->
	        <div class="row">
	            <div class="col-lg-12">
	                <h1 class="page-header">{{ $title = trans('projects.projectcreate_title') }}</h1>
	                <ol class="breadcrumb">
	                    <li>
	                        <i class="fa fa-dashboard"></i>  <a href="{{ route('admin') }}">Dashboard</a>
	                    </li>
	                    <li>
	                        <i class="fa fa-suitcase"></i>  <a href="{{ route('admin.projects.index') }}">{{ trans('projects.project_title') }}</a>
	                    </li>
	                     <li class="active">
    	                    <i class="fa fa-file-o"></i> {{ $title }}
    	                </li>
	                </ol>
	            </div>
	        </div><!-- /.row -->

        	{!! Form::open(['route' => 'admin.projects.store', 'method' => 'POST', 'class' => 'form-horizontal']) !!}
		        <div class="row">
		            <div class="col-md-7">

		            	@include('partials.messages')


							@include('admin.projects.partials.fields')

	            		 	<p class="text-right">
	            		 		<button type="submit" class="btn btn-primary">Agregar</button>
	            		 	</p>


		            </div><!-- end col-md-7 -->
		            <div class="col-md-5">
						<div class="panel panel-info">
							@include('admin.projects.partials.members')
						</div><!-- end panel -->
		            </div><!-- end col-md-5 -->
		        </div><!-- /.row -->
        	{!! Form::close() !!}

	    </div><!-- /.container-fluid -->

	</div><!-- /#page-wrapper -->

	<!-- Modal Add Employee -->
	<div class="modal fade Modal" id="md-addEmployee" tabindex="-1" role="dialog" aria-labelledby="md-addEmployeeLabel">
		<div class="modal-dialog Modal-dialog" role="document">
			<div class="modal-content Modal-content">
				{!! Form::open(['id' => 'js-form-add-employee', 'route' => 'admin.employee.add', 'method' => 'POST', 'class' => 'form-horizontal Form']) !!}
					<div class="modal-header Modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title Modal-title" id="md-addEmployeeLabel">Agregar Integrante</h4>
					</div>
					<div class="modal-body Modal-body">

						{{-- Name --}}
						<div class="form-group">

							{!! Form::label('name', 'Nombre', ['class' => 'col-sm-2 control-label']) !!}
						    <div class="col-sm-10">
								{!! Form::text('name', null, ['class' => 'form-control', 'required' => 'required']) !!}
						    </div><!-- end col-sm-10 -->

						</div><!-- end form-group -->

						{{-- Job --}}
						<div class="form-group">

						    {!! Form::label('job', 'Cargo', ['class' => 'col-sm-2 control-label']) !!}
						    <div class="col-sm-10">
						        {!! Form::text('job', null, ['class' => 'form-control', 'required' => 'required']) !!}
						    </div><!-- end col-sm-10 -->

						</div><!-- end form-group -->

						{{-- Email --}}
						<div class="form-group">

							{!! Form::label('email', 'Email', ['class' => 'col-sm-2 control-label']) !!}
						    <div class="col-sm-10">
								{!! Form::email('email', null, ['class' => 'form-control', 'required' => 'required']) !!}
						    </div><!-- end col-sm-10 -->

						</div><!-- end form-group -->

						{{-- Customer
						<div class="form-group">

						    {!! Form::label('type', 'Tipo', ['class' => 'col-sm-2 control-label']) !!}
						    <div class="col-sm-10">
						        <div class="radio">
						            <label>
						                Digital {!! Form::radio('type', 'DIG') !!}
						            </label>

						            <label>
						                Creativo {!! Form::radio('type', 'CRE') !!}
						            </label>
						        </div>
						    </div><!-- end col-sm-10 -->

						</div><!-- end form-group -->
						--}}

						<input type="hidden" name="customer_id" value="{{ Session::get('customer_id') }}" />

					</div>
					<div class="modal-footer Modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
						<button type="submit" class="btn btn-primary">Agregar</button>
					</div>
				{!! Form::close() !!}
			</div>
		</div>
	</div>

@endsection