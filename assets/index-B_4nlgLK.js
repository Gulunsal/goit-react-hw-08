import{u,j as a,C as x,P as c,T as h,B as f,c as g,d as j}from"./index-BL1pKMho.js";import{c as b,a as l,F as v,b as w,T as s}from"./index.esm-CQ2wf1ux.js";import{P as y}from"./PersonAdd-DI6Fd5XE.js";function B(){const m=u(),o=b({name:l().matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/,"Sadece harf kullanılabilir").required("İsim gerekli"),email:l().email("Geçerli bir email adresi giriniz").required("Email gerekli"),password:l().min(7,"Şifre en az 7 karakter olmalıdır").required("Şifre gerekli")}),d={name:"",email:"",password:""},p=(r,{resetForm:n})=>{m(j(r)),n()};return a.jsx(x,{maxWidth:"sm",children:a.jsxs(c,{elevation:3,sx:{p:4,mt:4},children:[a.jsx(h,{variant:"h5",component:"h2",gutterBottom:!0,align:"center",children:"Kayıt Ol"}),a.jsx(v,{validationSchema:o,initialValues:d,onSubmit:p,children:({values:r,handleChange:n,handleBlur:t,touched:e,errors:i})=>a.jsxs(f,{component:w,sx:{mt:2},children:[a.jsx(s,{fullWidth:!0,label:"İsim",name:"name",value:r.name,onChange:n,onBlur:t,error:e.name&&!!i.name,helperText:e.name&&i.name,margin:"normal",variant:"outlined"}),a.jsx(s,{fullWidth:!0,label:"Email",name:"email",type:"email",value:r.email,onChange:n,onBlur:t,error:e.email&&!!i.email,helperText:e.email&&i.email,margin:"normal",variant:"outlined"}),a.jsx(s,{fullWidth:!0,label:"Şifre",name:"password",type:"password",value:r.password,onChange:n,onBlur:t,error:e.password&&!!i.password,helperText:e.password&&i.password,margin:"normal",variant:"outlined"}),a.jsx(g,{type:"submit",variant:"contained",color:"primary",size:"large",fullWidth:!0,startIcon:a.jsx(y,{}),sx:{mt:3},children:"Kayıt Ol"})]})})]})})}function z(){return a.jsx("div",{children:a.jsx(B,{})})}export{z as default};
