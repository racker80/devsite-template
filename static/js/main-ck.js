$(document).ready(function(){$(".repolist li").each(function(){var e=$(this).data("repo"),t=$(this).data("user"),n=$(this).width(),r=$(this).height(),i=new Gitgraph({user:t,repo:e,domNode:document.getElementById("graph-"+e),width:n/2,height:r+15,allColor:"rgba(202, 202, 202, .20)",userColor:"rgba(51, 102, 153, .20)",background:"white",showName:!0})});$(".select-tabs").change(function(e){e.preventDefault();alert($(this).attr("href"));$(this).tab("show")})});