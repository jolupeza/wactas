<tr data-id="{{ $minute->id }}" class="item">
    <td>{{ $minute->id }}</td>
    <td>{{ $minute->name }}</td>
    <td>{{ $minute->code }}</td>
    <td>{{ $minute->created_at->format('d/m/Y')}}</td>
    <td>{{ $minute->next_meeting->format('d/m/Y')}}</td>
    <td align="center">
    	<a href="{{ route('admin.minutes.edit', $minute->id) }}" class="btn btn-success">Editar</a>
        <a href="#" class="btn btn-danger js-delete" data-titles="Acta,Actas" data-total="true">Eliminar</a>
    </td>
</tr>