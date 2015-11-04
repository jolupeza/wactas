{{-- Name --}}
<div class="form-group">

	{!! Form::label('name', 'Nombre', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-10 col-md-5">
		{!! Form::text('name', null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-10 col-md-5 -->

</div><!-- end form-group -->

{{-- Description --}}
<div class="form-group">

    {!! Form::label('description', 'Descripción', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-10">
        {!! Form::textarea('description', null, ['class' => 'form-control', 'rows' => 5]) !!}
    </div><!-- end col-sm-10 col-md-5 -->

</div><!-- end form-group -->

{{-- Objectives --}}
<div class="form-group">

    {!! Form::label('objectives', 'Objectivos', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-10">
        {!! Form::textarea('objectives', null, ['class' => 'ckeditor', 'rows' => 10]) !!}
    </div><!-- end col-sm-10 col-md-5 -->

</div><!-- end form-group -->

{{-- Type --}}
<div class="form-group">

    {!! Form::label('type', 'Tipo', ['class' => 'col-sm-2 control-label']) !!}
    <div class="col-sm-10 col-md-5">
        <div class="radio">
            <label>
                Digital {!! Form::radio('type', 'DIG') !!}
            </label>

            <label>
                Creativo {!! Form::radio('type', 'CRE') !!}
            </label>
        </div>
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