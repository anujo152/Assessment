(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),r=a(4),s=a.n(r),c=(a(13),a(1)),u=a(5),o=a(6),h=a(8),l=a(7),d=(a(14),a(15),a(0)),f=function(e){var t=e.details,a=e.handleFavClick;return Object(d.jsxs)("div",{className:"friend_block",children:[Object(d.jsx)("span",{children:t.Name}),Object(d.jsx)("input",{type:"checkbox",defaultChecked:t.Favourite,onChange:function(){return a(t.Name)}})]})},v=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).setInitialState=function(){return{friends:[{Name:"Rahul Gupta",Favourite:!1},{Name:"Shivangi Sharma",Favourite:!1},{Name:"Akash Singh",Favourite:!1}],searchValue:""}},n.sortFavFriends=function(){var e=n.state.friends;return e.sort((function(e,t){var a=e.Favourite?1:0,n=t.Favourite?1:0;return a<n?1:a>n?-1:0})),e},n.handleFavClick=function(e){var t=n.state.friends.map((function(e){return Object(c.a)({},e)})),a=t.findIndex((function(t){return t.Name===e}));a>=0&&(t[a].Favourite=!t[a].Favourite,n.setState(Object(c.a)(Object(c.a)({},n.state.friends),{},{friends:t,original:t})))},n.searchFriend=function(e){n.setState({searchValue:e.target.value})},n.handleKeyDown=function(e){if("Enter"===e.key&&e.target.value.length>0){var t=n.state.original.map((function(e){return Object(c.a)({},e)}));t.push({Name:e.target.value,Favourite:!1}),n.setState(Object(c.a)(Object(c.a)({},n.state),{},{friends:t,original:t,searchValue:""}))}},n.state=n.setInitialState(),n.state.original=n.state.friends,n}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state.friends.length;if(t.searchValue===this.state.searchValue){if(t.friends.length===this.state.friends.length)for(var i=0;i<n;i++)if(t.friends[i].Favourite!==this.state.friends[i].Favourite){var r=this.sortFavFriends();return void this.setState(Object(c.a)(Object(c.a)({},this.state.friends),{},{friends:r}))}}else{var s=this.state.original.filter((function(e){return e.Name.toLowerCase().includes(a.state.searchValue.toLowerCase())}));this.setState(Object(c.a)(Object(c.a)({},this.state.friends),{},{friends:s}))}}},{key:"render",value:function(){var e=this,t=this.state.friends.map((function(t,a){return Object(d.jsx)(f,{details:t,handleFavClick:e.handleFavClick},t.Name)}));return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("h2",{children:"Friends"}),Object(d.jsx)("input",{value:this.state.searchValue,onChange:this.searchFriend,onKeyDown:this.handleKeyDown}),Object(d.jsx)("div",{className:"wrapper",children:t})]})})}}]),a}(i.a.Component),j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),j()}},[[17,1,2]]]);
//# sourceMappingURL=main.5aced306.chunk.js.map