"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},i=void 0,s={unversionedId:"troubleshooting/harvester",id:"troubleshooting/harvester",title:"Harvester",description:"Fail to Deploy a Multi-node Cluster Due to Incorrect HTTP Proxy Setting",source:"@site/docs/troubleshooting/harvester.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/harvester",permalink:"/v1.1/troubleshooting/harvester",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/troubleshooting/harvester.md",tags:[],version:"current",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"Nov 25, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/v1.1/troubleshooting/installation"},next:{title:"Operating System",permalink:"/v1.1/troubleshooting/os"}},l={},p=[{value:"Fail to Deploy a Multi-node Cluster Due to Incorrect HTTP Proxy Setting",id:"fail-to-deploy-a-multi-node-cluster-due-to-incorrect-http-proxy-setting",level:2},{value:"ISO Installation Without a Harvester Configuration File",id:"iso-installation-without-a-harvester-configuration-file",level:3},{value:"Configure HTTP Proxy During Harvester Installation",id:"configure-http-proxy-during-harvester-installation",level:4},{value:"Configure HTTP Proxy After First Node is Ready",id:"configure-http-proxy-after-first-node-is-ready",level:4},{value:"One Node Becomes Unavailable",id:"one-node-becomes-unavailable",level:4},{value:"Solution",id:"solution",level:4},{value:"ISO Installation With a Harvester Configuration File",id:"iso-installation-with-a-harvester-configuration-file",level:3},{value:"PXE Boot Installation",id:"pxe-boot-installation",level:3},{value:"Generate a Support Bundle",id:"generate-a-support-bundle",level:2},{value:"Access Embedded Rancher",id:"access-embedded-rancher",level:2},{value:"Access Embedded Longhorn",id:"access-embedded-longhorn",level:2},{value:"I can&#39;t access Harvester after I changed SSL/TLS enabled protocols and ciphers",id:"i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fail-to-deploy-a-multi-node-cluster-due-to-incorrect-http-proxy-setting"},"Fail to Deploy a Multi-node Cluster Due to Incorrect HTTP Proxy Setting"),(0,a.kt)("h3",{id:"iso-installation-without-a-harvester-configuration-file"},"ISO Installation Without a Harvester Configuration File"),(0,a.kt)("h4",{id:"configure-http-proxy-during-harvester-installation"},"Configure HTTP Proxy During Harvester Installation"),(0,a.kt)("p",null,"In some environments, you configure ",(0,a.kt)("a",{parentName:"p",href:"../airgap/#configure-an-http-proxy-during-installation"},"http-proxy")," of ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#osenvironment"},"OS Environment")," during Harvester installation."),(0,a.kt)("h4",{id:"configure-http-proxy-after-first-node-is-ready"},"Configure HTTP Proxy After First Node is Ready"),(0,a.kt)("p",null,"After the first node is installed successfully, you login into the ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester GUI")," to configure ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/airgap#configure-an-http-proxy-in-harvester-settings"},"http-proxy")," of ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#system_settings"},"Harvester System Settings"),"."),(0,a.kt)("p",null,"Then you continue to add more nodes to the cluster."),(0,a.kt)("h4",{id:"one-node-becomes-unavailable"},"One Node Becomes Unavailable"),(0,a.kt)("p",null,"The issue you may encounter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The first node is installed successfully.\n\nThe second node is installed successfully.\n\nThe third node is installed successfully.\n\nThen the second node changes to Unavialable state and cannot recover automatically.\n")),(0,a.kt)("h4",{id:"solution"},"Solution"),(0,a.kt)("p",null,"When the nodes in the cluster do not use the HTTP Proxy to communicate with each other, after the first node is installed successfully, you need to configure ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/airgap#configure-an-http-proxy-in-harvester-settings"},"http-proxy.noProxy")," against the CIDR used by those nodes."),(0,a.kt)("p",null,"For example, your cluster assigns IPs from CIDR ",(0,a.kt)("inlineCode",{parentName:"p"},"172.26.50.128/27")," to nodes via DHCP/static setting, please add this CIDR to ",(0,a.kt)("inlineCode",{parentName:"p"},"noProxy"),"."),(0,a.kt)("p",null,"After setting this, you can continue to add new nodes to the cluster."),(0,a.kt)("p",null,"For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3091"},"Harvester issue 3091"),"."),(0,a.kt)("h3",{id:"iso-installation-with-a-harvester-configuration-file"},"ISO Installation With a Harvester Configuration File"),(0,a.kt)("p",null,"When a Harvester configuration file is used in ISO installation, please configure proper ",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy")," in ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#system_settings"},"Harvester System Settings"),"."),(0,a.kt)("h3",{id:"pxe-boot-installation"},"PXE Boot Installation"),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/install/pxe-boot-install"},"PXE Boot Installation")," is adopted, please configure proper ",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy")," in ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#osenvironment"},"OS Environment")," and ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#system_settings"},"Harvester System Settings"),"."),(0,a.kt)("h2",{id:"generate-a-support-bundle"},"Generate a Support Bundle"),(0,a.kt)("p",null,"Users can generate a support bundle in the Harvester GUI with the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Support")," link at the bottom-left of Harvester Web UI.\n",(0,a.kt)("img",{src:n(79184).Z,width:"955",height:"902"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Support Bundle")," button.\n",(0,a.kt)("img",{src:n(55599).Z,width:"953",height:"286"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enter a useful description for the support bundle and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," to generate and download a support bundle.\n",(0,a.kt)("img",{src:n(78231).Z,width:"941",height:"436"})))),(0,a.kt)("h2",{id:"access-embedded-rancher"},"Access Embedded Rancher"),(0,a.kt)("p",null,"You can access the embedded Rancher dashboard via ",(0,a.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/explorer"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We only support to use the embedded Rancher dashboard for debugging and validation purpose.\nFor Rancher's multi-cluster and multi-tenant integration, please refer to the docs ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/rancher/rancher-integration"},"here"),".")),(0,a.kt)("h2",{id:"access-embedded-longhorn"},"Access Embedded Longhorn"),(0,a.kt)("p",null,"You can access the embedded Longhorn UI via ",(0,a.kt)("inlineCode",{parentName:"p"},"https://{{HARVESTER_IP}}/dashboard/c/local/longhorn"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We only support to use the embedded Longhorn UI for debugging and validation purpose .")),(0,a.kt)("h2",{id:"i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers"},"I can't access Harvester after I changed SSL/TLS enabled protocols and ciphers"),(0,a.kt)("p",null,"If you changed\n",(0,a.kt)("a",{parentName:"p",href:"/v1.1/advanced/settings#ssl-parameters"},"SSL/TLS enabled protocols and ciphers settings"),"\nand you no longer have access to Harvester GUI and API,\nit's highly possible that NGINX Ingress Controller has stopped working due to the misconfigured SSL/TLS protocols and ciphers.\nFollow these steps to reset the setting:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Following ",(0,a.kt)("a",{parentName:"li",href:"/v1.1/faq"},"FAQ")," to SSH into Harvester node and switch to ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," user.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo -s\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Editing setting ",(0,a.kt)("inlineCode",{parentName:"li"},"ssl-parameters")," manually using ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# kubectl edit settings ssl-parameters\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Deleting the line ",(0,a.kt)("inlineCode",{parentName:"li"},"value: ...")," so that NGINX Ingress Controller\nwill use the default protocols and ciphers.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: harvesterhci.io/v1beta1\ndefault: \'{}\'\nkind: Setting\nmetadata:\n  name: ssl-parameters\n...\nvalue: \'{"protocols":"TLS99","ciphers":"WRONG_CIPHER"}\' # <- Delete this line\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Save the change and you should see the following response after exit from the editor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"setting.harvesterhci.io/ssl-parameters edited\n")),(0,a.kt)("p",null,"You can further check the logs of Pod ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx-controller")," to see if NGINX Ingress Controller is working correctly."))}c.isMDXComponent=!0},55599:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/harvester-sb-support-button-481867fa7c7e1284b77c3a328cdc06ba.png"},79184:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/harvester-sb-support-link-37d8e3a1cf4a0db290c41adeea228f3a.png"},78231:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/harvester-sb-support-modal-2926ec28f3190a25f618cedfe7975687.png"}}]);