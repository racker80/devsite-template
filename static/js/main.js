

$(document).ready(function() {




    var load_github_graphs = function(e){
        //  var reponame = $(this).children('a').children('.inner').children('.repo-title')[0].innerHTML;
            var reponame = $(this).data('repo');
            var user = $(this).data('user');
            var w = $(this).width();
            var h = $(this).height();

            var graph = new Gitgraph({ 
                user        : user,                // any github username
                repo        : reponame,                // name of repo
                domNode     : document.getElementById("graph-"+reponame),         // (optional) DOM node to attach to 
                width       : w/2,                   // (optional) graph width
                height      : h+15,                   // (optional) graph height
                allColor    : "rgba(202, 202, 202, .20)",  // (optional) color of user's participation
                userColor   : "rgba(51, 102, 153, .20)",   // (optional) color of total participation
                background  : "white",               // (optional) background styles
                showName    : true                   // (optional) show or hide name of user / repo
            });
    }

    $("#home-repos > .tabbable > .tab-content > .tab-pane.active .repolist.nograph li").each(load_github_graphs).parent().removeClass('nograph');

    $('#community-projects-nav a[data-toggle="tab"]').on('shown', function (e) {
        var target = $(e.target).attr('href');
        $(target).find('.repolist.nograph li').each(load_github_graphs).parent().removeClass('nograph');
    })





    // load FeedMagnet SDK
    var fm_server = 'testdrive.feedmagnet.com'
    ;(function() {
        window.fm_ready = function(fx) {
            if (typeof $FM !== 'undefined' && typeof $FM.ready === 'function') {
                $FM.ready(fx);
            } else {
                window.setTimeout(function() { fm_ready.call(null, fx); }, 50);
            }
        };
        var fmjs = document.createElement('script');
        var p = ('https:' === document.location.protocol ? 'https://' : 'http://');
        fmjs.src = p + fm_server + '/embed.js';
        fmjs.setAttribute('async', 'true');
        //document.documentElement.firstChild.appendChild(fmjs);
            document.getElementsByTagName('body')[0].appendChild(fmjs);

    })();
     
    // do stuff once it is loaded
    fm_ready(function($, _) {
        /*
        // create the feed object and get content
            var feed = $FM.Feed('repose').get({
                'limit':3
            })
     
            // process JSON data for each update into HTML
            feed.connect('new_update', function(self, data) {
                var udata = data.update.data
                data.update.html =
                    '<img class="avatar" ' +
                        'src="' + udata.author.avatar + '" />' +
                    '<div class="author">' + udata.author.alias + '</div>' +
                    '<div class="timestamp">' +
                        _(udata.timestamp).pretty_time() +
                    '</div>' +
                    '<div class="text">' + udata.text + '</div>'
            })
            // display the feed on the page
            $('.feed-widget').each(function(offset){
                $FM.Element($(this)).display(feed);
            })
            //var output = $FM.Element('.feed-widget').display(feed)

            */
    })






});