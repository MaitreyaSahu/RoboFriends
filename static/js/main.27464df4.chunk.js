(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(5),h=n(6);n(13),n(14);var u=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib pa3 ma2  tc grow shadow-5 bw2"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?100x100"),alt:""}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a))};var m=function(e){var t=e.robots;return console.log(t),t.map((function(e){return r.a.createElement(u,{className:"flex flex-wrap",key:e.id,id:e.id,name:e.name,email:e.email})}))},d=function(e){var t=e.searchChnage;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green bg-light-green",type:"search",placeholder:"Search Robo Friends",onChange:t}))},f=(n(15),function(e){return r.a.createElement("div",null,e.children)}),g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1 light-green"},"Robo Friends"),r.a.createElement(d,{searchChnage:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:t})))}},{key:"componentDidMount",value:function(){var e=this;console.log(this.state.robots),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})})),console.log(this.state.robots)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.27464df4.chunk.js.map