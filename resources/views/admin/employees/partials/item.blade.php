<tr data-id="{{ $employee->id }}" class="item">
    <td>{{ $employee->id }}</td>
    <td>{{ $employee->name }}</td>
    <td>{{ $employee->job }}</td>
    <td>{{ $employee->customer->name }}</td>
    <td align="center">
    	<span {!! Html::classes(['label', 'label-success' => $employee->status, 'label-danger' => !$employee->status ]) !!}>{{ trans('employees.status.' . $employee->status) }}</span>
   	</td>
    <td align="center">
    	<a href="{{ route('admin.employees.edit', $employee) }}" class="btn btn-success">Editar</a>
        <a href="#" class="btn btn-danger js-delete" data-titles="Empleado,Empleados" data-total="true">Eliminar</a>
    </td>
</tr>