<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="static/css/normalize.css">
        <link rel="stylesheet" href="static/css/raxdev.css">
        <script src="static/js/libs/modernizr-2.6.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        

    <?php include('templates/globalnav.php'); ?>

    <div id="page">
        <div class="content container">
            <h1 class="thin">Public <span class="red">OpenStack</span> Cloud Providers</h1>
            <p class="lead">The upside of open sourcing <span class="red">OpenStack</span> is that it encourages <strong>innovation</strong>, <strong>competition</strong>, and <strong>choice</strong>.  That's what the future is built on.  And we think what's important is that you develop great software... anywhere.</p>
            <hr>
            <div class="centered">
                <ul class="thumbnails">
                    <li class="span3">
                        <a class="thumbnail" href="http://www.rackspace.com/" target="_blank">
                            <img src="/static/img/companies/rackspace.jpg" alt="">
                        </a>
                        <h4 class="thin">Rackspace</h4>
                    </li>
                    <li class="span3">
                        <a class="thumbnail" href="http://www.cloudscaling.com/" target="_blank">
                            <img src="/static/img/companies/cloud_scaling.jpg" alt="">
                        </a>
                        <h4 class="thin">Cloud Scaling</h4>
                    </li>
                    <li class="span3">
                        <a class="thumbnail" href="http://www.fusionio.com/" target="_blank">
                            <img src="/static/img/companies/dell.jpg" alt="">
                        </a>
                        <h4 class="thin">Dell Cloud</h4>
                    </li>
                    <li class="span3">
                        <a class="thumbnail" href="http://www.fusionio.com/" target="_blank">
                            <img src="/static/img/companies/fusionio.jpg" alt="">
                        </a>
                        <h4 class="thin">Fusion.io</h4>
                    </li>
                    <li class="span3">
                        <a class="thumbnail" href="http://www.mirantis.com/" target="_blank">
                            <img src="/static/img/companies/mirantis.jpg" alt="">
                        </a>
                        <h4 class="thin">Mirantis</h4>
                    </li>
                    <li class="span3">
                        <a class="thumbnail" href="http://swiftstack.com/" target="_blank">
                            <img src="/static/img/companies/swiftstack.jpg" alt="">
                        </a>
                        <h4 class="thin">Swift Stack</h4>
                    </li>
                    <li class="span3">
                        <a class="thumbnail" href="#">
                            <img src="http://placehold.it/270x187" alt="">
                        </a>
                        <h4 class="thin">Provider Name</h4>
                    </li>
                    <li class="span3">
                        <a class="thumbnail" href="#">
                            <img src="http://placehold.it/270x187" alt="">
                        </a>
                        <h4 class="thin">Provider Name</h4>
                    </li>
                    
                </ul>

                <hr>
            </div>

            <div class="content container">
                <div  id="signup-form">
                    <form class="form-inline">
                        <fieldset>
                            <legend>
                                <h1 class="thin">Rackspace wants you to play on metal for free</h1>
                                <p class="thin">We're going to start providing fee access to cloud servers for developers to encourage you to try <span class="red">OpenStack</span>.  Enter your email address below and we'll send you an invite link as soon as we can. No spam, promise.</p>
                            </legend>
                            <div class="control-group  big-form-controls">
                                <div class="controls">
                                    <input type="text" class="input-xxlarge" id="input01" placeholder="foo@bar.com"> 
                                    <button class="btn" type="submit"><i class="icon-envelope"></i> Send me a link</button>
                                </div>
                            </div>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>




        <?php include('templates/footer.php'); ?>
    </div>
    


    </body>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="static/js/libs/jquery-1.9.1.min.js"><\/script>')</script>

       <script src="static/js/libs/bootstrap.min.js"></script>
       <script src="static/js/plugins.js"></script>
        <script src="static/js/main.js"></script>


</html>
