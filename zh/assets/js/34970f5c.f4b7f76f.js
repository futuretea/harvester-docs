"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4007],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(v,i(i({ref:r},u),{},{components:t})):n.createElement(v,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11701:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:3,sidebar_label:"Creating an RKE2 Kubernetes Cluster",title:"Creating an RKE2 Kubernetes Cluster",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration","RKE2"],Description:"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver."},i=void 0,l={unversionedId:"rancher/node/rke2-cluster",id:"version-v0.3/rancher/node/rke2-cluster",title:"Creating an RKE2 Kubernetes Cluster",description:"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver.",source:"@site/versioned_docs/version-v0.3/rancher/node/rke2-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/rke2-cluster",permalink:"/zh/v0.3/rancher/node/rke2-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/node/rke2-cluster.md",tags:[],version:"v0.3",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Creating an RKE2 Kubernetes Cluster",title:"Creating an RKE2 Kubernetes Cluster",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration","RKE2"],Description:"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver."},sidebar:"tutorialSidebar",previous:{title:"Creating an RKE1 Kubernetes Cluster",permalink:"/zh/v0.3/rancher/node/rke1-cluster"},next:{title:"Harvester Cloud Provider",permalink:"/zh/v0.3/rancher/cloud-provider"}},s={},c=[{value:"Create Your Cloud Credentials",id:"create-your-cloud-credentials",level:3},{value:"Create RKE2 Kubernetes Cluster",id:"create-rke2-kubernetes-cluster",level:3}],u={toc:c};function p(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.1+")," using the built-in Harvester node driver."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rke2-cluster",src:t(62678).Z,width:"3566",height:"1554"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Harvester RKE2 node driver is in tech preview."),(0,a.kt)("li",{parentName:"ul"},"VLAN network is required for Harvester node driver."))),(0,a.kt)("h3",{id:"create-your-cloud-credentials"},"Create Your Cloud Credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your cloud credential name"),(0,a.kt)("li",{parentName:"ol"},'Select "Imported Harvester" or "External Harvester".'),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-harvester-cloud-credentials",src:t(97650).Z,width:"3582",height:"1406"})),(0,a.kt)("h3",{id:"create-rke2-kubernetes-cluster"},"Create RKE2 Kubernetes Cluster"),(0,a.kt)("p",null,"Users can create a RKE2 Kubernetes cluster from the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Management")," page via the RKE2 node driver."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create")," button."),(0,a.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,a.kt)("strong",{parentName:"li"},"RKE2/K3s"),"."),(0,a.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,a.kt)("li",{parentName:"ol"},"Select a ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credential"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Namespace")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Image")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Network Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"SSH User")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-rke2-harvester-cluster",src:t(7054).Z,width:"3080",height:"1766"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"RKE2 v1.21.5+rke2r2 or above provides a built-in Harvester Cloud Provider and Guest CSI driver integration."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Currently only imported Harvester clusters are supported automatically."))))}p.isMDXComponent=!0},7054:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/create-rke2-harvester-cluster-69f3e90ce583758d3fb637b41d103772.png"},97650:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/harvester-create-cloud-credentials-aff4e94b5cc164cc67fa7c67803db099.png"},62678:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/rke2-node-driver-6e6ba157f86e0e2027d4a00ae7d52865.png"}}]);