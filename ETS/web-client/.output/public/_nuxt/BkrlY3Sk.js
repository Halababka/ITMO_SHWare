import{_ as k}from"./DW4Dnba0.js";import{u as f}from"./Ct7qimw6.js";import{_ as x,u as C,y as R,r as d,z as g,e as n,f as m,k as S,l as E,c as o,t as p,g as U,w,j as D}from"./Bn8s6ksr.js";import{u as h}from"./7jZtv5KM.js";import"./BXRJdK4x.js";const v={class:"main-content admin-page"},y={class:"grid grid-cols-3 gap-4"},N={__name:"index",async setup(L){let s,a;f({title:"Администрирование"}),C("token");const r=([s,a]=R(()=>h()),s=await s,a(),s).value,_=d([{title:"Группы",description:"Перейти",link:"/admin/groups",permissions:["CRUD_GROUPS"]},{title:"Пользователи",description:"Перейти",link:"/admin/users",permissions:["CRUD_USERS"]},{title:"Курсы",description:"Перейти",link:"/admin/courses",permissions:["CREATE_COURSES"]},{title:"Роли",description:"Перейти",link:"/admin/roles",permissions:["CRUD_ROLES"]},{title:"Категории",description:"Перейти",link:"/admin/categories",permissions:["CRUD_CATEGORIES"]},{title:"Ссылки",description:"Перейти",link:"/admin/links",permissions:["CRUD_LINKS"]}]),c=d([]);return g(()=>{if(!r.pending){const l=r.userData.permissions.map(e=>e.code);c.value=_.value.filter(e=>e.permissions.some(i=>l.includes(i)))}}),(l,e)=>{const i=k;return o(),n("div",v,[m("div",y,[(o(!0),n(S,null,E(c.value,(t,u)=>(o(),n("section",{key:u,class:"admin-section min-w-[200px]"},[m("h2",null,p(t.title),1),U(i,{to:t.link,class:"admin-link"},{default:w(()=>[D(p(t.description),1)]),_:2},1032,["to"])]))),128))])])}}},V=x(N,[["__scopeId","data-v-ed14ac1c"]]);export{V as default};