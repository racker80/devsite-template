        <div id="home-repos" class="container">
            <header class="section-header">
                <a href="" class="pull-right">view all on github</a>
                <h2 class="section-title lite">Open Cloud Community Projects</h2>
            </header>
            
            <div class="row-fluid">
                <div class="span10">
                    <div class="tab-content">
                        
                        <?php include('home-repos-featured.php'); ?>
                        <?php include('home-repos-openstack.php'); ?>
                        <?php include('home-repos-rackspace.php'); ?>
                        <?php include('home-repos-other.php'); ?>
                    </div>


                    
                </div><!-- span 10 -->

                <div class="span2">
                    <br><br>
                    <h5>Browse By</h5>
                    <div class="tabbable tabs-right">
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#home-repos-featured" data-toggle="tab">Featured</a></li>
                            <li class=""><a href="#home-repos-openstack" data-toggle="tab">OpenStack</a></li>
                            <li class=""><a href="#home-repos-rackspace" data-toggle="tab">Rackspace</a></li>
                            <li class=""><a href="#home-repos-other" data-toggle="tab">Other</a></li>
                        </ul>

                    </div><!-- tabbable -->
                </div><!-- span2 -->

            </div><!-- row -->
        </div> <!-- home-repos -->


