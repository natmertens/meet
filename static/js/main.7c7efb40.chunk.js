(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{201:function(e,t,n){},202:function(e,t,n){},356:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(65),c=n.n(s),o=(n(201),n(23)),i=n(30),u=n(24),l=n(25),h=(n(202),n(6)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){e.setState({showDetails:!0})},e.handleHideDetails=function(){e.setState({showDetails:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails,n=this.props.event,a=new Date(n.start.dateTime.substring(0,10)).toDateString(),r=n.start.dateTime.substring(11,16);return Object(h.jsx)("div",{className:"event",children:t?Object(h.jsxs)("div",{className:"expanded-view",children:[Object(h.jsx)("h3",{className:"title",children:n.summary}),Object(h.jsxs)("p",{className:"event-start",children:[a,", ",r]}),Object(h.jsx)("p",{className:"location",children:n.location}),Object(h.jsx)("p",{children:"About the event:"}),Object(h.jsx)("p",{className:"description",children:n.description}),Object(h.jsx)("button",{className:"hide-details",onClick:function(){return e.handleHideDetails()},children:"Hide Details"})]}):Object(h.jsxs)("div",{className:"collapsed-view",children:[Object(h.jsx)("h3",{className:"title",children:n.summary}),Object(h.jsxs)("p",{className:"event-start",children:[a,", ",r]}),Object(h.jsx)("p",{className:"location",children:n.location}),Object(h.jsx)("button",{className:"show-details",onClick:function(){return e.handleShowDetails()},children:"Show Details"})]})})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(v),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(v),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="green",a}return n}(v),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,suggestions:[],infoText:"We cannot find the city you are looking for. Please try another city.",showSuggestions:!1})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)(p,{text:this.state.infoText}),Object(h.jsx)("input",{type:"text",className:"city",placeholder:"Search for a city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:e.props.numberOfEvents,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberOfEvents:n,errorText:""}),(n<1||n>32)&&e.setState({errorText:"Please select a number between 1 and 32"});var a=e.props.selectedLocation?e.props.selectedLocation:"all";e.props.updateEvents(a,n)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"numberOfEvents",children:[Object(h.jsx)(j,{text:this.state.errorText}),Object(h.jsx)("p",{children:"Number of Events:"}),Object(h.jsx)("input",{className:"event-number",value:this.state.numberOfEvents,placeholder:"12",onChange:this.handleInputChanged}),Object(h.jsx)(j,{text:this.state.errorText})]})}}]),n}(a.Component),g=n(18),x=n(358),w=n(365),y=n(180),S=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(g.a)(n,2),s=(r[0],r[1]);Object(a.useEffect)((function(){s((function(){return c()}))}),[t]);var c=function(){var e=t.map((function(e){return{eventSummary:e.summary}}));return["React","JavaScript","Node","jQuery","AngularJS"].map((function(t){var n=t,a=e.filter((function(e){return e.eventSummary.split(" ").includes(n)})).length;return{name:n,value:a}})).filter((function(e){return e.value>=1}))};return Object(h.jsx)(x.a,{height:400,children:Object(h.jsx)(w.a,{width:400,height:400,children:Object(h.jsx)(y.a,{data:c(),cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})})})},k=n(33),C=n.n(k),N=n(76),E=n(190),D=n(119),T=n.n(D),I=n(97),L=n.n(I),A=function(e){var t=e.map((function(e){return e.location}));return Object(E.a)(new Set(t))},W=function(){var e=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},J=function(){var e=Object(N.a)(C.a.mark((function e(t){var n,a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://ka5f0solz1.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,a,r,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L.a.start(),navigator.onLine){e.next=5;break}return t=localStorage.getItem("lastEvents"),L.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 5:return e.next=7,z();case 7:if(!(n=e.sent)){e.next=17;break}return U(),a="https://ka5f0solz1.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=13,T.a.get(a);case 13:return(r=e.sent).data&&(s=A(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(s))),L.a.done(),e.abrupt("return",r.data.events);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n,a,r,s,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,W(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,T.a.get("https://ka5f0solz1.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,c=s.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&J(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=(n(356),n(185)),q=n(362),R=n(363),_=n(186),B=n(187),H=n(77),K=n(191),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:12,selectedLocation:null,offlineText:""},e.updateEvents=function(t,n){n&&n>0&&n<33&&(console.log(n),e.setState({numberOfEvents:n})),e.setState({selectedLocation:t}),P().then((function(n){var a="all"===t?n.slice(0,e.state.numberOfEvents):n.filter((function(e){return e.location===t})).slice(0,e.state.numberOfEvents);e.setState({events:a})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(",").shift(),number:t}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,this.setState({offlineText:"You are using the app offline so data might not be up-to-date"}),P().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:A(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.events;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(F.Offline,{children:Object(h.jsx)(b,{text:this.state.offlineText})}),Object(h.jsx)("h1",{children:"Meet App"}),Object(h.jsx)("p",{children:"Choose Your Nearest City:"}),Object(h.jsx)(m,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(h.jsx)(O,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents,selectedLocation:this.state.selectedLocation}),Object(h.jsx)("h3",{className:"event-header",children:"Events in Each City"}),Object(h.jsxs)("div",{className:"data-vis-wrapper",children:[Object(h.jsx)(S,{events:e}),Object(h.jsx)(x.a,{height:400,children:Object(h.jsxs)(q.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(h.jsx)(R.a,{strokeDasharray:"3 3"}),Object(h.jsx)(_.a,{type:"category",dataKey:"city",name:"City"}),Object(h.jsx)(B.a,{type:"number",dataKey:"number",name:"Number of Events",allowDecimals:!1}),Object(h.jsx)(H.a,{cursor:{strokeDasharray:"3 3"}}),Object(h.jsx)(K.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(h.jsx)(f,{events:this.state.events})]})}}]),n}(a.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var $=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},G=n(188);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Q(t,e)}))}}(),G.config("8c131dd1b5924c46be101313a9d73286").install(),$()}},[[357,1,2]]]);
//# sourceMappingURL=main.7c7efb40.chunk.js.map