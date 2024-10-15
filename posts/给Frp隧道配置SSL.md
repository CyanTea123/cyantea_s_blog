---
title: 如何给Frp隧道配置SSL
date: 2024-10-15
tags: [Frp,SSL,Frp配置SSL,frp https,https]
head:
  - - meta
    - name: description
      content: 本文简述了如何给Frp隧道配置SSL证书
  - - meta
    - name: keywords
      content: peg195, peg195's 个人博客, Frp,SSL ,Frp配置SSL ,frp https ,https
---
本文简述了如何给Frp隧道配置SSL证书
---
用家里机子搭网站的朋友都知道，家里没公网只能用内网穿透，很麻烦，而且大厂内网穿透的带宽不多，不够用，小厂多是Frp，SSL难配置。之前我也碰到了这个问题，去网上搜教程却一直搜不到合适的，搜到的一个对的还是个问答，且讲的不明不白，所以我就写了这个教程，供各位参考。  
首先，我们需要两个Frp隧道，一个协议为Http，一个协议为Https（注：如果不需要Http自动跳转Https也可以不要Http隧道）  
然后，下载frpc并在frpc放置的目录里创建frpc.ini，在里面输入你的隧道的配置文件。  
输入完后，就到了正文：配置SSL。在Https隧道里加入以下配置（注：没有Http隧道的把`force_https = true`去掉）：  
```
plugin = https2http #插件名
plugin_local_addr = 127.0.0.1:8080 #服务地址，按需求改
plugin_host_header_rewrite = 127.0.0.1
plugin_crt_path  = / #SSL证书路径，按需求改
plugin_key_path = / #密钥路径，按需求改
plugin_header_X-From_Where = frp
force_https = true #开启http自动跳转https
```  
按上面配置中我标注的注释更改即可  
注：启动后可能会出现如下的报错：
```
2024/10/15 20:38:36 http: TLS handshake error from 127.0.0.1:49422: remote error: tls: unknown certificate
2024/10/15 20:38:37 http: TLS handshake error from 127.0.0.1:49442: EOF
```  
这并不影响访问。  
而访问时如果出现这样的报错：  
```
2024-10-15 20:38:38.633 [W] [httputil/reverseproxy.go:661] http: proxy error: read tcp 127.0.0.1:41964->127.0.0.1:40085: read: connection reset by peer
```  
则说明你的服务地址配置有问题/要穿透的本地服务没有开启，检查你的配置/本地服务状态。  
接下来说明如何去掉浏览器上的“不安全”标识。  
出现“不安全”标识是因为网站的内容并没有完全被加密，这时候我们可以使用Cloudflare的SSL证书+Cloudflare的域名代理，这样就可以去掉浏览器上的“不安全”标识了（属于是用网站速度换用户信任）。