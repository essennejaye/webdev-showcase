(this["webpackJsonpwebdev-showcase"]=this["webpackJsonpwebdev-showcase"]||[]).push([[0],[,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/profile_pic.4e10929b.jpg"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){var n={"./my-schtick-kick.png":14,"./mydigilib.png":15,"./rv-roadtrip.png":16,"./weather-dashboard.png":17,"./web-dev-op-ed.png":18,"./workday-scheduler.png":19};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=13},function(e,t,a){e.exports=a.p+"static/media/my-schtick-kick.5dc6d17f.png"},function(e,t,a){e.exports=a.p+"static/media/mydigilib.99fbe7da.png"},function(e,t,a){e.exports=a.p+"static/media/rv-roadtrip.afe9466b.png"},function(e,t,a){e.exports=a.p+"static/media/weather-dashboard.e31c1624.png"},function(e,t,a){e.exports=a.p+"static/media/web-dev-op-ed.88dcc59d.png"},function(e,t,a){e.exports=a.p+"static/media/workday-scheduler.b9f27390.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),i=(a(5),a(1)),o=function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,"Satalia N Jefferson"),r.a.createElement("div",{className:"header-container"},r.a.createElement("h2",null,"Full Stack Web Developer"),e.children))};var s=function(e){var t=e.pages,a=void 0===t?[]:t,n=e.setCurrentPage,l=e.currentPage;return r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("ul",null,a.map((function(e){return r.a.createElement("li",{className:"mx-5 ".concat(l.name===e.name&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){n(e)}},(t=e.name).charAt(0).toUpperCase()+t.slice(1)));var t}))))},m=a(7),u=a.n(m),p=function(){return r.a.createElement("section",{className:"section-container"},r.a.createElement("img",{className:"profile-pic",src:u.a,alt:""}),r.a.createElement("div",{className:"about-container"},r.a.createElement("p",null,"I am an always evolving web developer with a background in healthcare that allows me to combine critical thinking skills, effective team communication, attention to detail and an ability to work effectively under pressure. Recently, I earned a Master of Science in Information Systems from Dakota State University and a certificate for full stack web development from the University of Arizona. I am excited about the opportunity to venture outside of the usual expectations to help craft memorable, lasting and responsive user friendly web applications.")))},d=function(e){var t=e.project,n=t.name,l=t.description,c=t.link,i=t.repo;return r.a.createElement("div",{className:"project-container",key:n},r.a.createElement("div",{className:"project-img"},r.a.createElement("img",{src:a(13)("./".concat(n,".png")),alt:n}),r.a.createElement("div",{className:"text-block hide"},r.a.createElement("h3",null,r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},n),r.a.createElement("br",null),r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"}))),r.a.createElement("p",null,l))))},f=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},[{name:"mydigilib",description:"Full Stack Mern Project",link:"https://whispering-forest-25290.herokuapp.com/",repo:"https://github.com/essennejaye/bookworms-bibliography"},{name:"my-schtick-kick",description:"Group Project: \nJavascript, Node, Express \nSequelize ORM, Bootstrap",link:"https://fathomless-waters-65385.herokuapp.com/",repo:"https://github.com/essennejaye/myschtickkick"},{name:"rv-roadtrip",description:"Group Project: \nHTML, CSS, Javascript \nJQuery, Bulma",link:"https://essennejaye.github.io/rv-roadtrip/",repo:"https://github.com/essennejaye/rv-roadtrip"},{name:"weather-dashboard",description:"HTML, CSS \nJavascript, jQuery",link:"https://essennejaye.github.io/city-forecast/",repo:"https://github.com/essennejaye/city-forecast"},{name:"web-dev-op-ed",description:"Javascript, Node, Express \nSequelize ORM, Handlebars \nBootstrap",link:"https://fathomless-waters-65385.herokuapp.com/",repo:"https://github.com/essennejaye/dev-op"},{name:"workday-scheduler",description:"HTML, CSS \nJavascript, jQuery",link:"https://essennejaye.github.io/coder-calender",repo:"https://github.com/essennejaye/coder-calender"}].map((function(e,t){return r.a.createElement(d,{project:e,key:"project"+t})}))))},h=a(2),E=a(3),g=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a.name,o=a.email,s=a.message,m=Object(n.useState)(""),u=Object(i.a)(m,2),p=u[0],d=u[1],f=function(e){if(0===e.target.value.length)d("".concat(e.target.name," is required."));else if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);t?d(""):(console.log(t),d("Your email is invalid."))}console.log("errorMessage",p),p||l(Object(E.a)(Object(E.a)({},a),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("section",{className:"section-container"},r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)}},r.a.createElement("h2",{"data-testid":"h1tag"},"Emails Welcome!"),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:c,onBlur:f})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:o,onBlur:f})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:s,onBlur:f})),p&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},p)),r.a.createElement("button",{"data-testid":"buttontag",className:"button",type:"submit"},"Submit")))},b=function(){return r.a.createElement("section",{className:"my-5 section-container"},r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Please download my ",r.a.createElement("a",{href:"https://www.linkedin.com/in/satalia-n-jefferson-87037a114/"},"resume!")),r.a.createElement("h3",null,"Front-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"responsive design"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Bootstrap"),r.a.createElement("li",null,"Bulma")),r.a.createElement("h3",null,"Back-end Proficiencies"),r.a.createElement("ul",{className:"skills"},r.a.createElement("li",null,"APIs, RESTful API'S"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"MySQL, Sequelize"),r.a.createElement("li",null,"MongoDB, Mongoose"))))},v=function(e){var t=e.currentPage;return r.a.createElement("div",null,function(){switch(t.name){case"about me":return r.a.createElement(p,null);case"portfolio":return r.a.createElement(f,null);case"resume":return r.a.createElement(b,null);case"contact":return r.a.createElement(g,null);default:return r.a.createElement(p,null)}}(),";")},k=function(){return r.a.createElement("footer",{className:"section-container"},[{name:"fab fa-linkedin",linkUrl:"http://www.linkedin.com/in/satalia-n-jefferson-87037a114/"},{name:"fab fa-github-square",linkUrl:"https://github.com/essennejaye/"}].map((function(e){return r.a.createElement("a",{href:e.linkUrl,key:e.name,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"img ".concat(e.name)}))})))};var y=function(){var e=Object(n.useState)([{name:"about"},{name:"portfolio"},{name:"resume"},{name:"contact"}]),t=Object(i.a)(e,1)[0],a=Object(n.useState)(t[0]),l=Object(i.a)(a,2),c=l[0],m=l[1];return r.a.createElement("div",null,r.a.createElement(o,null,r.a.createElement(s,{pages:t,currentPage:c,setCurrentPage:m})),r.a.createElement("main",null,r.a.createElement(v,{currentPage:c})),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9fad09a8.chunk.js.map