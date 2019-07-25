(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(11),r=a.n(i),l=(a(55),a(5)),o=a(6),c=a(9),m=a(7),u=a(2),d=a(8),h=(a(56),a(57),a(58),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={names:[{name:"",id:0}],id_count:0,count:1},a.addName=a.addName.bind(Object(u.a)(a)),a.handleForm=a.handleForm.bind(Object(u.a)(a)),a.onNameChange=a.onNameChange.bind(Object(u.a)(a)),a.deleteName=a.deleteName.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"deleteName",value:function(e){console.log(e.target.id);var t=this.state.names;console.log(t);for(var a=0;a<t.length;a++)t[a].id==parseInt(e.target.id)&&(console.log("Found"),t.splice(a,1));this.setState({names:t,count:this.state.count-1})}},{key:"addName",value:function(){var e=this.state.names;e.push({name:"",id:this.state.id_count+1}),this.setState({id_count:this.state.id_count+1,names:e,count:this.state.count+1})}},{key:"handleForm",value:function(e){e.preventDefault();for(var t=[],a=0;a<this.state.count;a++)t.push(this.state.names[a].name);console.log(t),this.props.sendNamesHere(t)}},{key:"onNameChange",value:function(e){console.log(e.target.id,e.target.value);for(var t=this.state.names,a=0;a<this.state.count;a++)console.log(t[a].id==e.target.id),t[a].id==e.target.id&&(console.log("Here"),t[a].name=e.target.value);this.setState({names:t})}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{id:"target",onSubmit:this.handleForm},"Enter names of people contributing",s.a.createElement("table",null,s.a.createElement("tbody",null,this.state.names.map(function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,s.a.createElement("input",{type:"text",name:"person",value:t.name,id:t.id,className:"form-control",placeholder:"Enter Name of Person",onChange:e.onNameChange,required:!0})),s.a.createElement("button",{className:"btn btn-danger",id:t.id,onClick:e.deleteName,style:{fontSize:"110%"}},s.a.createElement("i",{className:"fa fa-trash",id:t.id,onClick:e.deleteName})))}))),s.a.createElement("div",{id:"main"}),s.a.createElement("button",{type:"button",className:"btn btn-primary",id:"add",onClick:this.addName},"Add Name"),s.a.createElement("br",null),s.a.createElement("button",{type:"submit",className:"btn btn-info"},"Start Splitting!"))}}]),t}(n.Component)),p=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(c.a)(this,Object(m.a)(t).call(this,e));for(var n=[],s=0;s<e.names.length;s++)n.push(0);return a.state={id:e.id,name:e.name,price:e.price,names:e.names,contributions:e.contributions,srno:e.srno,warning:e.warning,warning_text:e.warning_text},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){JSON.stringify(this.props)!=JSON.stringify(e)&&(console.log("Updated Item Component"),this.setState({id:this.props.id,name:this.props.name,price:this.props.price,names:this.props.names,contributions:this.props.contributions,warning:this.props.warning,warning_text:this.props.warning_text}))}},{key:"render",value:function(){var e=this,t=s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Names"),s.a.createElement("th",null,"Percentage of Contribution"))),s.a.createElement("tbody",null,this.state.names.map(function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,t),s.a.createElement("td",null,s.a.createElement("input",{type:"number",step:"0.01",name:"contribution"+a,className:"form-control",id:e.state.id,placeholder:"Enter Percentage",value:e.state.contributions[a]})))})));return s.a.createElement("div",{id:this.state.id,onChange:this.props.handleChange},s.a.createElement("div",null,s.a.createElement("h4",null,"Item #",this.state.srno),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("input",{type:"text",name:"item",className:"form-control",id:this.state.id,placeholder:"Enter item",value:this.state.name,required:!0})),s.a.createElement("td",null,s.a.createElement("input",{type:"number",name:"price",className:"form-control",id:this.state.id,placeholder:"Enter Price of item",value:this.state.price,required:!0}))))),s.a.createElement("input",{type:"checkbox",name:"equal",id:this.state.id}),"Split equally",s.a.createElement("br",null),t))}}]),t}(n.Component),g=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(c.a)(this,Object(m.a)(t).call(this,e)),console.log(e.names);for(var n=[],s=0;s<e.names.length;s++)n.push("");return a.state={names:e.names,items:[{id:0,name:"",price:"",contributions:n,warning:!1,warning_text:""}],id_count:0,count:1},a.addItem=a.addItem.bind(Object(u.a)(a)),a.itemChange=a.itemChange.bind(Object(u.a)(a)),a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.handleForm=a.handleForm.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.names;JSON.stringify(t)!=JSON.stringify(e.names)&&(console.log("Updated Items"),this.setState({names:this.props.names}))}},{key:"deleteItem",value:function(e){console.log(e.target.id);var t=this.state.items;console.log(t);for(var a=0;a<t.length;a++)t[a].id==parseInt(e.target.id)&&(console.log("Found"),t.splice(a,1));console.log(t),this.setState({items:t,count:this.state.count-1})}},{key:"addItem",value:function(){for(var e=this.state.items,t=[],a=0;a<this.state.names.length;a++)t.push("");e.push({id:this.state.id_count+1,name:"",price:"",contributions:t,warning:!1,warning_text:""}),this.setState({id_count:this.state.id_count+1,items:e,count:this.state.count+1})}},{key:"itemChange",value:function(e){console.log(e.target);for(var t=/(\d+(\.\d+)?)/,a=this.state.items,n=0;n<a.length;n++)if(a[n].warning&&(console.log("Here"),a[n].warning=!1,a[n].warning_text=""),parseInt(e.target.id)===a[n].id){console.log("MATCH");var s=a[n];if("item"===e.target.name&&(console.log("ITEM"),s.name=e.target.value),"price"===e.target.name&&(""===e.target.value||t.test(e.target.value))&&(console.log("PRICE"),s.price=e.target.value),"equal"===e.target.name&&e.target.checked)for(var i=0;i<this.state.names.length;i++)s.contributions[i]=Math.round(100/this.state.names.length*100)/100;else s.contributions[parseInt(e.target.name.split("contribution")[1])]=e.target.value;break}console.log(a,this.state.count),this.setState({items:a})}},{key:"handleForm",value:function(e){if(e.preventDefault(),this.state.items.length){for(var t=e.target.tax.value,a=[],n=!0,s=0;s<this.state.count;s++){var i=this.state.items[s];i.name=this.state.items[s].name,isNaN(parseFloat(this.state.items[s].price))?(console.log("It is not valid price"),n=!1,i.warning=!0,i.warning_text="Make sure Price is Numeric"):(console.log("It is valid price"),i.price=parseFloat(this.state.items[s].price));for(var r=[],l=0,o=0;o<this.state.names.length;o++)""===this.state.items[s].contributions[o]?r.push(0):r.push(parseFloat(this.state.items[s].contributions[o])),l+=r[o];100!==Math.round(l)&&(n=!1,i.warning=!0,i.warning_text="Make sure sum is 100"),i.contri=r,a.push(i)}this.setState({items:a}),console.log(a,t),n&&this.props.resultOfForm(a,t)}else alert("Enter Items")}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.handleForm},s.a.createElement("h3",null,"Enter Items"),this.state.items.map(function(t,a){return s.a.createElement("div",{key:a,style:{border:t.warning?"10px solid red":"2px solid",margin:"2%",padding:"3%"}},s.a.createElement("h4",null,s.a.createElement("b",null,t.warning_text)),s.a.createElement(p,{srno:a+1,names:e.state.names,id:t.id,name:t.name,price:t.price,contributions:t.contributions,handleChange:e.itemChange,warning:e.state.warning,warning_text:e.state.warning_text}),s.a.createElement("button",{type:"button",className:"btn btn-danger",id:t.id,onClick:e.deleteItem},"Delete Item"))}),s.a.createElement("button",{type:"button",className:"btn btn-primary",id:"additem",onClick:this.addItem},"Add Item"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Enter total tax"),s.a.createElement("td",null,s.a.createElement("input",{type:"number",step:"0.01",name:"tax",className:"form-control",id:"nameOfPerson",placeholder:"Enter Tax",required:!0}))))),s.a.createElement("button",{type:"submit",className:"btn btn-success"},"Get Contributions"))}}]),t}(n.Component),b=a(46),f=a.n(b),E=function(){return s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-spinner fa-spin"})," Loading...")},v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={names:e.names,result:e.result},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.names.map(function(t,a){return s.a.createElement("div",null,t," has to contribute ",s.a.createElement("strong",null,"Rs.",e.state.result[t]))})}}]),t}(n.Component),y=a(14),N=a.n(y),O=a(47),w=a.n(O),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={names:[],loading:!1,modal_show:!1},a.handleGetNamesForm=a.handleGetNamesForm.bind(Object(u.a)(a)),a.getItemsAndTaxes=a.getItemsAndTaxes.bind(Object(u.a)(a)),a.modalClose=a.modalClose.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleGetNamesForm",value:function(e){console.log(e),this.setState({names:e})}},{key:"modalClose",value:function(){this.setState({modal_show:!1})}},{key:"getItemsAndTaxes",value:function(e,t){var a=this;console.log(e,t);var n={people:this.state.names,items:e,taxes:t};this.setState({loading:!0,modal_show:!0},function(){f.a.post("https://rocky-refuge-72367.herokuapp.com/",n).then(function(e){a.setState({loading:!1,result:e.data}),console.log(e)}).catch(function(e){console.log(e)})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Bill Spliter"),s.a.createElement(h,{sendNamesHere:this.handleGetNamesForm}),this.state.names.length>0?s.a.createElement(g,{names:this.state.names,resultOfForm:this.getItemsAndTaxes}):s.a.createElement("h4",null,"Enter Names to Continue"),s.a.createElement(N.a,{show:this.state.modal_show},s.a.createElement(N.a.Header,null,s.a.createElement(N.a.Title,null,"Result")),s.a.createElement(N.a.Body,null,this.state.loading?s.a.createElement(E,null):s.a.createElement(v,{names:this.state.names,result:this.state.result})),s.a.createElement(N.a.Footer,null,s.a.createElement(w.a,{variant:"secondary",onClick:this.modalClose},"Close"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,a){e.exports=a(114)},55:function(e,t,a){},58:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.fedcad60.chunk.js.map