import{_ as L,b as M,y as P,r as _,z as T,J as m,e as c,f as e,g as z,h as r,D as R,E as A,i as F,k as w,l as y,n as C,s as H,c as o,m as b,w as d,j as J,t as k,v as Q,x as U}from"./Bn8s6ksr.js";import q from"./DgQtqOh6.js";import G from"./BrEp5V0K.js";import{u as K}from"./Ct7qimw6.js";import{u as O}from"./DOgkogYK.js";import"./BXRJdK4x.js";import"./7jZtv5KM.js";const j=l=>(Q("data-v-e9e6a962"),l=l(),U(),l),W={class:"main-content white-box"},X={class:"header flex w-full justify-between items-center"},Y={class:"flex gap-2 items-center"},Z=j(()=>e("h2",null,"Мои курсы",-1)),ee={class:"flex items-center"},te=j(()=>e("button",{class:"btn",type:"submit"},"Найти",-1)),se={class:"block-courses"},oe={key:0,class:"w-full flex gap-4 flex-wrap justify-center"},ae={class:"image-container h-[200px]"},re=["src","alt"],ne={class:"flex items-start flex-wrap gap-1 w-full"},ce={class:"my-0 max-h-[130px] text-pretty text-ellipsis overflow-hidden hover:text-clip text-desc"},le={key:0,class:"flex justify-center mt-4"},$=10,ie={__name:"index",async setup(l){let i,h;K({title:"Мои курсы"});const B=M(),p=([i,h]=P(()=>O()),i=await i,h(),i).value,u=_([]),n=_(""),f=_(0);T(()=>{if(!p.pending)try{u.value=p.coursesData.courses}catch(s){console.error("Не получается получить курсы для виджета:",s)}});const x=m(()=>n.value?u.value.filter(s=>s.name.toLowerCase().includes(n.value.toLowerCase())):u.value),v=m(()=>{const a=f.value*$+$;return x.value.slice(0,a)}),D=m(()=>x.value.length>v.value.length),E=()=>{f.value++},I=s=>{s.target.dataset.replaced||(s.target.src="assets/imgs/no_course_photo.png",s.target.dataset.replaced="true")};return(s,a)=>{const V=H,N=q,S=G;return o(),c("div",W,[e("div",X,[e("div",Y,[Z,z(V,{icon:"pi pi-refresh",rounded:"",raised:"",onClick:a[0]||(a[0]=t=>r(p).refresh())})]),e("div",ee,[R(e("input",{class:"inpt mr-2",type:"text","onUpdate:modelValue":a[1]||(a[1]=t=>F(n)?n.value=t:null),placeholder:"Поиск курсов..."},null,512),[[A,r(n)]]),te])]),e("div",se,[r(u).length>0?(o(),c("div",oe,[(o(!0),c(w,null,y(r(v),t=>(o(),b(S,{style:{width:"20rem",overflow:"hidden","min-height":"607px"},"pt:header:class":"text-center","pt:caption:class":"text-md",class:"zoom-animation cursor-pointer bg-neutral-100 rounded-2xl",onClick:g=>r(B).push(`/course/${t.id}`)},{header:d(()=>[e("div",ae,[e("img",{class:"h-[150px] w-auto",src:t.image_url?`${t.image_url}`:"assets/imgs/no_course_photo.png",onError:I,alt:t.name},null,40,re)])]),title:d(()=>[J(k(t.name),1)]),subtitle:d(()=>[e("div",ne,[(o(!0),c(w,null,y(t.categories,g=>(o(),b(N,{style:{background:"#2255f4"},value:g.name,class:"truncate ... justify-start",rounded:""},null,8,["value"]))),256))])]),content:d(()=>[e("p",ce,k(t.description),1)]),_:2},1032,["onClick"]))),256))])):C("",!0)]),r(D)?(o(),c("div",le,[e("button",{class:"btn",onClick:E},"Показать еще")])):C("",!0)])}}},xe=L(ie,[["__scopeId","data-v-e9e6a962"]]);export{xe as default};