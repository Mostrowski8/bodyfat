(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(49)},34:function(e,t,a){},36:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),s=a(9),i=a.n(s),c=(a(34),a(26)),r=a(12),o=a(13),m=a(16),u=a(14),h=a(15),d=a(7),b=(a(36),a(21),a(41)),p=a(53),f=a(54),g=a(55),v=a(56),E=a(50),O=a(51),w=a(52),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.select=a.select.bind(Object(d.a)(Object(d.a)(a))),a.state={dropdownOpen:!1,value:"Male"},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"select",value:function(e){e.target.innerText!==this.state.value&&(this.setState({dropdownOpen:!this.state.dropdownOpen,value:e.target.innerText}),this.props.setSex())}},{key:"render",value:function(){return l.a.createElement(v.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle},l.a.createElement(E.a,{caret:!0},this.state.value),l.a.createElement(O.a,null,l.a.createElement(w.a,{onClick:this.select},"Male"),l.a.createElement(w.a,{divider:!0}),l.a.createElement(w.a,{onClick:this.select},"Female")))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={age:0,fieldtwo:0,fieldthree:0,fieldone:0,submit:!1,inputdone:!1,sex:!0},a.handleChange=a.handleChange.bind(Object(d.a)(Object(d.a)(a))),a.onSubmit=a.onSubmit.bind(Object(d.a)(Object(d.a)(a))),a.setSex=a.setSex.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=e.target.value,n=t.name;this.setState(Object(c.a)({},n,Number(a))),this.setState({submit:!1})}},{key:"onSubmit",value:function(){this.setState({submit:!0})}},{key:"calculateMale",value:function(e,t,a,n){return 457/(1.10938-8267e-7*(t+a+n)+16e-7*Math.pow(t+a+n,2)-2574e-7*e)-414.2}},{key:"calculateFemale",value:function(e,t,a,n){return 457/(1.099421-9929e-7*(t+a+n)+23e-7*Math.pow(t+a+n,2)-1392e-7*e)-414.2}},{key:"setSex",value:function(){this.setState({sex:!this.state.sex,age:0,fieldtwo:0,fieldthree:0,fieldone:0,submit:!1})}},{key:"render",value:function(){var e=[this.state.age,this.state.fieldone,this.state.fieldtwo,this.state.fieldthree],t=this.state.submit,a=void 0===e.find(function(e){return""===e||0===e});return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm text-center"},l.a.createElement("label",{className:"label"},"Sex"),l.a.createElement(j,{setSex:this.setSex,sex:this.state.sex})),l.a.createElement("div",{className:"col-sm text-center"},l.a.createElement("label",{className:"label"},"Age"),l.a.createElement("input",{name:"age",min:"0",value:this.state.age,className:"input",type:"number",onChange:this.handleChange})),l.a.createElement("div",{className:"col-sm text-center"},l.a.createElement("label",{className:"label"},this.state.sex?"Chest (mm)":"Triceps (mm)"),l.a.createElement("input",{name:"fieldone",className:"input",min:"0",value:this.state.fieldone,type:"number",onChange:this.handleChange})),l.a.createElement("div",{className:"col-sm text-center"},l.a.createElement("label",{className:"label"},this.state.sex?"Stomach (mm)":"Hips (mm)"),l.a.createElement("input",{name:"fieldtwo",className:"input",min:"0",value:this.state.fieldtwo,type:"number",onChange:this.handleChange})),l.a.createElement("div",{className:"col-sm text-center"},l.a.createElement("label",{className:"label"},"Thigh (mm)"),l.a.createElement("input",{name:"fieldthree",className:"input",min:"0",value:this.state.fieldthree,type:"number",onChange:this.handleChange}))),a&&!t&&l.a.createElement("button",{className:"buttonfat",onClick:this.onSubmit},"Calculate body fat"),t&&l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm bodyfat"},"Body fat "+(this.state.sex?this.calculateFemale.apply(this,e).toFixed(2):this.calculateMale.apply(this,e).toFixed(2))+"%")),!a&&l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm bodyfat"},"Please fill all input fields"))),l.a.createElement(k,{sex:this.state.sex}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(d.a)(Object(d.a)(a))),a.state={collapse:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container info"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement(b.a,{color:"secondary",className:"infobttn",onClick:this.toggle,style:{margin:"1rem"}},"Click for info"),l.a.createElement(p.a,{isOpen:this.state.collapse},l.a.createElement(f.a,null,l.a.createElement(g.a,null,l.a.createElement("p",null,"The formula has been taken from ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.sfd.pl/Zmierz_dok%C5%82adnie_sw%C3%B3j_poziom_t%C5%82uszczu-czyli_wielopartyjna_metoda_pomiaru_fa%C5%82domierzem-t263219.html"},"this page"),"."),l.a.createElement("p",null,"It is based on skinfold measurement method ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.ptdirect.com/training-delivery/client-assessment/taking-skin-fold-body-fat-measurements"},"described here"),"."),l.a.createElement("p",null,"Measurements have to be taken from:"),l.a.createElement("ul",null,l.a.createElement("li",null,this.props.sex?"Your chest area":"Your triceps area"),l.a.createElement("li",null,this.props.sex?"Your stomach area":"Your hip area"),l.a.createElement("li",null,"Your thigh area"))))))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={female:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{minHeight:"100%"}},l.a.createElement("h1",{className:"heading"},"BODY FAT CALCULATOR"),l.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.d495a685.chunk.js.map