import A from"./CXGUBajq.js";import B from"./B7j0Dt9D.js";import T from"./BarrcHik.js";import $ from"./CJylbKRl.js";import{_ as C,I as q,u as h,r as g,e as l,h as o,m as I,n as x,f as i,t as c,k as y,l as W,g as m,i as p,a as j,c as n}from"./Bn8s6ksr.js";import{u as w}from"./Ct7qimw6.js";import{u as O}from"./BXRJdK4x.js";import"./BXQHskyo.js";import"./B2cK24SD.js";const U={key:1,class:"main-content white-box flex flex-col"},z={class:"flex flex-col gap-8 w-full px-12 align-center justify-center"},P={key:0,class:"grid grid-cols-2 gap-6"},D={key:0,class:"flex gap-2 p-2 rounded-lg"},F=["for"],L={key:1,class:"flex gap-2 p-2 rounded-lg"},Q=["for"],X={key:1,class:"flex align-center justify-center"},H={__name:"[id]",setup(J){w({title:"Тестирование"});const f=j(),_=q(),k=h("token"),{data:a,pending:v,error:K,refresh:b}=O(`${f.public.apiBase}/tests/assign/${_.params.id}/nextQuestion`,{method:"POST",onRequest({request:u,options:e}){e.headers=e.headers||{},e.headers.authorization=h("token").value}},"$VLWr2KsSUh"),s=g([]),r=g("");function S(){let u=a.value.type==="ONE_ANSWER"?{ids:[s.value]}:a.value.type==="MANY_ANSWERS"?{ids:s.value}:a.value.type==="TEXT_ANSWER"?{text_answer:r.value}:null;fetch(`${f.public.apiBase}/tests/assign/${_.params.id}/nextQuestion`,{method:"POST",headers:{Authorization:k.value,"Content-Type":"application/json"},body:JSON.stringify(u)}).then(e=>{switch(e.status){case 401:break;case 200:b(),s.value=[],r.value="";break}return e.json()}).then(e=>{}).catch(e=>{console.error("Невозможно отправить запрос",e)})}return(u,e)=>{const V=A,N=B,R=T,E=$;return n(),l(y,null,[o(v)?x("",!0):(n(),I(V,{key:0,model:o(a).breadcrumb,class:"max-w-[1100px] mx-auto my-0 mb-4 rounded-[15px]"},null,8,["model"])),o(v)?x("",!0):(n(),l("div",U,[i("h1",null,c(o(a).text),1),i("div",z,[o(a).type!=="TEXT_ANSWER"?(n(),l("div",P,[(n(!0),l(y,null,W(o(a).answers,t=>(n(),l("div",{key:t.id},[o(a).type==="ONE_ANSWER"?(n(),l("div",D,[m(N,{modelValue:o(s),"onUpdate:modelValue":e[0]||(e[0]=d=>p(s)?s.value=d:null),inputId:String(t.id),name:"answer",value:t.id},null,8,["modelValue","inputId","value"]),i("label",{for:t.id},c(t.content),9,F)])):(n(),l("div",L,[m(R,{modelValue:o(s),"onUpdate:modelValue":e[1]||(e[1]=d=>p(s)?s.value=d:null),inputId:String(t.id),name:"answer",value:t.id},null,8,["modelValue","inputId","value"]),i("label",{for:String(t.id)},c(t.content),9,Q)]))]))),128))])):(n(),l("div",X,[m(E,{modelValue:o(r),"onUpdate:modelValue":e[2]||(e[2]=t=>p(r)?r.value=t:null),autoResize:"",rows:"8",cols:"60"},null,8,["modelValue"])])),i("div",{class:"flex w-full align-center justify-center"},[i("button",{class:"btn",onClick:S},"Подтвердить")])])]))],64)}}},ae=C(H,[["__scopeId","data-v-d437806a"]]);export{ae as default};