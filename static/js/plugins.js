// usage: log('inside coolFunc', this, arguments);
// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// place any jQuery/helper plugins in here, instead of separate, slower script files.



!function(t,e,o){function n(t,o){var n,i=e.createElement(t||"div");for(n in o)i[n]=o[n];return i}function i(t){for(var e=1,o=arguments.length;o>e;e++)t.appendChild(arguments[e]);return t}function r(t,e,o,n){var i=["opacity",e,~~(100*t),o,n].join("-"),r=.01+100*(o/n),a=Math.max(1-(1-t)/e*(100-r),t),s=c.substring(0,c.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return f[i]||(h.insertRule("@"+l+"keyframes "+i+"{"+"0%{opacity:"+a+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+a+"}"+"}",h.cssRules.length),f[i]=1),i}function a(t,e){var n,i,r=t.style;if(r[e]!==o)return e;for(e=e.charAt(0).toUpperCase()+e.slice(1),i=0;u.length>i;i++)if(n=u[i]+e,r[n]!==o)return n}function s(t,e){for(var o in e)t.style[a(t,o)||o]=e[o];return t}function l(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var i in n)t[i]===o&&(t[i]=n[i])}return t}function p(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function d(t){return this.spin?(this.opts=l(t||{},d.defaults,g),o):new d(t)}var c,u=["webkit","Moz","ms","O"],f={},h=function(){var t=n("style",{type:"text/css"});return i(e.getElementsByTagName("head")[0],t),t.sheet||t.styleSheet}(),g={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};d.defaults={},l(d.prototype,{spin:function(t){this.stop();var e,o,i=this,r=i.opts,a=i.el=s(n(0,{className:r.className}),{position:r.position,width:0,zIndex:r.zIndex}),l=r.radius+r.length+r.width;if(t&&(t.insertBefore(a,t.firstChild||null),o=p(t),e=p(a),s(a,{left:("auto"==r.left?o.x-e.x+(t.offsetWidth>>1):parseInt(r.left,10)+l)+"px",top:("auto"==r.top?o.y-e.y+(t.offsetHeight>>1):parseInt(r.top,10)+l)+"px"})),a.setAttribute("aria-role","progressbar"),i.lines(a,i.opts),!c){var d=0,u=r.fps,f=u/r.speed,h=(1-r.opacity)/(f*r.trail/100),g=f/r.lines;(function m(){d++;for(var t=r.lines;t;t--){var e=Math.max(1-(d+t*g)%f*h,r.opacity);i.opacity(a,r.lines-t,e,r)}i.timeout=i.el&&setTimeout(m,~~(1e3/u))})()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=o),this},lines:function(t,e){function o(t,o){return s(n(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:o,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*l+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var a,l=0;e.lines>l;l++)a=s(n(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:c&&r(e.opacity,e.trail,l,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&i(a,s(o("#000","0 0 4px #000"),{top:"2px"})),i(t,i(a,o(e.color,"0 0 1px rgba(0,0,0,.1)")));return t},opacity:function(t,e,o){t.childNodes.length>e&&(t.childNodes[e].style.opacity=o)}}),function(){function t(t,e){return n("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}var e=s(n("group"),{behavior:"url(#default#VML)"});!a(e,"transform")&&e.adj?(h.addRule(".spin-vml","behavior:url(#default#VML)"),d.prototype.lines=function(e,o){function n(){return s(t("group",{coordsize:p+" "+p,coordorigin:-l+" "+-l}),{width:p,height:p})}function r(e,r,a){i(c,i(s(n(),{rotation:360/o.lines*e+"deg",left:~~r}),i(s(t("roundrect",{arcsize:o.corners}),{width:l,height:o.width,left:o.radius,top:-o.width>>1,filter:a}),t("fill",{color:o.color,opacity:o.opacity}),t("stroke",{opacity:0}))))}var a,l=o.length+o.width,p=2*l,d=2*-(o.width+o.length)+"px",c=s(n(),{position:"absolute",top:d,left:d});if(o.shadow)for(a=1;o.lines>=a;a++)r(a,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(a=1;o.lines>=a;a++)r(a);return i(e,c)},d.prototype.opacity=function(t,e,o,n){var i=t.firstChild;n=n.shadow&&n.lines||0,i&&i.childNodes.length>e+n&&(i=i.childNodes[e+n],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=o))}):c=a(e,"animation")}(),"function"==typeof define&&define.amd?define(function(){return d}):t.Spinner=d}(window,document);var Gitgraph=function(){var t=function(t){var e=document.createElement("div"),o=t.domNode||document.body,n=t.height||40,i=t.width||416,r=t.background||"white",a=t.userColor||"rgb(51, 102, 153)",s=t.allColor||"rgb(202, 202, 202)",l=t.hasOwnProperty("showName")?t.showName:!0,p=(new Spinner).spin(e);p.el.style.left="50%",p.el.style.top="50%";var d=e.style;d.padding="4px",d.borderRadius="4px",d.background=r,d.position="relative",d.height=n+"px",d.textAlign="center",d.width=i+"px",o.appendChild(e);var c="http://bitpshr.info/cdn/ba-simple-proxy.php",u="?url=https://github.com/"+t.user+"/"+t.repo+"/graphs/owner_participation",f=new XMLHttpRequest;f.open("GET",c+u,!0),f.onreadystatechange=function(){if(4==f.readyState&&200==f.status){var o=JSON.parse(f.responseText);if(o.contents&&o.contents.all){var r=o.contents.all,p="https://github.com/"+t.user+"/"+t.repo+"/";e.innerHTML="";var d=document.createElement("canvas");d.width=i,d.height=n,d.style.position="relative";var c=document.createElement("a");if(c.href=p,c.appendChild(d),e.appendChild(c),l){var u=document.createElement("div");u.innerHTML=t.user+"/"+t.repo;var h=u.style;h.fontSize="12px",h.borderRadius="3px",h.color="#EEE",h.backgroundColor="rgba(0,0,0,0.5)",h.display="inline-block",h.padding="5px",h.position="absolute",h.top=h.right="5px",c.appendChild(u)}var g=d.getContext("2d"),m=i/r.length,y=Math.max.apply(Math,r),v=parseFloat(n-1)/y,w=function(t,e){t*=v,g.fillRect(e*m,n-t,m-1,t)};g.fillStyle=s;var x,b;for(x=0,b=r.length;b>x;x++)w(r[x],x);for(g.fillStyle=a,x=0,b=o.contents.owner.length;b>x;x++)w(o.contents.owner[x],x)}}},f.send(null)};return t.prototype={constructor:t},t}();




/*

Holder - 1.9 - client side image placeholders
(c) 2012-2013 Ivan Malopinsky / http://imsky.co

Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
Commercial use requires attribution.

*/

var Holder = Holder || {};
(function (app, win) {

var preempted = false,
fallback = false,
canvas = document.createElement('canvas');

//getElementsByClassName polyfill
document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s})

//getComputedStyle polyfill
window.getComputedStyle||(window.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this})

//http://javascript.nwbox.com/ContentLoaded by Diego Perini with modifications
function contentLoaded(n,t){var l="complete",s="readystatechange",u=!1,h=u,c=!0,i=n.document,a=i.documentElement,e=i.addEventListener?"addEventListener":"attachEvent",v=i.addEventListener?"removeEventListener":"detachEvent",f=i.addEventListener?"":"on",r=function(e){(e.type!=s||i.readyState==l)&&((e.type=="load"?n:i)[v](f+e.type,r,u),!h&&(h=!0)&&t.call(n,null))},o=function(){try{a.doScroll("left")}catch(n){setTimeout(o,50);return}r("poll")};if(i.readyState==l)t.call(n,"lazy");else{if(i.createEventObject&&a.doScroll){try{c=!n.frameElement}catch(y){}c&&o()}i[e](f+"DOMContentLoaded",r,u),i[e](f+s,r,u),n[e](f+"load",r,u)}};

//https://gist.github.com/991057 by Jed Schmidt with modifications
function selector(a){
    a=a.match(/^(\W)?(.*)/);var b=document["getElement"+(a[1]?a[1]=="#"?"ById":"sByClassName":"sByTagName")](a[2]);
    var ret=[]; b!=null&&(b.length?ret=b:b.length==0?ret=b:ret=[b]);    return ret;
}

//shallow object property extend
function extend(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c}

//hasOwnProperty polyfill
if (!Object.prototype.hasOwnProperty)
    Object.prototype.hasOwnProperty = function(prop) {
        var proto = this.__proto__ || this.constructor.prototype;
        return (prop in this) && (!(prop in proto) || proto[prop] !== this[prop]);
    }

function text_size(width, height, template) {
    var dimension_arr = [height, width].sort();
    var maxFactor = Math.round(dimension_arr[1] / 16),
        minFactor = Math.round(dimension_arr[0] / 16);
    var text_height = Math.max(template.size, maxFactor);
    return {
        height: text_height
    }
}

function draw(ctx, dimensions, template, ratio) {
    var ts = text_size(dimensions.width, dimensions.height, template);
    var text_height = ts.height;
    var width = dimensions.width * ratio, height = dimensions.height * ratio;
    var font = template.font ? template.font : "sans-serif";
    canvas.width = width;
    canvas.height = height;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = template.background;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = template.foreground;
    ctx.font = "bold " + text_height + "px "+font;
    var text = template.text ? template.text : (dimensions.width + "x" + dimensions.height);
    if (ctx.measureText(text).width / width > 1) {
        text_height = template.size / (ctx.measureText(text).width / width);
    }
    //Resetting font size if necessary
    ctx.font = "bold " + (text_height * ratio) + "px "+font;
    ctx.fillText(text, (width / 2), (height / 2), width);
    return canvas.toDataURL("image/png");
}

function render(mode, el, holder, src) {
    var dimensions = holder.dimensions,
        theme = holder.theme,
        text = holder.text ? decodeURIComponent(holder.text) : holder.text;
    var dimensions_caption = dimensions.width + "x" + dimensions.height;
    theme = (text ? extend(theme, { text: text }) : theme);
    theme = (holder.font ? extend(theme, {font: holder.font}) : theme);

    var ratio = 1;
    if(window.devicePixelRatio && window.devicePixelRatio > 1){
        ratio = window.devicePixelRatio;
    }

    if (mode == "image") {
        el.setAttribute("data-src", src);
        el.setAttribute("alt", text ? text : theme.text ? theme.text + " [" + dimensions_caption + "]" : dimensions_caption);
        
        if(fallback || !holder.auto){
            el.style.width = dimensions.width + "px";
            el.style.height = dimensions.height + "px";
        }
    
        if (fallback) {
            el.style.backgroundColor = theme.background;
            
        }
        else{
            el.setAttribute("src", draw(ctx, dimensions, theme, ratio));
        }
    } else {
        if (!fallback) {
            el.style.backgroundImage = "url(" + draw(ctx, dimensions, theme, ratio) + ")";
            el.style.backgroundSize = dimensions.width+"px "+dimensions.height+"px";
        }
    }
};

function fluid(el, holder, src) {
    var dimensions = holder.dimensions,
        theme = holder.theme,
        text = holder.text;
    var dimensions_caption = dimensions.width + "x" + dimensions.height;
    theme = (text ? extend(theme, {
        text: text
    }) : theme);

    var fluid = document.createElement("div");

    fluid.style.backgroundColor = theme.background;
    fluid.style.color = theme.foreground;
    fluid.className = el.className + " holderjs-fluid";
    fluid.style.width = holder.dimensions.width + (holder.dimensions.width.indexOf("%")>0?"":"px");
    fluid.style.height = holder.dimensions.height + (holder.dimensions.height.indexOf("%")>0?"":"px");
    fluid.id = el.id;
    
    el.style.width=0;
    el.style.height=0;
    
    if (theme.text) {
        fluid.appendChild(document.createTextNode(theme.text))
    } else {
        fluid.appendChild(document.createTextNode(dimensions_caption))
        fluid_images.push(fluid);
        setTimeout(fluid_update, 0);
    }

    el.parentNode.insertBefore(fluid, el.nextSibling)
    
    if(window.jQuery){
        jQuery(function($){
        $(el).on("load", function(){
           el.style.width = fluid.style.width;
           el.style.height = fluid.style.height;
           $(el).show();
           $(fluid).remove();
        });
        })
    }
}

function fluid_update() {
    for (i in fluid_images) {
        if(!fluid_images.hasOwnProperty(i)) continue;
        var el = fluid_images[i],
            label = el.firstChild;

        el.style.lineHeight = el.offsetHeight+"px";
        label.data = el.offsetWidth + "x" + el.offsetHeight;
    }
}

function parse_flags(flags, options) {

    var ret = {
        theme: settings.themes.gray
    }, render = false;

    for (sl = flags.length, j = 0; j < sl; j++) {
        var flag = flags[j];
        if (app.flags.dimensions.match(flag)) {
            render = true;
            ret.dimensions = app.flags.dimensions.output(flag);
        } else if (app.flags.fluid.match(flag)) {
            render = true;
            ret.dimensions = app.flags.fluid.output(flag);
            ret.fluid = true;
        } else if (app.flags.colors.match(flag)) {
            ret.theme = app.flags.colors.output(flag);
        } else if (options.themes[flag]) {
            //If a theme is specified, it will override custom colors
            ret.theme = options.themes[flag];
        } else if (app.flags.text.match(flag)) {
            ret.text = app.flags.text.output(flag);
        } else if(app.flags.font.match(flag)){
            ret.font = app.flags.font.output(flag);
        }
        else if(app.flags.auto.match(flag)){
            ret.auto = true;
        }
    }

    return render ? ret : false;

};

if (!canvas.getContext) {
    fallback = true;
} else {
    if (canvas.toDataURL("image/png")
        .indexOf("data:image/png") < 0) {
        //Android doesn't support data URI
        fallback = true;
    } else {
        var ctx = canvas.getContext("2d");
    }
}

var fluid_images = [];

var settings = {
    domain: "holder.js",
    images: "img",
    bgnodes: ".holderjs",
    themes: {
        "gray": {
            background: "#eee",
            foreground: "#aaa",
            size: 12
        },
            "social": {
            background: "#3a5a97",
            foreground: "#fff",
            size: 12
        },
            "industrial": {
            background: "#434A52",
            foreground: "#C2F200",
            size: 12
        }
    },
    stylesheet: ".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"
};


app.flags = {
    dimensions: {
        regex: /^(\d+)x(\d+)$/,
        output: function (val) {
            var exec = this.regex.exec(val);
            return {
                width: +exec[1],
                height: +exec[2]
            }
        }
    },
    fluid: {
        regex: /^([0-9%]+)x([0-9%]+)$/,
        output: function (val) {
            var exec = this.regex.exec(val);
            return {
                width: exec[1],
                height: exec[2]
            }
        }
    },
    colors: {
        regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
        output: function (val) {
            var exec = this.regex.exec(val);
            return {
                size: settings.themes.gray.size,
                foreground: "#" + exec[2],
                background: "#" + exec[1]
            }
        }
    },
    text: {
        regex: /text\:(.*)/,
        output: function (val) {
            return this.regex.exec(val)[1];
        }
    },
    font: {
        regex: /font\:(.*)/,
        output: function(val){
        return this.regex.exec(val)[1];
        }
    },
    auto: {
        regex: /^auto$/
    }
}

for (var flag in app.flags) {
    if(!app.flags.hasOwnProperty(flag)) continue;
    app.flags[flag].match = function (val) {
        return val.match(this.regex)
    }
}

app.add_theme = function (name, theme) {
    name != null && theme != null && (settings.themes[name] = theme);
    return app;
};

app.add_image = function (src, el) {
    var node = selector(el);
    if (node.length) {
        for (var i = 0, l = node.length; i < l; i++) {
            var img = document.createElement("img")
            img.setAttribute("data-src", src);
            node[i].appendChild(img);
        }
    }
    return app;
};

app.run = function (o) {
    var options = extend(settings, o), images = [];
        
    if(options.images instanceof window.NodeList){
        imageNodes = options.images;
    }
    else if(options.images instanceof window.Node){
        imageNodes = [options.images];
    }
    else{
        imageNodes = selector(options.images);
    }
    
    if(options.elements instanceof window.NodeList){
        bgnodes = options.bgnodes;
    }
    else if(options.bgnodes instanceof window.Node){
        bgnodes = [options.bgnodes];
    }
    else{
        bgnodes = selector(options.bgnodes);
    }
    
    preempted = true;
       
    for (i = 0, l = imageNodes.length; i < l; i++) images.push(imageNodes[i]);
    
    var holdercss = document.getElementById("holderjs-style");
    
    if(!holdercss){
        holdercss = document.createElement("style");
        holdercss.setAttribute("id", "holderjs-style");
        holdercss.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(holdercss);
    }

    if(holdercss.styleSheet){
        holdercss.styleSheet += options.stylesheet;
    }
    else{
        holdercss.textContent+= options.stylesheet;
    }
    
    var cssregex = new RegExp(options.domain + "\/(.*?)\"?\\)");

    for (var l = bgnodes.length, i = 0; i < l; i++) {
        var src = window.getComputedStyle(bgnodes[i], null)
            .getPropertyValue("background-image");
        var flags = src.match(cssregex);
        if (flags) {
            var holder = parse_flags(flags[1].split("/"), options);
            if (holder) {
                render("background", bgnodes[i], holder, src);
            }
        }
    }

    for (var l = images.length, i = 0; i < l; i++) {
        var src = images[i].getAttribute("src") || images[i].getAttribute("data-src");
        if (src != null && src.indexOf(options.domain) >= 0) {
            var holder = parse_flags(src.substr(src.lastIndexOf(options.domain) + options.domain.length + 1)
                .split("/"), options);
            if (holder) {
                if (holder.fluid) {
                    fluid(images[i], holder, src);
                } else {
                    render("image", images[i], holder, src);
                }
            }
        }
    }
    return app;
};

contentLoaded(win, function () {
    if (window.addEventListener) {
        window.addEventListener("resize", fluid_update, false);
        window.addEventListener("orientationchange", fluid_update, false);
    } else {
        window.attachEvent("onresize", fluid_update)
    }
    preempted || app.run();
});

if ( typeof define === "function" && define.amd ) {
    define( "Holder", [], function () { return app; } );
}

})(Holder, window);






/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;this.attr("novalidate","novalidate");b=new c.validator(a,this[0]);c.data(this[0],"validator",b);if(b.settings.onsubmit){a=this.find("input, button");a.filter(".cancel").click(function(){b.cancelSubmit=true});b.settings.submitHandler&&a.filter(":submit").click(function(){b.submitButton=this});this.submit(function(d){function e(){if(b.settings.submitHandler){if(b.submitButton)var f=c("<input type='hidden'/>").attr("name",
    b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b,b.currentForm);b.submitButton&&f.remove();return false}return true}b.settings.debug&&d.preventDefault();if(b.cancelSubmit){b.cancelSubmit=false;return e()}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;return false}return e()}else{b.focusInvalid();return false}})}return b}else a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
else{var a=true,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a}},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);d.removeAttr(f)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;if(b.messages)e.messages[d.name]=c.extend(e.messages[d.name],b.messages);break;case "remove":if(!b){delete f[d.name];
    return g}var h={};c.each(b.split(/\s/),function(j,i){h[i]=g[i];delete g[i]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);if(d.required){e=d.required;delete d.required;d=c.extend({required:e},d)}return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              b){this.settings=c.extend(true,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(arguments.length==1)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(arguments.length>2&&b.constructor!=Array)b=c.makeArray(arguments).slice(1);if(b.constructor!=Array)b=[b];c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",
    validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a)))this.element(a)},
    onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement)this.element(a)},onclick:function(a){if(a.name in this.submitted)this.element(a);else a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,
    a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:c.validator.format("Please enter no more than {0} characters."),
    minlength:c.validator.format("Please enter at least {0} characters."),rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function a(e){var f=c.data(this[0].form,"validator"),g="on"+e.type.replace(/^validate/,
    "");f.settings[g]&&f.settings[g].call(f,this[0],e)}this.labelContainer=c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e})});var d=
    this.settings.rules;c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)});c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",a).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",
    a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(a){this.lastElement=
    a=this.validationTargetFor(this.clean(a));this.prepareElement(a);this.currentElements=c(a);var b=this.check(a);if(b)delete this.invalid[a.name];else this.invalid[a.name]=true;if(!this.numberOfInvalids())this.toHide=this.toHide.add(this.containers);this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(d){return!(d.name in a)})}this.settings.showErrors?
    this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0,d;for(d in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==
    0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&c.grep(this.errorList,function(b){return b.element.name==a.name}).length==1&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&
    a.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in b||!a.objectLength(c(this).rules()))return false;return b[this.name]=true})},clean:function(a){return c(a)[0]},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},
    prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},check:function(a){a=this.validationTargetFor(this.clean(a));var b=c(a).rules(),d=false,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if(g=="dependency-mismatch")d=true;else{d=false;if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g){this.formatAndAdd(a,f);return false}}}catch(h){this.settings.debug&&window.console&&console.log("exception occured when checking element "+
        a.id+", check the '"+f.method+"' method",h);throw h;}}if(!d){this.objectLength(b)&&this.successList.push(a);return true}},customMetaMessage:function(a,b){if(c.metadata){var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){var d=this.settings.messages[a];return d&&(d.constructor==String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==undefined)return arguments[a]},defaultMessage:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;if(typeof d=="function")d=d.call(this,b.parameters,a);else if(e.test(d))d=jQuery.format(d.replace(e,"{$1}"),b.parameters);this.errorList.push({message:d,element:a});this.errorMap[a.name]=d;this.submitted[a.name]=
        d},addWrapper:function(a){if(this.settings.wrapper)a=a.add(a.parent(this.settings.wrapper));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}if(this.errorList.length)this.toShow=this.toShow.add(this.containers);if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);
        if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);if(d.length){d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
        d.attr("generated")&&d.html(b)}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||"");if(this.settings.wrapper)d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))}if(!b&&this.settings.success){d.text("");typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow=
        this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){if(this.checkable(a))a=this.findByName(a.name).not(this.settings.ignore)[0];return a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                e){return e.form==b&&e.name==a&&e||null})},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,
        c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,b){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[a.name];if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();this.formSubmitted=false}else if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=
        false}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,
    a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={};a=c(a);for(var d in c.validator.methods){var e;if(e=d==="required"&&typeof c.fn.prop==="function"?a.prop(d):a.attr(d))b[d]=e;else if(a[0].getAttribute("type")===d)b[d]=true}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};
    var b=c.data(a.form,"validator").settings.meta;return b?c(a).metadata()[b]:c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");if(d.settings.rules)b=c.validator.normalizeRule(d.settings.rules[a.name])||{};return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===false)delete a[d];else if(e.param||e.depends){var f=true;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}if(f)a[d]=e.param!==undefined?
    e.param:true;else delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){if(a[this])a[this]=Number(a[this])});c.each(["rangelength","range"],function(){if(a[this])a[this]=[Number(a[this][0]),Number(a[this][1])]});if(c.validator.autoCreateRanges){if(a.min&&a.max){a.range=[a.min,a.max];delete a.min;delete a.max}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];delete a.minlength;delete a.maxlength}}a.messages&&delete a.messages;
    return a},normalizeRule:function(a){if(typeof a=="string"){var b={};c.each(a.split(/\s/),function(){b[this]=true});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&a.length>0;case "input":if(this.checkable(b))return this.getLength(a,
    b)>0;default:return c.trim(a).length>0}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d=typeof d=="string"&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(true,{url:d,
    mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;var j=h===true;if(j){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};h=h||f.defaultMessage(b,"remote");i[b.name]=e.message=c.isFunction(h)?h(a):h;f.showErrors(i)}e.valid=j;f.stopRequest(b,j)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b,d){return this.optional(b)||this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
    url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
    date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 -]+/.test(a))return false;var d=0,e=0,f=false;a=a.replace(/\D/g,"");for(var g=a.length-1;g>=
        0;g--){e=a.charAt(g);e=parseInt(e,10);if(f)if((e*=2)>9)e-=9;d+=e;f=!f}return d%10==0},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+d+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(d,e,f){e=d.port;if(d.mode=="abort"){a[e]&&a[e].abort();a[e]=f}});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;if(("mode"in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();return a[e]=b.apply(this,arguments)}return b.apply(this,arguments)}}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.handle.call(this,e)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)},handler:function(e){arguments[0]=c.event.fix(e);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    b,d){return this.bind(b,function(e){var f=c(e.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);
/**
 * jQuery placeholder support for IE
**/
jQuery(function() {
    jQuery.support.placeholder = false;
    test = document.createElement('input');
    if('placeholder' in test) jQuery.support.placeholder = true;
});
$(function() {
    if(!$.support.placeholder) {
        var active = document.activeElement;
        $('input[type=text],input[type=email],input[type=url],input[type=number],input[type=search]').focus(function () {
            if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
                $(this).val('').removeClass('hasPlaceholder');
            }
        }).blur(function () {
            if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
                $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
            }
        });
        $('input[type=text],input[type=email],input[type=url],input[type=number],input[type=search]').blur();
        $(active).focus();
        $('form').submit(function () {
            $(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
        });
    }
});

/**
 * password_strength_plugin.js
 * Copyright (c) 20010 myPocket technologies (www.mypocket-technologies.com)
 

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 * @author Darren Mason (djmason9@gmail.com)
 * @date 3/13/2009
 * @projectDescription Password Strength Meter is a jQuery plug-in provide you smart algorithm to detect a password strength. Based on Firas Kassem orginal plugin - http://phiras.wordpress.com/2007/04/08/password-strength-meter-a-jquery-plugin/
 * @version 1.0.1
 * 
 * @requires jquery.js (tested with 1.3.2)
 * @param shortPass:    "shortPass",    //optional
 * @param badPass:      "badPass",      //optional
 * @param goodPass:     "goodPass",     //optional
 * @param strongPass:   "strongPass",   //optional
 * @param baseStyle:    "testresult",   //optional
 * @param userid:       "",             //required override
 * @param messageloc:   1               //before == 0 or after == 1
 * 
*/

(function($) {
  $.fn.resultStyle = "";

  $.fn.passStrength = function(options) {

    var defaults = {
      shortPass: "label-important",
      shortPassText: "Too short",
      //optional
      badPass: "label-important",
      badPassText: "Weak",
      //optional
      goodPass: "label-warning",
      goodPassText: "Good",
      //optional
      strongPass: "label-success",
      strongPassText: "Strong",
      //optional
      baseStyle: "label",
      //optional
      userid: "",
      //required override
      messageloc: 1 //before == 0 or after == 1
    };
    var opts = $.extend(defaults, options);

    return this.each(function() {
      var obj = $(this);

      $(obj).unbind().keyup(function() {

        var results = $.fn.teststrength($(this).val(), $(opts.userid).val(), opts);

        if (opts.messageloc === 1) {
          $(this).next("." + opts.baseStyle).remove();
          $(this).after("<span class=\"" + opts.baseStyle + " password_strength\"><span></span></span>");
          $(this).next("." + opts.baseStyle).addClass($(this).resultStyle).find("span").text(results);
        } else {
          $(this).prev("." + opts.baseStyle).remove();
          $(this).before("<span class=\"" + opts.baseStyle + " password_strength\"><span></span></span>");
          $(this).prev("." + opts.baseStyle).addClass($(this).resultStyle).find("span").text(results);
        }
      });

      //FUNCTIONS
      $.fn.teststrength = function(password, username, option) {
        var score = 0;

        //password < 4
        if (password.length < 4) {
          this.resultStyle = option.shortPass;
          return option.shortPassText;
        }

        //password == user name
        if (options.userid && (password.toLowerCase() == username.toLowerCase())) {
          this.resultStyle = option.badPass;
          return $(this).samePassword;
        }

        //password length
        score += password.length * 4;
        score += ($.fn.checkRepetition(1, password).length - password.length) * 1;
        score += ($.fn.checkRepetition(2, password).length - password.length) * 1;
        score += ($.fn.checkRepetition(3, password).length - password.length) * 1;
        score += ($.fn.checkRepetition(4, password).length - password.length) * 1;

        //password has 3 numbers
        if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
          score += 5;
        }

        //password has 2 symbols
        if (password.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/)) {
          score += 5;
        }

        //password has Upper and Lower chars
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
          score += 10;
        }

        //password has number and chars
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
          score += 15;
        }
        //
        //password has number and symbol
        if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([0-9])/)) {
          score += 15;
        }

        //password has char and symbol
        if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/) && password.match(/([a-zA-Z])/)) {
          score += 15;
        }

        //password is just a numbers or chars
        if (password.match(/^\w+$/) || password.match(/^\d+$/)) {
          score -= 10;
        }

        //verifying 0 < score < 100
        if (score < 0) {
          score = 0;
        }
        if (score > 100) {
          score = 100;
        }

        if (score < 34) {
          this.resultStyle = option.badPass;
          return option.badPassText;
        }
        if (score < 68) {
          this.resultStyle = option.goodPass;
          return option.goodPassText;
        }

        this.resultStyle = option.strongPass;
        return option.strongPassText; 
      };

    });
  };
})(jQuery);


$.fn.checkRepetition = function(pLen, str) {
  var res = "";
  for (var i = 0; i < str.length; i++) {
    var repeated = true;

    for (var j = 0; j < pLen && (j + i + pLen) < str.length; j++) {
      repeated = repeated && (str.charAt(j + i) == str.charAt(j + i + pLen));
    }
    if (j < pLen) {
      repeated = false;
    }
    if (repeated) {
      i += pLen - 1;
      repeated = false;
    } else {
      res += str.charAt(i);
    }
  }
  return res;
};