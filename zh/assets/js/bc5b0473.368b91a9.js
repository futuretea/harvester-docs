"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:4,sidebar_label:"\u8bbf\u95ee\u865a\u62df\u673a",title:"\u8bbf\u95ee\u865a\u62df\u673a",keywords:["Harvester","harvester","Rancher","rancher","\u8bbf\u95ee\u865a\u62df\u673a"],Description:"\u865a\u62df\u673a\u8fd0\u884c\u540e\uff0c\u4f60\u53ef\u4ee5\u5728 Harvester UI \u901a\u8fc7 VNC \u5ba2\u6237\u7aef\u6216\u4e32\u884c\u63a7\u5236\u53f0\u8bbf\u95ee\u865a\u62df\u673a\u3002"},s=void 0,o={unversionedId:"vm/access-to-the-vm",id:"vm/access-to-the-vm",title:"\u8bbf\u95ee\u865a\u62df\u673a",description:"\u865a\u62df\u673a\u8fd0\u884c\u540e\uff0c\u4f60\u53ef\u4ee5\u5728 Harvester UI \u901a\u8fc7 VNC \u5ba2\u6237\u7aef\u6216\u4e32\u884c\u63a7\u5236\u53f0\u8bbf\u95ee\u865a\u62df\u673a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/vm/access-to-the-vm.md",sourceDirName:"vm",slug:"/vm/access-to-the-vm",permalink:"/zh/v1.1/vm/access-to-the-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/access-to-the-vm.md",tags:[],version:"current",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"\u8bbf\u95ee\u865a\u62df\u673a",title:"\u8bbf\u95ee\u865a\u62df\u673a",keywords:["Harvester","harvester","Rancher","rancher","\u8bbf\u95ee\u865a\u62df\u673a"],Description:"\u865a\u62df\u673a\u8fd0\u884c\u540e\uff0c\u4f60\u53ef\u4ee5\u5728 Harvester UI \u901a\u8fc7 VNC \u5ba2\u6237\u7aef\u6216\u4e32\u884c\u63a7\u5236\u53f0\u8bbf\u95ee\u865a\u62df\u673a\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u8f91\u865a\u62df\u673a",permalink:"/zh/v1.1/vm/edit-vm"},next:{title:"\u865a\u62df\u673a\u5907\u4efd\u3001\u5feb\u7167\u548c\u8fd8\u539f",permalink:"/zh/v1.1/vm/backup-restore"}},l={},c=[{value:"\u4f7f\u7528 Harvester UI \u8bbf\u95ee",id:"\u4f7f\u7528-harvester-ui-\u8bbf\u95ee",level:2},{value:"SSH \u8bbf\u95ee",id:"ssh-\u8bbf\u95ee",level:2},{value:"\u901a\u8fc7 cloud-init \u8fdb\u884c\u9759\u6001 SSH \u5bc6\u94a5\u6ce8\u5165",id:"\u901a\u8fc7-cloud-init-\u8fdb\u884c\u9759\u6001-ssh-\u5bc6\u94a5\u6ce8\u5165",level:3},{value:"SSH \u5bc6\u94a5 cloud-init \u914d\u7f6e\u793a\u4f8b\uff1a",id:"ssh-\u5bc6\u94a5-cloud-init-\u914d\u7f6e\u793a\u4f8b",level:4},{value:"\u901a\u8fc7 QEMU Guest Agent \u8fdb\u884c\u52a8\u6001 SSH \u5bc6\u94a5\u6ce8\u5165",id:"\u901a\u8fc7-qemu-guest-agent-\u8fdb\u884c\u52a8\u6001-ssh-\u5bc6\u94a5\u6ce8\u5165",level:3},{value:"\u4f7f\u7528 SSH \u5ba2\u6237\u7aef\u8bbf\u95ee",id:"\u4f7f\u7528-ssh-\u5ba2\u6237\u7aef\u8bbf\u95ee",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u865a\u62df\u673a\u8fd0\u884c\u540e\uff0c\u4f60\u53ef\u4ee5\u5728 Harvester UI \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"VNC")," \u5ba2\u6237\u7aef\u6216\u4e32\u884c\u63a7\u5236\u53f0\u8bbf\u95ee\u865a\u62df\u673a\u3002"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 VLAN \u7f51\u7edc\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4ece\u672c\u5730\u7535\u8111\u8fdc\u7a0b SSH \u5230\u5ba2\u6237\u7aef\u8fdb\u884c\u8fde\u63a5\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-harvester-ui-\u8bbf\u95ee"},"\u4f7f\u7528 Harvester UI \u8bbf\u95ee"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 VNC \u6216\u4e32\u884c\u63a7\u5236\u53f0\u76f4\u63a5\u4ece UI \u8bbf\u95ee\u865a\u62df\u673a\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u865a\u62df\u673a\u4e0a\u672a\u542f\u7528 VGA \u663e\u793a\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ubuntu-Minimal-Cloud")," \u955c\u50cf\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4e32\u884c\u63a7\u5236\u53f0\u8bbf\u95ee\u865a\u62df\u673a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(47957).Z,width:"4250",height:"1594"})),(0,a.kt)("h2",{id:"ssh-\u8bbf\u95ee"},"SSH \u8bbf\u95ee"),(0,a.kt)("p",null,"Harvester \u63d0\u4f9b\u4e86\u4e24\u79cd\u5c06 SSH \u516c\u94a5\u6ce8\u5165\u865a\u62df\u673a\u7684\u65b9\u6cd5\u3002\u901a\u5e38\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u5206\u4e3a\u4e24\u7c7b\u3002\u7b2c\u4e00\u7c7b\u662f",(0,a.kt)("a",{parentName:"p",href:"#%E9%80%9A%E8%BF%87-cloud-init-%E8%BF%9B%E8%A1%8C%E9%9D%99%E6%80%81-ssh-%E5%AF%86%E9%92%A5%E6%B3%A8%E5%85%A5"},"\u9759\u6001\u5bc6\u94a5\u6ce8\u5165"),"\uff0c\u5373\u5728\u865a\u62df\u673a\u9996\u6b21\u5f00\u673a\u65f6\u5c06\u5bc6\u94a5\u653e\u5728 cloud-init \u811a\u672c\u4e2d\u3002\u7b2c\u4e8c\u7c7b\u662f",(0,a.kt)("a",{parentName:"p",href:"#%E9%80%9A%E8%BF%87-qemu-guest-agent-%E8%BF%9B%E8%A1%8C%E5%8A%A8%E6%80%81-ssh-%E5%AF%86%E9%92%A5%E6%B3%A8%E5%85%A5"},"\u52a8\u6001\u6ce8\u5165"),"\uff0c\u5373\u5141\u8bb8\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u66f4\u65b0\u5bc6\u94a5\u6216\u57fa\u672c\u8ba4\u8bc1\u3002"),(0,a.kt)("h3",{id:"\u901a\u8fc7-cloud-init-\u8fdb\u884c\u9759\u6001-ssh-\u5bc6\u94a5\u6ce8\u5165"},"\u901a\u8fc7 cloud-init \u8fdb\u884c\u9759\u6001 SSH \u5bc6\u94a5\u6ce8\u5165"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u521b\u5efa\u671f\u95f4\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Basics")," \u9009\u9879\u5361\u4e0a\u4e3a\u865a\u62df\u673a\u63d0\u4f9b SSH \u5bc6\u94a5\u3002\u6b64\u5916\uff0c\u4f60\u53ef\u4ee5\u5c06\u516c\u5171 SSH \u5bc6\u94a5\u653e\u5728 cloud-init \u811a\u672c\u4e2d\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58005).Z,width:"2207",height:"912"})),(0,a.kt)("h4",{id:"ssh-\u5bc6\u94a5-cloud-init-\u914d\u7f6e\u793a\u4f8b"},"SSH \u5bc6\u94a5 cloud-init \u914d\u7f6e\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\nssh_authorized_keys:\n  - >-\n    ssh-rsa # \u66ff\u6362\u4e3a\u4f60\u7684\u516c\u94a5\n")),(0,a.kt)("h3",{id:"\u901a\u8fc7-qemu-guest-agent-\u8fdb\u884c\u52a8\u6001-ssh-\u5bc6\u94a5\u6ce8\u5165"},"\u901a\u8fc7 QEMU Guest Agent \u8fdb\u884c\u52a8\u6001 SSH \u5bc6\u94a5\u6ce8\u5165"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.0.1 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"Harvester \u652f\u6301\u5728\u8fd0\u884c\u65f6\u901a\u8fc7\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.qemu.org/Features/GuestAgent"},"QEMU GuestAgent")," \u52a8\u6001\u6ce8\u5165\u516c\u5171 SSH \u5bc6\u94a5\u3002\u8fd9\u662f\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"qemuGuestAgent")," \u4f20\u64ad\u65b9\u6cd5\u5b9e\u73b0\u7684\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u65b9\u6cd5\u8981\u6c42\u5728 Guest VM \u4e2d\u5b89\u88c5 QEMU GuestAgent\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"qemuGuestAgent")," \u4f20\u64ad\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"/home/$USER/.ssh/authorized_keys")," \u6587\u4ef6\u5c06\u5f52 GuestAgent \u6240\u6709\u3002\u5728 QEMU GuestAgent \u4e4b\u5916\u5bf9\u8be5\u6587\u4ef6\u6240\u505a\u7684\u66f4\u6539\u5c06\u88ab\u5220\u9664\u3002")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 Harvester \u4eea\u8868\u677f\u6ce8\u5165\u4f60\u7684\u8bbf\u95ee\u51ed\u8bc1\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u865a\u62df\u673a\u5e76\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"\u22ee")," \u6309\u94ae\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Edit Config")," \u6309\u94ae\u5e76\u8f6c\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"Access Credentials")," \u9009\u9879\u5361\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb\u4ee5\u6dfb\u52a0\u57fa\u672c\u8ba4\u8bc1\u51ed\u8bc1\u6216 SSH \u5bc6\u94a5\uff08\u4f8b\u5982\uff0c\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"opensuse")," \u4f5c\u4e3a\u7528\u6237\uff0c\u5982\u679c\u4f60\u7684 Guest \u64cd\u4f5c\u7cfb\u7edf\u662f OpenSUSE\uff0c\u5219\u9009\u62e9\u4f60\u7684 SSH \u5bc6\u94a5\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u786e\u4fdd QEMU GuestAgent \u5df2\u5b89\u88c5\uff0c\u5e76\u4e14\u5728\u6dfb\u52a0\u51ed\u8bc1\u540e\u91cd\u542f VM\u3002")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u4ece UI \u4e2d\u5220\u9664\u51ed\u8bc1\u540e\uff0c\u4f60\u9700\u8981\u8fdb\u5165 VM \u4ee5\u4fbf\u7f16\u8f91\u5bc6\u7801\u6216\u5220\u9664 SSH-Key\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(67488).Z,width:"4250",height:"1576"})),(0,a.kt)("h3",{id:"\u4f7f\u7528-ssh-\u5ba2\u6237\u7aef\u8bbf\u95ee"},"\u4f7f\u7528 SSH \u5ba2\u6237\u7aef\u8bbf\u95ee"),(0,a.kt)("p",null,"\u865a\u62df\u673a\u8fd0\u884c\u540e\uff0c\u4f60\u53ef\u4ee5\u5728\u7ec8\u7aef\u4eff\u771f\u5ba2\u6237\u7aef\uff08\u4f8b\u5982 PuTTY\uff09\u4e2d\u8f93\u5165\u865a\u62df\u673a\u7684 IP \u5730\u5740\u3002\u4f60\u8fd8\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u76f4\u63a5\u4ece\u8ba1\u7b97\u673a\u7684 SSH \u5ba2\u6237\u7aef\u8bbf\u95ee\u865a\u62df\u673a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," ssh -i ~/.ssh/your-ssh-key user@<ip-address-or-hostname>\n")))}u.isMDXComponent=!0},47957:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/access-to-vm-f791c865d36729ac644da4e124878e5f.png"},67488:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vm-add-access-credentails-cb00d2dcde86ab3864d42c300a19caf6.png"},58005:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vm-ssh-keys-566e05b859f07771f5f7268b4ce0c05e.png"}}]);