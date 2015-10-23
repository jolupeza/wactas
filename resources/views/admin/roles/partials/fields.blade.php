{{-- Role --}}
<div class="form-group">

	{!! Form::label('role', 'Perfil', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
		{!! Form::text('role', null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Description --}}
<div class="form-group">

	{!! Form::label('description', 'Descripción', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-4">
		{!! Form::textarea('description', null, ['class' => 'form-control', 'rows' => 3]) !!}
    </div><!-- end col-sm-4 -->

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