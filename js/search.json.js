// build time:Sun May 07 2017 16:53:35 GMT+0800 (中国标准时间)
(function(){var e=document.getElementById("search-key"),t=document.getElementById("search-form"),n=document.getElementById("result-wrap"),i=document.getElementById("result-mask"),s=document.getElementById("search-result"),o=document.getElementById("search-tpl").innerHTML,r,a,c;if(window.innerWidth){r=parseInt(window.innerWidth)}else if(document.body&&document.body.clientWidth){r=parseInt(document.body.clientWidth)}if(window.innerHeight){a=parseInt(window.innerHeight)}else if(document.body&&document.body.clientHeight){a=parseInt(document.body.clientHeight)}i.style.width=r+"px";i.style.height=a+"px";function u(e){if(!c){var t=new XMLHttpRequest;t.open("GET","/content.json",true);t.onload=function(){if(this.status>=200&&this.status<300){var t=JSON.parse(this.response||this.responseText);c=t instanceof Array?t:t.posts;e(c)}else{console.error(this.statusText)}};t.onerror=function(){console.error(this.statusText)};t.send()}else{e(c)}}function d(e,t){return l(e.title,t)||e.tags.some(function(e){return l(e.name,t)})||l(e.text,t)}function l(e,t){t.lastIndex=0;return t.test(e)}function f(e){var t="";if(e.length){t=e.map(function(e){return m(o,{title:e.title,path:e.path,date:new Date(e.date).toLocaleDateString(),tags:e.tags.map(function(e){return"<span>"+e.name+"</span>"}).join("")})}).join("")}else{t='<div class="tips"><i class="fa fa-empty"></i><p>Results not found!</p></div>'}s.innerHTML=t}function m(e,t){return e.replace(/\{\w+\}/g,function(e){var n=e.replace(/\{|\}/g,"");return t[n]||""})}function p(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function h(e,t){if(!p(e,t))e.className+=" "+t}function g(e,t){if(p(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function y(t){var s=this.value.trim();if(!s){return}var o=new RegExp(s.replace(/[ ]/g,"|"),"gmi");u(function(e){var t=e.filter(function(e){return d(e,o)});f(t)});t.preventDefault();g(n,"hide");g(i,"hide");e.onfocus=function(){g(n,"hide");g(i,"hide")}}e.onfocus=function(){e.addEventListener("input",y)};i.onclick=function(){h(n,"hide");h(i,"hide")}})();
//rebuild by neat 