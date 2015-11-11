<tr data-id="{{ $project->id }}" class="item">
    <td>{{ $project->id }}</td>
    <td>{{ $project->name }}</td>
    <td align="center">{{ $project->type }}</td>
    <td align="center">
    	<span {!! Html::classes(['label', 'label-success' => $project->status, 'label-danger' => !$project->status ]) !!}>{{ trans('projects.status.' . $project->status) }}</span>
   	</td>
    <td>{{ $project->created_at->format('d/m/Y')}}</td>
    <td align="center">
    	<a href="{{ route('admin.projects.edit', $project) }}" class="btn btn-success">Editar</a>
        <a href="#" class="btn btn-danger js-delete" data-titles="Proyecto,Proyectos" data-total="true">Eliminar</a>
        <a href="{{ route('admin.minutes.index', $project->id)}}" class="btn btn-info">Actas</a>
    </td>
</tr>