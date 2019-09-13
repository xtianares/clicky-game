(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(7),c=a.n(n),m=(a(16),a(9)),r=a(1),l=a(2),o=a(4),d=a(3),g=a(5),u=(a(17),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-md-3 title"},"Clicky Emojis"),i.a.createElement("div",{className:"col-md-6 text-center"},this.props.status),i.a.createElement("div",{className:"col-md-3 score"},"Score: ",this.props.score," | Top Score: ",this.props.topScore))))}}]),t}(s.Component)),p=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=(new Date).getFullYear();return i.a.createElement("footer",{className:"footer mt-auto py-3"},i.a.createElement("div",{className:"container-fluid text-center text-light text-muted"},i.a.createElement("div",{className:"row d-flex align-items-center"},i.a.createElement("div",{className:"col-md-3 text-md-left"},"Built with React"),i.a.createElement("div",{className:"col-md-6 text-center"},i.a.createElement("span",null,"Copyright \xa9 ",e," -  ",i.a.createElement("a",{href:"https://www.xtianares.com"},"Christian Castanares"))),i.a.createElement("div",{className:"col-md-3 text-md-right"},i.a.createElement("a",{href:"https://github.com/xtianares/clicky-game"},"View in Github")))))}}]),t}(s.Component),h=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.emoji.map(function(t){return i.a.createElement("img",{className:"thumb img-thumbnail",key:t.id,"data-id":t.id,onClick:e.props.handleClick,src:t.image,alt:t.id})});return i.a.createElement("main",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 text-center"},i.a.createElement("h1",{className:"h3 mt-4 mt-md-5 mb-4 mb-md-5 message"},this.props.message))),i.a.createElement("div",{className:"row d-flex justify-content-center"},i.a.createElement("div",{className:"image-container col-12 d-flex justify-content-center"},t)))}}]),t}(s.Component),f=a(8),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={data:f,score:0,topScore:0,status:"Click an emoji to start",message:"Click as many emoji as you can without clicking the same one"},a.messages=["Good job keep it up!","Great, now keep on clicking!","Keep on clicking and set a new high score!","Nice, click like there's no tomorrow!","You're doing great, now click some more!"],a.componentDidMount=function(){a.setState({data:a.shuffleData(a.state.data)})},a.shuffleData=function(e){return e.sort(function(e,t){return.5-Math.random()})},a.handleClick=function(e){var t=e.target.dataset.id;a.checkGuess(t)},a.resetData=function(e){var t=e.map(function(e){return Object(m.a)({},e,{clicked:!1})});return a.shuffleData(t)},a.checkGuess=function(e){var t=!1,s=a.state.data.map(function(a){return a.id===parseInt(e)&&(a.clicked||(a.clicked=!0,t=!0)),a});if(t){var i=a.state.score+1;a.setState({data:a.shuffleData(s),score:i,topScore:Math.max(i,a.state.topScore),message:a.messages[Math.floor(Math.random()*a.messages.length)]}),a.animateCSS(".message","pulse")}else a.animateCSS("main","shake"),a.setState({data:a.resetData(s),score:0,message:"Oopsies, click an emoji to try again."})},a.animateCSS=function(e,t,a){var s=document.querySelector(e);s.classList.add("animated",t);s.addEventListener("animationend",function e(){s.classList.remove("animated",t),s.removeEventListener("animationend",e),"function"===typeof a&&a()})},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(s.Fragment,null,i.a.createElement(u,{status:this.state.status,score:this.state.score,topScore:this.state.topScore}),i.a.createElement(h,{message:this.state.message,emoji:this.state.data,animate:this.animateCSS,handleClick:this.handleClick}),i.a.createElement(p,null))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports=[{id:1,image:"assets/images/smiley/1.png",clicked:!1},{id:2,image:"assets/images/smiley/2.png",clicked:!1},{id:3,image:"assets/images/smiley/3.png",clicked:!1},{id:4,image:"assets/images/smiley/4.png",clicked:!1},{id:5,image:"assets/images/smiley/5.png",clicked:!1},{id:6,image:"assets/images/smiley/6.png",clicked:!1},{id:7,image:"assets/images/smiley/7.png",clicked:!1},{id:8,image:"assets/images/smiley/8.png",clicked:!1},{id:9,image:"assets/images/smiley/9.png",clicked:!1},{id:10,image:"assets/images/smiley/10.png",clicked:!1},{id:11,image:"assets/images/smiley/11.png",clicked:!1},{id:12,image:"assets/images/smiley/12.png",clicked:!1},{id:13,image:"assets/images/smiley/13.png",clicked:!1},{id:14,image:"assets/images/smiley/14.png",clicked:!1},{id:15,image:"assets/images/smiley/15.png",clicked:!1},{id:16,image:"assets/images/smiley/16.png",clicked:!1},{id:17,image:"assets/images/smiley/17.png",clicked:!1},{id:18,image:"assets/images/smiley/18.png",clicked:!1}]}},[[10,1,2]]]);
//# sourceMappingURL=main.23127efc.chunk.js.map