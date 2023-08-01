"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,v=s["".concat(c,".").concat(d)]||s[d]||m[d]||l;return n?o.createElement(v,a(a({ref:t},p),{},{components:n})):o.createElement(v,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const l={sidebar_position:3,sidebar_label:"Clone a Volume",title:"Clone a Volume",keywords:["Volume"],Description:"Clone volume from the Volume page."},a=void 0,i={unversionedId:"volume/clone-volume",id:"volume/clone-volume",title:"Clone a Volume",description:"After creating a volume, you can clone the volume by following the steps below:",source:"@site/docs/volume/clone-volume.md",sourceDirName:"volume",slug:"/volume/clone-volume",permalink:"/dev/volume/clone-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/volume/clone-volume.md",tags:[],version:"current",lastUpdatedAt:1690573339,formattedLastUpdatedAt:"Jul 28, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Clone a Volume",title:"Clone a Volume",keywords:["Volume"],Description:"Clone volume from the Volume page."},sidebar:"tutorialSidebar",previous:{title:"Edit a Volume",permalink:"/dev/volume/edit-volume"},next:{title:"Export a Volume to Image",permalink:"/dev/volume/export-volume"}},c={},u=[],p={toc:u};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/clone-volume"})),(0,r.kt)("p",null,"After creating a volume, you can clone the volume by following the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"Clone")," option."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"clone-volume-1",src:n(37903).Z,width:"2560",height:"726"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"clone volume data"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," of the new volume and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) A cloned volume can be added to a VM using ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Existing Volume"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"clone-volume-2",src:n(3085).Z,width:"750",height:"304"})))))}m.isMDXComponent=!0},37903:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/clone-volume-1-e2e84cb2212fadbbaf4c4034072627b1.png"},3085:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/clone-volume-2-caf189b44630de7cb3e49689efdd88b5.png"}}]);