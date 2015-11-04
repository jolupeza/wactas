<div class="panel-heading">
	<div class="panel-title">Lista de Emails</div>
</div><!-- end panel-heading -->
<div class="panel-body">
	<table class="table table-bordered table-hover table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="js-table-email">
        	@if (count($employee->emails))
	            @foreach ($employee->emails as $email)
	            	<tr data-id="{{ $email->id }}" class="item">
	        		    <td>{{ $email->id }}</td>
	        		    <td>{{ $email->email }}</td>
	        		    <td align="center">
	        		        <a href="#" class="btn btn-danger js-delete" data-titles="Email,Emails" data-total="false">x</a>
	        		    </td>
	        		</tr>
	            @endforeach
	        @else
	        	<tr class="js-no-email">
	        		<td colspan="3"><span class="text-info">No hay emails</span></td>
	        	</tr>
            @endif
        </tbody>
    </table>

	{!! Form::open(['id' => 'js-form-add-email', 'route' => 'admin.employee.add_email', 'method' => 'POST', 'class' => 'Form Form--hide']) !!}

		{{-- Email --}}
		<div class="form-group">

			{!! Form::label('email', 'Email') !!}
			{!! Form::email('email', null, ['class' => 'form-control', 'required' => 'required']) !!}

		</div><!-- end form-group -->

		<input type="hidden" name="employee_id" value="{{ isset($employee) ? $employee->id : 0 }}" />

		<p class="text-right"><button type="submit" class="btn btn-primary" id="js-add-email">Agregar</button></p>

	{!! Form::close() !!}

    <p class="text-right"><a href="#" class="btn btn-success js-display-form" id="js-addemail" data-type="email" data-icon="fa-envelope-o" data-form="js-form-add-email" data-title="Email">Agregar Email <i class="fa fa-envelope-o"></i></a></p>
</div><!-- end panel-body -->