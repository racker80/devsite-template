<br>

                <div class="row-fluid">

                    <div class="span2">
                        <?php /*
                        <div class="tabbable tabs-left hidden">
                            <ul class="nav nav-tabs">
                                <li class="active"><a href="#home-repos-openstack" data-toggle="tab">OpenStack</a></li>
                                <li class=""><a href="#home-repos-other" data-toggle="tab">Other</a></li>
                            </ul>

                        </div><!-- tabbable -->
                        */?>


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

                            <?php include('home-repos-openstack.php'); ?>
                            <?php //include('home-repos-other.php'); ?>
                        </div>
                   </div><!-- span 10 -->

                </div><!-- row -->