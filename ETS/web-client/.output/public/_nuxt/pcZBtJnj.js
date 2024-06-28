import{u as s,a as i}from"./Bn8s6ksr.js";const a=i(),l=async(r,t)=>{try{const e=await fetch(`${a.public.apiBase}/registration?token=${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userData:r})});if(!e.ok){const n=await e.json();throw{status:e.status,message:n.error||"Failed to register User"}}return await e.json()}catch(e){throw console.error("Error register User:",e),e}},g=async()=>{try{const r=await fetch(`${a.public.apiBase}/registration/links`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`${s("token").value}`}});if(!r.ok){const e=await r.json();throw{status:r.status,message:e.error||"Failed to fetch registration links"}}return await r.json()}catch(r){throw console.error("Error fetching registration links:",r),r}},h=async r=>{try{const t=await fetch(`${a.public.apiBase}/registration/links`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`${s("token").value}`},body:JSON.stringify(r)});if(!t.ok){const o=await t.json();throw{status:t.status,message:o.error||"Failed to create registration link"}}return await t.json()}catch(t){throw console.error("Error creating registration link:",t),t}},d=async r=>{try{const t=await fetch(`${a.public.apiBase}/registration/links`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`${s("token").value}`},body:JSON.stringify({ids:r})});if(!t.ok){const o=await t.json();throw{status:t.status,message:o.error||"Failed to delete registration links"}}return await t.json()}catch(t){throw console.error("Error deleting registration links:",t),t}};export{h as c,d,g,l as r};
