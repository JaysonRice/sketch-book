(this["webpackJsonpsketch-book-react"]=this["webpackJsonpsketch-book-react"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),i=n.n(r),o=(n(15),n(4)),u=(n(6),function(e){e.setActiveView;return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"sketch-book-home"},c.a.createElement("p",null,"Home Page")))}),l=n(1),s=n(3),h=n(2),f=n(8),m=n(9),p=n.n(m),d=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).Sketch=function(e){throw new Error("NotImplementedError: must define Sketch method with a setup & draw\n\n        Example:\n        export default class MySketch extends Sketch {\n          Sketch = (p) => {\n            p.sketch = () => {\n              p.createCanvas(512, 512);\n            }\n\n            p.draw = () => {\n              p.background(20);\n              p.ellipse(p.width / 2, p.height / 2, 100);\n            }\n          }\n        }")},a.myRef=c.a.createRef(),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.myP5=new p.a(this.Sketch,this.myRef.current)}},{key:"render",value:function(){return c.a.createElement("div",{ref:this.myRef})}}]),n}(c.a.Component),b=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).Sketch=function(e){e.setup=function(){e.createCanvas(512,512)},e.draw=function(){e.background(20),e.ellipse(e.width/2,e.height/2,100)}},e}return n}(d),v=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).Sketch=function(e){e.setup=function(){e.createCanvas(512,512)},e.draw=function(){e.background(150),e.ellipse(e.width/2,e.height/2,40)}},e}return n}(d);var k=function(){var e=Object(a.useState)("true"),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(),l=Object(o.a)(i,2),s=l[0],h=l[1],f=function(){return c.a.createElement("div",{className:"homeContainer"},c.a.createElement(u,{setActiveView:r}))},m=function(){return c.a.createElement("div",{className:"triviaContainer"},n?c.a.createElement(b,null):c.a.createElement(v,null))};return Object(a.useEffect)((function(){h("home"===n?f:m)}),[n]),c.a.createElement("div",{className:"App"},s,c.a.createElement("button",{onClick:function(){return r(!n)}},"Toggle Circles"))},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),g()},6:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.570dd0a5.chunk.js.map