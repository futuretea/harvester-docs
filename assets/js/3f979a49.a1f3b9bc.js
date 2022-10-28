"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var i=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,s=function(e,t){if(null==e)return{};var a,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(a),u=s,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||n;return a?i.createElement(g,o(o({ref:t},c),{},{components:a})):i.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,o=new Array(n);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var d=2;d<n;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93571:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var i=a(87462),s=(a(67294),a(3905));const n={sidebar_position:2,sidebar_label:"Storage Class",title:""},o="Storage Class",r={unversionedId:"advanced/storageclass",id:"advanced/storageclass",title:"",description:"A StorageClass allows administrators to describe the classes of storage they offer. Different Longhorn StorageClasses might map to replica policies, or to node schedule policies, or disk schedule policies determined by the cluster administrators. This concept is sometimes called profiles in other storage systems.",source:"@site/docs/advanced/storageclass.md",sourceDirName:"advanced",slug:"/advanced/storageclass",permalink:"/v1.1/advanced/storageclass",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/storageclass.md",tags:[],version:"current",lastUpdatedAt:1666776800,formattedLastUpdatedAt:"Oct 26, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Storage Class",title:""},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/v1.1/advanced/settings"},next:{title:"Storage Network",permalink:"/v1.1/advanced/storagenetwork"}},l={},d=[{value:"Creating a Storage Class",id:"creating-a-storage-class",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Parameters Tab",id:"parameters-tab",level:3},{value:"Number of Replicas",id:"number-of-replicas",level:4},{value:"Stale Replica Timeout",id:"stale-replica-timeout",level:4},{value:"Node Selector (Optional)",id:"node-selector-optional",level:4},{value:"Disk Selector (Optional)",id:"disk-selector-optional",level:4},{value:"Migratable",id:"migratable",level:4},{value:"Customize Tab",id:"customize-tab",level:3},{value:"Reclaim Policy",id:"reclaim-policy",level:4},{value:"Allow Volume Expansion",id:"allow-volume-expansion",level:4},{value:"Volume Binding Mode",id:"volume-binding-mode",level:4},{value:"Appendix - Use Case",id:"appendix---use-case",level:2},{value:"HDD Scenario",id:"hdd-scenario",level:3},{value:"Recommended Practice",id:"recommended-practice",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"storage-class"},"Storage Class"),(0,s.kt)("p",null,"A StorageClass allows administrators to describe the ",(0,s.kt)("strong",{parentName:"p"},"classes")," of storage they offer. Different Longhorn StorageClasses might map to replica policies, or to node schedule policies, or disk schedule policies determined by the cluster administrators. This concept is sometimes called ",(0,s.kt)("strong",{parentName:"p"},"profiles")," in other storage systems."),(0,s.kt)("h2",{id:"creating-a-storage-class"},"Creating a Storage Class"),(0,s.kt)("p",null,"You can create one or more StorageClasses from the ",(0,s.kt)("strong",{parentName:"p"},"Advanced > Storage Classes")," page."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(34132).Z,width:"1783",height:"771"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"After a StorageClass is created, nothing can be changed except ",(0,s.kt)("inlineCode",{parentName:"p"},"Description"),".")),(0,s.kt)("h3",{id:"header-section"},"Header Section"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Name"),": name of the StorageClass"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Description")," (optional): description of the StorageClass")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(54818).Z,width:"1783",height:"771"})),(0,s.kt)("h3",{id:"parameters-tab"},"Parameters Tab"),(0,s.kt)("h4",{id:"number-of-replicas"},"Number of Replicas"),(0,s.kt)("p",null,"The number of replicas created for each volume in Longhorn. Defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(7662).Z,width:"1783",height:"771"})),(0,s.kt)("h4",{id:"stale-replica-timeout"},"Stale Replica Timeout"),(0,s.kt)("p",null,"Determines when Longhorn would clean up an error replica after the replica's status is ERROR. The unit is minute. Defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},"30")," minutes in Harvester."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(38310).Z,width:"1783",height:"771"})),(0,s.kt)("h4",{id:"node-selector-optional"},"Node Selector (Optional)"),(0,s.kt)("p",null,"Select the node tags to be matched in the volume scheduling stage. You can add node tags by going to ",(0,s.kt)("strong",{parentName:"p"},"Host > Edit Config"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(54634).Z,width:"1783",height:"771"})),(0,s.kt)("h4",{id:"disk-selector-optional"},"Disk Selector (Optional)"),(0,s.kt)("p",null,"Select the disk tags to be matched in the volume scheduling stage. You can add disk tags by going to ",(0,s.kt)("strong",{parentName:"p"},"Host > Edit Config"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(21495).Z,width:"1783",height:"771"})),(0,s.kt)("h4",{id:"migratable"},"Migratable"),(0,s.kt)("p",null,"Whether ",(0,s.kt)("a",{parentName:"p",href:"/v1.1/vm/live-migration"},"Live Migration")," is supported. Defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},"Yes"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(70850).Z,width:"1783",height:"771"})),(0,s.kt)("h3",{id:"customize-tab"},"Customize Tab"),(0,s.kt)("h4",{id:"reclaim-policy"},"Reclaim Policy"),(0,s.kt)("p",null,"Volumes dynamically created by a StorageClass will have the reclaim policy specified in the ",(0,s.kt)("inlineCode",{parentName:"p"},"reclaimPolicy")," field of the class. The ",(0,s.kt)("inlineCode",{parentName:"p"},"Delete")," mode is used by default."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"Delete"),": Deletes volumes and the underlying devices when the volume claim is deleted."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"Retain"),": Retains the volume for manual cleanup.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(58937).Z,width:"1791",height:"770"})),(0,s.kt)("h4",{id:"allow-volume-expansion"},"Allow Volume Expansion"),(0,s.kt)("p",null,"Volumes can be configured to be expandable. This feature is ",(0,s.kt)("inlineCode",{parentName:"p"},"Enabled")," by default, which allows users to resize the volume by editing the corresponding PVC object."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(37821).Z,width:"1791",height:"770"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You can only use the volume expansion feature to grow a Volume, not to shrink it.")),(0,s.kt)("h4",{id:"volume-binding-mode"},"Volume Binding Mode"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"volumeBindingMode")," field controls when volume binding and dynamic provisioning should occur. The ",(0,s.kt)("inlineCode",{parentName:"p"},"Immediate")," mode is used by default."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"Immediate"),": Binds and provisions a persistent volume once the PersistentVolumeClaim is created."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"WaitForFirstConsumer"),": Binds and provisions a persistent volume once a VM using the PersistentVolumeClaim is created.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(86462).Z,width:"1791",height:"770"})),(0,s.kt)("h2",{id:"appendix---use-case"},"Appendix - Use Case"),(0,s.kt)("h3",{id:"hdd-scenario"},"HDD Scenario"),(0,s.kt)("p",null,"With the introduction of ",(0,s.kt)("em",{parentName:"p"},"StorageClass"),", users can now use ",(0,s.kt)("strong",{parentName:"p"},"HDDs")," for tiered or archived cold storage."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"HDD is not recommended for guest RKE2 clusters or VMs with good performance disk requirements.")),(0,s.kt)("h4",{id:"recommended-practice"},"Recommended Practice"),(0,s.kt)("p",null,"First, add your HDD on the ",(0,s.kt)("inlineCode",{parentName:"p"},"Host")," page and specify the disk tags as needed, such as",(0,s.kt)("inlineCode",{parentName:"p"},"HDD")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"ColdStorage"),". For more information on how to add extra disks and disk tags, see ",(0,s.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/host/#multi-disk-management"},"Multi-disk Management")," for details."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(29179).Z,width:"1785",height:"772"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(57559).Z,width:"1781",height:"678"})),(0,s.kt)("p",null,"Then, create a new ",(0,s.kt)("inlineCode",{parentName:"p"},"StorageClass")," for the HDD (use the above disk tags). For hard drives with large capacity but slow performance, the number of replicas can be reduced to improve performance. For details, see ",(0,s.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/advanced/storageclass"},"storageclass")," for details."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(86959).Z,width:"1785",height:"767"})),(0,s.kt)("p",null,"You can now create a volume using the above ",(0,s.kt)("inlineCode",{parentName:"p"},"StorageClass")," with HDDs mostly for cold storage or archiving purpose."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9334).Z,width:"1789",height:"767"})))}p.isMDXComponent=!0},29179:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add_hdd_on_host_page-3ccc34f2a8bc65e511cc35776100e80d.png"},57559:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add_tags-eaf081abc1b165f12fe9ae248cdff972.png"},86959:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_hdd_storageclass-8e158b236ade10694195738114374437.png"},21495:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_disk_selector-c60a5061987f68f18252a819732640e6.png"},34132:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_entry-e4e255f7a07230ce65351e3966c056ff.png"},54818:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_header_sections-9d615b806de3fb6314419c0e76e30663.png"},70850:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_migratable-dde41ae11a1e2dbf156b91b4cc488a7a.png"},54634:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_node_selector-e055498ee31e10df985dd0452a825c21.png"},7662:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_replicas-720c4cf37f05197846b7d021a3d3fd7c.png"},38310:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_storageclasses_stale_timeout-5602affc442bba6fe5f933a309c3847f.png"},9334:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create_volume_hdd-91b7f44277ede22bd6bd230b00697aa4.png"},37821:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/customize_tab_allow_vol_expansion-a76850a093cf3669eb31341081d8b51c.png"},58937:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/customize_tab_reclaim_policy-5440e3059223d00fcf3fe0398afbaec0.png"},86462:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/customize_tab_vol_binding_mode-54f01765773587a542eedc6a2afe43fa.png"}}]);