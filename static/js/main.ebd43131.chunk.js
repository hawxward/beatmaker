(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/drumSequencer.59d2a27c.svg"},21:function(e,a,t){e.exports=t.p+"static/media/drum pad.d43507e1.svg"},27:function(e,a,t){e.exports=t.p+"static/media/Shaker.3111c849.wav"},28:function(e,a,t){e.exports=t.p+"static/media/Kick.d3369824.wav"},29:function(e,a,t){e.exports=t.p+"static/media/HiHat.b91b64ff.wav"},30:function(e,a,t){e.exports=t.p+"static/media/Tom.6399c42c.wav"},31:function(e,a,t){e.exports=t.p+"static/media/SnareSound.a3af7ccf.wav"},32:function(e,a,t){e.exports=t.p+"static/media/808hconga.8d08371f.wav"},33:function(e,a,t){e.exports=t.p+"static/media/Crash.fb090900.wav"},34:function(e,a,t){e.exports=t.p+"static/media/Clap02.f2910c32.wav"},37:function(e,a,t){e.exports=t(52)},42:function(e,a,t){},43:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),s=t.n(c),i=(t(42),t(43),t(17)),l=t(18),o=t(19),d=t(10),u=t(20),m=t.n(u),p=t(21),k=t.n(p);i.a.add(l.a,o.a);var y=function(){return r.a.createElement("div",{className:"body"},r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"beatmaker")),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"DrumpadLink"},r.a.createElement(d.b,{to:"/beatmaker"},r.a.createElement("img",{className:"drumpad",src:k.a,alt:"logo"}),"drumpad")),r.a.createElement("div",{className:"DrumSequencerLink"},r.a.createElement("img",{className:"DrumSequencer",src:m.a,alt:"logo"}),"drumsequencer")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=t(5),v=t(24),f=t(25),E=t(36),g=t(26),b=t(7),w=t(35),C=t(27),x=t.n(C),P=t(28),N=t.n(P),S=t(29),B=t.n(S),K=t(30),j=t.n(K),O=t(31),D=t.n(O),T=t(32),q=t.n(T),H=t(33),I=t.n(H),L=t(34),W=t.n(L),F=(t(51),function(e){var a=e.drumKey,t=e.song,n=e.handleClick,c=e.url;return r.a.createElement("button",{className:"drum-pad",id:t,onClick:n(a,t)},t,r.a.createElement("br",null),a,r.a.createElement("audio",{className:"clip",src:c,id:a}))}),J=function(e){var a=e.drumKey,t=e.song,n=e.handleClick,c=e.url;return r.a.createElement("button",{className:"drum-pad",id:t,onClick:n(a,t)},t,r.a.createElement("br",null),a,r.a.createElement("audio",{className:"clip",src:c,id:a}))},U=function(e){function a(e){var t;return Object(v.a)(this,a),(t=Object(E.a)(this,Object(g.a)(a).call(this,e))).state={drumPads1:[{key:"Q",song:"shaker",url:x.a},{key:"W",song:"Kick",url:N.a},{key:"E",song:"Hi-Hat",url:B.a},{key:"R",song:"Tom",url:j.a}],drumPads2:[{key:"A",song:"Snare",url:D.a},{key:"S",song:"808",url:q.a},{key:"D",song:"Clap",url:W.a},{key:"F",song:"Crash",url:I.a}],currentSongText:""},t.handleButtonClick=t.handleButtonClick.bind(Object(b.a)(t)),t.handleKeyPress=t.handleKeyPress.bind(Object(b.a)(t)),t.handlekeyPress=t.handlekeyPress.bind(Object(b.a)(t)),t}return Object(w.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keypress",this.handleKeyPress),window.addEventListener("keypress",this.handlekeyPress)}},{key:"handleButtonClick",value:function(e,a){var t=this;return function(){document.getElementById(e).play(),t.setState({currentSongText:a})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"drum-machine"},r.a.createElement("div",{className:"app_title"},r.a.createElement("h1",null,"Drum Pad")),r.a.createElement("div",{className:"display-container"},r.a.createElement("div",{id:"display-pads"},this.state.drumPads1.map(function(a){return r.a.createElement(F,{song:a.song,key:a.key,drumKey:a.key,handleClick:e.handleButtonClick,url:a.url})})),r.a.createElement("div",{id:"display-pads"},this.state.drumPads2.map(function(a){return r.a.createElement(J,{song:a.song,key:a.key,drumKey:a.key,handleClick:e.handleButtonClick,url:a.url})})),r.a.createElement("p",{id:"display",className:"current-text"},this.state.currentSongText)))}},{key:"handleKeyPress",value:function(e){var a=this.state.drumPads1.find(function(a){return a.key===e.key.toUpperCase()});a&&document.getElementById(a.song).click()}},{key:"handlekeyPress",value:function(e){var a=this.state.drumPads2.find(function(a){return a.key===e.key.toUpperCase()});a&&document.getElementById(a.song).click()}}]),a}(r.a.Component);s.a.render(r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{exact:!0,path:"/",component:y}),r.a.createElement(h.a,{exact:!0,path:"/beatmaker",component:U}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.ebd43131.chunk.js.map