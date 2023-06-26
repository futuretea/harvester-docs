"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,v=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return r?a.createElement(v,l(l({ref:t},p),{},{components:r})):a.createElement(v,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},l=void 0,o={unversionedId:"rancher/csi-driver",id:"version-v1.0/rancher/csi-driver",title:"Harvester CSI Driver",description:"The Harvester Container Storage Interface (CSI) Driver provides a CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance.",source:"@site/versioned_docs/version-v1.0/rancher/csi-driver.md",sourceDirName:"rancher",slug:"/rancher/csi-driver",permalink:"/v1.0/rancher/csi-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/rancher/csi-driver.md",tags:[],version:"v1.0",lastUpdatedAt:1685429604,formattedLastUpdatedAt:"May 30, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},sidebar:"tutorialSidebar",previous:{title:"Harvester Cloud Provider",permalink:"/v1.0/rancher/cloud-provider"},next:{title:"Harvester Terraform Provider",permalink:"/v1.0/terraform/"}},s={},d=[{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying with Harvester RKE1 Node Driver",id:"deploying-with-harvester-rke1-node-driver",level:3},{value:"Deploying with Harvester RKE2 Node Driver",id:"deploying-with-harvester-rke2-node-driver",level:3},{value:"Install CSI Driver Manually in the RKE2 Cluster",id:"install-csi-driver-manually-in-the-rke2-cluster",level:4},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Deploy Harvester CSI Driver",id:"deploy-harvester-csi-driver",level:4},{value:"Deploying with Harvester K3s Node Driver",id:"deploying-with-harvester-k3s-node-driver",level:3}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Harvester Container Storage Interface (CSI) Driver provides a CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance."),(0,n.kt)("h2",{id:"deploying"},"Deploying"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,n.kt)("li",{parentName:"ul"},"The Harvester virtual machines run as guest Kubernetes nodes are in the same namespace.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Currently, the Harvester CSI driver only supports single-node read-write(RWO) volumes. Please follow the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1992"},"issue #1992")," for future multi-node ",(0,n.kt)("inlineCode",{parentName:"p"},"read-only"),"(ROX) and ",(0,n.kt)("inlineCode",{parentName:"p"},"read-write"),"(RWX) support.")),(0,n.kt)("h3",{id:"deploying-with-harvester-rke1-node-driver"},"Deploying with Harvester RKE1 Node Driver"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the external cloud provider option.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-csi-driver/blob/master/deploy/generate_addon_csi.sh"},"Generate addon configuration")," and add it in the RKE config YAML."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# depend on kubectl to operate the Harvester cluster\n./deploy/generate_addon_csi.sh <serviceaccount name> <namespace>\n")),(0,n.kt)("h3",{id:"deploying-with-harvester-rke2-node-driver"},"Deploying with Harvester RKE2 Node Driver"),(0,n.kt)("p",null,"When spinning up a Kubernetes cluster using Rancher RKE2 node driver, the Harvester CSI driver will be deployed when Harvester cloud provider is selected."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"select-harvester-cloud-provider",src:r(91453).Z,width:"1916",height:"964"})),(0,n.kt)("h4",{id:"install-csi-driver-manually-in-the-rke2-cluster"},"Install CSI Driver Manually in the RKE2 Cluster"),(0,n.kt)("p",null,"If you prefer to deploy the Harvester CSI driver without enabling the Harvester cloud provider, you can choose either ",(0,n.kt)("inlineCode",{parentName:"p"},"Default - RKE2 Embedded")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"External")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cloud Provider")," field. If you are using Rancher v2.6, select ",(0,n.kt)("inlineCode",{parentName:"p"},"None")," instead."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(30049).Z,width:"1608",height:"805"})),(0,n.kt)("h4",{id:"prerequisites-1"},"Prerequisites"),(0,n.kt)("p",null,"Ensure that you have the following prerequisites in place:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"jq")," installed on your system."),(0,n.kt)("li",{parentName:"ul"},"You have the ",(0,n.kt)("inlineCode",{parentName:"li"},"kubeconfig")," file for your bare-metal Harvester cluster. ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"export KUBECONFIG=/path/to/your/harvester-kubeconfig\n")))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(81153).Z,width:"1603",height:"731"})),(0,n.kt)("p",null,"Perform the following steps to deploy the Harvester CSI Driver manually:"),(0,n.kt)("h4",{id:"deploy-harvester-csi-driver"},"Deploy Harvester CSI Driver"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generate cloud-config."),(0,n.kt)("p",{parentName:"li"},"You can generate the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file using the ",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/harvester/harvester-csi-driver/master/deploy/generate_addon_csi.sh"},"generate_addon_csi.sh")," script. It is available on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-csi-driver"},"harvester/harvester-csi-driver")," repo. You can follow the steps below to get the ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-config")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-init")," data:"))),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<serviceaccount name>"),' usually corresponds to your guest cluster name (the value of "Cluster Name" in the figure below), and ',(0,n.kt)("inlineCode",{parentName:"p"},"<namespace>"),' should match the namespace (the value of "Namespace") of the guest cluster.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# ./generate_addon_csi.sh <serviceaccount name> <namespace> RKE2\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"```\n########## cloud-config ############\napiVersion: v1\nclusters:\n- cluster: <token>\n    server: https://<YOUR HOST HARVESTER VIP>:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    namespace: default\n    user: rke2-guest-01-default-default\n  name: rke2-guest-01-default-default\ncurrent-context: rke2-guest-01-default-default\nkind: Config\npreferences: {}\nusers:\n- name: rke2-guest-01-default-default\n  user:\n    token: <token>\n\n########## cloud-init user data ############\nwrite_files:\n  - encoding: b64\n    content: YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKbFZFTkRRVklyWjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVd0TlUwbDNTVUZaUkZaUlVVUkVRbXg1WVRKVmVVeFlUbXdLWTI1YWJHTnBNV3BaVlVGNFRtcG5NVTE2VlhoT1JGRjNUVUkwV0VSVVNYcE5SRlY1VDFSQk5VMVVRVEJOUm05WVJGUk5lazFFVlhsT2FrRTFUVlJCTUFwTlJtOTNTa1JGYVUxRFFVZEJNVlZGUVhkM1dtTnRkR3hOYVRGNldsaEtNbHBZU1hSWk1rWkJUVlJaTkU1VVRURk5WRkV3VFVSQ1drMUNUVWRDZVhGSENsTk5ORGxCWjBWSFEwTnhSMU5OTkRsQmQwVklRVEJKUVVKSmQzRmFZMDVTVjBWU2FsQlVkalJsTUhFMk0ySmxTSEZEZDFWelducGtRa3BsU0VWbFpHTUtOVEJaUTNKTFNISklhbWdyTDJab2VXUklNME5ZVURNeFZXMWxTM1ZaVDBsVGRIVnZVbGx4YVdJMGFFZE5aekpxVVdwQ1FVMUJORWRCTVZWa1JIZEZRZ292ZDFGRlFYZEpRM0JFUVZCQ1owNVdTRkpOUWtGbU9FVkNWRUZFUVZGSUwwMUNNRWRCTVZWa1JHZFJWMEpDVWpaRGEzbEJOSEZqYldKSlVESlFWVW81Q2xacWJWVTNVV2R2WjJwQlMwSm5aM0ZvYTJwUFVGRlJSRUZuVGtsQlJFSkdRV2xCZUZKNU4xUTNRMVpEYVZWTVdFMDRZazVaVWtWek1HSnBZbWxVSzJzS1kwRnhlVmt5Tm5CaGMwcHpMM2RKYUVGTVNsQnFVVzVxZEcwMVptNTZWR3AxUVVsblRuTkdibFozWkZRMldXWXpieTg0ZFRsS05tMWhSR2RXQ2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBzZXJ2ZXI6IGh0dHBzOi8vMTkyLjE2OC4wLjEzMTo2NDQzCiAgbmFtZTogZGVmYXVsdApjb250ZXh0czoKLSBjb250ZXh0OgogICAgY2x1c3RlcjogZGVmYXVsdAogICAgbmFtZXNwYWNlOiBkZWZhdWx0CiAgICB1c2VyOiBya2UyLWd1ZXN0LTAxLWRlZmF1bHQtZGVmYXVsdAogIG5hbWU6IHJrZTItZ3Vlc3QtMDEtZGVmYXVsdC1kZWZhdWx0CmN1cnJlbnQtY29udGV4dDogcmtlMi1ndWVzdC0wMS1kZWZhdWx0LWRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBya2UyLWd1ZXN0LTAxLWRlZmF1bHQtZGVmYXVsdAogIHVzZXI6CiAgICB0b2tlbjogZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklreGhUazQxUTBsMWFsTnRORE5TVFZKS00waE9UbGszTkV0amNVeEtjM1JSV1RoYVpUbGZVazA0YW1zaWZRLmV5SnBjM01pT2lKcmRXSmxjbTVsZEdWekwzTmxjblpwWTJWaFkyTnZkVzUwSWl3aWEzVmlaWEp1WlhSbGN5NXBieTl6WlhKMmFXTmxZV05qYjNWdWRDOXVZVzFsYzNCaFkyVWlPaUprWldaaGRXeDBJaXdpYTNWaVpYSnVaWFJsY3k1cGJ5OXpaWEoyYVdObFlXTmpiM1Z1ZEM5elpXTnlaWFF1Ym1GdFpTSTZJbkpyWlRJdFozVmxjM1F0TURFdGRHOXJaVzRpTENKcmRXSmxjbTVsZEdWekxtbHZMM05sY25acFkyVmhZMk52ZFc1MEwzTmxjblpwWTJVdFlXTmpiM1Z1ZEM1dVlXMWxJam9pY210bE1pMW5kV1Z6ZEMwd01TSXNJbXQxWW1WeWJtVjBaWE11YVc4dmMyVnlkbWxqWldGalkyOTFiblF2YzJWeWRtbGpaUzFoWTJOdmRXNTBMblZwWkNJNkltTXlZak5sTldGaExUWTBNMlF0TkRkbU1pMDROemt3TFRjeU5qWXpNbVl4Wm1aaU5pSXNJbk4xWWlJNkluTjVjM1JsYlRwelpYSjJhV05sWVdOamIzVnVkRHBrWldaaGRXeDBPbkpyWlRJdFozVmxjM1F0TURFaWZRLmFRZmU1d19ERFRsSWJMYnUzWUVFY3hmR29INGY1VnhVdmpaajJDaWlhcXB6VWI0dUYwLUR0cnRsa3JUM19ZemdXbENRVVVUNzNja1BuQmdTZ2FWNDhhdmlfSjJvdUFVZC04djN5d3M0eXpjLVFsTVV0MV9ScGJkUURzXzd6SDVYeUVIREJ1dVNkaTVrRWMweHk0X0tDQ2IwRHQ0OGFoSVhnNlMwRDdJUzFfVkR3MmdEa24wcDVXUnFFd0xmSjdEbHJDOFEzRkNUdGhpUkVHZkUzcmJGYUdOMjdfamR2cUo4WXlJQVd4RHAtVHVNT1pKZUNObXRtUzVvQXpIN3hOZlhRTlZ2ZU05X29tX3FaVnhuTzFEanllbWdvNG9OSEpzekp1VWliRGxxTVZiMS1oQUxYSjZXR1Z2RURxSTlna1JlSWtkX3JqS2tyY3lYaGhaN3lTZ3o3QQo=\n    owner: root:root\n    path: /var/lib/rancher/rke2/etc/config-files/cloud-provider-config\n    permissions: '0644'\n```\n\nCopy and paste the output below `cloud-init user data` to **Machine Pools >Show Advanced > User Data**.\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set up cloud-provider-config."),(0,n.kt)("p",{parentName:"li"},"The cloud-provider-config should be created after you apply the above cloud-init user data."),(0,n.kt)("p",{parentName:"li"},"You can check again on the path ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/etc/config-files/cloud-provider-config"),"."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you want to change the cloud-provider-config path, you should update the cloud-init user data.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install Harvester CSI Driver."),(0,n.kt)("p",{parentName:"li"},"  Install the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver")," chart from the Rancher marketplace. (Note: by default, you do not need to change the ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-config")," path).\n",(0,n.kt)("img",{src:r(71024).Z,width:"3000",height:"1460"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(32345).Z,width:"3002",height:"1524"})))),(0,n.kt)("p",null,"By following the above steps, you should be able to see those CSI driver pods are up and running, and you can verify it by provisioning a new PVC using the default storageClass ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester."),"."),(0,n.kt)("h3",{id:"deploying-with-harvester-k3s-node-driver"},"Deploying with Harvester K3s Node Driver"),(0,n.kt)("p",null,"You can follow the ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/rancher/csi-driver#deploy-harvester-csi-driver"},"Deploy Harvester CSI Driver")," steps described in the RKE2 section for ",(0,n.kt)("strong",{parentName:"p"},"Prerequisites")," "),(0,n.kt)("p",null,"The only difference is that you need to change the script command as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# ./generate_addon_csi.sh <serviceaccount name> <namespace> k3s\n")))}c.isMDXComponent=!0},81153:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/creating_guest_cluster-9a704a8caf1f5d20e80a4e85b864d8e5.png"},32345:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/donot_change_cloud_config_path-f1a6f8a068fb6d7f19fe33b7a3cd97bc.png"},71024:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install_csi_rancher_marketplace-a6e0b7ac479a8ae72c4b31ad18d3ad9e.png"},30049:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/non-harvester-cloud-provider-8e3bc5542bd27800a302340c0b2ceef3.png"},91453:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/select-harvester-cloud-provider-7e9fe45280de6f364e7e4bce3b11224d.png"}}]);