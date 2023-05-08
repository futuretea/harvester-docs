"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1229],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},55417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},o=void 0,s={unversionedId:"rancher/csi-driver",id:"version-v1.1/rancher/csi-driver",title:"Harvester CSI Driver",description:"The Harvester Container Storage Interface (CSI) Driver provides a standard CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance.",source:"@site/versioned_docs/version-v1.1/rancher/csi-driver.md",sourceDirName:"rancher",slug:"/rancher/csi-driver",permalink:"/v1.1/rancher/csi-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/rancher/csi-driver.md",tags:[],version:"v1.1",lastUpdatedAt:1683250047,formattedLastUpdatedAt:"May 5, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},sidebar:"tutorialSidebar",previous:{title:"Harvester Cloud Provider",permalink:"/v1.1/rancher/cloud-provider"},next:{title:"Harvester Terraform Provider",permalink:"/v1.1/terraform/"}},l={},p=[{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying with Harvester RKE1 Node Driver",id:"deploying-with-harvester-rke1-node-driver",level:3},{value:"Deploying with Harvester RKE2 Node Driver",id:"deploying-with-harvester-rke2-node-driver",level:3},{value:"Deploying with Harvester K3s Node Driver",id:"deploying-with-harvester-k3s-node-driver",level:3},{value:"Passthrough Custom StorageClass",id:"passthrough-custom-storageclass",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Deploying",id:"deploying-1",level:3}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Harvester Container Storage Interface (CSI) Driver provides a standard CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance."),(0,n.kt)("h2",{id:"deploying"},"Deploying"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,n.kt)("li",{parentName:"ul"},"The Harvester virtual machines run as guest Kubernetes nodes are in the same namespace.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Currently, the Harvester CSI driver only supports single-node read-write(RWO) volumes. Please follow the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1992"},"issue #1992")," for future multi-node ",(0,n.kt)("inlineCode",{parentName:"p"},"read-only"),"(ROX) and ",(0,n.kt)("inlineCode",{parentName:"p"},"read-write"),"(RWX) support.")),(0,n.kt)("h3",{id:"deploying-with-harvester-rke1-node-driver"},"Deploying with Harvester RKE1 Node Driver"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester(Out-of-tree)")," option (optional. If you don't need to use the Cloud Provider feature at the same time, you can select the ",(0,n.kt)("inlineCode",{parentName:"p"},"None")," option)."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:r(76168).Z,width:"2180",height:"223"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver")," from the Rancher marketplace."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:r(51419).Z,width:"2542",height:"405"})))),(0,n.kt)("h3",{id:"deploying-with-harvester-rke2-node-driver"},"Deploying with Harvester RKE2 Node Driver"),(0,n.kt)("p",null,"When spinning up a Kubernetes cluster using Rancher RKE2 node driver, the Harvester CSI driver will be deployed when Harvester cloud provider is selected."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"select-harvester-cloud-provider",src:r(28303).Z,width:"2238",height:"646"})),(0,n.kt)("p",null,"You can also deploy Harvester CSI Driver manually if you have already deployed the Harvester node driver manually. Perform the following steps to manually deploy the Harvester CSI Driver. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Generate the addon config.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The script uses ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"jq")," to operate the Harvester cluster. The script needs access to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Cluster")," kubeconfig to work. The ",(0,n.kt)("inlineCode",{parentName:"p"},"<serviceaccount name>")," is usually your guest cluster name, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"<namespace>")," needs to match the namespace of the guest cluster.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("inlineCode",{parentName:"li"},"jq"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# apt install jq\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set up ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl")," and the kubeconfig file (the kubeconfig should allow you to access the ",(0,n.kt)("inlineCode",{parentName:"li"},"Harvester Cluster"),"):")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'# export KUBECONFIG=kubeconfig\n# export PATH="${PATH}:/var/lib/rancher/rke2/bin"\n')),(0,n.kt)("p",null,"You can generate the kubeconfig file using the ",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/harvester/harvester-csi-driver/master/deploy/generate_addon_csi.sh"},"generate_addon_csi.sh")," script. It is available on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-csi-driver"},"harvester/harvester-csi-driver")," repo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# ./generate_addon_csi.sh <serviceaccount name> <namespace>\n")),(0,n.kt)("p",null,"Get the ",(0,n.kt)("inlineCode",{parentName:"p"},"addon")," yaml from the output of the script above."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(81437).Z,width:"3018",height:"1528"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create the addon config file and add the ",(0,n.kt)("inlineCode",{parentName:"li"},"addon")," yaml from the output above.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# mkdir -p /var/lib/rancher/rke2/etc/config-files\n# vim /var/lib/rancher/rke2/etc/config-files/csi_addon.yaml\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install Harvester CSI Driver.")),(0,n.kt)("p",null,"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver")," from the Rancher marketplace.\n",(0,n.kt)("img",{src:r(62457).Z,width:"3000",height:"1460"})),(0,n.kt)("p",null,"You do not need to change the cloud-config path:\n",(0,n.kt)("img",{src:r(98035).Z,width:"3002",height:"1524"})),(0,n.kt)("p",null,"The Harvester CSI driver should now be deployed successfully."),(0,n.kt)("h3",{id:"deploying-with-harvester-k3s-node-driver"},"Deploying with Harvester K3s Node Driver"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester-csi-driver/blob/master/deploy/generate_addon_csi.sh"},"Generate addon configuration")," and put it in K3s VMs ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/kubernetes/cloud-config"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# depend on kubectl to operate the Harvester cluster\n./deploy/generate_addon_csi.sh <serviceaccount name> <namespace>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver")," from the Rancher marketplace."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(29462).Z,width:"2039",height:"437"})))),(0,n.kt)("h2",{id:"passthrough-custom-storageclass"},"Passthrough Custom StorageClass"),(0,n.kt)("p",null,"Starting with Harvester CSI driver v0.1.15, you can create a PersistentVolumeClaim (PVC) based on a different StorageClass."),(0,n.kt)("p",null,"Harvester CSI driver v0.1.15 is supported out of the box starting with the following RKE2 versions; for RKE1 you need to manually install the CSI driver chart:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"v1.23.16+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.24.10+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.25.6+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.26.1+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.27.1+rke2r1 and later")),(0,n.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,n.kt)("p",null,"Please add the following additional perquisites to your Harvester cluster. The Harvester CSI driver requires proper ",(0,n.kt)("strong",{parentName:"p"},"RBAC")," to display error messages. This is important for displaying an error message when creating a PVC with a StorageClass that does not exist, as shown in the following figure."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(98606).Z,width:"1900",height:"874"})),(0,n.kt)("p",null,"Perform the following steps to setup ",(0,n.kt)("strong",{parentName:"p"},"RBAC")," to enable seeing error messages."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new ",(0,n.kt)("inlineCode",{parentName:"li"},"clusterrole")," named ",(0,n.kt)("inlineCode",{parentName:"li"},"harvesterhci.io:csi-driver")," with the following manifest.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  labels:\n    app.kubernetes.io/component: apiserver\n    app.kubernetes.io/name: harvester\n    app.kubernetes.io/part-of: harvester\n  name: harvesterhci.io:csi-driver\nrules:\n- apiGroups:\n  - storage.k8s.io\n  resources:\n  - storageclasses\n  verbs:\n  - get\n  - list\n  - watch\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Then create the ",(0,n.kt)("inlineCode",{parentName:"li"},"clusterrolebinding")," to associate with  the new ",(0,n.kt)("inlineCode",{parentName:"li"},"clusterrole")," with the following manifest.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: <namespace>-<serviceaccount name>\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: harvesterhci.io:csi-driver\nsubjects:\n- kind: ServiceAccount\n  name: <serviceaccount name>\n  namespace: <namespace>\n")),(0,n.kt)("p",null,"Make sure the ",(0,n.kt)("inlineCode",{parentName:"p"},"serviceaccount name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace")," are the same as your cloud provider. Perform the following steps to see the ",(0,n.kt)("inlineCode",{parentName:"p"},"serviceaccount name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace")," for your cloud provider."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Find the ",(0,n.kt)("inlineCode",{parentName:"li"},"rolebinding")," for your cloud provider .")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# kubectl get rolebinding -A |grep harvesterhci.io:cloudprovider\ndefault                                 default-rke2-guest-01                                ClusterRole/harvesterhci.io:cloudprovider             7d1h\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Get the ",(0,n.kt)("inlineCode",{parentName:"li"},"subjects")," info on this ",(0,n.kt)("inlineCode",{parentName:"li"},"rolebinding"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get rolebinding default-rke2-guest-01 -n default -o yaml |yq -e '.subjects'\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Find the ",(0,n.kt)("inlineCode",{parentName:"li"},"ServiceAccount")," info as follows:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"- kind: ServiceAccount\n  name: rke2-guest-01\n  namespace: default\n")),(0,n.kt)("h3",{id:"deploying-1"},"Deploying"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new StorageClass that you would like to use in your guest k8s cluster. You can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/dev/advanced/storageclass"},"StorageClasses")," for more details."),(0,n.kt)("p",{parentName:"li"},"As show in the following figure, create a new StorageClass named ",(0,n.kt)("strong",{parentName:"p"},"replica-2"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(49222).Z,width:"1908",height:"775"})),(0,n.kt)("p",{parentName:"li"},"For example, create a new StorageClass on the downstream cluster as follows associated with the StorageClass created on the Harvester Cluster named ",(0,n.kt)("strong",{parentName:"p"},"replica-2"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(34828).Z,width:"1910",height:"875"})),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When choosing a ",(0,n.kt)("strong",{parentName:"p"},"Provisioner"),", select ",(0,n.kt)("strong",{parentName:"p"},"Harvester (CSI)"),". The parameter ",(0,n.kt)("strong",{parentName:"p"},"Host StorageClass")," should be the StorageClass created on the Harvester Cluster."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can now create a PVC based on this new ",(0,n.kt)("strong",{parentName:"p"},"StorageClass"),", which uses the ",(0,n.kt)("strong",{parentName:"p"},"Host StorageClass")," to provision volumes on the bare-metal cluster."))))}c.isMDXComponent=!0},81437:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/csi_addon_yaml-9153348eeaba459193aeb86c879c9307.png"},98035:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/donot_change_cloud_config_path-f1a6f8a068fb6d7f19fe33b7a3cd97bc.png"},34828:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/downstream-cluster-sc-creation-378d43228c1d54eede232eb32d86dd0e.png"},98606:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/error_event_csi_driver-39ba293ec4c085eb58a01a396ac1f65a.png"},29462:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-harvester-csi-driver-in-k3s-f9484289395513e6cad4f69b00f84fa5.png"},51419:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-harvester-csi-driver-28489139ba34a16156cfea27c6eb005f.png"},62457:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install_csi_rancher_marketplace-a6e0b7ac479a8ae72c4b31ad18d3ad9e.png"},76168:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke-cloud-provider-1b375dbb96aba32a2b7f2b81357e98b8.png"},28303:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-cloud-provider-bcb7c991d0e6f041009c4920472d8ea8.png"},49222:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sc-replica-2-7f41f9357e62f4d917a590f31c04b98a.png"}}]);