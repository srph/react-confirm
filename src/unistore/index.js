!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.unistore=t()}(this,function(){function n(n,t){for(var e in t)n[e]=t[e];return n}return function(t){function e(n){for(var t=[],e=0;e<r.length;e++)r[e]===n?n=null:t.push(r[e]);r=t}function u(e,u){t=u?e:n(n({},t),e);for(var o=r,f=0;f<o.length;f++)o[f](t)}var r=[];return t=t||{},{action:function(n){return function(){for(var e=arguments,r=[t],o=0;o<arguments.length;o++)r.push(e[o]);var f=n.apply(this,r);null!=f&&(f.then?f.then(u):u(f))}},setState:u,subscribe:function(n){return r.push(n),function(){e(n)}},unsubscribe:e,getState:function(){return t}}}});
//# sourceMappingURL=unistore.umd.js.map