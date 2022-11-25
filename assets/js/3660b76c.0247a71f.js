"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:3,sidebar_label:"Operating System",title:"Operating System"},i=void 0,s={unversionedId:"troubleshooting/os",id:"troubleshooting/os",title:"Operating System",description:"Harvester runs on an OpenSUSE-based OS. The OS is an artifact produced by the cOS toolkit. The following sections contain information and tips to help users troubleshoot OS-related issues.",source:"@site/docs/troubleshooting/os.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/os",permalink:"/v1.1/troubleshooting/os",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/troubleshooting/os.md",tags:[],version:"current",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"Nov 25, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Operating System",title:"Operating System"},sidebar:"tutorialSidebar",previous:{title:"Harvester",permalink:"/v1.1/troubleshooting/harvester"},next:{title:"Monitoring",permalink:"/v1.1/troubleshooting/monitoring"}},l={},p=[{value:"How to log into a Harvester node",id:"how-to-log-into-a-harvester-node",level:2},{value:"How can I install packages? Why are some paths read-only?",id:"how-can-i-install-packages-why-are-some-paths-read-only",level:2},{value:"How to permanently edit kernel parameters",id:"how-to-permanently-edit-kernel-parameters",level:2},{value:"How to change the default GRUB boot menu entry",id:"how-to-change-the-default-grub-boot-menu-entry",level:2},{value:"How to debug a system crash or hang",id:"how-to-debug-a-system-crash-or-hang",level:2},{value:"Collect crash log",id:"collect-crash-log",level:3},{value:"Collect crash dumps",id:"collect-crash-dumps",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Harvester runs on an OpenSUSE-based OS. The OS is an artifact produced by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/cOS-toolkit"},"cOS toolkit"),". The following sections contain information and tips to help users troubleshoot OS-related issues."),(0,r.kt)("h2",{id:"how-to-log-into-a-harvester-node"},"How to log into a Harvester node"),(0,r.kt)("p",null,"Users can log into a Harvester node with the username ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher")," and the password or SSH keypair provided during installation.\nThe user ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher")," can execute privileged commands without entering a password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Run a privileged command\nrancher@node1:~> sudo blkid\n\n# Or become root\nrancher@node1:~> sudo -i\nnode1:~ # blkid\n")),(0,r.kt)("h2",{id:"how-can-i-install-packages-why-are-some-paths-read-only"},"How can I install packages? Why are some paths read-only?"),(0,r.kt)("p",null,"The OS file system, like a container image, is image-based and immutable except in some directories. To temporarily enable the read-write mode, please use the following steps:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Enabling read-write mode might break your system if files are modified. Please use it at your own risk.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For version ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3.0"),", we need to apply a workaround first to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1388"},"make some directories non-overlaid")," after enabling read-write mode. On a running Harvester node, run the following command as root:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'cat > /oem/91_hack.yaml <<\'EOF\'\nname: "Rootfs Layout Settings for debugrw"\nstages:\n  rootfs:\n    - if: \'grep -q root=LABEL=COS_ACTIVE /proc/cmdline && grep -q rd.cos.debugrw /proc/cmdline\'\n      name: "Layout configuration for debugrw"\n      environment_file: /run/cos/cos-layout.env\n      environment:\n        RW_PATHS: " "\nEOF\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Reboot the system to GRUB menu. Press ESC to stay on the menu.\n",(0,r.kt)("img",{src:n(83855).Z,width:"717",height:"394"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Press ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," on first menuentry. Append ",(0,r.kt)("inlineCode",{parentName:"p"},"rd.cos.debugrw")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"linux (loop0)$kernel $kernelcmd")," line. Press ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," to boot the system.\n",(0,r.kt)("img",{src:n(50583).Z,width:"716",height:"400"})))),(0,r.kt)("h2",{id:"how-to-permanently-edit-kernel-parameters"},"How to permanently edit kernel parameters"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following steps are a workaround. Harvester will inform the community once a permanent resolution is in place.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Re-mount state directory in rw mode:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# blkid -L COS_STATE\n/dev/vda2\n# mount -o remount,rw /dev/vda2 /run/initramfs/cos-state\n"))),(0,r.kt)("li",{parentName:"ul"},"Edit the grub config file and append parameters to the ",(0,r.kt)("inlineCode",{parentName:"li"},"linux (loop0)$kernel $kernelcmd")," line. The following example adds a ",(0,r.kt)("inlineCode",{parentName:"li"},"nomodeset")," parameter:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'# vim /run/initramfs/cos-state/grub2/grub.cfg\nmenuentry "Harvester ea6e7f5-dirty" --id cos {\n  search.fs_label COS_STATE root\n  set img=/cOS/active.img\n  set label=COS_ACTIVE\n  loopback loop0 /$img\n  set root=($root)\n  source (loop0)/etc/cos/bootargs.cfg\n  linux (loop0)$kernel $kernelcmd nomodeset\n  initrd (loop0)$initramfs\n}\n'))),(0,r.kt)("li",{parentName:"ul"},"Reboot for changes to take effect.")),(0,r.kt)("h2",{id:"how-to-change-the-default-grub-boot-menu-entry"},"How to change the default GRUB boot menu entry"),(0,r.kt)("p",null,"To change the default entry, first check the ",(0,r.kt)("inlineCode",{parentName:"p"},"--id")," attribute of a menu entry, as in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# cat /run/initramfs/cos-state/grub2/grub.cfg\n\n<...>\nmenuentry "Harvester ea6e7f5-dirty (debug)" --id cos-debug {\n  search.fs_label COS_STATE root\n  set img=/cOS/active.img\n  set label=COS_ACTIVE\n  loopback loop0 /$img\n')),(0,r.kt)("p",null,"The id of the above entry is ",(0,r.kt)("inlineCode",{parentName:"p"},"cos-debug"),". We can then set the default entry by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# grub2-editenv /oem/grubenv set saved_entry=cos-debug\n")),(0,r.kt)("h2",{id:"how-to-debug-a-system-crash-or-hang"},"How to debug a system crash or hang"),(0,r.kt)("h3",{id:"collect-crash-log"},"Collect crash log"),(0,r.kt)("p",null,"If kernel panic traces are not recorded in the system log when a system crashes, one reliable way to locate the crash log is to use a serial console."),(0,r.kt)("p",null,"To enable outputting of kernel messages to a serial console, please use the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Boot the system to GRUB menu. Press ESC to stay on the menu.\n",(0,r.kt)("img",{src:n(83855).Z,width:"717",height:"394"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Press ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," on first menuentry. Append ",(0,r.kt)("inlineCode",{parentName:"p"},"console=ttyS0,115200n8")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"linux (loop0)$kernel $kernelcmd")," line. Press ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," to boot the system."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{src:n(67247).Z,width:"714",height:"399"})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Adjust the ",(0,r.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/admin-guide/serial-console.html"},"console options")," according to your environment. ",(0,r.kt)("strong",{parentName:"p"},"Make sure")," to append the ",(0,r.kt)("inlineCode",{parentName:"p"},"console=")," string at the end of the line.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to the serial port to capture logs.")),(0,r.kt)("h3",{id:"collect-crash-dumps"},"Collect crash dumps"),(0,r.kt)("p",null,"For kernel panic crashes, you can use kdump to collect crash dumps."),(0,r.kt)("p",null,"By default, the OS is booted without the kdump feature enabled. Users can enable the feature by selecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," menuentry when booting, as in the following example:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(19869).Z,width:"716",height:"397"})),(0,r.kt)("p",null,"When a system crashes, a crash dump will be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/crash/<time>")," directory. Providing the crash dump to developers helps them to troubleshoot and resolve issues."))}c.isMDXComponent=!0},67247:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/os-edit-first-menuentry-add-console-d0a4d079aab7e7aab0e7236a11e30b58.png"},50583:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/os-edit-first-menuentry-add-debugrw-d91f61ee1babd6bc5d80f511a9502641.png"},19869:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/os-enable-kdump-96964fc062aa7c145bc5f34978be7173.png"},83855:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/os-stop-on-first-menuentry-2a56e0b304663f6908becc633e8befa9.png"}}]);