!function(){"use strict";$(document).ready(function(){$(".single-item").slick({dots:!0,autoplay:!0,autoplaySpeed:8e7,prevArrow:'<div class="slider-prev"><svg viewBox="0 0 36 100"><line x1="35.9" y1="0.5" x2="0.8" y2="54.1"/><line x1="35.9" y1="99.5" x2="0.8" y2="54.1"/></svg></div>',nextArrow:'<div class="slider-next"><svg viewBox="0 0 36 100"><line x1="0.8" y1="0.5" x2="35.9" y2="54.1"/><line x1="0.8" y1="99.5" x2="35.9" y2="54.1"/></svg></div>'}),$("#main_nav").sticky({topSpacing:0}),$.scrollIt({easing:"easy-in",scrollTime:600});var e={"default":function(){setTimeout(function(){$(".overpage").removeClass("opened")},50),$("body").removeClass("overpaged")},project:function(e){var t=e.namedParams.projname;setTimeout(function(){$('.overpage[for="'+t+'"]').addClass("opened")},50),$("body").addClass("overpaged")}};Aviator.pushStateEnabled=!1,Aviator.setRoutes({"/":{target:e,"/":"default"},"/projects":{target:e,"/:projname":"project"}}),Aviator.dispatch()})}(),function(e){e(function(){e("div.share42init").each(function(){function t(e){for(var t=document.getElementsByTagName("script"),a=new RegExp("^(.*/|)("+e+")([#?]|$)"),n=0,o=t.length;o>n;n++){var r=String(t[n].src).match(a);if(r)return r[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/)?r[1]:0==r[1].indexOf("/")?r[1]:(b=document.getElementsByTagName("base"),b[0]&&b[0].href?b[0].href+r[1]:document.location.pathname.match(/(.*[\/\\])/)[0]+r[1])}return null}var a=e(this),n=a.attr("data-url"),o=a.attr("data-title"),r=a.attr("data-image"),i=a.attr("data-description"),s=a.attr("data-short-description"),l=a.attr("data-path"),c=a.attr("data-icons-file"),p=a.attr("data-zero-counter");if(n||(n=location.href),c||(c="icons.png"),p||(p=0),l||(l=t("share42.js")),o||(o=document.title),!i){var d=e('meta[name="description"]').attr("content");i=void 0!==d?d:""}n=encodeURIComponent(n),o=encodeURIComponent(o),o=o.replace(/\'/g,"%27"),s=encodeURIComponent(s),r=encodeURIComponent(r),i=encodeURIComponent(i),i=i.replace(/\'/g,"%27");var u="u="+n;"null"!=r&&""!=r&&(u="s=100&p[url]="+n+"&p[title]="+o+"&p[summary]="+i+"&p[images][0]="+r);var m=new Array('"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?m2w&'+u+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Share on Facebook\"",'"#" data-count="gplus" onclick="window.open(\'https://plus.google.com/share?url='+n+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Share on Google+\"",'"#" data-count="twi" onclick="window.open(\'https://twitter.com/intent/tweet?text='+o+" "+n+" "+s+"', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false\" title=\"Share on Twitter\""),h="";for(j=0;j<m.length;j++)h+='<span class="share42-item" style="display:inline-block;margin:0 6px 6px 0;height:32px;"><a rel="nofollow" style="display:inline-block;width:32px;height:32px;margin:0;padding:0;outline:none;background:url('+l+c+") -"+32*j+'px 0 no-repeat" href='+m[j]+' target="_blank"></a></span>';a.html('<span id="share42">'+h+"</span>")})})}(jQuery);