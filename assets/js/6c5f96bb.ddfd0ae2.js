"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:6,sidebar_label:"Update Harvester Configuration",title:"Update Harvester Configuration After Installation",keywords:["Harvester configuration","Configuration"],Description:"How to update Harvester configuration after installation"},o=void 0,s={unversionedId:"install/update-harvester-configuration",id:"version-v1.1/install/update-harvester-configuration",title:"Update Harvester Configuration After Installation",description:"Harvester's OS has an immutable design, which means most files in the  OS revert to their pre-configured state after a reboot. The Harvester OS loads the pre-configured values of system components from configuration files during the boot time.",source:"@site/versioned_docs/version-v1.1/install/update-harvester-configuration.md",sourceDirName:"install",slug:"/install/update-harvester-configuration",permalink:"/v1.1/install/update-harvester-configuration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/install/update-harvester-configuration.md",tags:[],version:"v1.1",lastUpdatedAt:1690169276,formattedLastUpdatedAt:"Jul 24, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Update Harvester Configuration",title:"Update Harvester Configuration After Installation",keywords:["Harvester configuration","Configuration"],Description:"How to update Harvester configuration after installation"},sidebar:"tutorialSidebar",previous:{title:"Harvester Configuration",permalink:"/v1.1/install/harvester-configuration"},next:{title:"Management Address",permalink:"/v1.1/install/management-address"}},l={},p=[{value:"DNS servers",id:"dns-servers",level:2},{value:"Runtime change",id:"runtime-change",level:3},{value:"Configuration persistence",id:"configuration-persistence",level:3},{value:"NTP servers",id:"ntp-servers",level:2},{value:"Runtime change",id:"runtime-change-1",level:3},{value:"Configuration persistence",id:"configuration-persistence-1",level:3},{value:"SSH keys of user <code>rancher</code>",id:"ssh-keys-of-user-rancher",level:2},{value:"Runtime change",id:"runtime-change-2",level:3},{value:"Configuration persistence",id:"configuration-persistence-2",level:3},{value:"Password of user <code>rancher</code>",id:"password-of-user-rancher",level:2},{value:"Runtime change",id:"runtime-change-3",level:3},{value:"Configuration persistence",id:"configuration-persistence-3",level:3},{value:"Bonding slaves",id:"bonding-slaves",level:2},{value:"Runtime change",id:"runtime-change-4",level:3},{value:"Configuration persistence",id:"configuration-persistence-4",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/update-harvester-configuration"})),(0,r.kt)("p",null,"Harvester's OS has an immutable design, which means most files in the  OS revert to their pre-configured state after a reboot. The Harvester OS loads the pre-configured values of system components from configuration files during the boot time. "),(0,r.kt)("p",null,"This page describes how to edit some of the most-requested Harvester configurations. To update a configuration, you must first update the runtime value in the system and then update configuration files to make the changes persistent between reboots. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you upgrade from a version before ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.1.2"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-init")," file in examples will be ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml"),". Please substitute the value if needed.")),(0,r.kt)("h2",{id:"dns-servers"},"DNS servers"),(0,r.kt)("h3",{id:"runtime-change"},"Runtime change"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to a Harvester node and become root. See ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/troubleshooting/os#how-to-log-into-a-harvester-node"},"how to log into a Harvester node")," for more details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network/config")," and update the following line. Use a space to separate DNS server addresses if there are multiple servers."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'NETCONFIG_DNS_STATIC_SERVERS="8.8.8.8 1.1.1.1"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update and reload the configuration with the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"netconfig update\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," contains the correct DNS servers with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cat /etc/resolv.conf\n")))),(0,r.kt)("h3",{id:"configuration-persistence"},"Configuration persistence"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Backup the elemental ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-init")," file ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cp /oem/90_custom.yaml /oem/install/90_custom.yaml.$(date --iso-8601=minutes)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," and update the value under the yaml path ",(0,r.kt)("inlineCode",{parentName:"p"},"stages.initramfs[0].commands"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"commands")," array must contain a line to manipulate the ",(0,r.kt)("inlineCode",{parentName:"p"},"NETCONFIG_DNS_STATIC_SERVERS")," config. Add the line if the line doesn't exist. "),(0,r.kt)("p",{parentName:"li"},"The following example adds a line to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"NETCONFIG_DNS_STATIC_SERVERS")," config:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"stages:\n  initramfs:\n    - commands:\n        - sed -i 's/^NETCONFIG_DNS_STATIC_SERVERS.*/NETCONFIG_DNS_STATIC_SERVERS=\"8.8.8.8 1.1.1.1\"/' /etc/sysconfig/network/config\n")),(0,r.kt)("p",{parentName:"li"},"Replace the DNS server addresses and save the file. Harvester sets up new servers after rebooting."))),(0,r.kt)("h2",{id:"ntp-servers"},"NTP servers"),(0,r.kt)("h3",{id:"runtime-change-1"},"Runtime change"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to a Harvester node and become root. See ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/troubleshooting/os#how-to-log-into-a-harvester-node"},"how to log into a Harvester node")," for more details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/timesyncd.conf")," and specify NTP servers in the ",(0,r.kt)("inlineCode",{parentName:"p"},"NTP=")," setting:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"[Time]\nNTP = 0.suse.pool.ntp.org 1.suse.pool.ntp.org\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd-timesyncd.service")," service:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"systemctl restart systemd-timesyncd.service\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Display the timesync status:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"timedatectl timesync-status\n")))),(0,r.kt)("h3",{id:"configuration-persistence-1"},"Configuration persistence"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Backup the elemental ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-init")," file ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cp /oem/90_custom.yaml /oem/install/90_custom.yaml.$(date --iso-8601=minutes)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," and update the yaml path ",(0,r.kt)("inlineCode",{parentName:"p"},"stages.initramfs[0].timesyncd"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"timesyncd")," map must be in the following format:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"stages:\n  initramfs:\n  - ...\n    timesyncd:\n    NTP: 0.suse.pool.ntp.org 1.suse.pool.ntp.org\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," and update the yaml path ",(0,r.kt)("inlineCode",{parentName:"p"},"stages.initramfs[0].systemctl.enable"),". The array must have the two services (",(0,r.kt)("inlineCode",{parentName:"p"},"systemd-timesyncd")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd-time-wait-sync"),") enabled:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"stages:\n  initramfs:\n  - ...\n    systemctl:\n    enable:\n        systemd-timesyncd\n        systemd-time-wait-sync\n    disable: []\n    start: []\n    mask: []\n")))),(0,r.kt)("h2",{id:"ssh-keys-of-user-rancher"},"SSH keys of user ",(0,r.kt)("inlineCode",{parentName:"h2"},"rancher")),(0,r.kt)("h3",{id:"runtime-change-2"},"Runtime change"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to a Harvester node as user ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher"),". See ",(0,r.kt)("a",{parentName:"li",href:"/v1.1/troubleshooting/os#how-to-log-into-a-harvester-node"},"how to log into a Harvester node")," for more details."),(0,r.kt)("li",{parentName:"ol"},"Edit ",(0,r.kt)("inlineCode",{parentName:"li"},"/home/rancher/.ssh/authorized_keys")," to add or remove keys.")),(0,r.kt)("h3",{id:"configuration-persistence-2"},"Configuration persistence"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Backup the elemental ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-init")," file ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cp /oem/90_custom.yaml /oem/install/90_custom.yaml.$(date --iso-8601=minutes)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," and update the yaml path ",(0,r.kt)("inlineCode",{parentName:"p"},"stages.network[0].authorized_keys.rancher"),". Add or remove keys in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher")," array:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"stages:\n  network:\n  - ...\n    authorized_keys:\n      rancher:\n      - key1\n      - key2\n")))),(0,r.kt)("h2",{id:"password-of-user-rancher"},"Password of user ",(0,r.kt)("inlineCode",{parentName:"h2"},"rancher")),(0,r.kt)("h3",{id:"runtime-change-3"},"Runtime change"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to a Harvester node as user ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher"),". See ",(0,r.kt)("a",{parentName:"li",href:"/v1.1/troubleshooting/os#how-to-log-into-a-harvester-node"},"how to log into a Harvester node")," for more details."),(0,r.kt)("li",{parentName:"ol"},"To reset the password for the user ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher"),", run the command ",(0,r.kt)("inlineCode",{parentName:"li"},"passwd"),". ")),(0,r.kt)("h3",{id:"configuration-persistence-3"},"Configuration persistence"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Backup the elemental ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-init")," file ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cp /oem/90_custom.yaml /oem/install/90_custom.yaml.$(date --iso-8601=minutes)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," and update the yaml path ",(0,r.kt)("inlineCode",{parentName:"p"},"stages.initramfs[0].users.rancher.passwd"),". Refer to the configuration ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#ospassword"},(0,r.kt)("inlineCode",{parentName:"a"},"os.password"))," for details on how to specify the password in an encrypted form."))),(0,r.kt)("h2",{id:"bonding-slaves"},"Bonding slaves"),(0,r.kt)("p",null,"You can update the slave interfaces of Harvester's management bonding interface ",(0,r.kt)("inlineCode",{parentName:"p"},"mgmt-bo"),"."),(0,r.kt)("h3",{id:"runtime-change-4"},"Runtime change"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to a Harvester node and become root. See ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/troubleshooting/os#how-to-log-into-a-harvester-node"},"how to log into a Harvester node")," for more details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Identify the interface names with the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ip a\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network/ifcfg-mgmt-bo")," and update the lines associated with bonding slaves and bonding mode:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"BONDING_SLAVE_0='ens5'\nBONDING_SLAVE_1='ens6'\nBONDING_MODULE_OPTS='miimon=100 mode=balance-tlb '\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart the network with the ",(0,r.kt)("inlineCode",{parentName:"p"},"wicked ifreload")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"wicked ifreload mgmt-bo\n")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"A mistake in the configuration may disrupt the SSH session.")))),(0,r.kt)("h3",{id:"configuration-persistence-4"},"Configuration persistence"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Backup the elemental cloud-init file ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cp /oem/90_custom.yaml /oem/install/90_custom.yaml.$(date --iso-8601=minutes)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml")," and update the yaml path ",(0,r.kt)("inlineCode",{parentName:"p"},"stages.initramfs[0].files"),". More specifically, update the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network/ifcfg-mgmt-bo")," file and edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"BONDING_SLAVE_X")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BONDING_MODULE_OPTS")," entries accordingly:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"stages:\n  initramfs:\n  - ...\n    files:\n    - path: /etc/sysconfig/network/ifcfg-mgmt-bo\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |+\n          STARTMODE='onboot'\n          BONDING_MASTER='yes'\n          BOOTPROTO='none'\n          POST_UP_SCRIPT=\"wicked:setup_bond.sh\"\n\n\n          BONDING_SLAVE_0='ens5'\n          BONDING_SLAVE_1='ens6'\n\n          BONDING_MODULE_OPTS='miimon=100 mode=balance-tlb '\n\n          DHCLIENT_SET_DEFAULT_ROUTE='no'\n\n      encoding: \"\"\n      ownerstring: \"\"\n    - path: /etc/sysconfig/network/ifcfg-ens6\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |\n        STARTMODE='hotplug'\n        BOOTPROTO='none'\n      encoding: \"\"\n      ownerstring: \"\"\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you didn't select an interface during installation, you must add an entry to initialize the interface. Please check the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network/ifcfg-ens6")," file creation in the above example. The file name should be ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/network/ifcfg-<interface-name>"),".")))))}d.isMDXComponent=!0}}]);