$(document).ready(function() {


                    $(".repolist li").each(function() {
                      //  var reponame = $(this).children('a').children('.inner').children('.repo-title')[0].innerHTML;
                        var reponame = $(this).data('repo');
                        var w = $(this).width();
                        var h = $(this).height();

                        var graph = new Gitgraph({ 
                            user        : 'rackerlabs',                // any github username
                            repo        : reponame,                // name of repo
                            domNode     : document.getElementById("graph-"+reponame),         // (optional) DOM node to attach to 
                            width       : w/2,                   // (optional) graph width
                            height      : h+15,                   // (optional) graph height
                            allColor    : "rgba(202, 202, 202, .20)",  // (optional) color of user's participation
                            userColor   : "rgba(51, 102, 153, .20)",   // (optional) color of total participation
                            background  : "white",               // (optional) background styles
                            showName    : true                   // (optional) show or hide name of user / repo
                        });


                    });


$('.select-tabs').change(function (e) {
    e.preventDefault();
        alert($(this).attr('href'));

    $(this).tab('show');
});




});