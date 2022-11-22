"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2,sidebar_label:"Harvester",title:""},l=void 0,i={unversionedId:"troubleshooting/harvester",id:"troubleshooting/harvester",title:"",description:"\u751f\u6210\u652f\u6301\u5305",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/harvester.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/harvester",permalink:"/zh/v1.1/troubleshooting/harvester",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/troubleshooting/harvester.md",tags:[],version:"current",lastUpdatedAt:1668565576,formattedLastUpdatedAt:"2022\u5e7411\u670816\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Harvester",title:""},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/zh/v1.1/troubleshooting/installation"},next:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/zh/v1.1/troubleshooting/os"}},s={},p=[{value:"\u751f\u6210\u652f\u6301\u5305",id:"\u751f\u6210\u652f\u6301\u5305",level:2},{value:"\u8bbf\u95ee\u5185\u5d4c\u7684 Rancher",id:"\u8bbf\u95ee\u5185\u5d4c\u7684-rancher",level:2},{value:"\u8bbf\u95ee\u5185\u5d4c\u7684 Longhorn",id:"\u8bbf\u95ee\u5185\u5d4c\u7684-longhorn",level:2},{value:"\u4fee\u6539 SSL/TLS \u542f\u7528\u7684\u534f\u8bae\u548c\u5bc6\u7801\u540e\u65e0\u6cd5\u8bbf\u95ee Harvester",id:"\u4fee\u6539-ssltls-\u542f\u7528\u7684\u534f\u8bae\u548c\u5bc6\u7801\u540e\u65e0\u6cd5\u8bbf\u95ee-harvester",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u751f\u6210\u652f\u6301\u5305"},"\u751f\u6210\u652f\u6301\u5305"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5728 Harvester GUI \u4e2d\u751f\u6210 Support Bundle\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Harvester \u7f51\u9875 UI \u7684\u5de6\u4e0b\u89d2\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Support"),"\uff1a\n",(0,a.kt)("img",{src:r(79184).Z,width:"955",height:"902"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Support Bundle")," \u6309\u94ae\uff1a\n",(0,a.kt)("img",{src:r(55599).Z,width:"953",height:"286"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8f93\u5165\u652f\u6301\u5305\u7684\u63cf\u8ff0\u5e76\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," \u4ee5\u751f\u6210\u548c\u4e0b\u8f7d Support Bundle\uff1a\n",(0,a.kt)("img",{src:r(78231).Z,width:"941",height:"436"})))),(0,a.kt)("h2",{id:"\u8bbf\u95ee\u5185\u5d4c\u7684-rancher"},"\u8bbf\u95ee\u5185\u5d4c\u7684 Rancher"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/explorer")," \u8bbf\u95ee\u5185\u5d4c\u7684 Rancher Dashboard\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4ec5\u652f\u6301\u4f7f\u7528\u5185\u5d4c Rancher Dashboard \u6765\u8fdb\u884c\u8c03\u8bd5\u548c\u9a8c\u8bc1\u3002\n\u5bf9\u4e8e Rancher \u7684\u591a\u96c6\u7fa4\u548c\u591a\u79df\u6237\u96c6\u6210\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.1/rancher/rancher-integration"},"\u6587\u6863"),"\u3002")),(0,a.kt)("h2",{id:"\u8bbf\u95ee\u5185\u5d4c\u7684-longhorn"},"\u8bbf\u95ee\u5185\u5d4c\u7684 Longhorn"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/longhorn")," \u8bbf\u95ee\u5185\u5d4c\u7684 Longhorn UI\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4ec5\u652f\u6301\u4f7f\u7528\u5185\u5d4c Longhorn UI \u6765\u8fdb\u884c\u8c03\u8bd5\u548c\u9a8c\u8bc1\u3002")),(0,a.kt)("h2",{id:"\u4fee\u6539-ssltls-\u542f\u7528\u7684\u534f\u8bae\u548c\u5bc6\u7801\u540e\u65e0\u6cd5\u8bbf\u95ee-harvester"},"\u4fee\u6539 SSL/TLS \u542f\u7528\u7684\u534f\u8bae\u548c\u5bc6\u7801\u540e\u65e0\u6cd5\u8bbf\u95ee Harvester"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4fee\u6539\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.1/advanced/settings#ssl-%E5%8F%82%E6%95%B0"},"SSL/TLS \u542f\u7528\u7684\u534f\u8bae\u548c\u5bc6\u7801\u8bbe\u7f6e"),"\u540e\u65e0\u6cd5\u8bbf\u95ee Harvester GUI \u548c API\uff0c\u5f88\u6709\u53ef\u80fd\u662f\u7531\u4e8e\u9519\u8bef\u914d\u7f6e\u7684 SSL/TLS \u534f\u8bae\u548c\u5bc6\u7801\u5bfc\u81f4 NGINX Ingress Controller \u505c\u6b62\u8fd0\u884c\u3002\n\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u6765\u8fdb\u884c\u91cd\u7f6e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6309\u7167",(0,a.kt)("a",{parentName:"li",href:"/zh/v1.1/faq"},"\u5e38\u89c1\u95ee\u9898"),"\u7684\u63cf\u8ff0 SSH \u5230 Harvester \u8282\u70b9\uff0c\u5e76\u5207\u6362\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," \u7528\u6237\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo -s\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," \u624b\u52a8\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"li"},"ssl-parameters"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# kubectl edit settings ssl-parameters\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664 ",(0,a.kt)("inlineCode",{parentName:"li"},"value: ...")," \u884c\uff0c\u7136\u540e NGINX Ingress Controller \u5c31\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u534f\u8bae\u548c\u5bc6\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: harvesterhci.io/v1beta1\ndefault: \'{}\'\nkind: Setting\nmetadata:\n  name: ssl-parameters\n...\nvalue: \'{"protocols":"TLS99","ciphers":"WRONG_CIPHER"}\' # <- Delete this line\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u4fdd\u5b58\u4fee\u6539\u3002\u9000\u51fa\u7f16\u8f91\u5668\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4ee5\u4e0b\u54cd\u5e94\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"setting.harvesterhci.io/ssl-parameters edited\n")),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u8fdb\u4e00\u6b65\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx-controller")," Pod \u7684\u65e5\u5fd7\uff0c\u6765\u786e\u8ba4 NGINX Ingress Controller \u662f\u5426\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"))}u.isMDXComponent=!0},55599:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-button-481867fa7c7e1284b77c3a328cdc06ba.png"},79184:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-link-37d8e3a1cf4a0db290c41adeea228f3a.png"},78231:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-modal-2926ec28f3190a25f618cedfe7975687.png"}}]);