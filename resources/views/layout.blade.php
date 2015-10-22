<!DOCTYPE html>
<html lang="en">
	<head>
	    <meta charset="utf-8" />
	    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	    <meta name="viewport" content="width=device-width, initial-scale=1" />
	    <meta name="description" content="" />
	    <meta name="author" content="" />

	    <title>Sistema de Actas by Agencia Watson</title>

	    <!-- Load CSS -->
	    {!! Html::style('assets/css/backend.css') !!}

	    <!-- Custom Fonts -->
	    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />

	    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
	</head>
	<body>
	    <div id="wrapper">
	        <!-- Navigation -->
	        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
	            <!-- Brand and toggle get grouped for better mobile display -->
	            <div class="navbar-header">
	                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
	                    <span class="sr-only">Toggle navigation</span>
	                    <span class="icon-bar"></span>
	                    <span class="icon-bar"></span>
	                    <span class="icon-bar"></span>
	                </button>
	                <a class="navbar-brand" href="{{ url('admin') }}">Agencia Watson</a>
	            </div>
	            <!-- Top Menu Items -->
	            <ul class="nav navbar-right top-nav">
	                <li class="dropdown">
	                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-envelope"></i> <b class="caret"></b></a>
	                    <ul class="dropdown-menu message-dropdown">
	                        <li class="message-preview">
	                            <a href="#">
	                                <div class="media">
	                                    <span class="pull-left">
	                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
	                                    </span>
	                                    <div class="media-body">
	                                        <h5 class="media-heading"><strong>John Smith</strong>
	                                        </h5>
	                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
	                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
	                                    </div>
	                                </div>
	                            </a>
	                        </li>
	                        <li class="message-preview">
	                            <a href="#">
	                                <div class="media">
	                                    <span class="pull-left">
	                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
	                                    </span>
	                                    <div class="media-body">
	                                        <h5 class="media-heading"><strong>John Smith</strong>
	                                        </h5>
	                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
	                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
	                                    </div>
	                                </div>
	                            </a>
	                        </li>
	                        <li class="message-preview">
	                            <a href="#">
	                                <div class="media">
	                                    <span class="pull-left">
	                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
	                                    </span>
	                                    <div class="media-body">
	                                        <h5 class="media-heading"><strong>John Smith</strong>
	                                        </h5>
	                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
	                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
	                                    </div>
	                                </div>
	                            </a>
	                        </li>
	                        <li class="message-footer">
	                            <a href="#">Read All New Messages</a>
	                        </li>
	                    </ul>
	                </li>
	                <li class="dropdown">
	                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> <b class="caret"></b></a>
	                    <ul class="dropdown-menu alert-dropdown">
	                        <li>
	                            <a href="#">Alert Name <span class="label label-default">Alert Badge</span></a>
	                        </li>
	                        <li>
	                            <a href="#">Alert Name <span class="label label-primary">Alert Badge</span></a>
	                        </li>
	                        <li>
	                            <a href="#">Alert Name <span class="label label-success">Alert Badge</span></a>
	                        </li>
	                        <li>
	                            <a href="#">Alert Name <span class="label label-info">Alert Badge</span></a>
	                        </li>
	                        <li>
	                            <a href="#">Alert Name <span class="label label-warning">Alert Badge</span></a>
	                        </li>
	                        <li>
	                            <a href="#">Alert Name <span class="label label-danger">Alert Badge</span></a>
	                        </li>
	                        <li class="divider"></li>
	                        <li>
	                            <a href="#">View All</a>
	                        </li>
	                    </ul>
	                </li>
	                <li class="dropdown">
	                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> John Smith <b class="caret"></b></a>
	                    <ul class="dropdown-menu">
	                        <li>
	                            <a href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
	                        </li>
	                        <li>
	                            <a href="#"><i class="fa fa-fw fa-envelope"></i> Inbox</a>
	                        </li>
	                        <li>
	                            <a href="#"><i class="fa fa-fw fa-gear"></i> Settings</a>
	                        </li>
	                        <li class="divider"></li>
	                        <li>
	                            <a href="{{ url('/auth/logout') }}"><i class="fa fa-fw fa-power-off"></i> Cerrar sesión</a>
	                        </li>
	                    </ul>
	                </li>
	            </ul>
	            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
	            <div class="collapse navbar-collapse navbar-ex1-collapse">

					{{-- {!! Html::menu('wactas.menu') !!} --}}

	            </div>
	            <!-- /.navbar-collapse -->
	        </nav>

	        @yield('content')
	    </div><!-- /#wrapper -->

	    {{-- Modal Alert
	    <div class="modal fade Modal" id="js-Alert" tabindex="-1" role="dialog" aria-labelledby="js-AlertLabel">
			<div class="modal-dialog Modal-dialog" role="document">
				<div class="modal-content Modal-content">
					<div class="modal-header Modal-header">
						<button type="button" class="close Modal-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title Modal-title" id="js-AlertLabel"></h4>
					</div>
					<div class="modal-body Modal-body">
						<figure class="Modal-icon"><img src="" /></figure>
						<p class="Modal-message"></p>
					</div>
				</div>
			</div>
	    </div>--}}

	    {!! Html::script('assets/backend/js/main.js') !!}
	</body>
</html>
