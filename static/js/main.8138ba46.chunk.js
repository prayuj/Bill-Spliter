(this["webpackJsonpbill-spliter"]=this["webpackJsonpbill-spliter"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(10),i=a.n(l),r=(a(55),a(4)),o=a(5),c=a(7),m=a(6),u=(a(56),a(57),a(58),a(2)),h=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;if(Object(r.a)(this,a),n=t.call(this,e),0==e.names.length)n.state={names:[{name:"",id:0}],id_count:0,count:1};else{for(var s=[],l=0;l<e.names.length;l++)s.push({name:e.names[l],id:l});n.state={names:s,id_count:e.names.length-1,count:e.names.length}}return n.addName=n.addName.bind(Object(u.a)(n)),n.handleForm=n.handleForm.bind(Object(u.a)(n)),n.onNameChange=n.onNameChange.bind(Object(u.a)(n)),n.deleteName=n.deleteName.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"deleteName",value:function(e){var t=this;console.log(e.target.id);var a=this.state.names;console.log(a);for(var n=0;n<a.length;n++)a[n].id==parseInt(e.target.id)&&(console.log("Found"),a.splice(n,1));this.setState({names:a,count:this.state.count-1},(function(){for(var e=[],a=0;a<t.state.count;a++)e.push(t.state.names[a].name);t.props.sendNamesHere(e)}))}},{key:"addName",value:function(){var e=this.state.names;e.push({name:"",id:this.state.id_count+1}),this.setState({id_count:this.state.id_count+1,names:e,count:this.state.count+1})}},{key:"handleForm",value:function(e){e.preventDefault();for(var t=[],a=0;a<this.state.count;a++)t.push(this.state.names[a].name);console.log(t),this.props.sendNamesHere(t)}},{key:"onNameChange",value:function(e){var t=this;console.log(e.target.id,e.target.value);for(var a=this.state.names,n=0;n<this.state.count;n++)console.log(a[n].id==e.target.id),a[n].id==e.target.id&&(console.log("Here"),a[n].name=e.target.value);this.setState({names:a},(function(){for(var e=[],a=0;a<t.state.count;a++)e.push(t.state.names[a].name);t.props.sendNamesHere(e)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{id:"target",onSubmit:this.handleForm},"Enter names of people contributing",s.a.createElement("table",null,s.a.createElement("tbody",null,this.state.names.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,s.a.createElement("input",{type:"text",name:"person",value:t.name,id:t.id,className:"form-control",placeholder:"Enter Name of Person",onChange:e.onNameChange,required:!0})),s.a.createElement("button",{className:"btn btn-danger",id:t.id,onClick:e.deleteName,style:{fontSize:"110%"}},s.a.createElement("i",{className:"fa fa-trash",id:t.id,onClick:e.deleteName})))})))),s.a.createElement("div",{id:"main"}),s.a.createElement("button",{type:"button",className:"btn btn-primary",id:"add",onClick:this.addName},"Add Name"),s.a.createElement("br",null))}}]),a}(n.Component),d=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),n=t.call(this,e),console.log(e),n.state={id:e.id,name:e.name,price:e.price,names:e.names,contributions:e.contributions,select:e.select,srno:e.srno,selectall:e.selectall,warning:e.warning,warning_text:e.warning_text,tax:e.tax,individual_item_tax_show:e.individual_item_tax_show},n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){JSON.stringify(this.props)!=JSON.stringify(e)&&(console.log("Updated Item Component"),this.setState({id:this.props.id,name:this.props.name,price:this.props.price,names:this.props.names,contributions:this.props.contributions,select:this.props.select,selectall:this.props.selectall,warning:this.props.warning,warning_text:this.props.warning_text,tax:this.props.tax,individual_item_tax_show:this.props.individual_item_tax_show}))}},{key:"render",value:function(){var e=this;console.log(this.state.select);var t=s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,s.a.createElement("input",{type:"checkbox",name:"selectall",id:this.state.id,checked:this.state.selectall})),s.a.createElement("th",null,"Names"),s.a.createElement("th",null,"Percentage of Contribution"))),s.a.createElement("tbody",null,this.state.names.map((function(t,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,s.a.createElement("input",{type:"checkbox",name:"select"+a,id:e.state.id,checked:e.state.select[a]})),s.a.createElement("td",null,t),s.a.createElement("td",null,s.a.createElement("input",{type:"number",step:"0.01",name:"contribution"+a,className:"form-control",id:e.state.id,placeholder:"Enter Percentage",value:e.state.contributions[a]})))}))));return s.a.createElement("div",{id:this.state.id,onChange:this.props.handleChange},s.a.createElement("div",null,s.a.createElement("h4",null,"Item #",this.state.srno),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("input",{type:"text",name:"item",className:"form-control",id:this.state.id,placeholder:"Enter item",value:this.state.name,required:!0})),s.a.createElement("td",null,s.a.createElement("input",{type:"number",name:"price",className:"form-control",id:this.state.id,placeholder:"Enter Price of item",value:this.state.price,required:!0}))))),s.a.createElement("input",{type:"checkbox",name:"equal",id:this.state.id}),"Split Selected",s.a.createElement("br",null),t,this.state.individual_item_tax_show?s.a.createElement("input",{type:"number",name:"item_tax",className:"form-control",id:this.state.id,placeholder:"Enter Tax on this item as %",value:this.state.tax}):""))}}]),a}(n.Component),g=(a(59),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(r.a)(this,a),n=t.call(this,e),console.log(e.names);var s=[],l=[];if(0==e.items.length){for(var i=0;i<e.names.length;i++)s.push(""),l.push(!0);n.state={names:e.names,tax_equal:!1,total_bill:e.total_bill,items:[{id:0,name:"",price:"",selectall:l.every((function(e){return e})),contributions:s,select:l,warning:!1,warning_text:"",tax:""}],id_count:e.items.length-1,tax:e.taxes,count:e.items.length}}else n.state={names:e.names,tax_equal:!1,total_bill:e.total_bill,items:e.items,id_count:0,tax:e.taxes,count:1};return n.addItem=n.addItem.bind(Object(u.a)(n)),n.itemChange=n.itemChange.bind(Object(u.a)(n)),n.deleteItem=n.deleteItem.bind(Object(u.a)(n)),n.handleForm=n.handleForm.bind(Object(u.a)(n)),n.handleEqualTaxChange=n.handleEqualTaxChange.bind(Object(u.a)(n)),n.getTotalBill=n.getTotalBill.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.names;JSON.stringify(t)!=JSON.stringify(e.names)&&(console.log("Updated Items"),this.setState({names:this.props.names}))}},{key:"getTotalBill",value:function(){var e=0;if(console.log(this.state),this.state.tax_equal)for(var t=0;t<this.state.items.length;t++){var a=this.state.items[t],n=0,s=0;""!==a.price&&(s=parseFloat(a.price)),""!==this.state.tax&&(n=parseFloat(this.state.tax)),e+=s*(100+n)/100}else for(var l=0;l<this.state.items.length;l++){var i=this.state.items[l],r=0,o=0,c=0;""!==i.price&&(c=parseFloat(i.price)),""!==i.tax&&(r=parseFloat(i.tax)),""!==this.state.tax&&(o=parseFloat(this.state.tax)),console.log(c,r,o),e+=c*(100+r+o)/100}this.setState({total_bill:e})}},{key:"deleteItem",value:function(e){console.log(e.target.id);var t=this.state.items;console.log(t);for(var a=0;a<t.length;a++)t[a].id==parseInt(e.target.id)&&(console.log("Found"),t.splice(a,1));console.log(t),this.setState({items:t,count:this.state.count-1})}},{key:"addItem",value:function(){for(var e=this.state.items,t=[],a=[],n=0;n<this.state.names.length;n++)t.push(""),a.push(!0);e.push({id:this.state.id_count+1,name:"",price:"",contributions:t,warning:!1,selectall:a.every((function(e){return e})),select:a,warning_text:"",tax:""}),this.setState({id_count:this.state.id_count+1,items:e,count:this.state.count+1})}},{key:"itemChange",value:function(e){var t=this;console.log(e.target);var a=/(\d+(\.\d+)?)/,n=this.state.items;if("tax"==e.target.name)this.setState({tax:e.target.value},(function(){t.getTotalBill()}));else for(var s=0;s<n.length;s++)if(n[s].warning&&(console.log("Here"),n[s].warning=!1,n[s].warning_text=""),parseInt(e.target.id)===n[s].id){console.log(n[s]);var l=n[s];if("item"===e.target.name)console.log("ITEM"),l.name=e.target.value;else if("price"===e.target.name)(""===e.target.value||a.test(e.target.value))&&(console.log("PRICE"),l.price=e.target.value);else if("item_tax"===e.target.name)(""===e.target.value||a.test(e.target.value))&&(console.log("TAX "+e.target.value),l.tax=e.target.value);else if("equal"===e.target.name){for(var i=0,r=0;r<this.state.names.length;r++)l.select[r]&&i++;for(var o=0;o<this.state.names.length;o++)l.select[o]?l.contributions[o]=Math.round(100/i*100)/100:l.contributions[o]=""}else if("selectall"===e.target.name&&e.target.checked){l.selectall=!0;for(var c=0;c<this.state.names.length;c++)l.select[c]=!0}else if("selectall"!==e.target.name||e.target.checked)"c"===e.target.name.charAt(0)?l.contributions[parseInt(e.target.name.split("contribution")[1])]=e.target.value:"s"===e.target.name.charAt(0)&&(console.log(l.select[parseInt(e.target.name.split("select")[1])]),l.select[parseInt(e.target.name.split("select")[1])]=!l.select[parseInt(e.target.name.split("select")[1])],l.selectall=l.select.every((function(e){return e})));else{l.selectall=!1;for(var m=0;m<this.state.names.length;m++)l.select[m]=!1}console.log(l);break}console.log(n,this.state.count),this.setState({items:n},(function(){t.getTotalBill()}))}},{key:"handleForm",value:function(e){if(e.preventDefault(),console.log(this.state.items),this.state.items.length){var t=e.target.tax.value;""==t&&(t=0);for(var a=[],n=!0,s=0;s<this.state.count;s++){var l=this.state.items[s];l.name=this.state.items[s].name,isNaN(parseFloat(this.state.items[s].price))?(console.log("It is not valid price"),n=!1,l.warning=!0,l.warning_text="Make sure Price is Numeric"):(console.log("It is valid price"),l.price=parseFloat(this.state.items[s].price));for(var i=[],r=0,o=0;o<this.state.names.length;o++)""===this.state.items[s].contributions[o]?i.push(0):i.push(parseFloat(this.state.items[s].contributions[o])),r+=i[o];""===l.tax&&(l.tax=0),this.state.tax_equal||(isNaN(parseFloat(this.state.items[s].tax))?(console.log("It is not valid tax"),n=!1,l.warning=!0,l.warning_text="Make sure Tax is Numeric"):(console.log("It is valid tax"),l.tax=parseFloat(this.state.items[s].tax),console.log(l.tax))),100!==Math.round(r)&&(n=!1,l.warning=!0,l.warning_text="Make sure sum is 100"),l.contri=i,a.push(l)}this.setState({items:a}),console.log(a,t),n&&this.props.resultOfForm(a,t,this.state.tax_equal,this.state.total_bill)}else alert("Enter Items")}},{key:"handleEqualTaxChange",value:function(e){var t=this;console.log(e.target.value);var a="Yes"===e.target.value;this.setState({tax_equal:a},(function(){t.getTotalBill()}))}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.handleForm},"Are all items taxed equally?",s.a.createElement("input",{type:"radio",name:"equaltax",value:"Yes",checked:!!this.state.tax_equal,onChange:this.handleEqualTaxChange})," ","Yes",s.a.createElement("input",{type:"radio",name:"equaltax",value:"No",checked:!this.state.tax_equal,onChange:this.handleEqualTaxChange})," ","No",s.a.createElement("br",null),s.a.createElement("h3",null,"Enter Items "),this.state.items.map((function(t,a){return s.a.createElement("div",{key:a,style:{border:t.warning?"10px solid red":"2px solid",margin:"2%",padding:"3%"}},s.a.createElement("h4",null,s.a.createElement("b",null,t.warning_text)),s.a.createElement(d,{srno:a+1,names:e.state.names,id:t.id,name:t.name,price:t.price,contributions:t.contributions,select:t.select,selectall:t.selectall,handleChange:e.itemChange,warning:t.warning,warning_text:t.warning_text,tax:t.tax,individual_item_tax_show:!e.state.tax_equal}),s.a.createElement("button",{type:"button",className:"btn btn-danger",id:t.id,onClick:e.deleteItem},"Delete Item"))})),s.a.createElement("button",{type:"button",className:"btn btn-primary",id:"additem",onClick:this.addItem},"Add Item"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("table",null,s.a.createElement("tbody",null,this.state.tax_equal?s.a.createElement("tr",null,s.a.createElement("td",null,"Enter total taxes"),s.a.createElement("td",null,s.a.createElement("input",{type:"number",step:"0.01",name:"tax",className:"form-control",id:"nameOfPerson",placeholder:"Enter Tax",value:this.state.tax,onChange:this.itemChange,required:!0}))):s.a.createElement("tr",null,s.a.createElement("td",null,"Enter Additional taxes as %"),s.a.createElement("td",null,s.a.createElement("input",{type:"number",step:"0.01",name:"tax",className:"form-control",id:"nameOfPerson",value:this.state.tax,onChange:this.itemChange,placeholder:"Enter Tax"}))))),s.a.createElement("h3",null,"Total Bill: Rs. ",this.state.total_bill),s.a.createElement("button",{type:"submit",className:"btn btn-success"},"Get Contributions"))}}]),a}(n.Component)),p=a(47),b=a.n(p),v=function(){return s.a.createElement("div",null,s.a.createElement("i",{className:"fa fa-spinner fa-spin"})," Loading...")},f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={names:e.names,result:e.result},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return this.state.names.map((function(t,a){return s.a.createElement("div",null,t," has to contribute ",s.a.createElement("strong",null,"Rs.",e.state.result[t]))}))}}]),a}(n.Component),E=a(13),x=a.n(E),_=a(48),y=a.n(_),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),n=t.call(this,e),e.new?n.state={names:[],items:[],taxes:0,total_bill:0,loading:!1,modal_show:!1}:n.state={names:e.names,items:e.items,taxes:e.taxes,total_bill:e.total_bill,loading:!1,modal_show:!1},n.handleGetNamesForm=n.handleGetNamesForm.bind(Object(u.a)(n)),n.getItemsAndTaxes=n.getItemsAndTaxes.bind(Object(u.a)(n)),n.modalClose=n.modalClose.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleGetNamesForm",value:function(e){console.log(e),this.setState({names:e})}},{key:"modalClose",value:function(){this.setState({modal_show:!1})}},{key:"getItemsAndTaxes",value:function(e,t,a,n){var s=this;if(a)for(var l=0;l<e.length;l++)e[l].tax=0;console.log(e,t);var i={people:this.state.names,items:e,taxes:t,total_bill:n};console.log(i),this.setState({loading:!0,modal_show:!0},(function(){b.a.post("https://serene-fortress-92182.herokuapp.com/",i).then((function(e){s.setState({loading:!1,result:e.data}),console.log(e)})).catch((function(e){console.log(e)}))}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Bill Spliter"),s.a.createElement(h,{names:this.state.names,sendNamesHere:this.handleGetNamesForm}),this.state.names.length>0?s.a.createElement(g,{names:this.state.names,items:this.state.items,taxes:this.state.taxes,total_bill:this.state.total_bill,resultOfForm:this.getItemsAndTaxes}):s.a.createElement("h4",null,"Enter Names to Continue"),s.a.createElement(x.a,{show:this.state.modal_show},s.a.createElement(x.a.Header,null,s.a.createElement(x.a.Title,null,"Result")),s.a.createElement(x.a.Body,null,this.state.loading?s.a.createElement(v,null):s.a.createElement(f,{names:this.state.names,result:this.state.result})),s.a.createElement(x.a.Footer,null,s.a.createElement(y.a,{variant:"secondary",onClick:this.modalClose},"Close"))))}}]),a}(n.Component),w=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(N,{new:!1,names:["Prayuj","Prayuj's Friend"],items:[{id:0,name:"Butter Chicken",price:350,selectall:!0,contributions:[50,50],select:[!0,!0],warning:!1,warning_text:"",tax:"",contri:[50,50]}],taxes:10,total_bill:385})}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){e.exports=a(116)},55:function(e,t,a){},58:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.8138ba46.chunk.js.map