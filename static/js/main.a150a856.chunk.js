(this["webpackJsonpreact-grid-muuri"]=this["webpackJsonpreact-grid-muuri"]||[]).push([[0],{24:function(e,t,a){e.exports=a(43)},29:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),r=a.n(o),i=(a(29),a(30),a(31),a(8),a(4)),c=a(12),m=a(13),s=function(e){return function(e){var t=Object(n.useRef)(),a=Object(i.b)(),o=Object(m.a)((function(){return requestAnimationFrame(a)}),50);return l.a.createElement("div",{ref:t,className:"item ",style:{width:"".concat(e.width,"px"),height:"".concat(e.height,"px")}},l.a.createElement("div",{className:"muuri-item ".concat(e.animation_class)},l.a.createElement(c.ResizableBox,{width:e.width,height:e.height,minConstraints:[100,100],onResize:function(e,a){var n=a.size;t.current.style.width=n.width+"px",t.current.style.height=n.height+"px",t.current.style.zIndex=3,o()},onResizeStop:function(e){t.current.style.zIndex=""}},l.a.createElement("div",{className:"content ".concat(e.color)},l.a.createElement("div",{className:"content-header"},e.title," "),l.a.createElement("div",{className:"div_center"},l.a.createElement("p",{className:"div_center_content"},e.text))),l.a.createElement("span",{className:"editSpan",onClick:e.edit,"data-toggle":"modal","data-target":"#exampleModal2"},l.a.createElement("i",{class:"fa fa-pencil-square-o","aria-hidden":"true"})),l.a.createElement("span",{className:"removeSpan",onClick:e.remove,"data-toggle":"modal","data-target":"#exampleModal"},l.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"})))))}},d=function(e){var t=e.children;return l.a.createElement("section",{className:"grid-demo"},t)};!function(e,t){var a=t.width,n=t.height}((function(e){var t=e.color;e.id;return l.a.createElement("div",{className:"content ".concat(t)},l.a.createElement("div",{className:"content-header"}))}),{width:200,height:100});var u=a(11),h=(s(),a(15)),b=a(20),p=a(21),g=a(3),E=a(23),v=a(22),f=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(b.a)(this,a),(e=t.call(this)).addItem=function(){e.setState({items:[].concat(Object(u.a)(e.state.items),[{id:e.state.itemsCount,color:"blue",width:200,height:200,text:"drag me!"}])}),e.setState({itemsCount:e.state.itemsCount+1})},e.onFormFieldChangeHandler=function(t){var a=t.target;e.setState(Object(h.a)({},a.name,a.value))},e.onAddItemHandler=function(t){if(""!==e.state.box_content&&""!==e.state.box_width&&""!==e.state.box_height){var a=e.state.box_title,n=e.state.box_content,l=parseInt(e.state.box_width),o=parseInt(e.state.box_height),r=e.state.box_color,i=e.state.itemsCount;if(""!=e.state.box_loc)i=parseInt(e.state.box_loc)-1;""==a&&(a="Title "+(e.state.itemsCount+1));var c=e.state.items.slice(0);c.splice(i,0,{id:e.state.itemsCount,color:r,width:l,height:o,text:n,title:a,animation_class:""}),e.setState({items:c,itemsCount:e.state.itemsCount+1})}else alert("Error");t.preventDefault()},e.onRemoveItemHandler=function(t){for(var a=e.state.items,n=-1,l=0;l<a.length;l++)a[l].id===e.state.confirm_id&&(n=l);a[n]={id:a[n].id,color:a[n].color,width:a[n].width,height:a[n].height,title:a[n].title,text:a[n].text,animation_class:"animate__animated animate__bounceOut"},e.setState({items:a}),setTimeout((function(){e.setState({items:e.state.items.filter((function(t){return t.id!==e.state.confirm_id}))})}),800)},e.onFilterItemHandler=function(t){var a=t.target;e.setState(Object(h.a)({},a.name,a.value)),e.updateFilterReference()},e.filter=function(t){var a=e.state.box_color_filter.toLowerCase(),n=e.state.box_title_filter,l="all"===a||t.color===a,o=!n||t.title.toLowerCase().indexOf(n)>-1;return l&&o},e.onUpdateCard=function(){for(var t=e.state.items,a=-1,n=0;n<t.length;n++)t[n].id===e.state.confirm_id&&(a=n);t[a]={id:t[a].id,color:e.state.update_box_color,width:t[a].width,height:t[a].height,title:e.state.update_box_title,text:e.state.update_box_content,animation_class:"animate__animated animate__tada"},e.setState({items:t})},e.onSend=function(){alert("")},e.state={items:C(10),itemsCount:10,box_title:"",box_content:"",box_loc:"",box_width:"",box_height:"",box_color:"orange",confirm_id:0,box_color_filter:"all",box_title_filter:"",drag_items:w(3),update_box_title:"",update_box_content:"",update_box_color:""},e.addItem=e.addItem.bind(Object(g.a)(e)),e.onFormFieldChangeHandler=e.onFormFieldChangeHandler.bind(Object(g.a)(e)),e.onAddItemHandler=e.onAddItemHandler.bind(Object(g.a)(e)),e.onRemoveItemHandler=e.onRemoveItemHandler.bind(Object(g.a)(e)),e.onFilterItemHandler=e.onFilterItemHandler.bind(Object(g.a)(e)),e.updateFilterReference=e.updateFilterReference.bind(Object(g.a)(e)),e.onUpdateCard=e.onUpdateCard.bind(Object(g.a)(e)),e.onSend=e.onSend.bind(Object(g.a)(e)),e}return Object(p.a)(a,[{key:"updateFilterReference",value:function(){var e=this;this.filterReference=function(t){return e.filter(t)}}},{key:"render",value:function(){var e=this,t=this.state.items.map((function(t,a){return l.a.createElement(_,{key:t.id,color:t.color,id:t.id,width:t.width,height:t.height,text:t.text,title:t.title,loc:a,animation_class:t.animation_class,remove:function(){return e.setState({confirm_id:t.id})},edit:function(){return e.setState({confirm_id:t.id,update_box_title:t.title,update_box_content:t.text,update_box_color:t.color})}})}));this.state.drag_items.map((function(e,t){return l.a.createElement(x,{key:e.id,color:e.color,id:e.id,width:e.width,height:e.height,text:e.text,title:e.title,loc:t,animation_class:e.animation_class})}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2",style:{borderRight:"1px solid #eee"}},l.a.createElement(F,{onFormFieldChangeHandler:this.onFormFieldChangeHandler,onAddItemHandler:this.onAddItemHandler,av_item:this.state.items.length+1,drag_items:this.state.drag_items})),l.a.createElement("div",{className:"col-10"},l.a.createElement(d,null,l.a.createElement("div",{className:"row",style:{padding:18,borderBottom:"1px solid #eee"}},l.a.createElement("label",null,"FILTER \xa0\xa0 | \xa0\xa0"),l.a.createElement("label",null," Title : \xa0")," ",l.a.createElement("input",{className:"form-control col-md-2",name:"box_title_filter",type:"search",placeholder:"Search","aria-label":"Search",onChange:this.onFilterItemHandler}),l.a.createElement("label",null,"\xa0\xa0 | \xa0\xa0 Background Color : \xa0"),l.a.createElement("select",{className:"form-control col-md-2",name:"box_color_filter",onChange:this.onFilterItemHandler},l.a.createElement("option",{value:"all"},"All"),l.a.createElement("option",{value:"orange"},"Orange"),l.a.createElement("option",{value:"green"},"Green"),l.a.createElement("option",{value:"blue"},"Blue"),l.a.createElement("option",{value:"red"},"Red"),l.a.createElement("option",{value:"white"},"White"),l.a.createElement("option",{value:"black"},"Black")),l.a.createElement("div",{className:"col-md-4"})),l.a.createElement(i.a,{id:"muuri_id",dragEnabled:!0,dragStartPredicate:{handle:".content-header"},propsToData:function(e){return{color:e.color,title:e.title}},filter:this.filterReference},t))))),l.a.createElement("div",{className:"modal",id:"exampleModal",tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered ",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Confirm Deletion"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,"Are you sure you want to remove this item ?")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"No"),"\xa0\xa0",l.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:this.onRemoveItemHandler},"Yes"))))),l.a.createElement("div",{className:"modal",id:"exampleModal2",tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered ",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Update Card"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title"),l.a.createElement("input",{type:"text",className:"form-control",name:"update_box_title",placeholder:"Title",value:this.state.update_box_title,onChange:this.onFormFieldChangeHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Content"),l.a.createElement("input",{type:"text",className:"form-control",name:"update_box_content",placeholder:"Content",value:this.state.update_box_content,onChange:this.onFormFieldChangeHandler,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Background Color"),l.a.createElement("select",{className:"form-control",id:"box_color",name:"update_box_color",onChange:this.onFormFieldChangeHandler},l.a.createElement("option",{value:this.state.update_box_color},this.state.update_box_color),l.a.createElement("option",{value:"orange"},"Orange"),l.a.createElement("option",{value:"green"},"Green"),l.a.createElement("option",{value:"blue"},"Blue"),l.a.createElement("option",{value:"red"},"Red"),l.a.createElement("option",{value:"white"},"White"),l.a.createElement("option",{value:"black"},"Black")))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Cancel"),"\xa0\xa0",l.a.createElement("button",{type:"button",className:"btn btn-success","data-dismiss":"modal",onClick:this.onUpdateCard},"Update"))))))}}]),a}(l.a.Component),_=s(),x=function(e){var t=Object(n.useRef)(),a=Object(i.b)(),o=Object(m.a)((function(){return requestAnimationFrame(a)}),50);return l.a.createElement("div",{ref:t,className:"item ",style:{width:"".concat(e.width,"px"),height:"".concat(e.height,"px")}},l.a.createElement("div",{className:"muuri-item ".concat(e.animation_class)},l.a.createElement(c.ResizableBox,{width:e.width,height:e.height,minConstraints:[100,100],onResize:function(e,a){var n=a.size;t.current.style.width=n.width+"px",t.current.style.height=n.height+"px",t.current.style.zIndex=3,o()},onResizeStop:function(e){t.current.style.zIndex=""}},l.a.createElement("div",{className:"content ".concat(e.color)},l.a.createElement("div",{className:"content-header"},e.title," "),l.a.createElement("div",{className:"div_center"},l.a.createElement("p",{className:"div_center_content"},e.text))))))};function N(e){return e[Math.floor(Math.random()*Math.floor(e.length))]}var C=function(e){for(var t=[],a=0;a<e;a++){var n=N(["orange","green","blue","white","red","black"]);t.push({id:a,color:n,width:195,height:195,text:"Content !!",title:"Title "+(a+1),animation_class:""})}return t},w=function(e){for(var t=[],a=500;a<e+500;a++){var n=N(["orange","green","blue","white","red","black"]);t.push({id:a,color:n,width:40,height:40,text:"",title:" ",animation_class:""})}return t},F=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("div",{style:{background:"#fff",padding:10}},l.a.createElement("h5",null,"Add New Card"),l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:e.onAddItemHandler},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title"),l.a.createElement("input",{type:"text",className:"form-control",name:"box_title",placeholder:"Title",onChange:e.onFormFieldChangeHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Content"),l.a.createElement("input",{type:"text",className:"form-control",name:"box_content",placeholder:"Content",onChange:e.onFormFieldChangeHandler,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Width (px)"),l.a.createElement("input",{type:"number",className:"form-control",name:"box_width",placeholder:"Width",onChange:e.onFormFieldChangeHandler,min:"100",max:"900",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Height (px)"),l.a.createElement("input",{type:"number",className:"form-control",name:"box_height",placeholder:"Height",onChange:e.onFormFieldChangeHandler,min:"100",max:"800",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Position"),"\xa0",l.a.createElement("span",{tooltip:"Add card at a specific position between 1 to ".concat(e.av_item,". Default position is next to last card "),flow:"up"},l.a.createElement("i",{className:"fa fa-info-circle","aria-hidden":"true"})),l.a.createElement("input",{type:"number",className:"form-control",name:"box_loc",placeholder:"Position",onChange:e.onFormFieldChangeHandler,min:"1"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Background Color"),l.a.createElement("select",{className:"form-control",id:"box_color",name:"box_color",onChange:e.onFormFieldChangeHandler},l.a.createElement("option",{value:"orange"},"Orange"),l.a.createElement("option",{value:"green"},"Green"),l.a.createElement("option",{value:"blue"},"Blue"),l.a.createElement("option",{value:"red"},"Red"),l.a.createElement("option",{value:"white"},"White"),l.a.createElement("option",{value:"black"},"Black"))),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Add Crad !"))))},y=f,H=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bd-navbar"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Grid"),l.a.createElement("ul",{className:"navbar-nav "},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#/contact"},"Contact")))))};a(42);var k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a150a856.chunk.js.map