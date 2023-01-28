"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,u=m["".concat(o,".").concat(d)]||m[d]||h[d]||i;return r?a.createElement(u,c(c({ref:t},s),{},{components:r})):a.createElement(u,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<i;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:1,sidebar_label:"Rancher \u96c6\u6210",title:"Rancher \u96c6\u6210",keywords:["Harvester","harvester","Rancher","rancher","Rancher \u96c6\u6210"],Description:"Rancher \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u591a\u96c6\u7fa4\u7ba1\u7406\u5e73\u53f0\u3002\u4ece Rancher v2.6.1 \u5f00\u59cb\uff0cHarvester \u9ed8\u8ba4\u96c6\u6210 Rancher\u3002"},c=void 0,l={unversionedId:"rancher/rancher-integration",id:"rancher/rancher-integration",title:"Rancher \u96c6\u6210",description:"\u4ece v0.3.0 \u8d77\u53ef\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/rancher/rancher-integration.md",sourceDirName:"rancher",slug:"/rancher/rancher-integration",permalink:"/zh/dev/rancher/rancher-integration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/rancher-integration.md",tags:[],version:"current",lastUpdatedAt:1673915607,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Rancher \u96c6\u6210",title:"Rancher \u96c6\u6210",keywords:["Harvester","harvester","Rancher","rancher","Rancher \u96c6\u6210"],Description:"Rancher \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u591a\u96c6\u7fa4\u7ba1\u7406\u5e73\u53f0\u3002\u4ece Rancher v2.6.1 \u5f00\u59cb\uff0cHarvester \u9ed8\u8ba4\u96c6\u6210 Rancher\u3002"},sidebar:"tutorialSidebar",previous:{title:"PCI \u8bbe\u5907",permalink:"/zh/dev/advanced/pcidevices"},next:{title:"\u865a\u62df\u5316\u7ba1\u7406",permalink:"/zh/dev/rancher/virtualization-management"}},o={},p=[{value:"Rancher \u548c Harvester \u652f\u6301\u77e9\u9635",id:"rancher-\u548c-harvester-\u652f\u6301\u77e9\u9635",level:2},{value:"\u90e8\u7f72 Rancher Server",id:"\u90e8\u7f72-rancher-server",level:2},{value:"\u865a\u62df\u5316\u7ba1\u7406",id:"\u865a\u62df\u5316\u7ba1\u7406",level:2},{value:"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u521b\u5efa Kubernetes \u96c6\u7fa4",id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u521b\u5efa-kubernetes-\u96c6\u7fa4",level:2}],s={toc:p};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u4ece v0.3.0 \u8d77\u53ef\u7528")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u591a\u96c6\u7fa4\u7ba1\u7406\u5e73\u53f0\u3002\u4ece Rancher v2.6.1 \u5f00\u59cb\uff0cRancher \u9ed8\u8ba4\u96c6\u6210\u4e86 Harvester \u96c6\u7fa4\u5bfc\u5165\u4ee5\u652f\u6301\u865a\u62df\u673a\u4e0e\u5bb9\u5668\u7684\u7edf\u4e00\u7ba1\u7406\u3002"),(0,n.kt)("h2",{id:"rancher-\u548c-harvester-\u652f\u6301\u77e9\u9635"},"Rancher \u548c Harvester \u652f\u6301\u77e9\u9635"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rancher \u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u652f\u6301\u7684 Harvester \u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6ce8\u610f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v2.6.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v1.1.0, v1.0.3"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v2.6.6 - v2.6.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v1.0.3 - v1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v2.6.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v1.0.2 - v1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v2.6.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"v2.6.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v1.0.0"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 Rancher \u7684",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/rancher/virtualization-management"},"\u865a\u62df\u5316\u7ba1\u7406"),"\u9875\u9762\u5bfc\u5165\u548c\u7ba1\u7406\u591a\u4e2a Harvester \u96c6\u7fa4\uff0c\u5e76\u5229\u7528 Rancher \u7684",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.6/pages-for-subheaders/authentication-config"},"\u8ba4\u8bc1"),"\u529f\u80fd\u548c RBAC \u63a7\u5236\u6765\u5b9e\u73b0",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"\u591a\u79df\u6237"),"\u652f\u6301\u3002"),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/fyxDm3HVwWI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"virtualization-management",src:r(57474).Z,width:"5114",height:"1796"})),(0,n.kt)("h2",{id:"\u90e8\u7f72-rancher-server"},"\u90e8\u7f72 Rancher Server"),(0,n.kt)("p",null,"\u8981\u60f3\u901a\u8fc7 Rancher \u4f7f\u7528 Harvester\uff0c\u8bf7\u5c06 Rancher \u548c Harvester \u5b89\u88c5\u5728\u4e24\u4e2a\u72ec\u7acb\u7684\u670d\u52a1\u5668\u4e2d\u3002\u5982\u679c\u4f60\u60f3\u8bd5\u7528\u96c6\u6210\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5728 Harvester \u4e2d\u521b\u5efa\u4e00\u4e2a\u865a\u62df\u673a\uff0c\u7136\u540e\u5b89\u88c5 Rancher v2.6.3 \u6216\u4ee5\u4e0a\u7248\u672c\uff08\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c\uff09\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4f7f\u7528\u4ee5\u4e0b\u6307\u5357\u4e4b\u4e00\uff0c\u5728\u4f60\u9009\u62e9\u7684\u63d0\u4f9b\u5546\u4e2d\u90e8\u7f72\u548c\u914d\u7f6e Rancher \u548c Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-qs/"},"AWS"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-marketplace-qs/"},"AWS Marketplace"),"\uff08\u4f7f\u7528 Amazon EKS\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/microsoft-azure-qs/"},"Azure"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/digital-ocean-qs/"},"DigitalOcean"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/google-gcp-qs/"},"GCP"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/hetzner-cloud-qs/"},"Hetzner Cloud"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/quickstart-vagrant/"},"Vagrant")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/equinix-metal-qs/"},"Equinix Metal"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 Docker \u6765\u5b89\u88c5 Rancher"),"\u3002\u5426\u5219\uff0c\u4f60\u7684\u73af\u5883\u53ef\u80fd\u4f1a\u635f\u574f\uff0c\u800c\u4e14\u96c6\u7fa4\u53ef\u80fd\u65e0\u6cd5\u6062\u590d\u3002\u5728 Docker \u4e2d\u5b89\u88c5 Rancher \u53ea\u9002\u7528\u4e8e\u5feb\u901f\u8bc4\u4f30\u548c\u6d4b\u8bd5\u573a\u666f\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u8981\u4f7f\u7528 Docker \u5b89\u88c5 Rancher\uff1a"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e Linux \u4e3b\u673a\u6765\u521b\u5efa\u81ea\u5b9a\u4e49\u96c6\u7fa4\u3002\u4f60\u7684\u4e3b\u673a\u53ef\u4ee5\u662f\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e91\u865a\u62df\u673a"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u865a\u62df\u673a"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668"))),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4f60\u60ef\u7528\u7684 shell\uff08\u4f8b\u5982 PuTTy \u6216\u8fdc\u7a0b\u7ec8\u7aef\u8fde\u63a5\uff09\u767b\u5f55\u4f60\u7684 Linux \u4e3b\u673a\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728 shell \u4e2d\uff0c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e3a\u4e86\u5feb\u901f\u8bc4\u4f30\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c Rancher Server\n$ sudo docker run -d --restart=unless-stopped -v /opt/rancher:/var/lib/rancher -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.9\n"))),(0,n.kt)("h2",{id:"\u865a\u62df\u5316\u7ba1\u7406"},"\u865a\u62df\u5316\u7ba1\u7406"),(0,n.kt)("p",null,"\u501f\u52a9 Rancher \u7684\u865a\u62df\u5316\u7ba1\u7406\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u5bfc\u5165\u548c\u7ba1\u7406 Harvester \u96c6\u7fa4\u3002\n\u901a\u8fc7\u5355\u51fb\u5176\u4e2d\u4e00\u4e2a\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u548c\u7ba1\u7406\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\u8d44\u6e90\uff0c\u4f8b\u5982\u4e3b\u673a\u3001\u865a\u62df\u673a\u3001\u955c\u50cf\u3001\u5377\u7b49\u3002\u6b64\u5916\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"Virtualization Management")," \u5229\u7528\u4e86\u73b0\u6709\u7684 Rancher \u529f\u80fd\uff0c\u4f8b\u5982\u901a\u8fc7\u5404\u79cd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u548c\u591a\u79df\u6237\u652f\u6301\u3002"),(0,n.kt)("p",null,"\u8be6\u60c5\u8bf7\u67e5\u770b",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/rancher/virtualization-management"},"\u865a\u62df\u5316\u7ba1\u7406"),"\u9875\u9762\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"import-cluster",src:r(85449).Z,width:"2559",height:"988"})),(0,n.kt)("h2",{id:"\u4f7f\u7528-harvester-\u4e3b\u673a\u9a71\u52a8\u521b\u5efa-kubernetes-\u96c6\u7fa4"},"\u4f7f\u7528 Harvester \u4e3b\u673a\u9a71\u52a8\u521b\u5efa Kubernetes \u96c6\u7fa4"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/zh/dev/rancher/node/node-driver"},"Harvester \u4e3b\u673a\u9a71\u52a8"),"\u7528\u4e8e\u5728 Harvester \u96c6\u7fa4\u4e2d\u521b\u5efa\u5e76\u914d\u7f6e\u865a\u62df\u673a\uff0c\u800c Rancher \u4f1a\u4f7f\u7528\u8fd9\u4e9b\u865a\u62df\u673a\u6765\u542f\u52a8\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.1")," \u5f00\u59cb\u5df2\u9ed8\u8ba4\u6dfb\u52a0 Harvester \u4e3b\u673a\u9a71\u52a8\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/rancher/node/node-driver"},"node-driver")," \u9875\u9762\u3002"))}h.isMDXComponent=!0},85449:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/import-harvester-cluster-f79a5e502100ff314e9e6405e39c7dcc.png"},57474:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/virtualization-management-18bf128eb90c9308b712a84414bbdff3.png"}}]);