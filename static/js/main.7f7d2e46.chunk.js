(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(7),l=t.n(r),s=t(5),o=t(1),m=t(2),i=t(4),u=t(3),d=t(8),p=t.n(d),E=(t(15),function(e){var a=e.balance;return c.a.createElement("div",{className:"header"},c.a.createElement("h4",{className:"title"},"Expense Tracker"),c.a.createElement("div",{className:"balance_block"},c.a.createElement("h6",{className:"your_balance"},"Your Balance"),c.a.createElement("span",{className:"balance"},"$",a)))}),b=(t(16),function(e){var a=e.income,t=e.expense;return c.a.createElement("div",{className:"counter_money"},c.a.createElement("div",{className:"income"},c.a.createElement("div",{className:"special_container"},c.a.createElement("h6",{className:"counter_title"},"Income"),c.a.createElement("span",{className:"income_balance"},"$",a))),c.a.createElement("div",{className:"expense"},c.a.createElement("h6",{className:"counter_title"},"Expense"),c.a.createElement("span",{className:"expense_balance"},"$",t)))}),h=t(9),f=(t(17),function(e){var a=e.label,t=e.cash,n=e.onDelete,r=t<0?"red-border":"green-border";return c.a.createElement("li",{className:"list-group-item ".concat(r)},c.a.createElement("span",{className:"name"},a),c.a.createElement("span",{className:"money"},"$",t),c.a.createElement("button",{onClick:n,className:"delete"},"x"))}),v=(t(18),function(e){var a=e.items,t=e.onDelete,n=a.map((function(e){var a=e.id,n=Object(h.a)(e,["id"]);return c.a.createElement("div",{key:a},c.a.createElement(f,Object.assign({},n,{onDelete:function(){return t(a)}})))}));return c.a.createElement("div",{className:"history"},c.a.createElement("h5",{className:"title"},"History"),c.a.createElement("hr",{className:"line"}),c.a.createElement("ul",{className:"list-group"},n))}),N=(t(19),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={text:"",money:0},n.onLabelChange=function(e){n.setState({text:e.target.value})},n.onSumChange=function(e){n.setState({money:+e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onAdd(n.state.text,+n.state.money)},n}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"post-form"},c.a.createElement("h5",{className:"title"},"Add transaction"),c.a.createElement("hr",{className:"line"}),c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("span",null,"Text"),c.a.createElement("input",{onChange:this.onLabelChange,className:"enter-field",placeholder:"Enter text..."}),c.a.createElement("span",null,"Amount",c.a.createElement("br",null),"(negative - expense, positive - income)"),c.a.createElement("input",{onChange:this.onSumChange,type:"number",className:"enter-field",placeholder:"Enter amount..."}),c.a.createElement("button",{className:"btn-add"},"Add transaction")))}}]),t}(n.Component)),y=(t(20),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={data:[],incomeMoney:"0.00",expenseMoney:"0.00",balance:"0.00"},e.onAddItem=function(a,t){var n={label:a,cash:+t,id:p()()};e.setState((function(e){var a=e.data,c=e.incomeMoney,r=e.expenseMoney,l=e.balance,o=[n].concat(Object(s.a)(a));return t>=0?(c=+c+ +t,0===(l=+l+ +t)&&(l="0.00")):(r=+r+-1*+t,0===(l=+l- -1*+t)&&(l="0.00")),{data:o,incomeMoney:c,expenseMoney:r,balance:l}}))},e.onDeleteItem=function(a){e.setState((function(e){var t=e.data,n=e.incomeMoney,c=e.expenseMoney,r=e.balance,l=t.findIndex((function(e){return e.id===a})),o=[].concat(Object(s.a)(t.slice(0,l)),Object(s.a)(t.slice(l+1)));return t[l].cash>=0?(n-=+t[l].cash,r-=+t[l].cash,0===n&&(n="0.00",0===r&&(r="0.00"))):(c-=-1*t[l].cash,r+=-1*t[l].cash,0===c&&(c="0.00",0===r&&(r="0.00"))),{data:o,incomeMoney:n,expenseMoney:c,balance:r}}))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=e.data,t=e.incomeMoney,n=e.expenseMoney,r=e.balance;return c.a.createElement("div",{className:"app"},c.a.createElement(E,{balance:r}),c.a.createElement(b,{income:t,expense:n}),c.a.createElement(v,{items:a,onDelete:this.onDeleteItem}),c.a.createElement(N,{onAdd:this.onAddItem}))}}]),t}(n.Component));l.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7f7d2e46.chunk.js.map