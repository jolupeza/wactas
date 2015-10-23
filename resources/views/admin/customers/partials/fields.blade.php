{{-- Name --}}
<div class="form-group">

	{!! Form::label('name', 'Nombre', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-3">
		{!! Form::text('name', null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-3 -->

</div><!-- end form-group -->

{{-- Address --}}
<div class="form-group">

	{!! Form::label('address', 'Dirección', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-5">
		{!! Form::text('address', null, ['class' => 'form-control']) !!}
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