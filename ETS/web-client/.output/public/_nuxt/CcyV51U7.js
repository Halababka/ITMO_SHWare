import{u as t,a as n}from"./Bn8s6ksr.js";const a=n(),c=async()=>{try{const e=await fetch(`${a.public.apiBase}/roles`,{headers:{Authorization:`${t("token").value}`}});if(!e.ok)throw new Error("Failed to fetch roles");return await e.json()}catch(e){throw console.error("Error fetching roles:",e),e}},l=async e=>{try{const o=await fetch(`${a.public.apiBase}/roles`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`${t("token").value}`},body:JSON.stringify(e)});if(!o.ok)throw new Error("Failed to create role");return await o.json()}catch(o){throw console.error("Error creating role:",o),o}},d=async e=>{try{const o=await fetch(`${a.public.apiBase}/roles`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`${t("token").value}`},body:JSON.stringify({ids:e})});if(!o.ok)throw new Error("Failed to delete roles");return await o.json()}catch(o){throw console.error("Error deleting roles:",o),o}},h=async(e,o)=>{try{const r=await fetch(`${a.public.apiBase}/roles/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`${t("token").value}`},body:JSON.stringify(o)});if(!r.ok)throw new Error("Failed to update role");return await r.json()}catch(r){throw console.error("Error updating role:",r),r}};export{l as c,d,c as f,h as u};