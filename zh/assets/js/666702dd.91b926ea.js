"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,sidebar_label:"Installation",title:"Installation"},i=void 0,l={unversionedId:"troubleshooting/installation",id:"version-v0.3/troubleshooting/installation",title:"Installation",description:"The following sections contain tips to troubleshoot or get assistance with failed installations.",source:"@site/versioned_docs/version-v0.3/troubleshooting/installation.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/installation",permalink:"/zh/v0.3/troubleshooting/installation",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/troubleshooting/installation.md",tags:[],version:"v0.3",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Installation",title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Harvester Terraform Provider",permalink:"/zh/v0.3/terraform/"},next:{title:"Harvester",permalink:"/zh/v0.3/troubleshooting/harvester"}},s={},u=[{value:"Logging into the Harvester Installer (a live OS)",id:"logging-into-the-harvester-installer-a-live-os",level:2},{value:"Meeting hardware requirements",id:"meeting-hardware-requirements",level:2},{value:"Receiving the message <code>&quot;Loading images. This may take a few minutes...&quot;</code>",id:"receiving-the-message-loading-images-this-may-take-a-few-minutes",level:2},{value:"Collecting Information",id:"collecting-information",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following sections contain tips to troubleshoot or get assistance with failed installations."),(0,a.kt)("h2",{id:"logging-into-the-harvester-installer-a-live-os"},"Logging into the Harvester Installer (a live OS)"),(0,a.kt)("p",null,"Users can press the key combination ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL + ALT + F2")," to switch to another TTY and log in with the following credentials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User: ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher")),(0,a.kt)("li",{parentName:"ul"},"Password: ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher"))),(0,a.kt)("h2",{id:"meeting-hardware-requirements"},"Meeting hardware requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check that your hardware meets the ",(0,a.kt)("a",{parentName:"li",href:"/zh/v0.3/#hardware-requirements"},"minimum requirements")," to complete installation.")),(0,a.kt)("h2",{id:"receiving-the-message-loading-images-this-may-take-a-few-minutes"},"Receiving the message ",(0,a.kt)("inlineCode",{parentName:"h2"},'"Loading images. This may take a few minutes..."')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Because the system doesn\'t have a default route, your installer may become "stuck" in this state. You can check your route status by executing the following command:')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ ip route\ndefault via 10.10.0.10 dev harvester-mgmt proto dhcp        <-- Does a default route exist?\n10.10.0.0/24 dev harvester-mgmt proto kernel scope link src 10.10.0.15\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check that your DHCP server offers a default route option. Attaching content from ",(0,a.kt)("inlineCode",{parentName:"li"},"/run/cos/target/rke2.log")," is helpful too.")),(0,a.kt)("h2",{id:"collecting-information"},"Collecting Information"),(0,a.kt)("p",null,"Please include the following information in a bug report when reporting a failed installation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A failed installation screenshot.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Content of these files:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"/var/log/console.log\n/run/cos/target/rke2.log\n/tmp/harvester.*\n/tmp/cos.*\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Output of these commands:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"blkid\ndmesg\n")))))}p.isMDXComponent=!0}}]);