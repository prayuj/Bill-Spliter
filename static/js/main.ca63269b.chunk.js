(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(11),i=a.n(l),r=(a(56),a(5)),o=a(6),c=a(9),m=a(7),u=a(2),d=a(8),h=(a(57),a(58),a(59),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={names:[{name:"",id:0}],id_count:0,count:1},a.addName=a.addName.bind(Object(u.a)(a)),a.handleForm=a.handleForm.bind(Object(u.a)(a)),a.onNameChange=a.onNameChange.bind(Object(u.a)(a)),a.deleteName=a.deleteName.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"deleteName",value:function(e){console.log(e.target.id);var t=this.state.names;console.log(t);for(var a=0;a<t.length;a++)t[a].id==parseInt(e.target.id)&&(console.log("Found"),t.splice(a,1));this.setState({names:t,count:this.state.count-1})}},{key:"addName",value:function(){var e=this.state.names;e.push({name:"",id:this.state.id_count+1}),this.setState({id_count:this.state.id_count+1,names:e,count:this.state.count+1})}},{key:"handleForm",value:function(e){e.preventDefault();for(var t=[],a=0;a<this.state.count;a++)t.push(this.state.names[a].name);console.log(t),this.props.sendNamesHere(t)}},{key:"onNameChange",value:function(e){console.log(e.target.id,e.target.value);for(var t=this.state.names,a=0;a<this.state.count;a++)console.log(t[a].id==e.target.id),t[a].id==e.target.id&&(console.log("Here"),t[a].name=e.target.value);this.setState({names:t})}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{id:"target",onSubmit:this.handleForm},"Enter names of people contributing",s.a.createElement("table",null,s.a.createElement("tbody",null,this.state.names.map(function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,s.a.createElement("input",{type:"text",name:"person",value:t.name,id:t.id,className:"form-control",placeholder:"Enter Name of Person",onChange:e.onNameChange,required:!0})),s.a.createElement("button",{className:"btn btn-danger",id:t.id,onClick:e.deleteName,style:{fontSize:"110%"}},s.a.createElement("i",{className:"fa fa-trash",id:t.id,onClick:e.deleteName})))}))),s.a.createElement("div",{id:"main"}),s.a.createElement("button",{type:"button",className:"btn btn-primary",id:"add",onClick:this.addName},"Add Name"),s.a.createElement("br",null),s.a.createElement("button",{type:"submit",className:"btn btn-info"},"Start Splitting!"))}}]),t}(n.Component)),g=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(c.a)(this,Object(m.a)(t).call(this,e)),console.log(e),a.state={id:e.id,name:e.name,price:e.price,names:e.names,contributions:e.contributions,select:e.select,srno:e.srno,selectall:e.selectall,warning:e.warning,warning_text:e.warning_text,tax:e.tax,individual_item_tax_show:e.individual_item_tax_show},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){JSON.stringify(this.props)!=JSON.stringify(e)&&(console.log("Updated Item Component"),this.setState({id:this.props.id,name:this.props.name,price:this.props.price,names:this.props.names,contributions:this.props.contributions,select:this.props.select,selectall:this.props.selectall,warning:this.props.warning,warning_text:this.props.warning_text,tax:this.props.tax,individual_item_tax_show:this.props.individual_item_tax_show}))}},{key:"render",value:function(){var e=this;console.log(this.state.select);var t=s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,s.a.createElement("input",{type:"checkbox",name:"selectall",id:this.state.id,checked:this.state.selectall})),s.a.createElement("th",null,"Names"),s.a.createElement("th",null,"Percentage of Contribution"))),s.a.createElement("tbody",null,this.state.names.map(function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,s.a.createElement("input",{type:"checkbox",name:"select"+a,id:e.state.id,checked:e.state.select[a]})),s.a.createElement("td",null,t),s.a.createElement("td",null,s.a.createElement("input",{type:"number",step:"0.01",name:"contribution"+a,className:"form-control",id:e.state.id,placeholder:"Enter Percentage",value:e.state.contributions[a]})))})));return s.a.createElement("div",{id:this.state.id,onChange:this.props.handleChange},s.a.createElement("div",null,s.a.createElement("h4",null,"Item #",this.state.srno),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("input",{type:"text",name:"item",className:"form-control",id:this.state.id,placeholder:"Enter item",value:this.state.name,required:!0})),s.a.createElement("td",null,s.a.createElement("input",{type:"number",name:"price",className:"form-control",id:this.state.id,placeholder:"Enter Price of item",value:this.state.price,required:!0}))))),s.a.createElement("input",{type:"checkbox",name:"equal",id:this.state.id}),"Split Selected",s.a.createElement("br",null),t,this.state.individual_item_tax_show?s.a.createElement("input",{type:"number",name:"item_tax",className:"form-control",id:this.state.id,placeholder:"Enter Tax on this item",value:this.state.tax,required:!0}):""))}}]),t}(n.Component),p=(a(60),function(e){function t(e){var a;Object(r.a)(this,t),a=Object(c.a)(this,Object(m.a)(t).call(this,e)),console.log(e.names);for(var n=[],s=[],l=0;l<e.names.length;l++)n.push(""),s.push(!0);return a.state={names:e.names,tax_equal:!1,items:[{id:0,name:"",price:"",selectall:s.every(function(e){return e}),contributions:n,select:s,warning:!1,warning_text:"",tax:""}],id_count:0,count:1},a.addItem=a.addItem.bind(Object(u.a)(a)),a.itemChange=a.itemChange.bind(Object(u.a)(a)),a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.handleForm=a.handleForm.bind(Object(u.a)(a)),a.handleEqualTaxChange=a.handleEqualTaxChange.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.names;JSON.stringify(t)!=JSON.stringify(e.names)&&(console.log("Updated Items"),this.setState({names:this.props.names}))}},{key:"deleteItem",value:function(e){console.log(e.target.id);var t=this.state.items;console.log(t);for(var a=0;a<t.length;a++)t[a].id==parseInt(e.target.id)&&(console.log("Found"),t.splice(a,1));console.log(t),this.setState({items:t,count:this.state.count-1})}},{key:"addItem",value:function(){for(var e=this.state.items,t=[],a=[],n=0;n<this.state.names.length;n++)t.push(""),a.push(!0);e.push({id:this.state.id_count+1,name:"",price:"",contributions:t,warning:!1,selectall:a.every(function(e){return e}),select:a,warning_text:"",tax:""}),this.setState({id_count:this.state.id_count+1,items:e,count:this.state.count+1})}},{key:"itemChange",value:function(e){console.log(e.target);for(var t=/(\d+(\.\d+)?)/,a=this.state.items,n=0;n<a.length;n++)if(a[n].warning&&(console.log("Here"),a[n].warning=!1,a[n].warning_text=""),parseInt(e.target.id)===a[n].id){console.log(a[n]);var s=a[n];if("item"===e.target.name)console.log("ITEM"),s.name=e.target.value;else if("price"===e.target.name)(""===e.target.value||t.test(e.target.value))&&(console.log("PRICE"),s.price=e.target.value);else if("item_tax"===e.target.name)(""===e.target.value||t.test(e.target.value))&&(console.log("TAX "+e.target.value),s.tax=e.target.value);else if("equal"===e.target.name&&e.target.checked){for(var l=0,i=0;i<this.state.names.length;i++)s.select[i]&&l++;for(var r=0;r<this.state.names.length;r++)s.select[r]?s.contributions[r]=Math.round(100/l*100)/100:s.contributions[r]=""}else if("equal"!==e.target.name||e.target.checked)if("selectall"===e.target.name&&e.target.checked){s.selectall=!0;for(var o=0;o<this.state.names.length;o++)s.select[o]=!0}else if("selectall"!==e.target.name||e.target.checked)"c"===e.target.name.charAt(0)?s.contributions[parseInt(e.target.name.split("contribution")[1])]=e.target.value:"s"===e.target.name.charAt(0)&&(console.log(s.select[parseInt(e.target.name.split("select")[1])]),s.select[parseInt(e.target.name.split("select")[1])]=!s.select[parseInt(e.target.name.split("select")[1])],s.selectall=s.select.every(function(e){return e}));else{s.selectall=!1;for(var c=0;c<this.state.names.length;c++)s.select[c]=!1}else for(var m=0;m<this.state.names.length;m++)s.contributions[m]="";console.log(s);break}console.log(a,this.state.count),this.setState({items:a})}},{key:"handleForm",value:function(e){if(e.preventDefault(),console.log(this.state.items),this.state.items.length){var t=e.target.tax.value;""==t&&(t=0);for(var a=[],n=!0,s=0;s<this.state.count;s++){var l=this.state.items[s];l.name=this.state.items[s].name,isNaN(parseFloat(this.state.items[s].price))?(console.log("It is not valid price"),n=!1,l.warning=!0,l.warning_text="Make sure Price is Numeric"):(console.log("It is valid price"),l.price=parseFloat(this.state.items[s].price));for(var i=[],r=0,o=0;o<this.state.names.length;o++)""===this.state.items[s].contributions[o]?i.push(0):i.push(parseFloat(this.state.items[s].contributions[o])),r+=i[o];console.log(!isNaN(parseFloat(this.state.items[s].tax))&&!this.state.tax_equal),this.state.tax_equal||(isNaN(parseFloat(this.state.items[s].tax))?(console.log("It is not valid tax"),n=!1,l.warning=!0,l.warning_text="Make sure Tax is Numeric"):(console.log("It is valid tax"),l.tax=parseFloat(this.state.items[s].tax),console.log(l.tax))),100!==Math.round(r)&&(n=!1,l.warning=!0,l.warning_text="Make sure sum is 100"),l.contri=i,a.push(l)}this.setState({items:a}),console.log(a,t),n&&this.props.resultOfForm(a,t,this.state.tax_equal)}else alert("Enter Items")}},{key:"handleEqualTaxChange",value:function(e){console.log(e.target.value);var t="Yes"===e.target.value;this.setState({tax_equal:t})}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.handleForm},"Are all items taxed equally?",s.a.createElement("input",{type:"radio",name:"equaltax",value:"Yes",checked:!!this.state.tax_equal,onChange:this.handleEqualTaxChange})," ","Yes",s.a.createElement("input",{type:"radio",name:"equaltax",value:"No",checked:!this.state.tax_equal,onChange:this.handleEqualTaxChange})," ","No",s.a.createElement("br",null),s.a.createElement("h3",null,"Enter Items "),this.state.items.map(function(t,a){return s.a.createElement("div",{key:a,style:{border:t.warning?"10px solid red":"2px solid",margin:"2%",padding:"3%"}},s.a.createElement("h4",null,s.a.createElement("b",null,t.warning_text)),s.a.createElement(g,{srno:a+1,names:e.state.names,id:t.id,name:t.name,price:t.price,contributions:t.contributions,select:t.select,selectall:t.selectall,handleChange:e.itemChange,warning:t.warning,warning_text:t.warning_text,tax:t.tax,individual_item_tax_show:!e.state.tax_equal}),s.a.createElement("button",{type:"button",className:"btn btn-danger",id:t.id,onClick:e.deleteItem},"Delete Item"))}),s.a.createElement("button",{type:"button",className:"btn btn-primary",id:"additem",onClick:this.addItem},"Add Item"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("table",null,s.a.createElement("tbody",null,this.state.tax_equal?s.a.createElement("tr",null,s.a.createElement("td",null,"Enter total taxes"),s.a.createElement("td",null,s.a.createElement("input",{type:"number",step:"0.01",name:"tax",className:"form-control",id:"nameOfPerson",placeholder:"Enter Tax",required:!0}))):s.a.createElement("tr",null,s.a.createElement("td",null,"Enter Additional taxes"),s.a.createElement("td",null,s.a.createElement("input",{type:"number",step:"0.01",name:"tax",className:"form-control",id:"nameOfPerson",placeholder:"Enter Tax"}))))),s.a.createElement("button",{type:"submit",className:"btn btn-success"},"Get Contributions"))}}]),t}(n.Component)),b=a(48),v=a.n(b),E=function(){return s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-spinner fa-spin"})," Loading...")},f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={names:e.names,result:e.result},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.state.names.map(function(t,a){return s.a.createElement("div",null,t," has to contribute ",s.a.createElement("strong",null,"Rs.",e.state.result[t]))})}}]),t}(n.Component),x=a(14),y=a.n(x),_=a(49),N=a.n(_),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={names:[],loading:!1,modal_show:!1},a.handleGetNamesForm=a.handleGetNamesForm.bind(Object(u.a)(a)),a.getItemsAndTaxes=a.getItemsAndTaxes.bind(Object(u.a)(a)),a.modalClose=a.modalClose.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleGetNamesForm",value:function(e){console.log(e),this.setState({names:e})}},{key:"modalClose",value:function(){this.setState({modal_show:!1})}},{key:"getItemsAndTaxes",value:function(e,t,a){var n=this;if(a)for(var s=0;s<e.length;s++)e[s].tax=0;console.log(e,t);var l={people:this.state.names,items:e,taxes:t};this.setState({loading:!0,modal_show:!0},function(){v.a.post("https://tranquil-wave-24919.herokuapp.com/",l).then(function(e){n.setState({loading:!1,result:e.data}),console.log(e)}).catch(function(e){console.log(e)})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Bill Spliter"),s.a.createElement(h,{sendNamesHere:this.handleGetNamesForm}),this.state.names.length>0?s.a.createElement(p,{names:this.state.names,resultOfForm:this.getItemsAndTaxes}):s.a.createElement("h4",null,"Enter Names to Continue"),s.a.createElement(y.a,{show:this.state.modal_show},s.a.createElement(y.a.Header,null,s.a.createElement(y.a.Title,null,"Result")),s.a.createElement(y.a.Body,null,this.state.loading?s.a.createElement(E,null):s.a.createElement(f,{names:this.state.names,result:this.state.result})),s.a.createElement(y.a.Footer,null,s.a.createElement(N.a,{variant:"secondary",onClick:this.modalClose},"Close"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){e.exports=a(117)},56:function(e,t,a){},59:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.ca63269b.chunk.js.map