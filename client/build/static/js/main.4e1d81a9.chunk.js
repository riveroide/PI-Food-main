(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(22),s=c.n(r),i=(c(40),c(41),c(11)),o=c(7),l=(c(42),c(0));function u(){return Object(l.jsx)("div",{className:"landingbackground",children:Object(l.jsxs)("div",{className:"contlanding",children:[Object(l.jsx)("h1",{children:"PI FOOD HENRY - NICOLAS RIVERO"}),Object(l.jsx)(i.b,{to:"/home",children:Object(l.jsx)("button",{className:"enterbutton",children:"ENTRAR"})})]})})}var j=c(6),d=c(12),b=c(15),p=c(8),h=c(65);function O(){return function(){var e=Object(d.a)(Object(j.a)().mark((function e(t){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://pifoodback-production-a96f.up.railway.app/recipes",{});case 2:return c=e.sent,e.abrupt("return",t({type:"GET_RECIPES",payload:c.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function m(e){return{type:"FILTER_BY_DIETS",payload:e}}function x(e){return function(){var t=Object(d.a)(Object(j.a)().mark((function t(c){var a;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("https://pifoodback-production-a96f.up.railway.app/recipes?name="+e);case 3:return a=t.sent,t.abrupt("return",c({type:"GET_NAME_RECIPE",payload:a.data}));case 7:t.prev=7,t.t0=t.catch(0),alert("No se encontr\xf3 la receta");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}function f(){return function(){var e=Object(d.a)(Object(j.a)().mark((function e(t){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://pifoodback-production-a96f.up.railway.app/diets",{});case 2:return c=e.sent,console.log(c.data),e.abrupt("return",t({type:"GET_DIETS",payload:c.data}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function v(e){return function(){var t=Object(d.a)(Object(j.a)().mark((function t(c){var a;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://pifoodback-production-a96f.up.railway.app/recipes/".concat(e),{});case 2:return a=t.sent,t.abrupt("return",c({type:"GET_RECIPE_BY_ID",payload:a.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}c(56);var g=["Las manzanas pertenecen a la familia de las rosas","Las almendras no son nueces","Las zanahorias no siempre fueron color naranja","El sandwich fue inventado durante un juego de cartas","La pizza hawaiana fue inventada en Canad\xe1","El algod\xf3n de az\xfacar fue inventado por un dentista","Un cuarto de todas las avellanas del mundo son usadas para hacer Nutella","Sin moscas no tendr\xedamos chocolate","El mango puede sufrir quemaduras solares","La miel no tiene fecha de vencimiento"];function y(){return Object(l.jsx)("div",{className:"loadercontainer",children:Object(l.jsxs)("div",{className:"contentloader",children:[Object(l.jsx)("h1",{className:"cargando",children:"CARGANDO"}),Object(l.jsx)("span",{className:"loader"}),Object(l.jsxs)("div",{className:"sabias",children:[Object(l.jsx)("h2",{children:"Sabias qu\xe9?..."}),Object(l.jsx)("h3",{children:g[Math.floor(Math.random()*g.length)]})]})]})})}c(57);function N(e){var t=e.image,c=e.name,a=e.diets,n=e.id,r=e.healthscore;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)(i.b,{to:"/home/".concat(n),children:Object(l.jsx)("img",{src:t,alt:"img not found",width:"350px",height:"250px",className:"imagecard"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"cardtitle",children:c}),Object(l.jsxs)("h5",{className:"carddescr",children:["TIPO DE DIETA: ",a.join(", ")]}),Object(l.jsxs)("h5",{className:"carddescr",children:["HEALTH SCORE:",r]})]})]})}c(58);function E(e){for(var t=e.recipesPerPage,c=e.allRecipes,a=e.paginado,n=e.currentPage,r=[],s=0;s<Math.ceil(c/t);s++)r.push(s+1);return n===r.length+1&&a(1),Object(l.jsxs)("div",{className:"paginado",children:[Object(l.jsx)("button",{className:"flechaspag",onClick:function(){return a(1===n?r.length:n-1)},children:" \ud83e\udc80 "}),r&&r.map((function(e){return Object(l.jsx)("button",{className:"numberpage ".concat(e==n?"paginaactiva":null),onClick:function(){return a(e)},children:n===e?Object(l.jsx)("b",{children:e}):e},e)})),Object(l.jsx)("button",{className:"flechaspag",onClick:function(){return a(0===n?r.length:n+1)},children:" \ud83e\udc82 "})]})}c(59);function C(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.loader})),c=Object(a.useState)(""),n=Object(b.a)(c,2),r=n[0],s=n[1];function i(){return(i=Object(d.a)(Object(j.a)().mark((function t(c){return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),e({type:"LOADER"}),t.next=4,e(x(r));case 4:e({type:"LOADER"}),s("");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return!0===t?Object(l.jsx)("div",{className:"searchcontainer",children:Object(l.jsxs)("div",{class:"search",children:[Object(l.jsx)("input",{value:r,type:"text",class:"search__input",placeholder:"Buscar receta",onChange:function(e){return function(e){e.preventDefault(),s(e.target.value)}(e)}}),Object(l.jsx)("button",{class:"search__button",onClick:function(e){return function(e){return i.apply(this,arguments)}(e)},children:Object(l.jsx)("svg",{class:"search__icon","aria-hidden":"true",viewBox:"0 0 24 24",children:Object(l.jsx)("g",{children:Object(l.jsx)("path",{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})})})})]})}):Object(l.jsx)(y,{})}c(60);function w(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.recipes})),c=Object(p.c)((function(e){return e.diets})),n=Object(p.c)((function(e){return e.loader})),r=Object(a.useState)(1),s=Object(b.a)(r,2),o=s[0],u=s[1],h=Object(a.useState)(""),x=Object(b.a)(h,2),v=(x[0],x[1]),g=9*o,w=g-9,R=t.slice(w,g);function D(){return(D=Object(d.a)(Object(j.a)().mark((function t(c){return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),e({type:"LOADER"}),t.next=4,e(O());case 4:e(m(c.target.value)),e({type:"LOADER"});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)(Object(d.a)(Object(j.a)().mark((function t(){return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"LOADER"}),t.next=3,e(O());case 3:e(f()),e({type:"LOADER"});case 5:case"end":return t.stop()}}),t)}))),[e]),!0===n?Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("div",{className:"buttontopcont",children:[Object(l.jsx)(i.b,{to:"/createrecipe",children:Object(l.jsx)("button",{children:"Crear Receta"})}),Object(l.jsx)("button",{className:"buttonrecet",onClick:function(t){!function(t){t.preventDefault(),e({type:"LOADER"}),u(1),e(O()),e({type:"LOADER"})}(t)},children:"Reset recetas"})]}),Object(l.jsx)("div",{className:"searchbarcontainer",children:Object(l.jsx)(C,{})}),Object(l.jsxs)("div",{className:"filterselects",children:[Object(l.jsxs)("select",{className:"classic",onChange:function(t){return function(t){t.preventDefault(),e({type:"SORT_BY_NAME",payload:t.target.value}),v("Ordenado ".concat(t.target.value))}(t)},children:[Object(l.jsx)("option",{value:"",children:"Orden Alfab\xe9tico"}),Object(l.jsx)("option",{value:"asc",children:"A-Z"}),Object(l.jsx)("option",{value:"desc",children:"Z-A"})]}),Object(l.jsxs)("select",{className:"classic",onChange:function(e){return function(e){return D.apply(this,arguments)}(e)},children:[Object(l.jsx)("option",{value:"all",children:"Todos los tipos de receta"}),null===c||void 0===c?void 0:c.map((function(e){return Object(l.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(l.jsxs)("select",{className:"classic",onChange:function(t){return function(t){t.preventDefault(),e({type:"SORT_BY_HS",payload:t.target.value}),v("Ordenado ".concat(t.target.value))}(t)},children:[Object(l.jsx)("option",{value:"",children:"Orden por HS"}),Object(l.jsx)("option",{value:"hasc",children:"HS Ascendente"}),Object(l.jsx)("option",{value:"hdesc",children:"HS Descendente"})]})]}),Object(l.jsx)(E,{className:"numspags",currentPage:o,recipesPerPage:9,allRecipes:t.length,paginado:function(e){u(e)}}),Object(l.jsx)("div",{className:"cards",children:null===R||void 0===R?void 0:R.map((function(e){return Object(l.jsx)(N,{id:e.id,name:e.name,image:e.image,diets:e.diets,healthscore:e.healthscore},e.id)}))})]}):Object(l.jsx)(y,{})}c(61);var R=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.recipeByID})),c=Object(p.c)((function(e){return e.loader}));console.log(t);var n=Object(o.g)().id;return console.log(n),Object(a.useEffect)(Object(d.a)(Object(j.a)().mark((function t(){return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"LOADER"}),t.next=3,e(v(n));case 3:e({type:"LOADER"});case 4:case"end":return t.stop()}}),t)}))),[e]),!0===c&&t[0]&&t[0].id==n?Object(l.jsxs)("div",{className:"detailscontainer",children:[Object(l.jsx)("div",{className:"botondevolver",children:Object(l.jsx)(i.b,{to:"/home",children:Object(l.jsx)("button",{children:"Volver"})})}),Object(l.jsx)("h2",{className:"titlerecipe",children:t[0].name}),Object(l.jsxs)("div",{className:"imgyresumen",children:[Object(l.jsx)("div",{className:"imgrecipe",children:Object(l.jsx)("img",{src:t[0].image,alt:"img not found",width:"350px",height:"250px"})}),Object(l.jsxs)("div",{className:"resumenrecipe",children:[Object(l.jsx)("h4",{children:"Resumen:"}),Object(l.jsx)("p",{children:t[0].summary})]})]}),Object(l.jsxs)("div",{className:"recipecarac",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Health Score:"}),Object(l.jsx)("p",{children:t[0].healthscore})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Tipo de dieta:"}),Object(l.jsx)("p",{children:t[0].diets.join(", ")})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Tipo de plato:"}),Object(l.jsx)("p",{children:t[0].dishtypes})]})]}),Object(l.jsxs)("div",{className:"stepsinfo",children:[Object(l.jsx)("h4",{className:"titlesteps",children:"Paso a paso:"}),Object(l.jsx)("ol",{children:Array.isArray(t[0].steps)?t[0].steps.map((function(e){return Object(l.jsx)("li",{children:e})})):Object(l.jsx)("p",{children:"No se informaron pasos a seguir para esta receta"})})]})]}):Object(l.jsx)(y,{})},D=c(29),S=c(20),_=c(3);c(62);var k=function(){var e=Object(p.b)(),t=Object(o.f)(),c=Object(p.c)((function(e){return e.diets})),n=Object(a.useState)(""),r=Object(b.a)(n,2),s=r[0],u=r[1],O=Object(a.useState)({}),m=Object(b.a)(O,2),x=m[0],v=m[1],g=Object(a.useState)({name:"",summary:"",image:"",healthscore:"",dishtype:"",steps:[],diets:[]}),y=Object(b.a)(g,2),N=y[0],E=y[1];function C(e){E(Object(_.a)(Object(_.a)({},N),{},Object(S.a)({},e.target.name,e.target.value))),v(function(e){var t={};return e.name||(t.name="Nombre requerido"),e.summary||(t.summary="Resumen requerido"),(e.healthscore>100||e.healthscore<0)&&(t.healthscore="El Healt Score debe ser entre 0 y 100"),t}(Object(_.a)(Object(_.a)({},N),{},Object(S.a)({},e.target.name,e.target.value))))}function w(c){return c.preventDefault(),""===N.summary?alert("Por favor ingrese un resumen de plato"):(""===N.image&&E(Object(_.a)(Object(_.a)({},N),{},{image:"https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png"})),N.healthscore>100||N.healthscore<0?alert("El valor del Health Score tiene que ser de 0 a 100. Ingrese uno v\xe1lido"):(e((a=N,function(){var e=Object(d.a)(Object(j.a)().mark((function e(t){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("https://pifoodback-production-a96f.up.railway.app/recipes",a);case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),alert("La receta fue creada exitosamente"),E({name:"",summary:"",image:"",healthscore:"",dishtype:"",steps:[],diets:[]}),void t.push("/home")));var a}return Object(a.useEffect)((function(){e(f())}),[e]),console.log(N),Object(l.jsxs)("div",{className:"maincontainer",children:[Object(l.jsx)("div",{className:"botondevolver",children:Object(l.jsx)(i.b,{to:"/home",children:Object(l.jsx)("button",{children:"Volver"})})}),Object(l.jsxs)("form",{onSubmit:function(e){return w(e)},children:[Object(l.jsxs)("section",{className:"inputsycheck",children:[Object(l.jsxs)("div",{className:"inputstexto",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Nombre: "}),Object(l.jsx)("input",{type:"text",className:"inputdata",value:N.name,name:"name",onChange:C})]}),x.name&&Object(l.jsx)("p",{className:"error",children:x.name}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Imagen: "}),Object(l.jsx)("input",{type:"text",value:N.image,name:"image",className:"inputdata",onChange:C})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Resumen:"}),Object(l.jsx)("textarea",{className:"inputdata",value:N.summary,name:"summary",rows:"5",cols:"35",onChange:C}),x.summary&&Object(l.jsx)("p",{className:"error",children:x.summary})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Tipo de plato: "}),Object(l.jsx)("input",{type:"text",className:"inputdata",value:N.dishtype,name:"dishtype",onChange:C})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Health Score: "}),Object(l.jsx)("input",{name:"healthscore",className:"inputdata",type:"number",value:N.healthscore,onChange:C})]}),x.healthscore&&Object(l.jsx)("p",{className:"error",children:x.healthscore})]}),Object(l.jsx)("div",{className:"containercheck",children:Object(l.jsxs)("fieldset",{className:"orgcontcheck",children:[Object(l.jsx)("legend",{children:"Elija uno o m\xe1s tipos de dietas"}),c.map((function(e){return Object(l.jsxs)("div",{className:"organizadorcheck",children:[Object(l.jsx)("p",{className:"textcheck",children:e.name}),Object(l.jsx)("input",{className:"checkdietas",type:"checkbox",name:e.name,value:e.name,onChange:function(e){return function(e){e.target.checked?E(Object(_.a)(Object(_.a)({},N),{},{diets:[].concat(Object(D.a)(N.diets),[e.target.value])})):E(Object(_.a)(Object(_.a)({},N),{},{diets:N.diets.map((function(t){return t!==e.target.value}))}))}(e)}})]})}))]})})]}),Object(l.jsxs)("section",{className:"stepyrender",children:[Object(l.jsxs)("div",{className:"stepbystep",children:[Object(l.jsx)("legend",{children:"Pasos: "}),Object(l.jsx)("textarea",{value:s,name:"name",onChange:function(e){return u(e.target.value)},row:"8",col:"80"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"submit",name:"agregar",value:"Agregar paso",onClick:function(e){return function(e){e.preventDefault(),E(Object(_.a)(Object(_.a)({},N),{},{steps:[].concat(Object(D.a)(N.steps),[s])})),u("")}(e)}}),Object(l.jsx)("input",{type:"submit",name:"borrar",value:"Borrar \xfaltimo",onClick:function(e){return function(e){e.preventDefault(),N.steps.pop(),E(Object(_.a)({},N)),u("")}(e)}}),Object(l.jsx)("input",{type:"submit",name:"borrartodo",value:"Borrar Todo",onClick:function(e){return function(e){e.preventDefault(),E(Object(_.a)(Object(_.a)({},N),{},{steps:[]})),u("")}(e)}})]})]}),Object(l.jsx)("div",{className:"renderstepbystep",children:Object(l.jsx)("ol",{children:N.steps.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{children:e})})}))})})]}),Object(l.jsx)("div",{className:"mandareceta",children:Object(l.jsx)("button",{type:"submit",children:"CREAR RECETA"})})]})]})};var T=function(){return Object(l.jsx)(i.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(o.a,{exact:!0,path:"/home",component:w}),Object(l.jsx)(o.a,{exact:!0,path:"/home/:id",component:R}),Object(l.jsx)(o.a,{exact:!0,path:"/createrecipe",component:k})]})})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))},L=c(25),I=c(34),P=c(35),B={recipes:[],recipeByID:{},diets:[],loader:!0};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RECIPES":case"GET_NAME_RECIPE":return Object(_.a)(Object(_.a)({},e),{},{recipes:t.payload});case"FILTER_BY_DIETS":var c=e.recipes;if("all"===t.payload)return Object(_.a)(Object(_.a)({},e),{},{recipes:c});console.log(c,"result");var a=c.filter((function(e){var c;return null===(c=e.diets)||void 0===c?void 0:c.some((function(e){return e===t.payload}))}));return Object(_.a)(Object(_.a)({},e),{},{recipes:a});case"SORT_BY_NAME":var n="asc"===t.payload?e.recipes.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:t.name.toLowerCase()>e.name.toLowerCase()?-1:0})):e.recipes.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?-1:t.name.toLowerCase()>e.name.toLowerCase()?1:0}));return Object(_.a)(Object(_.a)({},e),{},{recipes:n});case"SORT_BY_HS":var r="hasc"===t.payload?e.recipes.sort((function(e,t){return e.healthscore>t.healthscore?1:t.healthscore>e.healthscore?-1:0})):e.recipes.sort((function(e,t){return e.healthscore>t.healthscore?-1:t.healthscore>e.healthscore?1:0}));return Object(_.a)(Object(_.a)({},e),{},{recipes:r});case"GET_RECIPE_BY_ID":return Object(_.a)(Object(_.a)({},e),{},{recipeByID:t.payload});case"GET_DIETS":return Object(_.a)(Object(_.a)({},e),{},{diets:t.payload});case"POST_RECIPE":return Object(_.a)({},e);case"LOADER":var s=e.loader;return!0===s?Object(_.a)(Object(_.a)({},e),{},{loader:!1}):Object(_.a)(Object(_.a)({},e),{},{loader:!0});default:return e}},M=Object(L.createStore)(H,Object(I.composeWithDevTools)(Object(L.applyMiddleware)(P.a)));s.a.render(Object(l.jsx)(p.a,{store:M,children:Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(T,{})})}),document.getElementById("root")),A()}},[[63,1,2]]]);
//# sourceMappingURL=main.4e1d81a9.chunk.js.map