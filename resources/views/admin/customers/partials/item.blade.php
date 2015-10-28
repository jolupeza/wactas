<tr data-id="{{ $customer->id }}" class="item">
    <td>{{ $customer->id }}</td>
    <td>{{ $customer->name }}</td>
    <td align="center">{{ $customer->code }}</td>
    <td>{{ $customer->address }}</td>
    <td align="center">
    	<span {!! Html::classes(['label', 'label-success' => $customer->status, 'label-danger' => !$customer->status ]) !!}>{{ trans('customers.status.' . $customer->status) }}</span>
   	</td>
    <td align="center">
    	<a href="{{ route('admin.customers.edit', $customer) }}" class="btn btn-success">Editar</a>
        <a href="#" class="btn btn-danger js-delete" data-titles="{{ json_encode(['Cliente', 'Clientes']) }}" data-total="true">Eliminar</a>
    </td>
</tr>