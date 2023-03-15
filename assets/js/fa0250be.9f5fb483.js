"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[434],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,v=c["".concat(u,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},64009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:7,sidebar_label:"Hot-Plug Volumes",title:"Hot-Plug Volumes",keywords:["Harvester","Hot-plug","Volume"],Description:"Adding hot-plug volumes to a running VM."},i=void 0,l={unversionedId:"vm/hotplug-volume",id:"version-v1.1/vm/hotplug-volume",title:"Hot-Plug Volumes",description:"Harvester supports adding hot-plug volumes to a running VM.",source:"@site/versioned_docs/version-v1.1/vm/hotplug-volume.md",sourceDirName:"vm",slug:"/vm/hotplug-volume",permalink:"/v1.1/vm/hotplug-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/vm/hotplug-volume.md",tags:[],version:"v1.1",lastUpdatedAt:1678205970,formattedLastUpdatedAt:"Mar 7, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Hot-Plug Volumes",title:"Hot-Plug Volumes",keywords:["Harvester","Hot-plug","Volume"],Description:"Adding hot-plug volumes to a running VM."},sidebar:"tutorialSidebar",previous:{title:"Live Migration",permalink:"/v1.1/vm/live-migration"},next:{title:"Resource Overcommit",permalink:"/v1.1/vm/resource-overcommit"}},u={},s=[{value:"Adding Hot-Plug Volumes to a Running VM",id:"adding-hot-plug-volumes-to-a-running-vm",level:2}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Harvester supports adding hot-plug volumes to a running VM."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently, KubeVirt only supports disk bus ",(0,o.kt)("inlineCode",{parentName:"p"},"scsi")," for hot-plug volumes. For more information, see this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubevirt/kubevirt/issues/5080#issuecomment-785183128"},"issue"),".")),(0,o.kt)("h2",{id:"adding-hot-plug-volumes-to-a-running-vm"},"Adding Hot-Plug Volumes to a Running VM"),(0,o.kt)("p",null,"The following steps assume that you have a running VM and a ready volume:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,o.kt)("li",{parentName:"ol"},"Find the VM that you want to add a volume to and select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Add Volume"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"Name")," and select the ",(0,o.kt)("strong",{parentName:"li"},"Volume"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Apply"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Volume",src:r(23165).Z,width:"4282",height:"1854"})))}m.isMDXComponent=!0},23165:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add-volume-80106f57571708c9bac1f48720df7583.png"}}]);