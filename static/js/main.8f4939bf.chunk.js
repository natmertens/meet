(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{201:function(e,t,n){},202:function(e,t,n){},356:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(65),o=n.n(s),c=(n(201),n(23)),i=n(30),l=n(24),u=n(25),d=(n(202),n(6)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleDetails=function(){!0===e.state.showDetails?e.setState({showDetails:!1}):e.setState({showDetails:!0})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails,n=this.props.event,a=new Date(n.start.dateTime.substring(0,10)).toDateString(),r=n.start.dateTime.substring(11,16);return Object(d.jsx)("div",{className:"event",children:t?Object(d.jsxs)("div",{className:"expanded-view",children:[Object(d.jsx)("h3",{className:"title",children:n.summary}),Object(d.jsxs)("p",{className:"event-start",children:[a,", ",r]}),Object(d.jsx)("p",{className:"location",children:n.location}),Object(d.jsx)("h4",{children:"About the event:"}),Object(d.jsx)("p",{className:"description",children:n.description}),Object(d.jsx)("button",{className:"hide-details",class:"btn btn-secondary mt-3",onClick:function(){return e.handleDetails()},children:"Hide Details"})]}):Object(d.jsxs)("div",{className:"collapsed-view",children:[Object(d.jsx)("h3",{className:"title",children:n.summary}),Object(d.jsxs)("p",{className:"event-start",children:[a,", ",r]}),Object(d.jsx)("p",{className:"location",children:n.location}),Object(d.jsx)("button",{className:"show-details",class:"btn btn-secondary mt-3",onClick:function(){return e.handleDetails()},children:"Show Details"})]})})}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Alert",children:Object(d.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(p),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(p),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="green",a}return n}(p),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:"",showSuggestions:!0});e.setState({query:n,suggestions:[],infoText:"We cannot find the city you are looking for. Please try another city.",showSuggestions:!1})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)(v,{text:this.state.infoText}),Object(d.jsx)("input",{type:"text",className:"city",placeholder:"Search for a city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:e.props.numberOfEvents,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberOfEvents:n,errorText:""}),(n<1||n>32)&&e.setState({errorText:"Please select a number between 1 and 32"});var a=e.props.selectedLocation?e.props.selectedLocation:"all";e.props.updateEvents(a,n)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"numberOfEvents",children:[Object(d.jsx)(m,{text:this.state.errorText}),Object(d.jsx)("p",{children:"Number of Events:"}),Object(d.jsx)("input",{type:"number",className:"event-number",value:this.state.numberOfEvents,placeholder:"12",onChange:this.handleInputChanged})]})}}]),n}(a.Component),w=n(18),O=n(358),x=n(365),y=n(180),k=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(w.a)(n,2),s=r[0],o=r[1];Object(a.useEffect)((function(){o((function(){return c()}))}),[t]);var c=function(){var e=t.map((function(e){return{eventSummary:e.summary}}));return["React","JavaScript","Node","jQuery","AngularJS"].map((function(t){var n=t,a=e.filter((function(e){return e.eventSummary.split(" ").includes(n)})).length;return{name:n,value:a}})).filter((function(e){return e.value>=1}))};return Object(d.jsx)(O.a,{height:400,children:Object(d.jsx)(x.a,{width:400,height:400,children:Object(d.jsx)(y.a,{data:s,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})})})},S=n(33),T=n.n(S),E=n(76),C=n(190),N=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],D=n(119),Z=n.n(D),W=n(77),A=n.n(W),I=function(e){var t=e.map((function(e){return e.location}));return Object(C.a)(new Set(t))},L=function(){var e=Object(E.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},M=function(){var e=Object(E.a)(T.a.mark((function e(t){var n,a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://ka5f0solz1.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(E.a)(T.a.mark((function e(){var t,n,a,r,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A.a.start(),navigator.onLine){e.next=5;break}return t=localStorage.getItem("lastEvents"),A.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 5:if(!window.location.href.startsWith("http://localhost")){e.next=8;break}return A.a.done(),e.abrupt("return",N);case 8:return e.next=10,R();case 10:if(!(n=e.sent)){e.next=20;break}return J(),a="https://ka5f0solz1.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,Z.a.get(a);case 16:return(r=e.sent).data&&(s=I(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(s))),A.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(E.a)(T.a.mark((function e(){var t,n,a,r,s,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,Z.a.get("https://ka5f0solz1.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&M(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=(n(356),n(185)),U=n(362),z=n(363),F=n(186),H=n(187),Y=n(78),P=n(191),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:12,selectedLocation:null,offlineText:""},e.updateEvents=function(t,n){n&&n>0&&n<33&&e.setState({numberOfEvents:n}),e.setState({selectedLocation:t}),q().then((function(n){var a="all"===t?n.slice(0,e.state.numberOfEvents):n.filter((function(e){return e.location===t})).slice(0,e.state.numberOfEvents);e.setState({events:a})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(",").shift(),number:t}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,this.setState({offlineText:"You are using the app offline so data might not be up-to-date"}),q().then((function(t){e.mounted&&e.setState({events:t.slice(0,e.state.numberOfEvents),locations:I(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.events;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(B.Offline,{children:Object(d.jsx)(b,{text:this.state.offlineText})}),Object(d.jsx)("h1",{class:"mb-4",children:"Meet App"}),Object(d.jsx)("p",{children:"Choose Your Nearest City:"}),Object(d.jsx)(j,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(g,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents,selectedLocation:this.state.selectedLocation}),Object(d.jsx)("h2",{className:"event-header",children:"Events in Each City"}),Object(d.jsxs)("div",{className:"data-vis-wrapper",children:[Object(d.jsx)(k,{events:e}),Object(d.jsx)(O.a,{height:400,children:Object(d.jsxs)(U.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(d.jsx)(z.a,{strokeDasharray:"3 3"}),Object(d.jsx)(F.a,{type:"category",dataKey:"city",name:"City"}),Object(d.jsx)(H.a,{type:"number",dataKey:"number",name:"Number of Events",allowDecimals:!1}),Object(d.jsx)(Y.a,{cursor:{strokeDasharray:"3 3"}}),Object(d.jsx)(P.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(d.jsx)(f,{events:this.state.events})]})}}]),n}(a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))},X=n(188);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),X.config("8c131dd1b5924c46be101313a9d73286").install(),V()}},[[357,1,2]]]);
//# sourceMappingURL=main.8f4939bf.chunk.js.map