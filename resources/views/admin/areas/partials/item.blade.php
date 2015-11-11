<tr data-id="{{ $area->id }}" class="item">
    <td>{{ $area->id }}</td>
    <td>{{ $area->name }}</td>
    <td align="center">
    	<a href="{{ route('admin.areas.edit', $area) }}" class="btn btn-success">Editar</a>
        <a href="#" class="btn btn-danger js-delete" data-titles="Área,Áreas" data-total="true">Eliminar</a>
    </td>
</tr>