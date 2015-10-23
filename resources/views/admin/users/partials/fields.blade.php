{{-- Name --}}
<div class="form-group">

	{!! Form::label('name', 'Nombre Completo', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
		{!! Form::text('name', null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Email --}}
<div class="form-group">

	{!! Form::label('email', 'Email', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
		{!! Form::text('email', null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Password --}}
<div class="form-group">

	{!! Form::label('password', 'Contraseña', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
		{!! Form::password('password',['class' => 'form-control']) !!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Re-Password --}}
<div class="form-group">

	{!! Form::label('re-password', 'Repetir Contraseña', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
		{!! Form::password('re-password',['class' => 'form-control']) !!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Roles --}}
<div class="form-group">

	<?php $options[''] = 'Seleccione Perfil'; ?>
	@foreach ($roles as $role)
		<?php $options[$role->id] = $role->role; ?>
	@endforeach

	{!! Form::label('role_id', 'Perfil', ['class' => 'col-sm-2 control-label']) !!}
	<div class="col-sm-3">
		{!! Form::select('role_id', $options, null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Status --}}
<div class="form-group">

	{!! Form::label('status', 'Estado', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
    	<div class="checkbox">
    		<label>
				{!! Form::checkbox('status', 1, false) !!}
			</label>
    	</div>
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Avatar --}}