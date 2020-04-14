(this.webpackJsonpstock_app=this.webpackJsonpstock_app||[]).push([[0],{222:function(e,t,a){e.exports=a(426)},227:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(0),c=a.n(r),s=a(91),l=a.n(s),o=(a(227),a(14)),i=a(15),u=a(17),m=a(16),d=a(18),h=a(430),p=a(431),E=a(221),f=a(140),b=a(428),g=a(6),v=Object(g.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return c.a.createElement("div",null,c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(b.a,{to:"/create"},"Add new stock")),c.a.createElement("li",null,c.a.createElement("a",{onClick:e.signOut},"Log Out")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/",className:"btn btn-floating blue lighten-1"},e.profile.initials))))})),N=function(){return c.a.createElement("div",null,c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(b.a,{to:"/signup"},"Signup")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/signin"},"Login"))))},k=Object(g.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?c.a.createElement(v,{profile:a}):c.a.createElement(N,null);return c.a.createElement("nav",{className:"nav-wrapper grey darken-3"},c.a.createElement("div",{className:"container"},c.a.createElement(f.a,{to:"/",className:"brand-logo"},"Tom Stock App"),n))})),O=a(49),S=a(141),y=a.n(S),j=a(215),C=a(220),w=a(50),R=a.n(w),D=function(e){var t=e.stock,a=Object(r.useState)(null),n=Object(C.a)(a,2),s=n[0],l=n[1];Object(r.useEffect)((function(){o()}),[]);var o=function(){var e=Object(j.a)(y.a.mark((function e(){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"VY6AH13MRIO266VC",a=t.stockSymbol,n="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=".concat(a,"&outputsize=compact&apikey=").concat("VY6AH13MRIO266VC"),e.t0=fetch(n).then((function(e){return e.json()})),e.next=6,function(e){console.log(e);var t=e["Meta Data"]["3. Last Refreshed"].slice(0,10);l(e["Time Series (Daily)"][t]["1. open"])};case 6:e.t1=e.sent,e.t0.then.call(e.t0,e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"col s12 m6"},c.a.createElement("div",{className:"card blue-grey darken-1 z-depth-0 project-summary"},c.a.createElement("div",{className:"card-content white-text"},c.a.createElement("span",{className:"card-title "},t.stockName),c.a.createElement("span",{className:"card-body Heading h3"},Number(s).toFixed(2)," USD"),c.a.createElement("p",{className:"grey-text Heading h6"},t.authorFirstName," ",t.authorLastName),c.a.createElement("p",{className:"grey-text Heading h6"},R()(t.createdAt.toDate()).calendar()),c.a.createElement(f.a,{className:"secondary-content",to:"/",onClick:function(){return e.handleDelete(t.id)}},c.a.createElement("i",{className:" material-icons",style:{color:"red"}},"delete")))))},_=function(e){var t=e.stocks;return c.a.createElement("div",{className:"project-list section"},t&&t.map((function(t){return c.a.createElement(f.a,{to:"/stock/"+t.id,key:t.id},c.a.createElement(D,{stock:t,handleDelete:e.handleDelete}))})))},I=function(e){var t=e.notifications;return c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},"Notifications"),c.a.createElement("ul",{className:"online-users"},t&&t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("span",{className:"pink-text"},e.user," "),c.a.createElement("span",null,e.content),c.a.createElement("div",{className:"note-date grey-text"},R()(e.time).fromNow()))}))))))},F=a(22),T=a(20),x=a(429),A=a(51),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state=a.props,a.handleDelete=a.handleDelete.bind(Object(O.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleDelete",value:function(e){this.props.deleteStock(e),console.log(e),this.props.history.push("/")}},{key:"render",value:function(){var e=this.props,t=(e.stocks,e.auth),a=e.notifications;return t.uid?c.a.createElement("div",{className:"dashboard container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m8"},c.a.createElement(_,{stocks:this.state.stocks,handleDelete:this.handleDelete.bind(this)})),c.a.createElement("div",{className:"col s12 m3 offset-m1"},c.a.createElement(I,{notifications:a})))):c.a.createElement(x.a,{to:"/signin"})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t!==e?{stocks:e.stocks}:null}}]),t}(r.Component),U=Object(T.d)(Object(g.b)((function(e){return{stocks:e.firestore.ordered.stocks,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),(function(e){return{deleteStock:function(t){return e(function(e){return function(t,a,n){(0,n.getFirestore)().collection("stocks").doc(e).delete().then((function(){t({type:"DELETE_STOCK_SUCCESS"})})).catch((function(e){t({type:"DELETE_STOCK_ERROR"},e)}))}}(t))}}})),Object(F.firestoreConnect)([{collection:"stocks",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))(L),P=(a(386),a(216)),V=a.n(P),G=a(217),z=a.n(G)()(V.a),K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={stockChartXValues:[],stockChartYValues:[]},a.fetchStock=a.fetchStock.bind(Object(O.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchStock()}},{key:"fetchStock",value:function(){var e=this;console.log(e);var t=this.props.stockSymbol;console.log(t);var a="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=".concat(t,"&outputsize=compact&apikey=").concat("VY6AH13MRIO266VC"),n=[],r=[];fetch(a).then((function(e){return e.json()})).then((function(t){for(var a in console.log(t),t["Time Series (Daily)"])n.push(a),r.push(t["Time Series (Daily)"][a]["1. open"]);e.setState({stockChartXValues:n,stockChartYValues:r})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(z,{data:[{x:this.state.stockChartXValues,y:this.state.stockChartYValues,type:"scatter",mode:"lines+markers",marker:{color:"red"}}],layout:{width:680,height:360,title:this.props.stockSymbol}}))}}]),t}(c.a.Component),Y=Object(T.d)(Object(g.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.stocks;return{stock:n?n[a]:null,auth:e.firebase.auth}})),Object(F.firestoreConnect)([{collection:"stocks"}]))((function(e){var t=e.stock;return e.auth.uid?t?c.a.createElement("div",{className:"container section project-details"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},t.stockName),c.a.createElement("p",null,t.stockSymbol),c.a.createElement(f.a,{className:"primary-content",to:"/"},c.a.createElement("i",{className:"material-icons",style:{color:"#44a6c6"}},"arrow_back"))),c.a.createElement(K,{stockSymbol:t.stockSymbol}),c.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},c.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("div",null,R()(t.createdAt.toDate()).calendar())))):c.a.createElement("div",{className:"container center"},c.a.createElement("p",null,"Loading stock...")):c.a.createElement(x.a,{to:"/signin"})})),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(n.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?c.a.createElement(x.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn blue lighten-1 z-depth-0"},"Login"),c.a.createElement("div",{className:"center red-text"},t?c.a.createElement("p",null,t):null))))}}]),t}(r.Component),M=Object(g.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(H),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(n.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?c.a.createElement(x.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"firstName"},"First Name"),c.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"lastName"},"Last Name"),c.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn blue lighten-1 z-depth-0"},"Sign Up"),c.a.createElement("div",{className:"center red-text"},a?c.a.createElement("p",null,a):null))))}}]),t}(r.Component),W=Object(g.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,s=r(),l=c();s.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(e){return l.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})})).then((function(){e({type:"SIGNUP_SUCCESS"})})).catch((function(t){e({type:"SIGNUP_ERROR",err:t})}))}));var a}}}))(B),J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={stockName:"",stockSymbol:""},a.handleChange=function(e){a.setState(Object(n.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createStock(a.state),a.props.history.push("/")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.auth.uid?c.a.createElement("div",{className:"container"},c.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Add a new stock"),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",id:"stockName",onChange:this.handleChange}),c.a.createElement("label",{htmlFor:"stockName"},"Stock name")),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",id:"stockSymbol",onChange:this.handleChange}),c.a.createElement("label",{htmlFor:"stockSymbol"},"Stock symbol")),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn blue lighten-1"},"Create")))):c.a.createElement(x.a,{to:"/signin"})}}]),t}(r.Component),X=Object(g.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createStock:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirestore)(),c=a().firebase.profile,s=a().firebase.auth.uid;r.collection("stocks").add(Object(A.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:s,createdAt:new Date})).then((function(){t({type:"CREATE_STOCK",stock:e})})).catch((function(e){t({type:"CREATE_STOCK_ERROR"},e)}))}}(t))}}}))(J),q=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(k,null),c.a.createElement(p.a,null,c.a.createElement(E.a,{exact:!0,path:"/",component:U}),c.a.createElement(E.a,{path:"/stock/:id",component:Y}),c.a.createElement(E.a,{path:"/signin",component:M}),c.a.createElement(E.a,{path:"/signup",component:W}),c.a.createElement(E.a,{path:"/create",component:X}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z={authError:null},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(A.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),{authError:null};case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(A.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(A.a)({},e,{authError:t.err.message});default:return e}},Q=a(52),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_STOCK":return console.log("create stock",t.stock),e;case"CREATE_STOCK_ERROR":return console.log("create stock error"),e;case"DELETE_STOCK_SUCCESS":return console.log("delete stock success"),e;case"DELETE_STOCK_ERROR":return console.log("delete stock error"),e;default:return e}},te=Object(T.c)({auth:$,project:ee,firebase:F.firebaseReducer,firestore:Q.firestoreReducer}),ae=a(218),ne=a(30),re=a.n(ne);a(421),a(427),a(424);re.a.initializeApp({apiKey:"AIzaSyD-7dW8PjfOE5v4Ot2v4P3elXN49Z2Tbz8",authDomain:"stock-app-62121.firebaseapp.com",databaseURL:"https://stock-app-62121.firebaseio.com",projectId:"stock-app-62121",storageBucket:"stock-app-62121.appspot.com",messagingSenderId:"1078983091471",appId:"1:1078983091471:web:7e94cd3fd1fd35d3dbca7a",measurementId:"G-45319DRTFC"}),re.a.analytics(),re.a.firestore();var ce,se=re.a,le=Object(T.e)(te,Object(T.d)(Object(T.a)(ae.a.withExtraArgument({getFirebase:F.getFirebase,getFirestore:Q.getFirestore})),Object(Q.reduxFirestore)(re.a,se))),oe=(ce={firebase:re.a,config:se},Object(n.a)(ce,"config",{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1}),Object(n.a)(ce,"dispatch",le.dispatch),Object(n.a)(ce,"createFirestoreInstance",Q.createFirestoreInstance),ce);l.a.render(c.a.createElement(g.a,{store:le},c.a.createElement(F.ReactReduxFirebaseProvider,oe,c.a.createElement((function(e){var t=e.children,a=Object(g.c)((function(e){return e.firebase.auth}));return Object(F.isLoaded)(a)?t:c.a.createElement("div",null,"Loading Screen...")}),null,c.a.createElement(q,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[222,1,2]]]);
//# sourceMappingURL=main.33bfd5d0.chunk.js.map