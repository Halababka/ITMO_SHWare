import{_ as xe}from"./CxKW6yKe.js";import{d as de,y as ue,G as ke,A as be,u as pe,r as v,z as me,c as s,e as n,t as r,f as e,g as l,h as a,j as ne,n as b,k as h,l as x,w as _,B as ye,i as we,a as Ce,s as _e,H as Se,v as $e,x as Ae,_ as he,I as Ie,b as ze,o as Te,J as Ee,m as K}from"./Bn8s6ksr.js";import Fe from"./B5Dq3rir.js";import Be from"./CIirbjzG.js";import Re from"./B0eqC23B.js";import Ve from"./CzsHIdTH.js";import Ue from"./Bsd0B2of.js";import{f as je,F as B,g as De,a as te,b as se,c as Me,d as Pe,v as re}from"./DAxKz_H_.js";import{s as Ne}from"./C0nKHSUl.js";import{u as fe}from"./7jZtv5KM.js";import Le from"./WhAeqH17.js";import Oe from"./pHyfQTVL.js";import He from"./Ce_AsTBN.js";import qe from"./BcMy3PDY.js";import{u as Je}from"./Ct7qimw6.js";import{a as Ge}from"./DOgkogYK.js";import"./Beh2qRuB.js";import"./CVaRbyVJ.js";import"./DvLZ7Zqz.js";import"./BFrbZsHQ.js";import"./3ww00xj7.js";import"./B2cK24SD.js";import"./BLi23Xor.js";import"./CGQTC3f5.js";import"./BXRJdK4x.js";import"./CP2X2kCJ.js";import"./BXQHskyo.js";import"./BGHFK8Cg.js";const R=V=>($e("data-v-0226f6f6"),V=V(),Ae(),V),Ye={key:0,class:"title-content"},Ke=["href"],Qe={class:"content-wrapper-header"},We={class:"file-extension lowercase"},Xe={key:2,class:"text-lg"},Ze={key:3,class:"files-container"},et=["href"],tt={class:"content-wrapper-header"},st={class:"file-icon-wrapper"},nt={class:"file-name text-lg"},ot={class:"file-extension"},at={key:4,class:"folder-container"},lt={class:"content-wrapper-header"},ct={class:"file-folder-wrapper"},it=["href"],rt={class:"content-wrapper-header"},dt={class:"file-icon-wrapper"},ut={class:"file-name text-lg"},pt={class:"file-extension"},mt={key:5,class:"video-container"},_t={class:"flex gap-2 items-center text-lg"},ht=["srcdoc"],ft={class:"content-wrapper-header"},vt=R(()=>e("i",{class:"pi pi-graduation-cap text-lg"},null,-1)),gt={class:"text-[18px]"},xt={class:"flex flex-col gap-3 py-5"},kt={class:""},bt=R(()=>e("label",{class:"text-xl"},"Материалы",-1)),yt={class:"file-folder-wrapper mb-3"},wt=["href"],Ct={class:"content-wrapper-header"},St={class:"file-icon-wrapper"},$t={class:"file-name text-lg"},At={class:"file-extension"},It=R(()=>e("label",{class:"text-xl"},"Оценка",-1)),zt={key:0},Tt={key:0},Et={key:1,class:"text-[18px]"},Ft={key:1},Bt=R(()=>e("label",{class:"text-xl mt-3"},"Ответ",-1)),Rt={class:"mb-5"},Vt={class:"flex justify-between items-center flex-1 gap-2 w-[50rem]"},Ut={class:"flex gap-2 items-center align-center"},jt={class:"whitespace-nowrap"},Dt={key:0},Mt=R(()=>e("h5",null,"Отправка",-1)),Pt={class:"flex flex-wrap gap-5"},Nt=["alt","src"],Lt={class:"font-semibold"},Ot={key:1},Ht=R(()=>e("h5",null,"Завершено",-1)),qt={class:"flex flex-wrap gap-5"},Jt=["alt","src"],Gt={class:"font-semibold"},Yt=R(()=>e("div",{class:"flex items-center justify-center flex-col"},[e("i",{class:"pi pi-cloud-upload border-2 rounded-full p-5 text-8xl border-solid"}),e("p",{class:"mt-4 mb-0"},"Перетащите файлы сюда для загрузки")],-1)),Kt={key:2},Qt={key:0},Wt={class:"file-folder-wrapper"},Xt=["href"],Zt={class:"content-wrapper-header"},es={class:"file-icon-wrapper"},ts={class:"file-name text-lg"},ss={class:"file-extension"},ns=de({__name:"TheCourseSectionContent",props:{content:{type:Object,required:!0,default:()=>{}}},async setup(V){var D,Y;let y,P;const t=V,N=([y,P]=ue(()=>fe()),y=await y,P(),y).value,L=ke(),O=be(),Q=pe("token").value,g=v(0),U=v(0),H=v([]),q=Ce(),W=v(),I=v(!1);let z;v(((Y=(D=t.content.tasks[0])==null?void 0:D.StudentAssignments[0])==null?void 0:Y.grade)||"");const X=v(null);me(()=>{N.pending||(X.value=N.userData.permissions.some(c=>c.code==="CREATE_COURSES"))});const oe=async(c=null,o,m)=>{try{const i=await Ne(c,o,m);O.add({severity:"success",summary:"Успешно",detail:"Ответ отправлен",life:3e3})}catch(i){console.error("Error sending answer:",i)}},Z=c=>{W.value[0].toggle(c)},ae=c=>{const{materials:o}=t.content.tasks[0].StudentAssignments[0];t.content.tasks[0].StudentAssignments[0].materials=o.filter(m=>m.id!==c)},u=()=>{I.value=!1},T=(c,o,m)=>{o(m),g.value-=parseInt(w(c.size)),U.value=g.value/10},$=c=>{H.value=c.files,H.value.forEach(o=>{g.value+=parseInt(w(o.size))})},j=c=>{U.value=g.value/10,c()},J=c=>{z=JSON.parse(c.xhr.response),console.log(z.files),O.add({severity:"success",summary:"Успешно",detail:"Файл загружен",life:3e3}),t.content.tasks[0].StudentAssignments[0]||(t.content.tasks[0].StudentAssignments=[{id:"",materials:[]}]),t.content.tasks[0].StudentAssignments[0].materials?z.files.map(o=>t.content.tasks[0].StudentAssignments[0].materials.push({id:o.id,name:o.name,path:o.path})):t.content.tasks[0].StudentAssignments[0].materials=z.files.map(o=>({id:o.id,name:o.name,path:o.path}))},w=c=>{const i=L.config.locale.fileSizeTypes;if(c===0)return`0 ${i[0]}`;const f=Math.floor(Math.log(c)/Math.log(1024));return`${parseFloat((c/Math.pow(1024,f)).toFixed(3))} ${i[f]}`},G=async c=>{c.xhr.setRequestHeader("Authorization",Q);const m=c.formData,i=m.getAll("files");m.delete("files"),i.forEach(f=>{const C=encodeURIComponent(f.name),E=new File([f],C,{type:f.type});m.append("files",E)})};return(c,o)=>{var ce,ie;const m=Be,i=_e,f=Re,C=Se,E=Ve,ve=Ue;return s(),n(h,null,[!t.content.urlItem&&t.content.materials.length<=0&&t.content.folders.length<=0&&!t.content.urlVideo&&((ce=t.content.tasks)==null?void 0:ce.length)<=0?(s(),n("label",Ye,r(t.content.title),1)):t.content.urlItem?(s(),n("a",{key:1,href:t.content.urlItem,class:"content-wrapper text-lg cursor-alias"},[e("div",Qe,[l(a(B),{icon:a(je),class:"file-icon"},null,8,["icon"]),ne(" "+r(t.content.title),1)]),e("div",We,r(a(De)(t.content.urlItem)),1)],8,Ke)):b("",!0),t.content.content?(s(),n("p",Xe,r(t.content.content),1)):b("",!0),t.content.materials.length>0?(s(),n("div",Ze,[(s(!0),n(h,null,x(t.content.materials,(k,S)=>(s(),n("div",{key:S,class:"w-full"},[e("a",{href:k.path,download:"",class:"content-wrapper"},[e("div",tt,[e("div",st,[l(a(B),{icon:a(te)(k.name),class:"file-icon"},null,8,["icon"])]),e("span",nt,r(t.content.title),1)]),e("div",ot,r(a(se)(k.name)),1)],8,et)]))),128))])):b("",!0),t.content.folders.length>0?(s(),n("div",at,[(s(!0),n(h,null,x(t.content.folders,(k,S)=>(s(),n("div",{key:S,class:"flex flex-col"},[e("div",{class:"content-wrapper",onClick:Z},[e("div",lt,[l(a(B),{icon:a(Me),class:"text-lg"},null,8,["icon"]),e("label",null,r(k.name),1)])]),l(m,{ref_for:!0,ref_key:"op",ref:W},{default:_(()=>[e("div",ct,[(s(!0),n(h,null,x(k.materials,(F,d)=>(s(),n("a",{href:F.path,download:"",class:"content-wrapper pl-3",key:d},[e("div",rt,[e("div",dt,[l(a(B),{icon:a(te)(F.name),class:"file-icon"},null,8,["icon"])]),e("span",ut,r(F.name),1)]),e("div",pt,r(a(se)(F.name)),1)],8,it))),128))])]),_:2},1536)]))),128))])):b("",!0),t.content.urlVideo?(s(),n("div",mt,[e("div",_t,[l(a(B),{icon:a(Pe),class:"file-icon text-lg"},null,8,["icon"]),ne(" "+r(t.content.title),1)]),t.content.urlVideo.includes("youtube.com/watch?v=")?(s(),n("iframe",{key:0,width:"560",height:"315",srcdoc:`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img{position:absolute;width:100%;top:0;bottom:0;margin:auto}button{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1;background:rgba(0,0,0,0.5);color:white;font-size:20px;border:none;cursor:pointer}button:hover{background:rgba(0,0,0,0.7)}</style><a href=https://www.youtube.com/embed/${a(re)(t.content.urlVideo)}?autoplay=1><img src=https://img.youtube.com/vi/${a(re)(t.content.urlVideo)}/hqdefault.jpg alt='${t.content.title}'><button>Нажмите для воспроизведения</button></a>`,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,ht)):b("",!0)])):b("",!0),t.content.tasks[0]?(s(),n("div",{key:6,class:"content-wrapper",onClick:o[0]||(o[0]=k=>I.value=!0)},[e("div",ft,[vt,e("label",gt,r(t.content.tasks[0].name),1)])])):b("",!0),l(ve,{visible:a(I),"onUpdate:visible":o[4]||(o[4]=k=>we(I)?I.value=k:null),header:((ie=t.content.tasks[0])==null?void 0:ie.name)||"",modal:"",dismissableMask:"",onHide:u},{footer:_(()=>[l(i,{label:"Отправить",icon:"pi pi-check",text:"",onClick:o[3]||(o[3]=k=>{var S;return oe((S=t.content.tasks[0].StudentAssignments[0])==null?void 0:S.id,t.content.tasks[0].id,t.content.tasks[0].StudentAssignments[0].materials)})})]),default:_(()=>{var k,S,F;return[e("div",xt,[e("p",kt,r(t.content.tasks[0].text),1),bt,e("div",yt,[(s(!0),n(h,null,x(t.content.tasks[0].materials,(d,A)=>(s(),n("a",{href:d.path,download:"",class:"content-wrapper pl-3",key:A},[e("div",Ct,[e("div",St,[l(a(B),{icon:a(te)(d.name),class:"file-icon"},null,8,["icon"])]),e("span",$t,r(d.name),1)]),e("div",At,r(a(se)(d.name)),1)],8,wt))),128))]),It,!((k=t.content.tasks[0].StudentAssignments[0])!=null&&k.length)>0&&t.content.tasks[0].StudentAssignments[0]?(s(),n("div",zt,[t.content.tasks[0].StudentAssignments[0].grade?(s(),n("p",Et,r(t.content.tasks[0].StudentAssignments[0].grade),1)):(s(),n("p",Tt,"Не оценено"))])):(s(),n("p",Ft,"Отправьте ответ")),Bt,e("div",Rt,[l(E,{name:"files",url:`${a(q).public.apiBase}/files/upload`,"pt:root:class":"max-w-[800px]",onUpload:o[1]||(o[1]=d=>J(d)),multiple:!0,onSelect:$,auto:!0,onBeforeSend:o[2]||(o[2]=d=>G(d))},{header:_(({chooseCallback:d,uploadCallback:A,clearCallback:ee,files:M})=>[e("div",Vt,[e("div",Ut,[l(i,{onClick:p=>d(),icon:"pi pi-file",class:"p-button-rounded p-button-outlined p-2"},null,8,["onClick"]),l(i,{onClick:p=>j(A),icon:"pi pi-cloud-upload",class:"p-button-rounded p-button-outlined p-button-success p-2",disabled:!M||M.length===0},null,8,["onClick","disabled"]),l(i,{onClick:p=>ee(),icon:"pi pi-times",class:"p-button-rounded p-button-outlined p-button-danger p-2",disabled:!M||M.length===0},null,8,["onClick","disabled"])]),l(f,{value:a(U),showValue:!1,class:ye(["md:w-20rem w-full ml-auto",{"exceeded-progress-bar":a(U)>100}])},{default:_(()=>[e("span",jt,r(a(g))+"B / 1Mb",1)]),_:1},8,["value","class"])])]),content:_(({files:d,uploadedFiles:A,removeUploadedFileCallback:ee,removeFileCallback:M})=>[d.length>0?(s(),n("div",Dt,[Mt,e("div",Pt,[(s(!0),n(h,null,x(d,(p,le)=>(s(),n("div",{key:p.name+p.type+p.size,class:"card flex flex-col border surface-border items-center gap-3"},[e("div",null,[e("img",{role:"presentation",alt:p.name,src:p.objectURL,width:"100",height:"50"},null,8,Nt)]),e("span",Lt,r(p.name),1),e("div",null,r(w(p.size)),1),l(C,{value:"Отправка",severity:"warning"}),l(i,{icon:"pi pi-times",onClick:ge=>T(p,M,le),class:"p-button-outlined p-button-rounded p-button-danger"},null,8,["onClick"])]))),128))])])):b("",!0),A.length>0?(s(),n("div",Ot,[Ht,e("div",qt,[(s(!0),n(h,null,x(A,(p,le)=>(s(),n("div",{key:p.name+p.type+p.size,class:"card flex flex-col border surface-border items-center gap-3"},[e("div",null,[e("img",{role:"presentation",alt:p.name,src:p.objectURL,width:"100",height:"50"},null,8,Jt)]),e("span",Gt,r(p.name),1),e("div",null,r(w(p.size)),1),l(C,{value:"Завершено",class:"mt-3",severity:"success"}),l(i,{icon:"pi pi-times",onClick:ge=>ee(le),class:"p-button-outlined p-button-rounded p-button-danger"},null,8,["onClick"])]))),128))])])):b("",!0)]),empty:_(()=>[Yt]),_:1},8,["url"])]),!((S=t.content.tasks[0].StudentAssignments[0])!=null&&S.length)>0?(s(),n("div",Kt,[t.content.tasks[0].StudentAssignments[0]&&((F=t.content.tasks[0].StudentAssignments[0].materials)==null?void 0:F.length)>0?(s(),n("div",Qt,[e("div",Wt,[(s(!0),n(h,null,x(t.content.tasks[0].StudentAssignments[0].materials,(d,A)=>(s(),n("div",{class:"flex justify-between gap-3 items-center",key:A},[e("a",{href:d.path,download:"",class:"content-wrapper pl-3"},[e("div",Zt,[e("div",es,[l(a(B),{icon:a(te)(d.name),class:"file-icon"},null,8,["icon"])]),e("span",ts,r(d.name),1)]),e("div",ss,r(a(se)(d.name)),1)],8,Xt),l(i,{icon:"pi pi-times",class:"p-button-danger",onClick:ee=>ae(d.id)},null,8,["onClick"])]))),128))])])):b("",!0)])):b("",!0)])]}),_:1},8,["visible","header"])],64)}}}),os=he(ns,[["__scopeId","data-v-0226f6f6"]]),as={class:"main-content white-box"},ls={class:"flex flex-col align-center items-center gap-5 mb-5"},cs={class:"flex items-center align-center gap-2"},is={class:"m-2"},rs={key:0,class:"card flex justify-content-center"},ds={class:"text-xl"},us={class:"flex justify-start"},ps={class:"section-content"},ms={class:"section-content"},_s={class:"section-content"},hs={class:"section-content"},fs=de({__name:"index",async setup(V){let y,P;const t=Ie(),N=ze();pe("token");const L=v(!1);v();const O=([y,P]=ue(()=>fe()),y=await y,P(),y).value,Q=v(null),g=v({});Te(()=>{U()}),me(()=>{O.pending||(Q.value=O.userData.permissions.some(u=>u.code==="CREATE_COURSES"))});const U=async()=>{L.value=!0;try{await Ge(t.params.id).then(u=>{console.log("data",u),g.value=u,Je({title:g.value.name}),z()})}catch(u){console.error("Error fetch Course:",u)}finally{L.value=!1}},H=v({}),q=v(null),W=()=>{z()},I=()=>{q.value=null},z=()=>{g.value.sections.forEach((u,T)=>{var $;H.value[T]=Array.from({length:(($=u.subsections)==null?void 0:$.length)||0},(j,J)=>J)}),q.value=Array.from({length:g.value.sections.length},(u,T)=>T)};Ee(()=>{var u;return Array.from({length:((u=g.value.sections)==null?void 0:u.length)||0},(T,$)=>$)});const X=u=>H.value[u]||[],oe=v([{label:"Редактировать",icon:"pi pi-pencil",command:()=>{N.push(`/course/create?id=${t.params.id}`)}},{label:"Ответы",icon:"pi pi-file",command:()=>{N.push(`/course/${t.params.id}/tasks`)}}]);v({icon:"pi pi-home"});const Z=v(),ae=u=>{Z.value.toggle(u)};return(u,T)=>{const $=xe,j=_e,J=Fe,w=os,G=Le,D=Oe,Y=He,c=qe;return s(),n(h,null,[a(L)?(s(),K($,{key:0})):b("",!0),e("div",as,[e("div",ls,[e("div",cs,[e("h1",is,r(a(g).name),1),a(Q)?(s(),n("div",rs,[l(j,{type:"button",icon:"pi pi-ellipsis-v",onClick:ae,"aria-haspopup":"true","aria-controls":"overlay_menu"}),l(J,{ref_key:"menu",ref:Z,id:"overlay_menu",model:a(oe),popup:!0},null,8,["model"])])):b("",!0)]),e("p",ds,r(a(g).description),1)]),l(c,{scrollable:!0,class:"w-full","pt:tabpanel:headerTitle:class":"text-2xl"},{default:_(()=>[l(Y,{header:"Общий вид",contentClass:"flex flex-col gap-3"},{default:_(()=>[e("div",us,[l(j,{onClick:W,class:"btn-primary mr-2"},{default:_(()=>[ne("Развернуть")]),_:1}),l(j,{onClick:I,class:"btn-secondary"},{default:_(()=>[ne("Свернуть")]),_:1})]),l(D,{multiple:!0,activeIndex:a(q),"pt:accordiontab:headerTitle:class":"text-xl font-medium"},{default:_(()=>[(s(!0),n(h,null,x(a(g).sections,(o,m)=>(s(),K(G,{header:o.name,key:m,class:"section-all"},{default:_(()=>[l(D,{multiple:!0,activeIndex:X(m),class:"mb-3","pt:accordiontab:content:class":"p-8","pt:accordiontab:headerTitle:class":"text-xl font-medium"},{default:_(()=>[(s(!0),n(h,null,x(o.subsections,(i,f)=>(s(),K(G,{header:i.name,key:f,class:"section-all"},{default:_(()=>[e("div",ps,[(s(!0),n(h,null,x(i.section_content,(C,E)=>(s(),n("div",{key:E,class:"flex gap-3 flex-col"},[l(w,{content:C},null,8,["content"])]))),128))])]),_:2},1032,["header"]))),128))]),_:2},1032,["activeIndex"]),e("div",ms,[(s(!0),n(h,null,x(o.section_content,(i,f)=>(s(),n("div",{key:f,class:"flex gap-3 flex-col"},[l(w,{content:i},null,8,["content"])]))),128))])]),_:2},1032,["header"]))),128))]),_:1},8,["activeIndex"])]),_:1}),(s(!0),n(h,null,x(a(g).sections,(o,m)=>(s(),K(Y,{key:m,header:o.name},{default:_(()=>[l(D,{multiple:!0,activeIndex:X(m),class:"mb-3","pt:accordiontab:headerTitle:class":"text-xl font-medium"},{default:_(()=>[(s(!0),n(h,null,x(o.subsections,(i,f)=>(s(),K(G,{header:i.name,key:f,class:"section-all"},{default:_(()=>[e("div",_s,[(s(!0),n(h,null,x(i.section_content,(C,E)=>(s(),n("div",{key:E,class:"flex gap-3 flex-col"},[l(w,{content:C},null,8,["content"])]))),128))])]),_:2},1032,["header"]))),128))]),_:2},1032,["activeIndex"]),e("div",hs,[(s(!0),n(h,null,x(o.section_content,(i,f)=>(s(),n("div",{key:f,class:"flex gap-3 flex-col"},[l(w,{content:i},null,8,["content"])]))),128))])]),_:2},1032,["header"]))),128))]),_:1})])],64)}}}),qs=he(fs,[["__scopeId","data-v-69cb19a5"]]);export{qs as default};
