<tr data-id="{{ $user->id }}" class="item">
    <td>{{ $user->id }}</td>
    <td>{{ $user->name }}</td>
    <td>{{ $user->email }}</td>
    <td align="center">
    	<span {!! Html::classes(['label', 'label-success' => $user->status, 'label-danger' => !$user->status ]) !!}>{{ trans('users.status.' . $user->status) }}</span>
   	</td>
    <td>{{ $user->role->role }}</td>
    <td align="center">
    	<a href="{{ route('admin.users.edit', $user) }}" class="btn btn-success">Editar</a>
        <a href="#" class="btn btn-danger js-delete" data-titles="{{ json_encode(['Usuario', 'Usuarios']) }}">Eliminar</a>
    </td>
</tr>