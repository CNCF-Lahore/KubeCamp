import{f as i}from"./node.V6KjywBy.js";import{d as u,a0 as f,I as c,N as l,ar as d}from"./entry.INph8w6t.js";const y=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:o}=f(),r=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:o,tags:r,parent:s}},render({use:t,unwrap:s,fallbackSlot:o,tags:r,parent:e}){var a;try{let n=t;return typeof t=="string"&&(n=(e==null?void 0:e.slots[t])||((a=e==null?void 0:e.parent)==null?void 0:a.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),n?s?i(n(),r):[n()]:o?o():l("div")}catch{return l("div")}}});export{y as _};
