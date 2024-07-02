(this["webpackJsonpmy-ai-website-frontend"]=this["webpackJsonpmy-ai-website-frontend"]||[]).push([[0],{85:function(e,t,s){},86:function(e,t,s){"use strict";s.r(t);var a=s(4),n=s(38),c=s.n(n),r=s(45),i=s(6),o=s(88),j=s(93),l=s(5);var d=()=>Object(l.jsx)(o.a,{className:"mt-3",children:Object(l.jsx)(j.a,{children:Object(l.jsxs)(j.a.Body,{children:[Object(l.jsx)(j.a.Title,{children:"Welcome to the C++ Learning Platform"}),Object(l.jsx)(j.a.Text,{children:"This is the best place to learn and practice C++ programming. Explore tutorials, take quizzes, write and run code, and get assistance from our AI assistant."})]})})}),h=s(89),b=s(39);const x=[{title:"Introduction",link:"/tutorials/intro"},{title:"Syntax",link:"/tutorials/syntax"},{title:"Comments",link:"/tutorials/comments"}];var O=()=>Object(l.jsx)(o.a,{children:Object(l.jsx)(h.a,{children:x.map(((e,t)=>Object(l.jsx)(b.a,{sm:12,md:6,lg:4,className:"mb-3",children:Object(l.jsx)(j.a,{children:Object(l.jsxs)(j.a.Body,{children:[Object(l.jsx)(j.a.Title,{children:e.title}),Object(l.jsx)(j.a.Link,{href:e.link,children:"Learn More"})]})})},t)))})});const m=[{title:"Syntax Quiz",link:"/quizzes/syntax"},{title:"Variables Quiz",link:"/quizzes/variables"}];var u=()=>Object(l.jsx)(o.a,{children:Object(l.jsx)(h.a,{children:m.map(((e,t)=>Object(l.jsx)(b.a,{sm:12,md:6,lg:4,className:"mb-3",children:Object(l.jsx)(j.a,{children:Object(l.jsxs)(j.a.Body,{children:[Object(l.jsx)(j.a.Title,{children:e.title}),Object(l.jsx)(j.a.Link,{href:e.link,children:"Take Quiz"})]})})},t)))})}),p=s(90),y=s(91),g=s(40);s(54),s(55);var k=()=>{const[e,t]=Object(a.useState)(""),[s,n]=Object(a.useState)(""),[c,r]=Object(a.useState)("");return Object(l.jsxs)(o.a,{children:[Object(l.jsx)("h2",{children:"Code Editor"}),Object(l.jsx)(g.Controlled,{value:e,options:{mode:"text/x-c++src",lineNumbers:!0,theme:"default"},onBeforeChange:(e,s,a)=>t(a)}),Object(l.jsx)(p.a,{className:"mt-3",onClick:async()=>{console.log("Running code:",e);try{const t=await fetch("http://127.0.0.1:5000/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})}),s=await t.json();console.log("Response:",s),s.error?(r(s.error),n("")):(n(s.output),r(""))}catch(t){r("Error running the code."),n("")}},children:"Run Code"}),s&&Object(l.jsx)(y.a,{variant:"success",className:"mt-3",children:s}),c&&Object(l.jsx)(y.a,{variant:"danger",className:"mt-3",children:c})]})},f=s(92),v=s(44),C=s.n(v);var z=()=>{const[e,t]=Object(a.useState)(""),[s,n]=Object(a.useState)("");return Object(l.jsxs)(o.a,{children:[Object(l.jsx)("h2",{children:"AI Assistant"}),Object(l.jsxs)(f.a,{children:[Object(l.jsxs)(f.a.Group,{children:[Object(l.jsx)(f.a.Label,{children:"Ask the AI Assistant"}),Object(l.jsx)(f.a.Control,{type:"text",value:e,onChange:e=>t(e.target.value)})]}),Object(l.jsx)(p.a,{className:"mt-3",onClick:async()=>{try{const t=await C.a.post("http://127.0.0.1:5000/ask",{query:e});n(t.data.response)}catch(t){n("Error getting response from AI assistant.")}},children:"Ask"})]}),s&&Object(l.jsx)(y.a,{variant:"info",className:"mt-3",children:s})]})};var N=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",exact:!0,component:d}),Object(l.jsx)(i.a,{path:"/tutorials",component:O}),Object(l.jsx)(i.a,{path:"/quizzes",component:u}),Object(l.jsx)(i.a,{path:"/code-editor",component:k}),Object(l.jsx)(i.a,{path:"/ai-assistant",component:z})]})})};s(85);c.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.ddad9109.chunk.js.map