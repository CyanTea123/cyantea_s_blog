---
title: 在Gitlab Pages上部署VitePress-Theme-BlueArchive
date: 2024-09-07
tags: [Gitlab,VitePress-Theme-BlueArchive,Gitlab CI,Gitlab Pages]
head:
  - - meta
    - name: description
      content: Gitlab Pages在国内并没有被墙，且访问速度较快，CI部署好用，是部署静态站点的理想选择。这篇文章中主要讲述了如何在Gitlab上部署VitePress-Theme-BlueArchive博客系统
  - - meta
    - name: keywords
      content: Gitlab, VitePress-Theme-BlueArchive, Gitlab CI, Gitlab Pages
---
Gitlab Pages在国内并没有被墙，且访问速度较快，CI部署好用，是部署静态站点的理想选择。这篇文章中主要讲述了如何在Gitlab上部署VitePress-Theme-BlueArchive博客系统
---
注意：本文内容只适用于Gitlab，极狐Gitlab由于阉割了Pages所以无法实现本文所述内容。Gitlab注册需要验证，且不支持中国大陆（+86）手机号，建议找免费的在线国外号码来验证。  
首先，导入或创建仓库，使仓库内有[VitePress-Theme-BlueArchive的源码](https://github.com/Alittfre/VitePress-Theme-BlueArchive)即可。  
接着，在仓库根目录创建.gitlab-ci.yml文件，并输入以下内容：  
<code>
# The Docker image that will be used to build your app
image: node:20
# Functions that should be executed before the build script is run
before_script: []
pages:
  script:
    - npm add -D vitepress
    - npm run build
    - rm -rf public/*
    - mv .vitepress/dist/* public
  artifacts:
    paths:
      # The folder that contains the files to be exposed at the Page URL
      - public
  rules:
    # This ensures that only pushes to the default branch will trigger
    # a pages deploy
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
<code>  
然后提交。提交后，构建过程应该会自动启动。  
构建完成后，进入 Deploy > Pages 查看分配的域名。  
PS：建议自己绑个域名，Gitlab分配的域名会很长。如果没有域名，也可以[来这里](https://dns.dfggmc.top/)获得免费的二级域名：https://dns.dfggmc.top  
之后按自己需求配置即可，每次推送都会自动启动构建。