<div class="panel-heading">
	<div class="panel-title">Integrantes</div>
</div><!-- end panel-heading -->
<div class="panel-body">
	<p class="text-right"><a href="#" class="btn btn-success" id="js-addemployee" data-toggle="modal" data-target="#md-addEmployee">Añadir <i class="fa fa-user"></i></a></p>

	<table class="table table-bordered table-hover table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
            </tr>
        </thead>
        <tbody id="js-table-members">
        	@if (count($employees))
        		@foreach ($employees as $employee)
        			<tr class="{{ ($employee->master) ? 'success' : '' }}">
	        		    <td align="center">{!! Form::checkbox('employee_id[]', $employee->id, in_array($employee->id, $dataEmployees) ? true : false) !!}</td>
	        		    <td>{{ $employee->name }}</td>
	        		</tr>
        		@endforeach
        	@else
	        	<tr>
	        		<td colspan="2"><span class="text-info">No hay integrantes</span></td>
	        	</tr>
            @endif
        </tbody>
    </table>

    <p><span class="label label-success">Watson</span></p>
</div><!-- end panel-body -->