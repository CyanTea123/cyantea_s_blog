---
title: 一个关于hinas换路由器也能连接的设想
date: 2024-08-23
tags: [hinas]
head:
  - - meta
    - name: description
      content: peg195's 个人博客
  - - meta
    - name: keywords
      content: peg195, peg195's 个人博客, hinas, ecoo, 海纳思
---
使用Zerotier或tailscale这类虚拟私人网络服务也许能够实现让刷了hinas的机顶盒在换路由器后也能使用虚拟内网IP从外部连接
---
以前在使用刷上hinas的机顶盒的时候总有点麻烦，因为hinas不会被自动分配IP，一旦换了一个路由器，连接hinas的ssh是一件很头疼的事。<br>
之后为了开MC服务器整一个内网穿透就去了解了Zerotier这类虚拟网络，用于MC服务器的内网穿透。<br>
后来，我突发奇想：使用Zerotier或tailscale这类虚拟私人网络服务也许能够实现让刷了hinas的机顶盒在换路由器后也能使用虚拟内网IP从外部连接？<br>
但是我并没有实践，这只是个设想，也许以后有时间我会去试验吧。