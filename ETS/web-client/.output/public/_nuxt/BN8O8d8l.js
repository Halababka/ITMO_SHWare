import te from"./wL0GXdHM.js";import oe from"./CJylbKRl.js";import{_ as se,b as le,r as y,u as ne,y as ae,o as ie,G as ue,A as ce,e as i,f as e,t as p,h as n,C as de,g as a,n as b,w as v,s as re,c as u,B as J,k as S,l as T,j as pe,v as me,x as be,a as ve,H as _e}from"./Bn8s6ksr.js";import fe from"./B0eqC23B.js";import he from"./CzsHIdTH.js";import{u as ke}from"./Ct7qimw6.js";import{b as ye,c as xe}from"./DOgkogYK.js";import"./BFrbZsHQ.js";import"./DvLZ7Zqz.js";import"./3ww00xj7.js";import"./B2cK24SD.js";import"./BLi23Xor.js";import"./CGQTC3f5.js";import"./BXRJdK4x.js";import"./7jZtv5KM.js";const _=M=>(me("data-v-829db5dd"),M=M(),be(),M),ge={class:"main-content"},we={class:"container mx-auto"},Ce={class:"text-2xl font-semibold mb-4"},Ve={class:"mb-4"},$e={key:0,for:"title",class:"block font-semibold"},Ie={key:1,for:"title",class:"block font-semibold"},ze={class:"mb-4"},Se={key:0,for:"content",class:"block font-semibold"},Te={key:1,for:"content",class:"block font-semibold"},Be={key:0,class:"mb-4"},Re={key:1,class:"mb-4"},Ue={key:2,class:"mb-4"},Me={class:"flex justify-between items-center flex-1 gap-2"},je={class:"flex gap-2"},qe={class:"whitespace-nowrap"},Ee={key:0},Le=_(()=>e("h5",null,"Отправка",-1)),Fe={class:"flex flex-wrap gap-5"},Ne=["alt","src"],Ae={class:"font-semibold"},De={key:1},He=_(()=>e("h5",null,"Завершено",-1)),Pe={class:"flex flex-wrap gap-5"},Ge=["alt","src"],Je={class:"font-semibold"},Oe=_(()=>e("div",{class:"flex items-center justify-center flex-col"},[e("i",{class:"pi pi-cloud-upload border-2 rounded-full p-5 text-8xl border-solid"}),e("p",{class:"mt-4 mb-0"},"Перетащите файлы сюда для загрузки")],-1)),Ke={key:3,class:"mb-4"},Qe=_(()=>e("label",{for:"title",class:"block font-semibold"},"Ссылка",-1)),We={key:4,class:"mb-4"},Xe=_(()=>e("label",{for:"title",class:"block font-semibold"},"Ссылка",-1)),Ye={key:5,class:"mb-4"},Ze=_(()=>e("label",{for:"text",class:"block font-semibold"},"Текст",-1)),et={class:"flex justify-between items-center flex-1 gap-2"},tt={class:"flex gap-2"},ot={class:"whitespace-nowrap"},st={key:0},lt=_(()=>e("h5",null,"Отправка",-1)),nt={class:"flex flex-wrap gap-5"},at=["alt","src"],it={class:"font-semibold"},ut={key:1},ct=_(()=>e("h5",null,"Завершено",-1)),dt={class:"flex flex-wrap gap-5"},rt=["alt","src"],pt={class:"font-semibold"},mt=_(()=>e("div",{class:"flex items-center justify-center flex-col"},[e("i",{class:"pi pi-cloud-upload border-2 rounded-full p-5 text-8xl border-solid"}),e("p",{class:"mt-4 mb-0"},"Перетащите файлы сюда для загрузки")],-1)),bt={key:6,class:"mb-4"},vt={class:"card mb-4"},_t=_(()=>e("label",{class:"block font-semibold"},"Файл",-1)),ft={class:"flex justify-between items-center flex-1 gap-2"},ht={class:"flex gap-2"},kt={class:"whitespace-nowrap"},yt={key:0},xt=_(()=>e("h5",null,"Отправка",-1)),gt={class:"flex flex-wrap gap-5"},wt=["alt","src"],Ct={class:"font-semibold"},Vt={key:1},$t=_(()=>e("h5",null,"Завершено",-1)),It={class:"flex flex-wrap gap-5"},zt=["alt","src"],St={class:"font-semibold"},Tt=_(()=>e("div",{class:"flex items-center justify-center flex-col"},[e("i",{class:"pi pi-cloud-upload border-2 rounded-full p-5 text-8xl border-solid"}),e("p",{class:"mt-4 mb-0"},"Перетащите файлы сюда для загрузки")],-1)),Bt={__name:"[[id]]",async setup(M){let j,O;ke({title:"Контент"});const E=ve(),x=le(),K=y(null),q=y(!1),X=ne("token").value,L=y(null),Q=([j,O]=ae(()=>xe()),j=await j,O(),j),F=ye(),B=y(null),R=y(null),s=y({title:"",content:"",contentType:"",textContent:"",urlVideo:"",urlItem:"",folder:{name:"",materials:[]},tasks:{text:"",materials:[]}});let V;ie(()=>{x.currentRoute.value.params,K.value=x.currentRoute.value.query.materialId,s.value.contentType=x.currentRoute.value.query.contentType,B.value=x.currentRoute.value.query.section,R.value=x.currentRoute.value.query.subsection,L.value=x.currentRoute.value.query.courseId,K.value&&(q.value=!0)});const Y=()=>{if(q.value)x.go(-1);else{const r=s.value.contentType;let o;switch(r){case"text":o={title:s.value.title,content:s.value.content,type:"text"};break;case"file":o={title:s.value.title,content:s.value.content,type:"file",materials:[{id:V.files[0].id,name:V.files[0].name,path:V.files[0].path}]};break;case"urlVideo":o={title:s.value.title,content:s.value.content,type:"urlVideo",urlVideo:s.value.urlVideo};break;case"urlItem":o={title:s.value.title,content:s.value.content,type:"urlItem",urlItem:s.value.urlItem};break;case"folder":s.value.folder.name=s.value.title,o={title:s.value.title,content:s.value.content,type:"folder",folders:[s.value.folder]};break;case"tasks":s.value.tasks.name=s.value.title,o={title:s.value.title,content:s.value.content,type:"tasks",tasks:[s.value.tasks]};break;default:console.error("Неизвестный тип контента")}L.value!==void 0&&L.value!==null?R.value?Q.value.sections[B.value].subsections[R.value].contents.push(o):Q.value.sections[B.value].contents.push(o):R.value?F.value.sections[B.value].subsections[R.value].contents.push(o):F.value.sections[B.value].contents.push(o),console.log(F),x.go(-1)}},Z=ue(),ee=ce(),$=y(0),g=y(0),W=y([]),N=(r,o,k)=>{o(k),$.value-=parseInt(w(r.size)),g.value=$.value/10},A=r=>{W.value=r.files,W.value.forEach(o=>{$.value+=parseInt(w(o.size))})},D=r=>{g.value=$.value/10,r()},H=r=>{switch(V=JSON.parse(r.xhr.response),console.log(V.files),ee.add({severity:"success",summary:"Успешно",detail:"Файл загружен",life:3e3}),s.value.contentType){case"folder":s.value.folder.materials=V.files.map(o=>({id:o.id,name:o.name,path:o.path}));break;case"tasks":s.value.tasks.materials=V.files.map(o=>({id:o.id,name:o.name,path:o.path}));break}},w=r=>{const I=Z.config.locale.fileSizeTypes;if(r===0)return`0 ${I[0]}`;const c=Math.floor(Math.log(r)/Math.log(1024));return`${parseFloat((r/Math.pow(1024,c)).toFixed(3))} ${I[c]}`},P=async r=>{r.xhr.setRequestHeader("Authorization",X);const k=r.formData,I=k.getAll("files");k.delete("files"),I.forEach(c=>{const z=encodeURIComponent(c.name),C=new File([c],z,{type:c.type});k.append("files",C)})};return(r,o)=>{const k=te,I=oe,c=re,z=fe,C=_e,G=he;return u(),i("div",ge,[e("div",we,[e("h1",Ce,p(n(q)?"Редактирование":"Создание")+" материала",1),e("form",{onSubmit:de(Y,["prevent"])},[e("div",Ve,[n(s).contentType==="text"?(u(),i("label",$e,"Заголовок")):(u(),i("label",Ie,"Название")),a(k,{modelValue:n(s).title,"onUpdate:modelValue":o[0]||(o[0]=l=>n(s).title=l),modelModifiers:{trim:!0},type:"text",id:"title",class:"mt-1 p-2 w-full"},null,8,["modelValue"])]),e("div",ze,[n(s).contentType==="text"?(u(),i("label",Se,"Текст")):(u(),i("label",Te,"Описание")),a(I,{modelValue:n(s).content,"onUpdate:modelValue":o[1]||(o[1]=l=>n(s).content=l),modelModifiers:{trim:!0},id:"content",class:"mt-1 p-2 border rounded w-full",rows:"4",variant:"filled"},null,8,["modelValue"])]),n(s).contentType==="text"?(u(),i("div",Be)):b("",!0),n(s).contentType==="subSection"?(u(),i("div",Re)):b("",!0),n(s).contentType==="folder"?(u(),i("div",Ue,[a(G,{name:"files",url:`${n(E).public.apiBase}/files/upload`,onUpload:o[2]||(o[2]=l=>H(l)),multiple:!0,onSelect:A,auto:!0,onBeforeSend:o[3]||(o[3]=l=>P(l))},{header:v(({chooseCallback:l,uploadCallback:m,clearCallback:f,files:d})=>[e("div",Me,[e("div",je,[a(c,{onClick:t=>l(),icon:"pi pi-file",class:"p-button-rounded p-button-outlined"},null,8,["onClick"]),a(c,{onClick:t=>D(m),icon:"pi pi-cloud-upload",class:"p-button-rounded p-button-outlined p-button-success",disabled:!d||d.length===0},null,8,["onClick","disabled"]),a(c,{onClick:t=>f(),icon:"pi pi-times",class:"p-button-rounded p-button-outlined p-button-danger",disabled:!d||d.length===0},null,8,["onClick","disabled"])]),a(z,{value:n(g),showValue:!1,class:J(["md:w-20rem w-full ml-auto",{"exceeded-progress-bar":n(g)>100}])},{default:v(()=>[e("span",qe,p(n($))+"B / 1Mb",1)]),_:1},8,["value","class"])])]),content:v(({files:l,uploadedFiles:m,removeUploadedFileCallback:f,removeFileCallback:d})=>[l.length>0?(u(),i("div",Ee,[Le,e("div",Fe,[(u(!0),i(S,null,T(l,(t,h)=>(u(),i("div",{key:t.name+t.type+t.size,class:"card flex flex-col border surface-border items-center gap-3"},[e("div",null,[e("img",{role:"presentation",alt:t.name,src:t.objectURL,width:"100",height:"50"},null,8,Ne)]),e("span",Ae,p(t.name),1),e("div",null,p(w(t.size)),1),a(C,{value:"Отправка",severity:"warning"}),a(c,{icon:"pi pi-times",onClick:U=>N(t,d,h),class:"p-button-outlined p-button-rounded p-button-danger"},null,8,["onClick"])]))),128))])])):b("",!0),m.length>0?(u(),i("div",De,[He,e("div",Pe,[(u(!0),i(S,null,T(m,(t,h)=>(u(),i("div",{key:t.name+t.type+t.size,class:"card flex flex-col border surface-border items-center gap-3"},[e("div",null,[e("img",{role:"presentation",alt:t.name,src:t.objectURL,width:"100",height:"50"},null,8,Ge)]),e("span",Je,p(t.name),1),e("div",null,p(w(t.size)),1),a(C,{value:"Завершено",class:"mt-3",severity:"success"}),a(c,{icon:"pi pi-times",onClick:U=>f(h),class:"p-button-outlined p-button-rounded p-button-danger"},null,8,["onClick"])]))),128))])])):b("",!0)]),empty:v(()=>[Oe]),_:1},8,["url"])])):b("",!0),n(s).contentType==="urlItem"?(u(),i("div",Ke,[Qe,a(k,{modelValue:n(s).urlItem,"onUpdate:modelValue":o[4]||(o[4]=l=>n(s).urlItem=l),modelModifiers:{trim:!0},type:"text",id:"title",class:"mt-1 p-2 w-full",required:""},null,8,["modelValue"])])):b("",!0),n(s).contentType==="urlVideo"?(u(),i("div",We,[Xe,a(k,{modelValue:n(s).urlVideo,"onUpdate:modelValue":o[5]||(o[5]=l=>n(s).urlVideo=l),modelModifiers:{trim:!0},type:"text",id:"title",class:"mt-1 p-2 w-full",required:""},null,8,["modelValue"])])):b("",!0),n(s).contentType==="tasks"?(u(),i("div",Ye,[Ze,a(I,{modelValue:n(s).tasks.text,"onUpdate:modelValue":o[6]||(o[6]=l=>n(s).tasks.text=l),modelModifiers:{trim:!0},id:"text",class:"mt-1 p-2 border rounded w-full",rows:"4",variant:"filled"},null,8,["modelValue"]),a(G,{name:"files",url:`${n(E).public.apiBase}/files/upload`,onUpload:o[7]||(o[7]=l=>H(l)),multiple:!0,onSelect:A,auto:!0,onBeforeSend:o[8]||(o[8]=l=>P(l))},{header:v(({chooseCallback:l,uploadCallback:m,clearCallback:f,files:d})=>[e("div",et,[e("div",tt,[a(c,{onClick:t=>l(),icon:"pi pi-file",class:"p-button-rounded p-button-outlined"},null,8,["onClick"]),a(c,{onClick:t=>D(m),icon:"pi pi-cloud-upload",class:"p-button-rounded p-button-outlined p-button-success",disabled:!d||d.length===0},null,8,["onClick","disabled"]),a(c,{onClick:t=>f(),icon:"pi pi-times",class:"p-button-rounded p-button-outlined p-button-danger",disabled:!d||d.length===0},null,8,["onClick","disabled"])]),a(z,{value:n(g),showValue:!1,class:J(["md:w-20rem w-full ml-auto",{"exceeded-progress-bar":n(g)>100}])},{default:v(()=>[e("span",ot,p(n($))+"B / 1Mb",1)]),_:1},8,["value","class"])])]),content:v(({files:l,uploadedFiles:m,removeUploadedFileCallback:f,removeFileCallback:d})=>[l.length>0?(u(),i("div",st,[lt,e("div",nt,[(u(!0),i(S,null,T(l,(t,h)=>(u(),i("div",{key:t.name+t.type+t.size,class:"card flex flex-col border surface-border items-center gap-3"},[e("div",null,[e("img",{role:"presentation",alt:t.name,src:t.objectURL,width:"100",height:"50"},null,8,at)]),e("span",it,p(t.name),1),e("div",null,p(w(t.size)),1),a(C,{value:"Отправка",severity:"warning"}),a(c,{icon:"pi pi-times",onClick:U=>N(t,d,h),class:"p-button-outlined p-button-rounded p-button-danger"},null,8,["onClick"])]))),128))])])):b("",!0),m.length>0?(u(),i("div",ut,[ct,e("div",dt,[(u(!0),i(S,null,T(m,(t,h)=>(u(),i("div",{key:t.name+t.type+t.size,class:"card flex flex-col border surface-border items-center gap-3"},[e("div",null,[e("img",{role:"presentation",alt:t.name,src:t.objectURL,width:"100",height:"50"},null,8,rt)]),e("span",pt,p(t.name),1),e("div",null,p(w(t.size)),1),a(C,{value:"Завершено",class:"mt-3",severity:"success"}),a(c,{icon:"pi pi-times",onClick:U=>f(h),class:"p-button-outlined p-button-rounded p-button-danger"},null,8,["onClick"])]))),128))])])):b("",!0)]),empty:v(()=>[mt]),_:1},8,["url"])])):b("",!0),n(s).contentType==="file"?(u(),i("div",bt,[e("div",vt,[_t,a(G,{name:"files",url:`${n(E).public.apiBase}/files/upload`,onUpload:o[9]||(o[9]=l=>H(l)),onSelect:A,auto:!0,onBeforeSend:o[10]||(o[10]=l=>P(l))},{header:v(({chooseCallback:l,uploadCallback:m,clearCallback:f,files:d})=>[e("div",ft,[e("div",ht,[a(c,{onClick:t=>l(),icon:"pi pi-file",class:"p-button-rounded p-button-outlined"},null,8,["onClick"]),a(c,{onClick:t=>D(m),icon:"pi pi-cloud-upload",class:"p-button-rounded p-button-outlined p-button-success",disabled:!d||d.length===0},null,8,["onClick","disabled"]),a(c,{onClick:t=>f(),icon:"pi pi-times",class:"p-button-rounded p-button-outlined p-button-danger",disabled:!d||d.length===0},null,8,["onClick","disabled"])]),a(z,{value:n(g),showValue:!1,class:J(["md:w-20rem w-full ml-auto",{"exceeded-progress-bar":n(g)>100}])},{default:v(()=>[e("span",kt,p(n($))+"B / 1Mb",1)]),_:1},8,["value","class"])])]),content:v(({files:l,uploadedFiles:m,removeUploadedFileCallback:f,removeFileCallback:d})=>[l.length>0?(u(),i("div",yt,[xt,e("div",gt,[(u(!0),i(S,null,T(l,(t,h)=>(u(),i("div",{key:t.name+t.type+t.size,class:"card flex flex-col border surface-border items-center gap-3"},[e("div",null,[e("img",{role:"presentation",alt:t.name,src:t.objectURL,width:"100",height:"50"},null,8,wt)]),e("span",Ct,p(t.name),1),e("div",null,p(w(t.size)),1),a(C,{value:"Отправка",severity:"warning"}),a(c,{icon:"pi pi-times",onClick:U=>N(t,d,h),class:"p-button-outlined p-button-rounded p-button-danger"},null,8,["onClick"])]))),128))])])):b("",!0),m.length>0?(u(),i("div",Vt,[$t,e("div",It,[(u(!0),i(S,null,T(m,(t,h)=>(u(),i("div",{key:t.name+t.type+t.size,class:"card flex flex-col border surface-border items-center gap-3"},[e("div",null,[e("img",{role:"presentation",alt:t.name,src:t.objectURL,width:"100",height:"50"},null,8,zt)]),e("span",St,p(t.name),1),e("div",null,p(w(t.size)),1),a(C,{value:"Завершено",class:"mt-3",severity:"success"}),a(c,{icon:"pi pi-times",onClick:U=>f(h),class:"p-button-outlined p-button-rounded p-button-danger"},null,8,["onClick"])]))),128))])])):b("",!0)]),empty:v(()=>[Tt]),_:1},8,["url"])])])):b("",!0),a(c,{type:"submit"},{default:v(()=>[pe(p(n(q)?"Сохранить":"Создать"),1)]),_:1})],32)])])}}},Ot=se(Bt,[["__scopeId","data-v-829db5dd"]]);export{Ot as default};
