"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3379],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>v});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),o=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},l=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=o(i),v=a,u=p["".concat(d,".").concat(v)]||p[v]||h[v]||s;return i?n.createElement(u,r(r({ref:t},l),{},{components:i})):n.createElement(u,r({ref:t},l))}));function v(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var o=2;o<s;o++)r[o]=i[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},19954:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=i(87462),a=(i(67294),i(3905));const s={sidebar_position:0,sidebar_label:"PCI Devices",title:""},r="PCI Devices",c={unversionedId:"advanced/pcidevices",id:"advanced/pcidevices",title:"",description:"A PCIDevice represents a host device with a PCI address.",source:"@site/docs/advanced/pcidevices.md",sourceDirName:"advanced",slug:"/advanced/pcidevices",permalink:"/zh/v1.1/advanced/pcidevices",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/pcidevices.md",tags:[],version:"current",lastUpdatedAt:1666682174,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"PCI Devices",title:""},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/zh/v1.1/monitoring/"},next:{title:"Storage Class",permalink:"/zh/v1.1/advanced/storageclass"}},d={},o=[{value:"Enabling passthrough on a PCI Device",id:"enabling-passthrough-on-a-pci-device",level:2},{value:"Attaching PCI Devices to a VM",id:"attaching-pci-devices-to-a-vm",level:2},{value:"Using a passed-through PCI Device inside the VM",id:"using-a-passed-through-pci-device-inside-the-vm",level:2},{value:"Installing drivers for your PCI device inside the VM",id:"installing-drivers-for-your-pci-device-inside-the-vm",level:2}],l={toc:o};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pci-devices"},"PCI Devices"),(0,a.kt)("p",null,"A PCIDevice represents a host device with a PCI address.\nThe devices can be passed through the hypervisor to a VM by creating a PCIDeviceClaim,\nor by using the UI to enable passthrough. Passing a device through the hypervisor means that\nthe VM can directly access the device, and effectively owns the device. A VM can even install\nit's own drivers for that device."),(0,a.kt)("h2",{id:"enabling-passthrough-on-a-pci-device"},"Enabling passthrough on a PCI Device"),(0,a.kt)("p",null,"Go to the Advanced -> PCI Devices UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(19168).Z,width:"1440",height:"810"})),(0,a.kt)("p",null,"Search for your device by vendor name (e.g. NVIDIA, Intel, etc.) or device name."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(88566).Z,width:"1440",height:"810"})),(0,a.kt)("p",null,"Select the devices you want to enable for passthrough:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(92783).Z,width:"1440",height:"810"})),(0,a.kt)("p",null,'Then click "Enable Passthrough", read the warning*, and if you still want to enable for those devices, click "Enable" and wait until all the devices say "Enabled"'),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(50972).Z,width:"1440",height:"810"})),(0,a.kt)("p",null,"*The warning looks like this:\n",(0,a.kt)("img",{src:i(35517).Z,width:"1197",height:"360"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(67923).Z,width:"1440",height:"810"})),(0,a.kt)("h2",{id:"attaching-pci-devices-to-a-vm"},"Attaching PCI Devices to a VM"),(0,a.kt)("p",null,'Go to the VM UI and select "Edit Config"'),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(65646).Z,width:"1440",height:"810"})),(0,a.kt)("p",null,'Then select "PCI Devices" and use the "Available PCI Devices" drop-down. Select the devices you want to attach from the list displayed and then click Save.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(38397).Z,width:"1440",height:"810"})),(0,a.kt)("h2",{id:"using-a-passed-through-pci-device-inside-the-vm"},"Using a passed-through PCI Device inside the VM"),(0,a.kt)("p",null,"Boot the VM up, and run ",(0,a.kt)("inlineCode",{parentName:"p"},"lspci")," inside the VM, the attached PCI devices will show up, although the PCI address in the VM won't necessarily match the PCI address in the host. "),(0,a.kt)("h2",{id:"installing-drivers-for-your-pci-device-inside-the-vm"},"Installing drivers for your PCI device inside the VM"),(0,a.kt)("p",null,"This is just like installing drivers in the host. The PCI passthrough feature will bind the host device to the ",(0,a.kt)("inlineCode",{parentName:"p"},"vfio-pci")," driver, which gives VMs the ability to use their own drivers. ",(0,a.kt)("a",{parentName:"p",href:"https://tobilehman.com/posts/suse-harvester-pci/#toc"},"Here is a screenshot")," of NVIDIA drivers being installed in a VM. It includes a CUDA example that proves that the device drivers work."))}h.isMDXComponent=!0},19168:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/advanced-pcidevices-index-10becdf0d781a4e708413d422356740e.png"},67923:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/enable-pcidevices-done-6abc17f90036b1314c0085cd7ebe4808.png"},50972:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/enable-pcidevices-inprogress-c687c20689e9d90b585c892b4ab731c2.png"},88566:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/search-pcidevices-e72c0e5794891383d5de58edea8f58b0.png"},92783:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/select-pcidevices-9f4f0947bfb5f60b38f542f98f08575b.png"},38397:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/vm-pcidevices-attach-8909167894055bfbd363b32fcad812e1.png"},65646:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/vm-pcidevices-edit-config-fce9da60aa378d6213ba7a8352acfc16.png"},35517:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/warning-7dca08d8b6962ab79e85c47c271cbb7d.png"}}]);