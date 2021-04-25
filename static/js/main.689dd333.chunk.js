(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{54:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),i=(a(54),a(41)),l=a(42),o=a(48),h=a(47),d=a(86),u=a(88),m=a(85),j=a(87),f=a(45),b=a(5);var O=function(e){return Object(b.jsxs)(d.a,{bg:"light",expand:"lg",children:[Object(b.jsx)(d.a.Brand,{href:"#home",children:"Employee Directory"}),Object(b.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsxs)(d.a.Collapse,{id:"basic-navbar-nav",children:[Object(b.jsxs)(u.a,{className:"mr-auto",children:[Object(b.jsx)(u.a.Link,{onClick:e.handleHome,href:"#",children:"Home"}),Object(b.jsxs)(m.a,{title:"Sort by",id:"basic-nav-dropdown",children:[Object(b.jsx)(m.a.Item,{onClick:e.handleFirstName,href:"#",children:"First name"}),Object(b.jsx)(m.a.Item,{onClick:e.handleLastName,href:"#",children:"Last name"}),Object(b.jsx)(m.a.Item,{onClick:e.handleEmail,href:"#",children:"Email"})]})]}),Object(b.jsx)(j.a,{inline:!0,children:Object(b.jsx)(f.a,{type:"text",placeholder:"Search by first letter",className:"mr-sm-2",value:e.search,onChange:e.handleChange})})]})]})};var x=function(e){return Object(b.jsx)(b.Fragment,{children:e.employees.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:e.picture.thumbnail,alt:e.name.first+e.name.last})}),Object(b.jsx)("td",{children:e.name.first}),Object(b.jsx)("td",{children:e.name.last}),Object(b.jsx)("td",{children:e.email})]},t)}))})},p=a(46),v=a.n(p),y=function(){return v.a.get("https://randomuser.me/api/?results=50")},g=a(84),N=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e.handleChange=function(t){t.preventDefault();var a=t.target.value;y().then((function(t){var n=t.data.results.filter((function(e){return e.name.first.includes(a)||e.name.last.includes(a)}));n===[]?alert("No employee data matching ".concat(a," found!")):e.setState({data:n,search:a})})).catch((function(e){return console.error(e)}))},e.handleHome=function(t){t.preventDefault(),y().then((function(t){var a=t.data.results;e.setState({data:a,search:""})})).catch((function(e){return console.error(e)}))},e.handleFirstName=function(t){t.preventDefault(),y().then((function(t){var a=t.data.results.map((function(e,t){return e}));a.sort((function(e,t){return e.name.first>t.name.first?1:e.name.first<t.name.first?-1:0})),e.setState({data:a,search:""})})).catch((function(e){return console.error(e)}))},e.handleLastName=function(t){t.preventDefault(),y().then((function(t){var a=t.data.results.map((function(e,t){return e}));a.sort((function(e,t){return e.name.last>t.name.last?1:e.name.last<t.name.last?-1:0})),e.setState({data:a,search:""})})).catch((function(e){return console.error(e)}))},e.handleEmail=function(t){t.preventDefault(),y().then((function(t){var a=t.data.results.map((function(e,t){return e}));a.sort((function(e,t){return e.email>t.email?1:e.email<t.email?-1:0})),e.setState({data:a,search:""})})).catch((function(e){return console.error(e)}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){var a=t.data.results;e.setState({data:a})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O,{search:this.state.search,handleChange:this.handleChange,handleHome:this.handleHome,handleFirstName:this.handleFirstName,handleLastName:this.handleLastName,handleEmail:this.handleEmail}),Object(b.jsxs)(g.a,{bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{}),Object(b.jsx)("th",{children:"First Name"}),Object(b.jsx)("th",{children:"Last Name"}),Object(b.jsx)("th",{children:"Email"})]})}),Object(b.jsx)("tbody",{children:Object(b.jsx)(x,{employees:this.state.data})})]})]})}}]),a}(r.a.Component);a(78);s.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.689dd333.chunk.js.map