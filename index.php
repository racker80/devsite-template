    <?php include('templates/header.php'); ?>
    <?php include('templates/globalnav.php'); ?>
    <?php include('templates/hero.php'); ?>

    <div id="page">
        <?php include('templates/home-services.php'); ?>

        <?php include('templates/home-repos.php'); ?>
        <?php include('templates/home-blog.php'); ?>

          <?php include('templates/home-openstack.php'); ?>

    </div><!-- page -->

    <?php include('templates/footer.php'); ?>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="/static/js/libs/jquery-1.9.1.min.js"><\/script>')</script>

    <script src="/static/js/libs/bootstrap.min.js"></script>
    <script src="/static/js/plugins.js"></script>
    <script src="/static/js/main.js"></script>

    <script>
      $().ready(function () {
        $(".lang-nav li").each(function(n) {
            $(this).click(function () {
              $('ul.nav-pills li.active').removeClass('active');
              $(this).href.parent('li').addClass('active');
            });
        });
      });
    </script>



    </body>
</html>