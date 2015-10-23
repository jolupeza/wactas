<tr data-id="{{ $role->id }}" class="item">
    <td>{{ $role->id }}</td>
    <td>{{ $role->role }}</td>
    <td>{{ $role->description }}</td>
    <td align="center">
    	<span {!! Html::classes(['label', 'label-success' => $role->status, 'label-danger' => !$role->status ]) !!}>{{ trans('roles.status.' . $role->status) }}</span>
   	</td>
    <td align="center">
    	<a href="{{ route('admin.roles.edit', $role) }}" class="btn btn-success">Editar</a>
        <a href="#" class="btn btn-danger js-delete" data-titles="{{ json_encode(['Perfil', 'Perfiles']) }}">Eliminar</a>
    </td>
</tr>