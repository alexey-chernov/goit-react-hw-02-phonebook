(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={Label:"Filter_Label__3FoRN",Input:"Filter_Input__20k7U"}},14:function(t,e,n){t.exports={Container:"Container_Container__3tQ9A"}},2:function(t,e,n){t.exports={Form:"FormContacts_Form__1PDtW",Label:"FormContacts_Label__13aMi",Input:"FormContacts_Input__2v-lW",Button:"FormContacts_Button__uqumT"}},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),o=n(15),i=n(4),l=n(5),u=n(8),m=n(7),b=n(14),d=n.n(b),h=n(0);var j=function(t){var e=t.children;return Object(h.jsx)("div",{className:d.a.Container,children:e})},f=n(6),p=n(11),C=n.n(p),_=n(2),O=n.n(_),x=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(f.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){return t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:O.a.Form,onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:O.a.Label,children:["\u0406\u043c'\u044f",Object(h.jsx)(C.a,{className:O.a.Input,type:"text",name:"name",maxLength:"20",placeholder:"Sylvester Stalone",title:"\u0406\u043c'\u044f \u043c\u043e\u0436\u0435 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044c \u043b\u0438\u0448\u0435 \u0456\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0442\u0430 \u043f\u0440\u043e\u0431\u0456\u043b\u0456\u0432. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0456 \u0442.\u0434.",required:!0,value:e,onChange:this.handleChange})]}),Object(h.jsxs)("label",{className:O.a.Label,children:["\u041d\u043e\u043c\u0435\u0440",Object(h.jsx)(C.a,{className:O.a.Input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043c\u043e\u0436\u0435 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044c \u0437 \u0446\u0438\u0444\u0440 \u0456 \u043c\u043e\u0436\u0435 \u0441\u043a\u0430\u043b\u0430\u0434\u0442\u0438\u0441\u044c \u0437 \u043f\u0440\u043e\u0431\u0456\u043b\u0456\u0432, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u0438\u0445 \u0434\u0443\u0436\u043e\u043a \u0456 \u043c\u043e\u0436\u0435 \u043f\u043e\u0447\u0438\u043d\u0430\u0442\u0438\u0441\u044c \u0437 +",required:!0,onChange:this.handleChange,value:n,placeholder:"+38 (099) 999-99-99",mask:"+38 (099) 999-99-99"})]}),Object(h.jsx)("button",{className:O.a.Button,type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}}]),n}(a.Component),v=n(12),g=n(3),L=n.n(g),S=function(t){var e=t.id,n=t.name,a=t.number,r=t.onDelete;return Object(h.jsxs)("li",{className:L.a.Item,children:[Object(h.jsxs)("p",{className:L.a.Text,children:[n,": ",Object(h.jsx)("span",{className:L.a.Span,children:a})]}),Object(h.jsx)("button",{className:L.a.Button,type:"button",onClick:function(){return r(e)},title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})},N=function(t){var e=t.contacts,n=t.onDelete;return 0===e.length?null:Object(h.jsx)("ul",{className:L.a.List,children:e.map((function(t){return Object(a.createElement)(S,Object(v.a)(Object(v.a)({},t),{},{onDelete:n,key:t.id}))}))})},y=n(13),F=n.n(y),k=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:F.a.Label,children:["\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443 \u0437\u0430 \u0456\u043c\u0435\u043d\u0435\u043c",Object(h.jsx)("input",{type:"text",name:"filter",className:F.a.Input,value:e,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0406\u043c'\u044f \u043c\u043e\u0436\u0435 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044c \u043b\u0438\u0448\u0435 \u0456\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0442\u0430 \u043f\u0440\u043e\u0431\u0456\u043b\u0456\u0432. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0456 \u0442.\u0434.",required:!0})]})},w=n(30),A=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"John Smith",number:"369-11-54"},{id:"id-2",name:"Elon Mask",number:"443-89-12"},{id:"id-3",name:"Mark Shuttleworth",number:"617-48-74"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,r={id:Object(w.a)(),name:n,number:a},c=t.state.contacts;c.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," \u0432\u0436\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u043d\u0456\u0439 \u0432 \u0434\u043e\u0432\u0456\u0434\u043d\u0438\u043a\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432.")):c.find((function(t){return t.number===a}))?alert("".concat(a," \u0432\u0436\u0435 \u043f\u0440\u0438\u0441\u0443\u0442\u043d\u0456\u0439 \u0432 \u0434\u043e\u0432\u0456\u0434\u043d\u0438\u043a\u0443.")):""===n.trim()||""===a.trim()?alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443 \u0456 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443!"):/\d{3}[-]\d{2}[-]\d{2}/g.test(a)?t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(o.a)(e),[r])}})):alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443!")},t.deleteContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(h.jsxs)(j,{children:[Object(h.jsx)("h1",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0438\u0439 \u0434\u043e\u0432\u0456\u0434\u043d\u0438\u043a"}),Object(h.jsx)(x,{onSubmit:this.addContact}),Object(h.jsx)("h2",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),Object(h.jsx)(k,{value:t,onChange:this.changeFilter}),Object(h.jsx)(N,{contacts:e,onDelete:this.deleteContact})]})}}]),n}(a.Component);n(27);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={List:"ListContacts_List__2LALo",Item:"ListContacts_Item__1md0j",Text:"ListContacts_Text__3EW7Y",Span:"ListContacts_Span__1L_ta",Button:"ListContacts_Button__g8jEU"}}},[[28,1,2]]]);
//# sourceMappingURL=main.c92435f6.chunk.js.map