function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var c=0;c<n.length;c++){var a=n[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,n,c){return n&&_defineProperties(t.prototype,n),c&&_defineProperties(t,c),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IkYY:function(t,n,c){"use strict";c.r(n),c.d(n,"CollapseGenerateModule",(function(){return v}));var a=c("ofXK"),e=c("tyNb"),o=c("fXoL"),i=c("PTRe"),u=c("3Pt+"),r=c("OzZK"),d=c("RwU8"),s=c("C2AL");function b(t,n){if(1&t&&(o.Zb(0,"span",10),o.Kc(1),o.Yb()),2&t){var c=o.kc();o.Db(1),o.Lc(c.err)}}var l,h,p=[{path:"",component:(l=function(){function t(){_classCallCheck(this,t),this.curYear=(new Date).getFullYear(),this.thuTu=Date.now(),this.inputValue="",this.ouputCode="",this.err=""}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"addSeparator",value:function(){this.inputValue+=" | ",document.getElementById("inputdata").focus()}},{key:"addVideoSeparator",value:function(){this.inputValue+=" ** ",document.getElementById("inputdata").focus()}},{key:"addContentMaker",value:function(){this.inputValue+=" ~ ",document.getElementById("inputdata").focus()}},{key:"genCode",value:function(){try{if(this.err="",this.ouputCode="",!this.thuTu)throw"Vui l\xf2ng \u0111i\u1ec1n b\u01b0\u1edbc 0";if(""===this.inputValue)throw"Vui l\xf2ng \u0111i\u1ec1n b\u01b0\u1edbc 1";this.ouputCode='<div id="accordion'.concat(this.thuTu,'">');for(var t=this.inputValue.split("\n"),n=0;n<t.length;n++){var c=t[n].split("|");if(2!==c.length)throw"B\u01b0\u1edbc 1 c\xf3 l\u1ed7i \u0111\u1ecbnh d\u1ea1ng \u1edf d\xf2ng th\u1ee9 "+(n+1)+". Vui l\xf2ng ki\u1ec3m tra l\u1ea1i. (Ch\xfa \xfd kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 d\xf2ng tr\u1ed1ng)";if("~"===c[1].trim())this.ouputCode+='\n  <div class="card">\n    <div class="card-header" id="heading'.concat(n+1,'">\n      <h5 class="mb-0">\n        <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapse').concat(this.thuTu,"s").concat(n+1,'" aria-expanded="false" aria-controls="collapse').concat(this.thuTu,"s").concat(n+1,'">').concat(c[0].trim(),'</button>\n      </h5>\n    </div>\n    <div id="collapse').concat(this.thuTu,"s").concat(n+1,'" class="collapse" aria-labelledby="heading').concat(n+1,'" data-parent="#accordion').concat(this.thuTu,'">\n    <div class="card-body"></div>\n    <div class="card-body">\n      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n    </div>\n    <div class="card-body"></div>\n    </div>\n  </div>\n            ');else if(c[1].includes("**")){var a=c[1].split("**");this.ouputCode+='\n  <div class="card">\n    <div class="card-header" id="heading'.concat(n+1,'">\n      <h5 class="mb-0">\n        <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapse').concat(this.thuTu,"s").concat(n+1,'" aria-expanded="false" aria-controls="collapse').concat(this.thuTu,"s").concat(n+1,'">').concat(c[0].trim(),'</button>\n      </h5>\n    </div>\n    <div id="collapse').concat(this.thuTu,"s").concat(n+1,'" class="collapse" aria-labelledby="heading').concat(n+1,'" data-parent="#accordion').concat(this.thuTu,'">\n      <div class="card-body card-body-custom">');for(var e=0;e<a.length;e++)this.ouputCode+='\n        <video controls="true"><source src="'.concat(a[e].trim(),'">').concat(a[e].trim(),"</video><br>");this.ouputCode+='\n      </div>\n      <div class="card-body"></div>\n    </div>\n  </div>',n===t.length-1&&(this.ouputCode+="</div>")}else this.ouputCode+='\n  <div class="card">\n    <div class="card-header" id="heading'.concat(n+1,'">\n      <h5 class="mb-0">\n        <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapse').concat(this.thuTu,"s").concat(n+1,'" aria-expanded="false" aria-controls="collapse').concat(this.thuTu,"s").concat(n+1,'">').concat(c[0].trim(),'</button>\n      </h5>\n    </div>\n    <div id="collapse').concat(this.thuTu,"s").concat(n+1,'" class="collapse" aria-labelledby="heading').concat(n+1,'" data-parent="#accordion').concat(this.thuTu,'">\n      <div class="card-body"></div>\n      <div class="card-body card-body-custom">\n        <video controls="true"><source src="').concat(c[1].trim(),'">').concat(c[1].trim(),'</video>\n      </div>\n      <div class="card-body"></div>\n    </div>\n  </div>\n            '),n===t.length-1&&(this.ouputCode+="</div>")}this.thuTu=Date.now()}catch(o){this.thuTu=Date.now(),this.err=o,console.log(o)}}}]),t}(),l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=o.Nb({type:l,selectors:[["app-collapse-generate-tool"]],decls:83,vars:5,consts:[[1,"content"],[2,"text-align","center"],["nz-input","","placeholder","VD: 1","type","number",3,"ngModel","ngModelChange"],[2,"color","red"],[2,"color","blue"],["nz-button","","nzType","primary","nzSize","small",3,"click"],["id","inputdata","rows","10","nz-input","","placeholder","V\xed d\u1ee5 m\u1eabu: \nT\xedch ph\xe2n | https://youtu.be/Nznsrngfbm \n1.1. H\xe0m s\u1ed1 | https://youtu.be/NzY-K2rYzzzz ** https://youtu.be/NzY-K2rYyyyy ** https://youtu.be/NzY-K2rYaaaa \n2. | ~",1,"input-data",3,"ngModel","ngModelChange"],["nz-button","","nzType","primary","type","button",3,"click"],["class","error",4,"ngIf"],["rows","5","nz-input","","placeholder","Ph\u1ea3i chu\u1ed9t, ch\u1ecdn t\u1ea5t c\u1ea3 v\xe0 copy ho\u1eb7c b\u1ea5m t\u1ed5 h\u1ee3p ph\xedm: [Ctrl + A], sau \u0111\xf3 [Ctrl + C]",1,"output-data",3,"ngModel","ngModelChange"],[1,"error"]],template:function(t,n){1&t&&(o.Zb(0,"div",0),o.Zb(1,"h1",1),o.Zb(2,"b"),o.Kc(3,"C\xf4ng c\u1ee5 t\u1ea1o m\xe3 HTML: Kh\u1ed1i \u0111\xf3ng/m\u1edf (d\xe0nh cho video)"),o.Yb(),o.Yb(),o.Zb(4,"b"),o.Zb(5,"span"),o.Kc(6,"B\u01b0\u1edbc 0. (Kh\xf4ng b\u1eaft bu\u1ed9c, m\xe3 n\xe0y s\u1ebd t\u1ef1 \u0111\u1ed9ng t\u1ea1o m\u1edbi)."),o.Yb(),o.Kc(7," Nh\u1eadp m\xe3 c\u1ee7a kh\u1ed1i \u0111\xf3ng/m\u1edf (c\xe1c kh\u1ed1i kh\xe1c nhau ph\u1ea3i c\xf3 s\u1ed1 kh\xe1c nhau)"),o.Yb(),o.Zb(8,"input",2),o.hc("ngModelChange",(function(t){return n.thuTu=t})),o.Yb(),o.Ub(9,"br"),o.Ub(10,"br"),o.Zb(11,"b"),o.Zb(12,"span",3),o.Kc(13,"B\u01b0\u1edbc 1."),o.Yb(),o.Kc(14," Nh\u1eadp li\u1ec7u theo \u0111\u1ecbnh d\u1ea1ng t\u01b0\u01a1ng \u1ee9ng b\xean d\u01b0\u1edbi:"),o.Yb(),o.Ub(15,"br"),o.Zb(16,"b"),o.Kc(17,"a. N\u1ebfu m\u1ed7i th\u1ebb \u0111\xf3ng/m\u1edf ch\u1ee9a 01 video th\xec nh\u1eadp theo \u0111\u1ecbnh d\u1ea1ng: "),o.Zb(18,"u",4),o.Kc(19,"T\xean \u0111\u1ec1 m\u1ee5c "),o.Zb(20,"b",3),o.Kc(21,"|"),o.Yb(),o.Kc(22," Link Youtube"),o.Yb(),o.Kc(23,". V\xed d\u1ee5: "),o.Yb(),o.Zb(24,"i"),o.Kc(25,"H\xe0m s\u1ed1 "),o.Zb(26,"b",3),o.Kc(27,"|"),o.Yb(),o.Kc(28," https://youtu.be/NzY-K2rYzzzz"),o.Yb(),o.Ub(29,"br"),o.Zb(30,"b"),o.Kc(31,"b. N\u1ebfu c\xf3 nhi\u1ec1u video trong 01 th\u1ebb \u0111\xf3ng/m\u1edf th\xec c\xe1c link youtube \u0111\u01b0\u1ee3c c\xe1ch nhau v\u1edbi 2 d\u1ea5u sao li\xean ti\u1ebfp (**)."),o.Yb(),o.Zb(32,"b"),o.Kc(33," V\xed d\u1ee5: "),o.Yb(),o.Zb(34,"i"),o.Kc(35,"H\xe0m s\u1ed1 "),o.Zb(36,"b",3),o.Kc(37,"|"),o.Yb(),o.Kc(38," https://youtu.be/NzY-K2rYzzzz "),o.Zb(39,"b",3),o.Kc(40,"**"),o.Yb(),o.Kc(41," https://youtu.be/NzY-K2rYyyyy"),o.Yb(),o.Ub(42,"br"),o.Zb(43,"b"),o.Kc(44,"c. N\u1ebfu kh\xf4ng d\xf9ng th\u1ebb \u0111\xf3ng m\u1edf \u0111\u1ec3 ch\u1ee9a video m\xe0 ch\u1ee9a n\u1ed9i dung kh\xe1c (v\xed d\u1ee5 h\xecnh \u1ea3nh, b\u1ea3ng bi\u1ec3u, v.v...) th\xec \u0111\u1ecbnh d\u1ea1ng s\u1ebd l\xe0: "),o.Zb(45,"u",4),o.Kc(46,"T\xean \u0111\u1ec1 m\u1ee5c | ~"),o.Yb(),o.Yb(),o.Zb(47,"b"),o.Kc(48," V\xed d\u1ee5: "),o.Yb(),o.Zb(49,"i"),o.Kc(50,"H\xe0m s\u1ed1 "),o.Zb(51,"b",3),o.Kc(52,"| ~"),o.Yb(),o.Yb(),o.Ub(53,"br"),o.Zb(54,"button",5),o.hc("click",(function(){return n.addSeparator()})),o.Kc(55,"Th\xeam d\u1ea5u |"),o.Yb(),o.Kc(56," - "),o.Zb(57,"button",5),o.hc("click",(function(){return n.addVideoSeparator()})),o.Kc(58,"Th\xeam d\u1ea5u **"),o.Yb(),o.Kc(59," - "),o.Zb(60,"button",5),o.hc("click",(function(){return n.addContentMaker()})),o.Kc(61,"Th\xeam d\u1ea5u ~"),o.Yb(),o.Zb(62,"textarea",6),o.hc("ngModelChange",(function(t){return n.inputValue=t})),o.Yb(),o.Ub(63,"br"),o.Zb(64,"b"),o.Zb(65,"span",3),o.Kc(66,"B\u01b0\u1edbc 2. "),o.Yb(),o.Yb(),o.Kc(67,"Click "),o.Zb(68,"button",7),o.hc("click",(function(){return n.genCode()})),o.Kc(69,"T\u1ea1o m\xe3 HTML"),o.Yb(),o.Ic(70,b,2,1,"span",8),o.Ub(71,"br"),o.Ub(72,"hr"),o.Zb(73,"b"),o.Zb(74,"span",3),o.Kc(75,"B\u01b0\u1edbc 3."),o.Yb(),o.Kc(76," Copy t\u1ea5t c\u1ea3 \u0111\u1ea7u ra \u1edf \u0111\xe2y ([Ctrl + A], sau \u0111\xf3 [Ctrl + C]):"),o.Yb(),o.Zb(77,"textarea",9),o.hc("ngModelChange",(function(t){return n.ouputCode=t})),o.Yb(),o.Ub(78,"br"),o.Ub(79,"br"),o.Zb(80,"div",1),o.Kc(81),o.Yb(),o.Ub(82,"br"),o.Yb()),2&t&&(o.Db(8),o.sc("ngModel",n.thuTu),o.Db(54),o.sc("ngModel",n.inputValue),o.Db(8),o.sc("ngIf",""!==n.err),o.Db(7),o.sc("ngModel",n.ouputCode),o.Db(4),o.Mc("UTEX-TOOLKIT.CF | Copyright \xa9 2020 - ",n.curYear," UTEx LMS. COST - HCMUTE. All rights reserved. "))},directives:[i.b,u.k,u.c,u.i,u.j,r.a,d.a,s.a,a.l],styles:[".input-data[_ngcontent-%COMP%], .output-data[_ngcontent-%COMP%]{width:100%}.error[_ngcontent-%COMP%]{color:red;margin-left:10px}"]}),l)}],g=c("PMIT"),v=((h=function t(){_classCallCheck(this,t)}).\u0275mod=o.Rb({type:h}),h.\u0275inj=o.Qb({factory:function(t){return new(t||h)},imports:[[a.c,u.f,u.l,g.a,e.g.forChild(p)]]}),h)}}]);