    <?php include('../templates/header.php'); ?>
    <?php include('../templates/globalnav.php'); ?>

    <div id="page">
        <div class="container">
            <div id="main">
                <div id="content" class="row">
                    <div class="blog-index span9">
                        <article class="blog-article">
                            <header>

                                <h1 class="entry-title"><a href="/blog_single.php">Rackspace Announces SDK Support</a></h1>
                                <p class="author">
                                    <span class="byline author vcard">by <span class="fn">Hart Hoover</span></span>
                                </p>

                                <p class="meta">
                                    <time datetime="2013-05-13T10:20:00-05:00" pubdate="" data-updated="true">May 13<span>th</span>, 2013</time>
                                </p>
                            </header>
                            <div class="entry-content"><p>Over on the <a href="http://www.rackspace.com/blog">Rackspace Blog</a> we’ve announced that we are now offering support to developers writing applications on our cloud infrastructure:</p>
                                <blockquote><p>We take customer support pretty seriously around here. Our philosophy is to include super valuable and responsive support with all our offers. For example, when you’re a customer and find out you’re going on national TV to pitch your product, we’ll be there to help with architecting and operating the situation at no additional cost. This is clearly not the standard level of support in the cloud space where even the most basic support costs a lot more on top of core cloud costs. Starting today, we take this already high standard to a new level with the launch of Rackspace Developer Support, an extension of our Fanatical Support specifically for developers.</p>
                                    <p>Rackspace Developer Support marks the first time we will officially support your application code. When you’re programming your application to interact with the Rackspace Cloud powered by OpenStack, we want to make sure it is as easy as possible. We offer Software Development Kits for the world’s most popular programming languages. Right now, this includes PHP, Java, Python, Ruby and .Net. We are also working on node.js, which we hope to release soon.</p>
                                </blockquote>

                                <p>Read the full announcement <a href="http://www.rackspace.com/blog/rackspace-developer-support-fanatical-support-for-your-code/">here</a>.</p>
                            </div>
                        </article>

                        <article class="blog-article">
                            <header>
                                <h1 class="entry-title"><a href="/devops-improved-productivity.html">DevOps: Improved Productivity, Higher Value</a></h1>
                                <p class="author">
                                    <span class="byline author vcard">by <span class="fn">James Turnbull</span></span>
                                    <br>
                                </p>
                                <p class="meta">
                                    <time datetime="2013-05-10T08:00:00-05:00" pubdate="" data-updated="true">May 10<span>th</span>, 2013</time>
                                </p>
                            </header>

                            <div class="entry-content">
                                <p><img class="right" src="/images/2013-05-10-devopsreport/devopsreport.png" width="200">
                                    Those of us who have been aligned with DevOps for some time already know that the greater agility and closer collaboration it enables deliver real business value for our organizations.
                                </p>

                                <p>But until recently, our knowledge was based largely on our personal experience, and that of our friends and colleagues. So <a href="http://puppetlabs.com/">Puppet Labs</a> and <a href="http://itrevolution.com/">IT Revolution Press</a> partnered late last year to survey sysadmins, developers and other technology professionals in search of hard data that would tell us whether DevOps really does deliver solid results.
                                </p>
                            </div>

                            <footer class="blog-footer">
                                <a rel="full-article" href="/devops-improved-productivity.html">Continue Reading →</a>
                            </footer>

                        </article>

                        <!-- PAGINATION -->
                        <div class="pagination">

                            <a class="prev" href="/blog/page/2/">← Older</a>

                            <a href="/blog/archives">Blog Archives</a>

                        </div>

                    </div><!-- blog-index -->

                    <?php include('../templates/blog_sidebar.php'); ?>
                </div><!-- content -->
            </div><!-- main -->
        </div><!-- container -->
    </div><!-- page -->

    <?php include('../templates/footer.php'); ?>
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="/static/js/libs/jquery-1.9.1.min.js"><\/script>')</script>

    <script src="/static/js/libs/bootstrap.min.js"></script>
    <script src="/static/js/plugins.js"></script>
    <script src="/static/js/main.js"></script>

    </body>
</html>