(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),o=(a(11),a(2)),i=a(5),m=function(e){var t=e.addInput,a=e.calculate;return c.a.createElement("div",{numberOfine:1,style:{flex:1,display:"flex",flexDirection:"column"}},c.a.createElement("div",{style:{display:"flex",flex:1}},c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("7")}},"7")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("8")}},"8")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("9")}},"9")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("/")}},"\xf7"))),c.a.createElement("div",{style:{display:"flex",flex:1}},c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("4")}},"4")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("5")}},"5")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("6")}},"6")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("*")}},"*"))),c.a.createElement("div",{style:{display:"flex",flex:1}},c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("1")}},"1")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("2")}},"2")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("3")}},"3")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("-")}},"-"))),c.a.createElement("div",{style:{display:"flex",flex:1}},c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("0")}},"0")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t(".")}},".")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){a("=")}},"=")),c.a.createElement("div",{className:"centerme"},c.a.createElement("div",{className:"roundButton",onClick:function(){t("+")}},"+"))))},s=function(e){var t=e.input;return c.a.createElement("div",{className:"screen"},c.a.createElement("p",null,t))},u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",{className:"calc"},c.a.createElement("div",{className:"calcHeader"},"Calculator"),c.a.createElement(s,{input:a}),c.a.createElement(m,{addInput:function(e){var t="";if(0===a.length)return isNaN(Number(e))?(t=Object(o.a)(a),void l(t+=0+e)):(t=Object(o.a)(a),void l(t+=e));t=a,l(t+=e)},calculate:function(){try{l(new Function("return "+a)())}catch(e){console.log(e)}}}),c.a.createElement("div",{className:"clearButton",onClick:function(){l("")}},"Clear"))},d=a(1);function E(){return c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"Md Forhad Sarkar",c.a.createElement("br",null),"Software Engineer"),c.a.createElement("div",{className:"icon"},c.a.createElement("div",{style:{padding:10}},c.a.createElement(d.b,null),c.a.createElement("a",{target:"_blank",style:{color:"black",textDecoration:"none",textAlign:"center"},href:"https://www.linkedin.com/in/mdforhadsarkar/"},"LinkedIn")),c.a.createElement("div",{style:{padding:10}},c.a.createElement(d.a,null),c.a.createElement("a",{target:"_blank",style:{color:"black",textDecoration:"none",textAlign:"center"},href:"https://github.com/mdforhadsarker"},"Github"))))}a(12);var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.c77b0ca7.chunk.js.map