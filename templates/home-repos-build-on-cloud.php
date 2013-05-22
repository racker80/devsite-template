<br>

                <div class="row-fluid">

                    <div class="span2">

                        <div class="tabbable tabs-left">
                            <ul class="nav nav-tabs">
                                <li class="active"><a href="#home-repos-featured" data-toggle="tab">Featured</a></li>
                                <li class=""><a href="#home-repos-rackspace" data-toggle="tab">Rackspace</a></li>
                            </ul>

                        </div><!-- tabbable -->
                      
                        <div id="community-sidebar">
                            <h4>Community Links</h4>
                            <dl class="dl-list">
                                <dt>IRC: irc.freenode.net</dt>
                                <dd>
                                    <a href="irc://irc.freenode.net/rackspace">#rackspace</a>
                                </dd>
                                <dd>
                                    <a href="irc://irc.freenode.net/openstack">#openstack</a>
                                </dd>
                                <br/>
                                <dt>Twitter</dt>
                                <dd>
                                    <a href="https://twitter.com/rackspace">@rackspace</a>
                                </dd>

                            </dl>
                        </div>

                    </div><!-- span2 -->

                    <div class="span10">
                        <div class="tab-content">

                            <?php include('home-repos-featured.php'); ?>
                            <?php include('home-repos-rackspace.php'); ?>
                        </div>
                   </div><!-- span 10 -->

                </div><!-- row -->