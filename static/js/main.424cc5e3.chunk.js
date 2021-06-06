(this["webpackJsonporder-form"]=this["webpackJsonporder-form"]||[]).push([[0],{17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var i,a,c=n(1),r=n.n(c),l=n(9),s=n.n(l),o=(n(17),n(3)),d=n(2),u=n(4),j=n.p+"static/media/pizza.8e3e9966.jpg",b=n.p+"static/media/soup.be380d24.jpg",h=n.p+"static/media/sandwich.ed0198b8.jpg",p=n(0),x=u.a.div(i||(i=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50vw;\n  padding: 10px 0 10px 0;\n  margin: 5% 0 10% 0;\n  background-color: white;\n  @media (max-width: 768px) {\n    width: 100vw;\n  }\n  h2 {\n    font-size: 2rem;\n    letter-spacing: 20px;\n  }\n  img {\n    width: 100%;\n    @media (max-width: 768px) {\n      width: 100vw;\n      height: auto;\n    }\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    label {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: #f6f6f6;\n      width: 50vw;\n      height: 40px;\n      @media (max-width: 768px) {\n        width: 100vw;\n      }\n    }\n    input {\n      text-align: left;\n      margin: 5px;\n      border: 1px solid lightgray;\n      height: 20px;\n      width: 150px;\n    }\n    select {\n      border: 1px solid lightgray;\n      width: 150px;\n      height: 20px;\n      margin: 10px;\n    }\n  }\n  button {\n    height: 30px;\n    background-color: black;\n    color: white;\n    border: 1px solid black;\n    &:hover {\n      opacity: 75%;\n    }\n  }\n"]))),g=function(){var e=r.a.useState([{label:"Pizza",value:"Pizza"},{label:"Soup",value:"Soup"},{label:"Sandwich",value:"Sandwich"}]),t=Object(d.a)(e,1)[0],n=Object(c.useState)(""),i=Object(d.a)(n,2),a=i[0],l=i[1],s=Object(c.useState)([]),o=Object(d.a)(s,2),u=o[0],g=o[1],m=Object(c.useState)(""),O=Object(d.a)(m,2),f=O[0],v=O[1],w=Object(c.useState)(""),y=Object(d.a)(w,2),S=y[0],z=y[1],k=Object(c.useState)(""),C=Object(d.a)(k,2),q=C[0],F=C[1],P=Object(c.useState)(""),T=Object(d.a)(P,2),D=T[0],J=T[1],N=Object(c.useState)(""),B=Object(d.a)(N,2),E=B[0],I=B[1];return Object(p.jsxs)(x,{children:[Object(p.jsx)("h2",{children:"Dish"}),"Pizza"===u&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("img",{src:j,alt:""})}),"Soup"===u&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("img",{src:b,alt:""})}),"Sandwich"===u&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("img",{src:h,alt:""})}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:a,type:u,preparationTime:f,pizzaSlices:S,diameter:q,spiciness:D,breadSlices:E};console.log(t),fetch("https://frosty-wood-6558.getsandbox.com:443/dishes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("new dish added")}))},children:[Object(p.jsx)("label",{children:"Name"}),Object(p.jsx)("input",{type:"text",value:a,onChange:function(e){return l(e.target.value)},required:!0}),Object(p.jsx)("label",{children:"Preparation Time"}),Object(p.jsx)("input",{type:"time",step:"2",value:f,onChange:function(e){return v(e.target.value)},required:!0}),Object(p.jsx)("label",{children:"Type"}),Object(p.jsxs)("select",{onChange:function(e){return t=e.target.value,void g(t);var t},children:[Object(p.jsx)("option",{defaultValue:!0,children:"select dish"}),t.map((function(e){return Object(p.jsx)("option",{value:e.value,children:e.label},e.value)}))]}),"Pizza"===u&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{children:"Number of slices"}),Object(p.jsx)("input",{type:"number",value:S,onChange:function(e){return z(e.target.value)},required:!0}),Object(p.jsx)("label",{children:"Diameter"}),Object(p.jsx)("input",{type:"number",step:"0.1",value:q,onChange:function(e){return F(e.target.value)},required:!0})]}),"Soup"===u&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{children:"Spiciness"}),Object(p.jsx)("input",{type:"number",min:"1",max:"10",value:D,onChange:function(e){return J(e.target.value)},required:!0})]}),"Sandwich"===u&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{children:"Slices of bread"}),Object(p.jsx)("input",{type:"number",min:"1",value:E,onChange:function(e){return I(e.target.value)},required:!0})]}),Object(p.jsx)("button",{children:"Submit"})]})]})},m=u.a.div(a||(a=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  background-color: black;\n"])));var O=function(){return Object(p.jsx)(m,{children:Object(p.jsx)(g,{})})};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.424cc5e3.chunk.js.map