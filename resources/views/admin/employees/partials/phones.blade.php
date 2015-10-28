<div class="panel-heading">
	<div class="panel-title">Lista de Teléfonos</div>
</div><!-- end panel-heading -->
<div class="panel-body">
	<table class="table table-bordered table-hover table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Teléfono</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="js-table-phone">
        	@if (count($employee->phones))
	            @foreach ($employee->phones as $phone)
	            	<tr data-id="{{ $phone->id }}" class="item">
	        		    <td>{{ $phone->id }}</td>
	        		    <td>{{ $phone->phone }}</td>
	        		    <td align="center">
	        		        <a href="#" class="btn btn-danger js-delete" data-titles="Teléfono,Teléfonos" data-total="false">x</a>
	        		    </td>
	        		</tr>
	            @endforeach
	        @else
	        	<tr class="js-no-phone">
	        		<td colspan="3"><span class="text-info">No hay teléfonos</span></td>
	        	</tr>
            @endif
        </tbody>
    </table>

	{!! Form::open(['id' => 'js-form-add-phone', 'route' => 'admin.employee.add_phone', 'method' => 'POST', 'class' => 'Form Form--hide']) !!}

		{{-- Email --}}
		<div class="form-group">

			{!! Form::label('phone', 'Teléfono') !!}
			{!! Form::text('phone', null, ['class' => 'form-control', 'required' => 'required']) !!}

		</div><!-- end form-group -->

		<input type="hidden" name="employee_id" value="{{ isset($employee) ? $employee->id : 0 }}" />

		<p class="text-right"><button type="submit" class="btn btn-primary" id="js-add-email">Agregar</button></p>

	{!! Form::close() !!}

    <p class="text-right"><a href="#" class="btn btn-success js-display-form" id="js-addphone" data-type="phone" data-icon="fa-phone">Agregar Teléfono <i class="fa fa-phone"></i></a></p>
</div><!-- end panel-body -->