---
title: 如何在Cuberite上使用MC统一通行证
date: 2024-08-29
tags: [Cuberite,Minecraft,MC统一通行证]
head:
  - - meta
    - name: description
      content: MC统一通行证是一个第三方的MC帐号验证服务，方便于服主管理服务器玩家。但MC统一通行证的官方方案并不支持Cuberite，所以今天我就在这篇文章中讲述如何在Cuberite中使用MC统一通行证的帐号验证服务。
  - - meta
    - name: keywords
      content: peg195, peg195's 个人博客, Cuberite, Minecraft, MC统一通行证
---
MC统一通行证是一个第三方的MC帐号验证服务，方便于服主管理服务器玩家。但MC统一通行证的官方方案并不支持Cuberite，所以今天我就在这篇文章中讲述如何在Cuberite中使用MC统一通行证的帐号验证服务。
---
众所周知，MC统一通行证是一个第三方的MC帐号验证服务，方便于服主管理服务器玩家。但MC统一通行证的官方方案并不支持Cuberite，所以今天我就在这篇文章中讲述如何在Cuberite中使用MC统一通行证的帐号验证服务。  
首先，我们要知道，Cuberite支持手动更改MC帐号验证服务器地址，就在settings.ini中。  
并且，MC统一通行证的服务器是仿照MojangAPI的，所以可以拿来直接用。  
https://auth.mc-user.com:233/你的服务器ID/api 对应 https://api.mojang.com  
https://auth.mc-user.com:233/你的服务器ID/sessionserver 对应 https://sessionserver.mojang.com  
理论存在，实践开始。以下是settings.ini中原本的认证服务器配置：  
```
[Authentication]
Authenticate=1
AllowBungeeCord=0
OnlyAllowBungeeCord=0
ProxySharedSecret=
Server=sessionserver.mojang.com
Address=/session/minecraft/hasJoined?username=%USERNAME%&serverId=%SERVERID%

[MojangAPI]
NameToUUIDServer=api.mojang.com
NameToUUIDAddress=/profiles/minecraft
UUIDToProfileServer=sessionserver.mojang.com
UUIDToProfileAddress=/session/minecraft/profile/%UUID%?unsigned=false
```  
你可以将上面的认证服务器地址等配置替换为下面的样子：  
```
[Authentication]
Authenticate=1
AllowBungeeCord=0
OnlyAllowBungeeCord=0
ProxySharedSecret=
Server=auth.mc-user.com:233
Address=/你的服务器ID/sessionserver/session/minecraft/profile/%UUID%

[MojangAPI]
NameToUUIDServer=auth.mc-user.com:233
NameToUUIDAddress=/你的服务器ID/api/profiles/minecraft
UUIDToProfileServer=auth.mc-user.com:233
UUIDToProfileAddress=/你的服务器ID/sessionserver/session/minecraft/profile/%UUID%?unsigned=false
```  
接下来让我们详细解析一下修改后的配置。  
首先是`[Authentication]`下的  
```
Server=auth.mc-user.com:233
Address=/你的服务器ID/sessionserver/session/minecraft/profile/%UUID%
```  
我们要知道，服务端在调用server中的数据时，只会调用它需要的那部分（实际上只是我没有找到匹配的api，于是偷懒直接把另一个拿来用了），其他的部分大可不必管。而这部分调用后输出的内容与上面输出的内容（指服务端要调用的内容）一致，所以理论上可以拿来直接用。  
其次是`[MojangAPI]`下的
```
NameToUUIDServer=auth.mc-user.com:233
NameToUUIDAddress=/你的服务器ID/api/profiles/minecraft
```  
这部分与MojangAPI对应，没什么好说的。  
最后是`[MojangAPI]`下的  
```
UUIDToProfileServer=auth.mc-user.com:233
UUIDToProfileAddress=/你的服务器ID/sessionserver/session/minecraft/profile/%UUID%?unsigned=false
```  
这部分也是与MojangAPI对应，没什么好说的。  
通过上面的修改过程，你应该就可以在Cuberite上使用MC统一通行证了。我不100%确定上面内容在你的服务器中的可用性，不保证不出问题（毕竟不是官方支持）。  
要让玩家使用MC统一通行证进入你的服务器，记得把`[Authentication]`下的`Authenticate`的值设为1。  
当然，如果你想让不用MC统一通行证的玩家也能进入你的服务器，那你随意。但如果`Authenticate`为0，那么你做的步骤没有任何意义，皮肤不会显示，MC统一通行证也会被认为是盗版，不会加载皮肤。所以我还是推荐你让玩家使用MC统一通行证进入验证服务器设置为MC统一通行证并且开着帐号验证的服务器，这样既能让离线玩家以像正版的方式进入，也能让你更方便的管理玩家。