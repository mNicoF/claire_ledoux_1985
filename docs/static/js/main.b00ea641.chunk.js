(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/tarifs_epil.c26bbdb4.PNG"},52:function(e,t,a){e.exports=a.p+"static/media/tarifs_soins.805ec453.PNG"},53:function(e,t,a){e.exports=a.p+"static/media/tarifs_dermo.2ec7fa44.PNG"},54:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/contact.0aa17b82.PNG"},59:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),o=a.n(c),i=a(6),s=a(7),l=a(10),u=a(8),m=a(11),p=a(65),d=a(67),h=a(66),f=a(64),v=a(9),b=a(17),E=a(63),O=(a(43),a(15)),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(Object(b.a)(a))),a.state={isOpen:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(e){this.setState({isOpen:null!=e?e:!this.state.isOpen})}},{key:"render",value:function(){var e=this,t=this.props.app.menu,a=[];for(var n in t)a.push(r.a.createElement(O.c,{key:t[n]},r.a.createElement(E.a,{to:"/"+t[n],onClick:function(){return e.toggle(!1)}},t[n].toUpperCase())));return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header theme"},r.a.createElement("h1",{className:"App-title"},"CLAIRE LEDOUX"),r.a.createElement(O.d,{light:!0,expand:"md"},r.a.createElement(O.e,{onClick:function(){return e.toggle()}}),r.a.createElement(O.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(O.b,{navbar:!0},a)))))}}]),t}(n.Component),g=Object(v.b)(function(e){return{app:e.appReducer}})(j),w=a(30),k=(a(45),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={appInfos:a.props.app},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return[this.props.rec?r.a.createElement("div",{className:"Rec-footer"},r.a.createElement("div",{className:"Footer-left"},"Ce site est une version de test pour le d\xe9veloppement du projet, vous ne devriez pas \xeatre l\xe0..."),r.a.createElement("div",{className:"Footer-right"},"Allez directement sur le site officiel ->",r.a.createElement("a",{href:"http://claireledoux.fr/",rel:"noopener noreferrer",className:"Footer-link"}," claireledoux.fr"))):r.a.createElement("div",{className:"App-footer theme-reverse"},r.a.createElement("div",{className:"Footer-left"},r.a.createElement(w.a,{icon:["far","copyright"]}),r.a.createElement("a",{href:this.state.appInfos.author.link,target:"_blank",rel:"noopener noreferrer",className:"Footer-link"}," ",this.state.appInfos.author.name)),r.a.createElement("div",{className:"Footer-right",title:"Derni\xe8re mise \xe0 jour : "+this.state.appInfos.dateMaJ},"Version ",this.state.appInfos.version))]}}]),t}(n.Component)),N=Object(v.b)(function(e){return{app:e.appReducer}})(k),y=(a(47),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"AccueilLayout"},r.a.createElement("div",{className:"AccueilH3"},"Bienvenue"),r.a.createElement("div",null,"Le cabinet de dermographie vous attend !"),r.a.createElement("div",null,"Suivez toutes les informations sur Facebook :  "),r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement("a",{className:"AccueilBtn",target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/claireledoux1985/"},"@claireledoux1985")),r.a.createElement("div",{style:{"font-size":"2vmax"}},"- Ce site est toujours en cours de d\xe9veloppement -"))}}]),t}(n.Component)),C=Object(v.b)()(y),x=(a(49),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TarifsLayout"},r.a.createElement("img",{className:"TarifEpileIMG",src:a(51),alt:"epilations"}),r.a.createElement("img",{className:"TarifSoinsIMG",src:a(52),alt:"soins"}),r.a.createElement("img",{className:"TarifDermoIMG",src:a(53),alt:"dermographie"}))}}]),t}(n.Component)),I=Object(v.b)()(x),L=(a(54),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ContactLayout"},r.a.createElement("img",{className:"ContactIMG",src:a(56),alt:"horaires"}))}}]),t}(n.Component)),F=Object(v.b)(function(e){return{app:e.appReducer}})(L),A=a(14),G=a(31),M={menu:["accueil","prestations","contact"],version:"1.0.2",dateMaJ:"22/01/2019",author:{name:"Nicolas Forget",link:"https://www.linkedin.com/in/m-nicolas-forget/"}};function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;arguments.length>1&&arguments[1];return e}var H={menu:["accueil","prestations","contact"],version:"0.1.2",dateMaJ:"17/01/2019",author:{name:"Nicolas Forget",link:"https://www.linkedin.com/in/m-nicolas-forget/"}};function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H;arguments.length>1&&arguments[1];return e}a(57),a(59);var _=a(18),z=a(32);_.b.add(z.a);var B=Object(A.c)({appReducer:R,contactReducer:J}),D=Object(G.createLogger)({level:"log"}),P=Object(A.d)(B,Object(A.a)(D)),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("pushstate",this.handleHistory,!1),window.addEventListener("popstate",this.handleHistory,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("pushstate",this.handleHistory),window.removeEventListener("popstate",this.handleHistory)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{store:P},r.a.createElement(p.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/accueil",component:C}),r.a.createElement(h.a,{path:"/prestations",component:I}),r.a.createElement(h.a,{path:"/contact",component:F}),r.a.createElement(f.a,{path:"*",to:"/accueil"})),r.a.createElement(N,{rec:!0})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.b00ea641.chunk.js.map