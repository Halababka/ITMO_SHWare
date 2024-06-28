import{d as O,I as q,b as z,u as K,r as c,o as J,c as r,e as l,f as a,g as d,h as e,i as $,w as m,k as D,l as P,m as Q,q as W,j as b,t as u,n as X,p as Y,a as Z,s as ee,v as te,x as se,_ as ae}from"./Bn8s6ksr.js";import oe from"./4am-JueE.js";import ne from"./BQTGncyQ.js";import ie from"./BBuG_LZR.js";import re from"./CY5I-LVS.js";import le from"./Xh5iAUju.js";import de from"./Bsd0B2of.js";import{u as ce}from"./Ct7qimw6.js";import{g as me,a as pe}from"./C0nKHSUl.js";import{f as ue}from"./ClO3DDpd.js";import{F as fe,a as _e,b as ge}from"./DAxKz_H_.js";import"./B2cK24SD.js";import"./CP2X2kCJ.js";import"./okssMqCN.js";import"./DvLZ7Zqz.js";import"./Beh2qRuB.js";import"./CVaRbyVJ.js";import"./cLBxPfJA.js";import"./C9DUTysQ.js";import"./8sW4mJZM.js";import"./DwA5qEtX.js";import"./BXQHskyo.js";import"./Co_e_0iK.js";import"./BarrcHik.js";import"./B7j0Dt9D.js";import"./BFrbZsHQ.js";import"./CQy9NsTI.js";import"./7fOzFieg.js";import"./BmCDhavC.js";import"./wL0GXdHM.js";const _=g=>(te("data-v-1bccaad6"),g=g(),se(),g),he={class:"main-content white-box"},ve=_(()=>a("div",{class:"flex flex-col align-center items-center gap-5 mb-5"},[a("h1",{class:"m-2"},"Ответы к заданиям")],-1)),ke={class:"w-full"},ye={class:"card flex flex-col gap-3 justify-center"},be={class:"flex items-center gap-3"},xe=_(()=>a("span",{class:"text-xl"},"Выберите задание",-1)),we={key:0},Ce={class:"card"},$e=_(()=>a("span",{class:"text-lg"},"Ответы не найдеы",-1)),De={class:"flex flex-col gap-3 py-5"},Pe=_(()=>a("label",{class:"text-xl"},"Оценка",-1)),Ve={key:0,class:"flex gap-4 items-center"},Ae={key:1},Fe=_(()=>a("label",{class:"text-xl"},"Ответ",-1)),Ie={key:2,class:"file-folder-wrapper mb-3"},Le=["href"],Re={class:"content-wrapper-header"},Se={class:"file-icon-wrapper"},Te={class:"file-name text-lg"},Ne={class:"file-extension"},Be={key:3,class:"text-lg"},Ee=O({__name:"tasks",setup(g){ce({title:"Ответы"});const{$toast:v}=Y(),V=Z(),A=q();z();const F=K("token"),I=c([{field:"student.fullname",header:"ФИО"},{field:"grade",header:"Оценка"},{field:"submitted",header:"Отправлено"}]),L=c(),R=c(!1),k=c([]),p=c({});c();const i=c({student:{}}),f=c(!1);J(()=>{x(),S()});const S=async()=>{try{const o=await fetch(`${V.public.apiBase}/groups`,{method:"GET",headers:{Authorization:`${F.value}`,"Content-Type":"application/json"}});if(!o.ok)throw new Error("Failed to fetch categories");const n=await o.json();L.value=n}catch(o){console.error("Error loading groups:",o)}},T=o=>{console.log("anw",o),i.value=o,f.value=!0},N=()=>{i.value={student:{}},f.value=!1},x=async()=>{try{const o=await me(A.params.id);k.value=o,p.value=k.value[0]}catch(o){v.add({severity:"error",summary:"Ошибка",detail:o.message,life:3e3})}},B=async o=>{try{const n=await pe(o,i.value.grade);i.value.grade=n.grade,v.add({severity:"success",summary:"Успешно",detail:"Оценка выставлена",life:3e3})}catch(n){v.add({severity:"error",summary:"Ошибка",detail:n.message,life:3e3})}};return(o,n)=>{var w;const y=ee,E=oe,j=ne,G=ie,M=re,U=le,H=de;return r(),l("div",he,[ve,a("div",ke,[a("div",ye,[a("div",be,[xe,d(y,{icon:"pi pi-refresh",rounded:"",raised:"",onClick:x})]),d(E,{modelValue:e(p),"onUpdate:modelValue":n[0]||(n[0]=t=>$(p)?p.value=t:null),options:e(k),optionLabel:"name",placeholder:"Выберите задание",class:"w-[30%] md:w-14rem"},null,8,["modelValue","options"])]),d(j,{class:"w-full"}),e(p)&&((w=e(p).StudentAssignments)==null?void 0:w.length)>0?(r(),l("div",we,[a("div",Ce,[d(M,{ref:"dt",loading:e(R),value:e(p).StudentAssignments,selectionMode:"checkbox",dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[20,35,50],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Показаны {first} до {last} из {totalRecords}",responsiveLayout:"scroll",globalFilterFields:["name"]},{empty:m(()=>[$e]),default:m(()=>[(r(!0),l(D,null,P(e(I),(t,h)=>(r(),Q(G,{sortable:"",field:t.field,header:t.header,key:t.field+"_"+h},W({_:2},[t.field!=="submitted"&&t.field!=="grade"&&t.field!=="student.fullname"?{name:"body",fn:m(s=>[b(u(s.data[t.field]),1)]),key:"0"}:t.field==="student.fullname"?{name:"body",fn:m(s=>[a("span",{onClick:C=>T(s.data)},u(s.data.student.fullname),9,["onClick"])]),key:"1"}:t.field==="submitted"?{name:"body",fn:m(s=>[b(u(e(ue)(s.data.submitted)),1)]),key:"2"}:t.field==="grade"?{name:"body",fn:m(s=>[b(u(s.data.grade?s.data.grade:"Нету оценки"),1)]),key:"3"}:void 0]),1032,["field","header"]))),128))]),_:1},8,["loading","value"])])])):X("",!0)]),d(H,{visible:e(f),"onUpdate:visible":n[3]||(n[3]=t=>$(f)?f.value=t:null),header:e(i).student.fullname,modal:"",dismissableMask:"",class:"w-[40rem]",onHide:N},{footer:m(()=>[d(y,{label:"Отправить",icon:"pi pi-check",text:""})]),default:m(()=>{var t,h;return[a("div",De,[Pe,((t=e(i).materials)==null?void 0:t.length)>0?(r(),l("div",Ve,[d(U,{modelValue:e(i).grade,"onUpdate:modelValue":n[1]||(n[1]=s=>e(i).grade=s),inputId:"minmax",min:0,max:100,placeholder:"Не оценено"},null,8,["modelValue"]),a("div",null,[d(y,{label:"Выставить",type:"submit",onClick:n[2]||(n[2]=s=>B(e(i).id))})])])):(r(),l("div",Ae,"Нету ответа")),Fe,((h=e(i).materials)==null?void 0:h.length)>0?(r(),l("div",Ie,[(r(!0),l(D,null,P(e(i).materials,(s,C)=>(r(),l("a",{href:s.path,download:"",class:"content-wrapper pl-3",key:C},[a("div",Re,[a("div",Se,[d(e(fe),{icon:e(_e)(s.name),class:"file-icon"},null,8,["icon"])]),a("span",Te,u(s.name),1)]),a("div",Ne,u(e(ge)(s.name)),1)],8,Le))),128))])):(r(),l("div",Be,"Нету ответа"))])]}),_:1},8,["visible","header"])])}}}),_t=ae(Ee,[["__scopeId","data-v-1bccaad6"]]);export{_t as default};
