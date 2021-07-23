(this["webpackJsonpcrud-app"]=this["webpackJsonpcrud-app"]||[]).push([[0],{13:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(8),s=a.n(l),r=(a(13),a(2)),c=a(3),o=a.n(c),u=a(0),m=function(e){var t=e.setIsAuthenticated,a=Object(n.useState)("admin@example.com"),i=Object(r.a)(a,2),l=i[0],s=i[1],c=Object(n.useState)("qwerty"),m=Object(r.a)(c,2),d=m[0],j=m[1];return Object(u.jsx)("div",{className:"small-container",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"admin@example.com"===l&&"qwerty"===d?o.a.fire({timer:1500,showConfirmButton:!1,willOpen:function(){o.a.showLoading()},willClose:function(){t(!0),o.a.fire({icon:"success",title:"Successfully logged in!",showConfirmButton:!1,timer:1500})}}):o.a.fire({timer:1500,showConfirmButton:!1,willOpen:function(){o.a.showLoading()},willClose:function(){o.a.fire({icon:"error",title:"Error!",text:"Incorrect email or password.",showConfirmButton:!0})}})},children:[Object(u.jsx)("h1",{children:"Admin Login"}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"admin@example.com",value:l,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{id:"password",type:"password",name:"password",placeholder:"qwerty",value:d,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("input",{style:{marginTop:"12px"},type:"submit",value:"Login"})]})})},d=function(e){var t=e.setIsAuthenticated;return Object(u.jsx)("button",{style:{marginLeft:"12px"},className:"muted-button",onClick:function(){o.a.fire({icon:"question",title:"Logging Out",text:"Are you sure you want to log out?",showCancelButton:!0,confirmButtonText:"Yes"}).then((function(e){e.value&&o.a.fire({timer:1500,showConfirmButton:!1,willOpen:function(){o.a.showLoading()},willClose:function(){t(!1)}})}))},children:"Logout"})},j=function(e){var t=e.setIsAdding,a=e.setIsAuthenticated;return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"Employee Management Software"}),Object(u.jsxs)("div",{style:{marginTop:"30px",marginBottom:"18px"},children:[Object(u.jsx)("button",{onClick:function(){return t(!0)},children:"Add Employee"}),Object(u.jsx)(d,{setIsAuthenticated:a})]})]})},b=function(e){var t=e.employees,a=e.handleEdit,n=e.handleDelete;t.forEach((function(e,t){e.id=t+1}));var i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:null});return Object(u.jsx)("div",{className:"contain-table",children:Object(u.jsxs)("table",{className:"striped-table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"No."}),Object(u.jsx)("th",{children:"First Name"}),Object(u.jsx)("th",{children:"Last Name"}),Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Salary"}),Object(u.jsx)("th",{children:"Date"}),Object(u.jsx)("th",{colSpan:2,className:"text-center",children:"Actions"})]})}),Object(u.jsx)("tbody",{children:t.length>0?t.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t+1}),Object(u.jsx)("td",{children:e.firstName}),Object(u.jsx)("td",{children:e.lastName}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:i.format(e.salary)}),Object(u.jsxs)("td",{children:[e.date," "]}),Object(u.jsx)("td",{className:"text-right",children:Object(u.jsx)("button",{onClick:function(){return a(e.id)},className:"button muted-button",children:"Edit"})}),Object(u.jsx)("td",{className:"text-left",children:Object(u.jsx)("button",{onClick:function(){return n(e.id)},className:"button muted-button",children:"Delete"})})]},e.id)})):Object(u.jsx)("tr",{children:Object(u.jsx)("td",{colSpan:7,children:"No Employees"})})})]})})},h=function(e){var t=e.employees,a=e.setEmployees,i=e.setIsAdding,l=Object(n.useState)(""),s=Object(r.a)(l,2),c=s[0],m=s[1],d=Object(n.useState)(""),j=Object(r.a)(d,2),b=j[0],h=j[1],O=Object(n.useState)(""),x=Object(r.a)(O,2),f=x[0],p=x[1],y=Object(n.useState)(""),N=Object(r.a)(y,2),g=N[0],v=N[1],w=Object(n.useState)(""),C=Object(r.a)(w,2),S=C[0],E=C[1];return Object(u.jsx)("div",{className:"small-container",children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!c||!b||!f||!g||!S)return o.a.fire({icon:"error",title:"Error!",text:"All fields are required.",showConfirmButton:!0});var n={id:t.length+1,firstName:c,lastName:b,email:f,salary:g,date:S};t.push(n),a(t),i(!1),o.a.fire({icon:"success",title:"Added!",text:"".concat(c," ").concat(b,"'s data has been Added."),showConfirmButton:!1,timer:1500})},children:[Object(u.jsx)("h1",{children:"Add Employee"}),Object(u.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(u.jsx)("input",{id:"firstName",type:"text",name:"firstName",value:c,onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(u.jsx)("input",{id:"lastName",type:"text",name:"lastName",value:b,onChange:function(e){return h(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{id:"email",type:"email",name:"email",value:f,onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"salary",children:"Salary ($)"}),Object(u.jsx)("input",{id:"salary",type:"number",name:"salary",value:g,onChange:function(e){return v(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"date",children:"Date"}),Object(u.jsx)("input",{id:"date",type:"date",name:"date",value:S,onChange:function(e){return E(e.target.value)}}),Object(u.jsxs)("div",{style:{marginTop:"30px"},children:[Object(u.jsx)("input",{type:"submit",value:"Add"}),Object(u.jsx)("input",{style:{marginLeft:"12px"},className:"muted-button",type:"button",value:"Cancel",onClick:function(){return i(!1)}})]})]})})},O=function(e){var t=e.employees,a=e.selectedEmployee,i=e.setEmployees,l=e.setIsEditing,s=a.id,c=Object(n.useState)(a.firstName),m=Object(r.a)(c,2),d=m[0],j=m[1],b=Object(n.useState)(a.lastName),h=Object(r.a)(b,2),O=h[0],x=h[1],f=Object(n.useState)(a.email),p=Object(r.a)(f,2),y=p[0],N=p[1],g=Object(n.useState)(a.salary),v=Object(r.a)(g,2),w=v[0],C=v[1],S=Object(n.useState)(a.date),E=Object(r.a)(S,2),A=E[0],F=E[1];return Object(u.jsx)("div",{className:"small-container",children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!d||!O||!y||!w||!A)return o.a.fire({icon:"error",title:"Error!",text:"All fields are required.",showConfirmButton:!0});for(var a={id:s,firstName:d,lastName:O,email:y,salary:w,date:A},n=0;n<t.length;n++)if(t[n].id===s){t.splice(n,1,a);break}i(t),l(!1),o.a.fire({icon:"success",title:"Updated!",text:"".concat(a.firstName," ").concat(a.lastName,"'s data has been updated."),showConfirmButton:!1,timer:1500})},children:[Object(u.jsx)("h1",{children:"Edit Employee"}),Object(u.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(u.jsx)("input",{id:"firstName",type:"text",name:"firstName",value:d,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(u.jsx)("input",{id:"lastName",type:"text",name:"lastName",value:O,onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{id:"email",type:"email",name:"email",value:y,onChange:function(e){return N(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"salary",children:"Salary ($)"}),Object(u.jsx)("input",{id:"salary",type:"number",name:"salary",value:w,onChange:function(e){return C(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"date",children:"Date"}),Object(u.jsx)("input",{id:"date",type:"date",name:"date",value:A,onChange:function(e){return F(e.target.value)}}),Object(u.jsxs)("div",{style:{marginTop:"30px"},children:[Object(u.jsx)("input",{type:"submit",value:"Update"}),Object(u.jsx)("input",{style:{marginLeft:"12px"},className:"muted-button",type:"button",value:"Cancel",onClick:function(){return l(!1)}})]})]})})},x=[{id:1,firstName:"Susan",lastName:"Jordon",email:"susan@example.com",salary:"95000",date:"2019-04-11"},{id:2,firstName:"Adrienne",lastName:"Doak",email:"adrienne@example.com",salary:"80000",date:"2019-04-17"},{id:3,firstName:"Rolf",lastName:"Hegdal",email:"rolf@example.com",salary:"79000",date:"2019-05-01"},{id:4,firstName:"Kent",lastName:"Rosner",email:"kent@example.com",salary:"56000",date:"2019-05-03"},{id:5,firstName:"Arsenio",lastName:"Grant",email:"arsenio@example.com",salary:"65000",date:"2019-06-13"},{id:6,firstName:"Laurena",lastName:"Lurie",email:"laurena@example.com",salary:"120000",date:"2019-07-30"},{id:7,firstName:"George",lastName:"Tallman",email:"george@example.com",salary:"90000",date:"2019-08-15"},{id:8,firstName:"Jesica",lastName:"Watlington",email:"jesica@example.com",salary:"60000",date:"2019-10-10"},{id:9,firstName:"Matthew",lastName:"Warren",email:"matthew@example.com",salary:"71000",date:"2019-10-15"},{id:10,firstName:"Lyndsey",lastName:"Follette",email:"lyndsey@example.com",salary:"110000",date:"2020-01-15"}],f=function(e){var t=e.setIsAuthenticated,a=Object(n.useState)(x),i=Object(r.a)(a,2),l=i[0],s=i[1],c=Object(n.useState)(null),m=Object(r.a)(c,2),d=m[0],f=m[1],p=Object(n.useState)(!1),y=Object(r.a)(p,2),N=y[0],g=y[1],v=Object(n.useState)(!1),w=Object(r.a)(v,2),C=w[0],S=w[1];return Object(u.jsxs)("div",{className:"container",children:[!N&&!C&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{setIsAdding:g,setIsAuthenticated:t}),Object(u.jsx)(b,{employees:l,handleEdit:function(e){var t=l.filter((function(t){return t.id===e})),a=Object(r.a)(t,1)[0];f(a),S(!0)},handleDelete:function(e){o.a.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!"}).then((function(t){if(t.value){var a=l.filter((function(t){return t.id===e})),n=Object(r.a)(a,1)[0];o.a.fire({icon:"success",title:"Deleted!",text:"".concat(n.firstName," ").concat(n.lastName,"'s data has been deleted."),showConfirmButton:!1,timer:1500}),s(l.filter((function(t){return t.id!==e})))}}))}})]}),N&&Object(u.jsx)(h,{employees:l,setEmployees:s,setIsAdding:g}),C&&Object(u.jsx)(O,{employees:l,selectedEmployee:d,setEmployees:s,setIsEditing:S})]})},p=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(u.jsx)(u.Fragment,{children:a?Object(u.jsx)(f,{setIsAuthenticated:i}):Object(u.jsx)(m,{setIsAuthenticated:i})})};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ba2c55da.chunk.js.map