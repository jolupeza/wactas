{{-- Name --}}
<div class="form-group">

	{!! Form::label('name', 'Nombre Completo', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
		{!! Form::text('name', null, ['class' => 'form-control', 'required' => 'required']) !!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Email --}}
<div class="form-group">

	{!! Form::label('email', 'Email', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
		{!! Form::email('email', null, ['class' => 'form-control', 'required' => 'required']) !!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Job --}}
<div class="form-group">

    {!! Form::label('job', 'Cargo', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
        {!! Form::text('job', null, ['class' => 'form-control', 'required' => 'required']) !!}
    </div><!-- end col-sm-10 col-md-5 -->

</div><!-- end form-group -->

{{-- Password --}}
<div class="form-group">

	{!! Form::label('password', 'Contraseña', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
    	<?php
    		$attr = [
				'class'                    => 'form-control',
				'data-fv-stringlength'     => 'true',
				'data-fv-stringlength-min' => '6',
			];

			if (!isset($user->id)) {
				$attr['required'] = 'required';
			}
		?>
		{!! Form::password('password', $attr)
		!!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Re-Password --}}
<div class="form-group">

	{!! Form::label('re-password', 'Repetir Contraseña', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
    	<?php
    		$attr = [
				'class'                    => 'form-control',
				'data-fv-stringlength'     => 'true',
				'data-fv-stringlength-min' => '6',
				'data-fv-identical'        => 'true',
				'data-fv-identical-field'  => 'password'
			];

			if (!isset($user->id)) {
				$attr['required'] = 'required';
			}
    	?>
		{!! Form::password('re-password', $attr) !!}
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
		{!! Form::select('role_id', $options, null, ['class' => 'form-control', 'required' => 'required']) !!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Area --}}
<div class="form-group">

	<?php $options = array(); $options[''] = 'Seleccione Área'; ?>
	@foreach ($areas as $area)
		<?php $options[$area->id] = $area->name; ?>
	@endforeach

	{!! Form::label('area_id', 'Área', ['class' => 'col-sm-2 control-label']) !!}
	<div class="col-sm-3">
		{!! Form::select('area_id', $options, null, ['class' => 'form-control', 'required' => 'required']) !!}
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