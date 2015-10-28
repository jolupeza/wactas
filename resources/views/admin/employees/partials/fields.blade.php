{{-- Name --}}
<div class="form-group">

	{!! Form::label('name', 'Nombre', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-10 col-md-5">
		{!! Form::text('name', null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-10 col-md-5 -->

</div><!-- end form-group -->

{{-- Job --}}
<div class="form-group">

    {!! Form::label('job', 'Cargo', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-10 col-md-5">
        {!! Form::text('job', null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-10 col-md-5 -->

</div><!-- end form-group -->

{{-- Status --}}
<div class="form-group">

	{!! Form::label('status', 'Estado', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-10 col-md-5">
    	<div class="checkbox">
    		<label>
				{!! Form::checkbox('status', 1, false) !!}
			</label>
    	</div>
    </div><!-- end col-sm-10 col-md-5 -->

</div><!-- end form-group -->

{{-- Customer --}}
<div class="form-group">

    <?php $options[''] = 'Seleccione Cliente'; ?>
    @foreach ($customers as $customer)
        <?php $options[$customer->id] = $customer->name; ?>
    @endforeach

    {!! Form::label('customer_id', 'Cliente', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-10 col-md-5">
        {!! Form::select('customer_id', $options, null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-10 col-md-5 -->

</div><!-- end form-group -->