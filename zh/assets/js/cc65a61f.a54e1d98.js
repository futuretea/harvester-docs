"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),v=r,u=m["".concat(o,".").concat(v)]||m[v]||d[v]||i;return n?a.createElement(u,p(p({ref:t},l),{},{components:n})):a.createElement(u,p({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:6,sidebar_label:"PCI \u8bbe\u5907",title:""},p="PCI \u8bbe\u5907\uff08\u5b9e\u9a8c\u529f\u80fd\uff09",c={unversionedId:"advanced/pcidevices",id:"advanced/pcidevices",title:"",description:"\u4ece v1.1.0 \u8d77\u53ef\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/advanced/pcidevices.md",sourceDirName:"advanced",slug:"/advanced/pcidevices",permalink:"/zh/v1.1/advanced/pcidevices",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/pcidevices.md",tags:[],version:"current",lastUpdatedAt:1668565576,formattedLastUpdatedAt:"2022\u5e7411\u670816\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"PCI \u8bbe\u5907",title:""},sidebar:"tutorialSidebar",previous:{title:"VM \u5bfc\u5165",permalink:"/zh/v1.1/advanced/vmimport"},next:{title:"Rancher \u96c6\u6210",permalink:"/zh/v1.1/rancher/rancher-integration"}},o={},s=[{value:"\u5728 PCI \u8bbe\u5907\u4e0a\u542f\u7528\u76f4\u901a",id:"\u5728-pci-\u8bbe\u5907\u4e0a\u542f\u7528\u76f4\u901a",level:2},{value:"\u5c06 PCI \u8bbe\u5907\u9644\u52a0\u5230 VM",id:"\u5c06-pci-\u8bbe\u5907\u9644\u52a0\u5230-vm",level:2},{value:"\u5728 VM \u5185\u4f7f\u7528\u76f4\u901a\u7684 PCI \u8bbe\u5907",id:"\u5728-vm-\u5185\u4f7f\u7528\u76f4\u901a\u7684-pci-\u8bbe\u5907",level:2},{value:"\u5728 VM \u5185\u4e3a PCI \u8bbe\u5907\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f",id:"\u5728-vm-\u5185\u4e3a-pci-\u8bbe\u5907\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f",level:2}],l={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pci-\u8bbe\u5907\u5b9e\u9a8c\u529f\u80fd"},"PCI \u8bbe\u5907\uff08\u5b9e\u9a8c\u529f\u80fd\uff09"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.1.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"\u5728 Harvester \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"PCIDevice")," \u6307\u7684\u662f\u5177\u6709 PCI \u5730\u5740\u7684\u4e3b\u673a\u8bbe\u5907\u3002\n\u4f60\u53ef\u4ee5\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"PCIDeviceClaim")," \u8d44\u6e90\u6216\u4f7f\u7528 UI\uff0c\u901a\u8fc7\u865a\u62df\u673a\u76d1\u63a7\u7a0b\u5e8f\u5c06\u8bbe\u5907\u76f4\u901a\u5230 VM\u3002\u901a\u8fc7\u865a\u62df\u673a\u76d1\u63a7\u7a0b\u5e8f\u76f4\u901a\u8bbe\u5907\u540e\uff0cVM \u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u8bbe\u5907\u5e76\u9ad8\u6548\u5730\u4f7f\u7528\u8bbe\u5907\u3002\u865a\u62df\u673a\u751a\u81f3\u53ef\u4ee5\u5b89\u88c5\u8be5\u8bbe\u5907\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u8be5\u8fc7\u7a0b\u662f\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," \u63d2\u4ef6\u6765\u5b8c\u6210\u7684\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528 PCI \u8bbe\u5907\u529f\u80fd\uff0c\u4f60\u9700\u8981\u5148\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," \u63d2\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(80759).Z,width:"1572",height:"596"})),(0,r.kt)("h2",{id:"\u5728-pci-\u8bbe\u5907\u4e0a\u542f\u7528\u76f4\u901a"},"\u5728 PCI \u8bbe\u5907\u4e0a\u542f\u7528\u76f4\u901a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u524d\u5f80 ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced > PCI Devices")," \u9875\u9762\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(19168).Z,width:"1440",height:"810"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8f93\u5165\u63d0\u4f9b\u5546\u540d\u79f0\uff08\u4f8b\u5982 NVIDIA\u3001Intel \u7b49\uff09\u6216\u8bbe\u5907\u540d\u79f0\u641c\u7d22\u4f60\u7684\u8bbe\u5907\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(88566).Z,width:"1440",height:"810"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9\u8981\u542f\u7528\u76f4\u901a\u7684\u8bbe\u5907\uff1a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(92783).Z,width:"1440",height:"810"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7136\u540e\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Enable Passthrough")," \u5e76\u9605\u8bfb\u8b66\u544a\u6d88\u606f\u3002\u5982\u679c\u4f60\u60f3\u542f\u7528\u8fd9\u4e9b\u8bbe\u5907\uff0c\u8bf7\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Enable")," \u5e76\u7b49\u5f85\u6240\u6709\u8bbe\u5907\u7684\u72b6\u6001\u53d8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Enabled"),"\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8bf7\u4e0d\u8981\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"\u5bbf\u4e3b\u673a\u4e13\u7528"),"\u7684 PCI \u8bbe\u5907\uff08\u4f8b\u5982\uff0c\u7ba1\u7406\u7f51\u7edc\u548c VLAN \u7f51\u7edc\u7684\u7f51\u5361\uff09\u3002\u9519\u8bef\u7684\u8bbe\u5907\u5206\u914d\u53ef\u80fd\u4f1a\u635f\u574f\u4f60\u7684\u96c6\u7fa4\uff08\u5305\u62ec\u8282\u70b9\u6545\u969c\uff09\u3002")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(50972).Z,width:"1440",height:"810"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(67923).Z,width:"1440",height:"810"})))),(0,r.kt)("h2",{id:"\u5c06-pci-\u8bbe\u5907\u9644\u52a0\u5230-vm"},"\u5c06 PCI \u8bbe\u5907\u9644\u52a0\u5230 VM"),(0,r.kt)("p",null,"\u542f\u7528\u8fd9\u4e9b PCI \u8bbe\u5907\u540e\uff0c\u4f60\u53ef\u4ee5\u5bfc\u822a\u5230 ",(0,r.kt)("strong",{parentName:"p"},"Virtual Machines")," \u9875\u9762\u5e76\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Edit Config")," \u6765\u76f4\u901a\u8fd9\u4e9b\u8bbe\u5907\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(65646).Z,width:"1440",height:"810"})),(0,r.kt)("p",null,"\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"PCI Devices")," \u5e76\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"Available PCI Devices")," \u4e0b\u62c9\u83dc\u5355\u3002\u4ece\u663e\u793a\u7684\u5217\u8868\u4e2d\u9009\u62e9\u8981\u9644\u52a0\u7684\u8bbe\u5907\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Save"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(38397).Z,width:"1440",height:"810"})),(0,r.kt)("h2",{id:"\u5728-vm-\u5185\u4f7f\u7528\u76f4\u901a\u7684-pci-\u8bbe\u5907"},"\u5728 VM \u5185\u4f7f\u7528\u76f4\u901a\u7684 PCI \u8bbe\u5907"),(0,r.kt)("p",null,"\u542f\u52a8 VM \u5e76\u5728 VM \u4e2d\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"lspci"),"\uff0c\u5373\u4f7f VM \u4e2d\u7684 PCI \u5730\u5740\u4e0d\u4e00\u5b9a\u4e0e\u4e3b\u673a\u4e2d\u7684 PCI \u5730\u5740\u5339\u914d\uff0c\u9644\u52a0\u7684 PCI \u8bbe\u5907\u4e5f\u5c06\u663e\u793a\u5728\u8fd9\u91cc\u3002"),(0,r.kt)("h2",{id:"\u5728-vm-\u5185\u4e3a-pci-\u8bbe\u5907\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f"},"\u5728 VM \u5185\u4e3a PCI \u8bbe\u5907\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6d89\u53ca\u7684\u64cd\u4f5c\u4e0e\u5728\u4e3b\u673a\u4e2d\u5b89\u88c5\u9a71\u52a8\u7a0b\u5e8f\u4e00\u6837\u3002PCI \u900f\u4f20\u529f\u80fd\u5c06\u4e3b\u673a\u8bbe\u5907\u7ed1\u5b9a\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"vfio-pci")," \u9a71\u52a8\u7a0b\u5e8f\uff0c\u8ba9 VM \u80fd\u591f\u4f7f\u7528\u81ea\u5df1\u7684\u9a71\u52a8\u7a0b\u5e8f\u3002\u4f60\u53ef\u4ee5\u67e5\u770b\u5b89\u88c5\u5728 VM \u4e2d\u7684 NVIDIA \u9a71\u52a8\u7a0b\u5e8f\u7684",(0,r.kt)("a",{parentName:"p",href:"https://tobilehman.com/posts/suse-harvester-pci/#toc"},"\u5c4f\u5e55\u622a\u56fe"),"\uff0c\u5176\u4e2d\u5305\u62ec\u8bc1\u660e\u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u7684 CUDA \u793a\u4f8b\u3002"))}d.isMDXComponent=!0},19168:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/advanced-pcidevices-index-10becdf0d781a4e708413d422356740e.png"},67923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable-pcidevices-done-6abc17f90036b1314c0085cd7ebe4808.png"},50972:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable-pcidevices-inprogress-c687c20689e9d90b585c892b4ab731c2.png"},88566:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/search-pcidevices-e72c0e5794891383d5de58edea8f58b0.png"},92783:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-pcidevices-9f4f0947bfb5f60b38f542f98f08575b.png"},38397:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vm-pcidevices-attach-8909167894055bfbd363b32fcad812e1.png"},65646:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vm-pcidevices-edit-config-fce9da60aa378d6213ba7a8352acfc16.png"},80759:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/EnableAddon-2d1d07ec9a24c2f478806943fb79214b.png"}}]);