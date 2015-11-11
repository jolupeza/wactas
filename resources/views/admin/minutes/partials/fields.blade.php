{{-- Name --}}
<div class="form-group">

	{!! Form::label('name', 'Nombre', ['class' => 'col-sm-3 control-label']) !!}
    <div class="col-sm-9">
		{!! Form::text('name', null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-9 col-md-5 -->

</div><!-- end form-group -->

{{-- Created_at --}}
<div class="form-group Form-group Form-group--date">
    {!! Form::label('meeting_at', 'Fecha', ['class' => 'col-sm-3 control-label']) !!}
    <div class="col-sm-4">
        <div class="input-group date dtp-date">
            <?php
               /*$birthday = '';
               if ($subs->birthday != '0000-00-00') {
                   $birthday = date('d-m-Y', strtotime($subs->birthday));
               }*/
            ?>

            {!! Form::text('meeting_at', null, ['class' => 'form-control', 'id' => 'meeting_at', 'placeholder' => 'DD-MM-YYYY HH:mm']) !!}
            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
        </div>
    </div><!-- end col-sm-4 -->
</div><!-- end form-group -->

{{-- Site --}}
<div class="form-group">

    {!! Form::label('site', 'Lugar de reunión', ['class' => 'col-sm-3 control-label']) !!}
    <div class="col-sm-9">
        {!! Form::text('site', null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-9 col-md-5 -->

</div><!-- end form-group -->

{{-- Office --}}
<div class="form-group">

    {!! Form::label('office', 'Oficina', ['class' => 'col-sm-3 control-label']) !!}
    <div class="col-sm-9">
        {!! Form::text('office', null, ['class' => 'form-control']) !!}
    </div><!-- end col-sm-9 col-md-5 -->

</div><!-- end form-group -->

{{-- Objectives --}}
<div class="form-group">

    {!! Form::label('objectives', 'Objetivos', ['class' => 'col-sm-3 control-label']) !!}
    <div class="col-sm-9">
        {!! Form::textarea('objectives', null, ['class' => 'ckeditor', 'rows' => 10]) !!}
    </div><!-- end col-sm-9 col-md-5 -->

</div><!-- end form-group -->