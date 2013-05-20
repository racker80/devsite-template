    <?php include('templates/header.php'); ?>
    <?php include('templates/globalnav.php'); ?>


         <div class="hero-unit openstack-hero">
            <div class="container">
                <div class="row">
                    <div class="span6 openstack-hero-content">
                        <h1 class="lead">
                            Own your metal.
                        </h1>
                        <h2 class="blurb">
                            Got an insatiable urge to hack your infrastructure?
                        </h2>
                        <hr>
                        <h2 class="blurb red" style="margin:0; text-align:center;">
                            We get you.
                        </h2>
                        <hr>
                        <p class="lead">
                            Rackspace has been hacking metal since 1998 and then something or another about the future of computing.
                        </p>
                    </div>
                    <div class="span6">
                        <iframe src="http://player.vimeo.com/video/41807514?byline=0&amp;portrait=0&amp;color=ff9933" width="480" height="340" frameborder="0">&amp;amp;nbsp;</iframe>
                    </div>
                </div>
            </div>
        </div>   

    <div id="page">


        <div class="container">
            <div class="row section">
                <div class="span4">
                    
                    <h2><img class="bs-icon" src="/static/img/glyphicons_232_cloud.png"> Get Started with Openstack</h2>
                    <p>Something, something about Alamo and ISOs and ponies.  Then something else about how awesomely easy it is to install.</p>
                    <iframe style="margin: 20px 0 0 30px;" src="http://player.vimeo.com/video/41807514?byline=0&amp;portrait=0&amp;color=ff9933" width="250" height="180" frameborder="0">&amp;amp;nbsp;</iframe>
                </div>
                <div class="bigbs span8">
                    <p>To install the OpenCenter server component, execute the following commands on the server node:</p>
                    <pre>curl -L "http://sh.opencenter.rackspace.com/install.sh" | bash -s server</pre>
                    <p>Next, install the user interface component on the server node:</p>
                    <pre>curl -L "http://sh.opencenter.rackspace.com/install.sh" | bash -s dashboard &lt;OPENCENTER_SERVER_IP&gt;</pre>
                    <p>Once the server installation is complete, install the agent on the nodes that OpenCenter will manage. Execute the following commands on each agent node:</p>
                    <pre>curl -L "http://sh.opencenter.rackspace.com/install.sh" | bash -s agent &lt;OPENCENTER_SERVER_IP&gt;</pre>
                </div>
            </div>
        </div>




        <div class="container">
            <div class="row section">
                <div class="span8">
                    <script src="https://gist.github.com/kordless/5104837.js"></script>
                </div>


                <div class="span4">
                    
                    <h2><img class="bs-icon" src="/static/img/glyphicons_381_github.png"> Hack Some Code</h2>
                    <p>You'll be starting the dev cluster before lunch and the new production system will go live before tea time.  And look, it's code in a Gist!</p>
                    <iframe style="margin: 20px 0 0 30px;" src="http://player.vimeo.com/video/41807514?byline=0&amp;portrait=0&amp;color=ff9933" width="250" height="180" frameborder="0">&amp;amp;nbsp;</iframe>
                </div>
            </div>
        </div>

        <div class="container">
           <blockquote>
            <br>
            <h2>
                "No joke. I was launching my own instances with code in 5 minutes."
            </h2>
            <small>
                Some Important Dude, Github
            </small>
           </blockquote> 
          <hr>
        </div>
  
    </div><!-- page -->

    <?php include('templates/footer.php'); ?>
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="/static/js/libs/jquery-1.9.1.min.js"><\/script>')</script>

    <script src="/static/js/libs/bootstrap.min.js"></script>
    <script src="/static/js/plugins.js"></script>
    <script src="/static/js/main.js"></script>

    </body>
</html>