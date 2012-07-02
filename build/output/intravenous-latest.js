// Intravenous JavaScript library v0.1.3-beta
// (c) Roy Jacobs
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(window,undefined){
var l=!0,m=null;function q(h){function r(o,p){for(var j=o.split("."),n=h,k=0;k<j.length-1;k++)n=n[j[k]];n[j[j.length-1]]=p}h="undefined"!==typeof h?h:{};h.version="0.1.3-beta";r("version",h.version);(function(){function o(a,b,d){for(var c=p(a,b),b=c.key,c=c.data,e,f=a;f&&!(e=f.k[b]);)f=f.parent;if(c&&c.s){var g=c.s(a,b,e);if(g.i)return g.data}if(!f)throw Error("Unknown dependency: "+b);if(c&&c.u&&(g=c.u(a,b,e),g.i))return g.data;if(c=a.c[e.m].get(b))return c;var i;if(e.value instanceof Function){c=e.value.$inject;
i=[];if(c instanceof Array){f=0;for(g=c.length;f<g;f++)i.push(o(a,c[f],[]))}c=function(){};c.prototype=e.value.prototype;c=new c;f=0;for(g=d.length;f<g;f++)i.push(d[f]);i=e.value.apply(c,i);if(i instanceof Function){c=new k(a,b);c.a.j(b,i);for(var h in i)i.hasOwnProperty(h)&&(c[h]=i[h]);i=void 0}}else c=e.value;a.c[e.m].set(new v(e,c));return i||c}function p(a,b){for(var d in a.t)for(var c=a.t[d],e=0,f=c.suffixes.length;e<f;e++){var g=c.suffixes[e];if(-1!==b.indexOf(g,b.length-g.length))return{data:c,
key:b.slice(0,b.length-g.length)}}return{data:m,key:b}}function j(a,b){this.k={};this.parent=b;this.c={perRequest:new s(this),singleton:new t(this,b?b.c.singleton:m),unique:new u(this)};this.children=[];this.options=a=a||{};this.j("container",this);this.dispose=this.g;this.get=this.get;this.register=this.j}function n(a,b){this.a=a;this.key=b;this.dispose=this.g;this.get=this.get;this.use=this.l}function k(a,b){this.a=a.create();this.key=b;this.dispose=this.g;this.get=this.get;this.use=this.l}function u(a){this.a=
a;this.b=[]}function t(a,b){this.a=a;this.b=[];this.f={};this.parent=b}function s(a){this.a=a;this.b=[];this.f={};this.e=0;this.p={};this.q=[]}function v(a,b){this.d=a;this.h=b}function w(a,b,d,c){this.key=a;this.a=b;this.value=d;this.m=c}s.prototype={get:function(a){for(var b=0,d=this.b.length;b<d;b++){var c=this.b[b];if(c.d.key===a&&c.e===this.e){if(!c.h)break;this.set(c);return c.h}}this.q.push(a);if(this.p[a])throw Error("Circular reference: "+this.q.join(" --\> "));this.p[a]=l;return m},set:function(a){this.b.push(a);
a.e=this.e;this.f[a.e]=this.f[a.e]||{};this.f[a.e][a.d.key]=this.f[a.e][a.d.key]++||1},n:function(a){return!--this.f[a.e][a.d.key]},o:function(){this.e++;this.p={};this.q=[]}};t.prototype={get:function(a){for(var b=0,d=this.b.length;b<d;b++){var c=this.b[b];if(c.d.key===a){if(!c.h)break;this.set(c);return c.h}}return this.parent?this.parent.get(a):m},set:function(a){this.b.push(a);this.f[a.d.key]=this.f[a.d.key]++||1},n:function(a){return!--this.f[a.d.key]},o:function(){}};u.prototype={get:function(){return m},
set:function(a){this.b.push(a)},n:function(){return l},o:function(){}};k.prototype={get:function(){var a=Array.prototype.slice.call(arguments);a.unshift(this.key);a=this.a.get.apply(this.a,a);a.r=this;return a},l:function(a,b,d){this.a.j(a,b,d);return this},g:function(){this.a.g()}};n.prototype={get:function(){var a=new k(this.a,this.key);return a.get.apply(a,arguments)},l:function(a,b,d){return(new k(this.a,this.key)).l(a,b,d)},g:function(a){a.r.g();delete a.r}};j.prototype={t:{w:{suffixes:["?"],
s:function(a,b,d){return d?{i:!1}:{i:l,data:m}}},factory:{suffixes:["Factory","!"],u:function(a,b){return{i:l,data:new n(a,b)}}}},j:function(a,b,d){if(p(this,a).data)throw Error("Cannot register dependency: "+a);!d&&this.k[a]?this.k[a].value=b:this.k[a]=new w(a,this,b,d||"perRequest")},get:function(a){for(var b in this.c)this.c.hasOwnProperty(b)&&this.c[b].o(a);b=Array.prototype.slice.call(arguments).slice(1);for(var d=this,c;d&&(c=o(d,a,b))===m;)d=d.parent;return c},g:function(){for(var a;a=this.children.pop();)a.g();
for(var b=this.v();a=b.pop();)if(this.c[a.d.m].n(a)&&this.options.onDispose)this.options.onDispose(a.h,a.d.key);return l},create:function(a){a=a||{};a.onDispose=a.onDispose||this.options.onDispose;a=new j(a,this);this.children.push(a);return a},v:function(){var a=[],b;for(b in this.c)this.c.hasOwnProperty(b)&&(a=a.concat(this.c[b].b));return a}};h.create=function(a){return new j(a)};r("create",h.create)})()}
"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?q(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],q):q(window.intravenous={});l;
})(typeof window !== "undefined" ? window : global);
