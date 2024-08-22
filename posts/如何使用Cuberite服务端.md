---
title: 如何使用Cuberite服务端
date: 2023-08-16
tags: [Cuberite,Minecraft]
---
原文:https://book.cuberite.org
修改并删减了一些内容
0 - 简介
0-1 - 什么是库伯石

Cuberite是一个与Minecraft Java版兼容的免费开源（FOSS）游戏服务器。Cuberite 在设计时考虑了性能、可配置性和可扩展性，旨在准确重现大多数原版功能。服务器是用C++编写的，并且有一个广泛的插件系统，允许用户使用 Lua 编写自己的插件。事实上，许多内置命令都是由 Core 插件实现的，它有自己的 GitHub 存储库和开发人员社区。有关插件系统以及如何使用它以及如何开发它的更多信息，请参阅插件。

今天，Cuberite继续存在，这要归功于它的贡献者和插件开发人员。如果你想奖励开发者的工作，你应该在Liberapay上设置捐款。

0-2 - 历史

Cuberite由FakeTruth于2010年底创建，原名“MCServer”，作为原版服务器的替代品，旨在提供更好的性能和可配置性。它后来是开源的，其他开发人员开始做出贡献。

2013年夏天，MCServer的主存储库从Google Code迁移到GitHub，并引入了新的构建系统。大约在那个时候，几个新的开发人员也加入了该项目，该项目的成员和受欢迎程度开始增加。

截至 2014 年底，MCServer 拥有一支由 10 多名常规开发人员组成的团队，代码库已增长到 125，000 多行（不包括注释、空白行和外部库）。2014 年还引入了许多新功能：

块稀疏（减少 RAM 使用量）
新的红石模拟器
新的水和熔岩模拟器
新发电机（和改进的速度）

2015年，许多新开发人员加入了该项目，社区决定采用Cuberite的当前名称。 截至2015年底，Cuberite在GitHub上拥有超过1000颗星。

2020年是Cuberite成立10周年。作为一个长期存在的项目，Cuberite的生命周期经历了几次起伏。尽管有一段时间的冬眠和忙碌的开发人员生活，Cuberite的开发仍然继续，这要归功于新老贡献者。

1 - 安装
1-1 - 预编译版本

对于Windows，Linux，Raspberry Pi或Mac版本，主要下载位置 是官方主页，有最新的 可用的构建版本。对于希望更好地控制构建的开发人员，他们 下载，访问构建服务器。

在 Linux、macOS、FreeBSD 或 Raspberry Pi 上，您只需将此命令粘贴到您的 终端安装库伯石：

curl -sSfL https://download.cuberite.org | sh

下载Cuberite后，您可以直接跳到1-3。

预编译版本比编译安装更快且更易于使用 来源自己，推荐给初学者。然而，对于一些人来说 不存在预编译构建的异常硬件，可能需要 自己编译代码。编译自己也有一个重要的 现代机器的性能优势。如果您知道如何使用该命令 行或想要额外的速度，你应该自己编译 Cuberite。

1-2 - 自己编译 CUBERITE

自己编译需要更长的时间并且涉及更多，但在现代处理器上可以导致高达 1.5 到 3 倍的速度提高。 如果您的操作系统或硬件不受官方支持，编译可能是运行 Cuberite 的唯一方法。

建议 *nix 用户使用自动编译脚本。 自动编译脚本会为您处理编译过程。您只需将此命令复制到终端：

sh -c “$(wget -O - https://compile.cuberite.org)”

如果您更喜欢手动编译，或者想要针对 Windows 进行编译，请参阅主存储库中的 COMPILING.md。

此过程需要使用命令行。如果您不熟悉它，建议您改用预编译的版本。

1-3.运行Cuberite

一旦你有了Cuberite的编译副本，以及支持文件（在大多数情况下，这些文件与可执行文件一起分发，在一个名为Server的目录中），你就可以运行服务器并为自己生成一个世界。运行服务器很容易，尽管方法因您使用的操作系统而异。

windows

要在Windows上运行Cuberite，只需双击可执行文件。一个命令窗口将出现，世界将生成。

LINUX/MAC/BSD

要在 Linux、Mac 或 FreeBSD 上运行 Cuberite，只需在 shell 中运行可执行文件：

./Cuberite
启动Cuberite

就像Vanilla一样，一旦你启动了Cuberite，你就可以加入服务器，或者只是在你的Minecraft客户端中。localhost:25565

2 - 配置基础知识
2-1 - 配置概述

可以通过编辑各种文件来配置库贝特。以下是所有此类文件的列表：

SETTINGS.INI
主配置文件，其中包含服务器范围的配置变量。

WEBADMIN.INI
允许您调整 Web 管理界面，该界面在默认情况下可用。http://localhost:8080http://:8080

<世界名称>/WORLD.INI
此文件配置特定于世界的方面。这是您选择游戏模式的地方。请参阅游戏模式。 请注意，每个世界都有自己的文件，每个文件都存储在 .world.ini/world.ini

MONSTERS.INI
允许您调整怪物行为。

MOTD.TXT
每日消息，在加入您的服务器时向玩家显示。

CRAFTING.TXT，BREWING.TXT，FURNACE.TXT
这三个文件允许您调整制作、酿造和熔炉配方。

FAVICON.PNG
这是将出现在 Minecraft 服务器列表中的图标。您可以将其替换为您自己的。 图标尺寸必须为 64x64。

ITEMS.INI
编辑项目 ID。除非您知道自己在做什么，否则您可能不应该编辑此文件。

在所有文件中，以 开头的行是注释，在所有文件中，以 开头的行是注释。.ini;.txt#

2-2 - 权限

权限允许不同的玩家访问不同的命令和功能。 每个插件都有自己的权限。设置玩家权限最容易通过 Web 管理员完成。 您还可以从服务器控制台使用该命令。 请注意，没有前导斜杠。控制台命令不是 。 要查看 Core 插件提供的默认命令的命令和权限列表， 请参阅核心插件自述文件。rank /rank

要为自己授予操作员身份，请使用控制台中的命令。 或者，您可以使用网络管理员。op

2-3 - 网络管理员

WebAdmin允许您控制Cuberite的各个方面，包括玩家权限。 典型配置如下所示：webadmin.ini

[User:john]

Password=cuberiteRocks

[WebAdmin]

Ports=8080

Enabled=1

在上面的示例中，您可以使用用户名和密码登录到 Web 管理员，方法是将浏览器指向 。如果您在本地运行服务器，请将浏览器指向johncuberiteRockshttp://:8080http://localhost:8080

2-4 - 世界

默认情况下，有三个世界, 每个世界都可以通过编辑进行调整。 您可以使用此文件来编辑重生点位置、游戏模式和难度关卡等内容。 有关详细信息，请参阅配置world.ini。worldworld_netherworld_the_end/world.ini

2-5 - 插件

插件是Cuberite定制的重要方法。有许多不同的第一方和第三方插件可用。

Cuberite插件是用Lua编写的，并通过广泛的API与服务器进行交互。他们是 旨在为具有基本编程经验的任何人轻松编写， 因此，如果现有的插件不能满足您的需求，您可以轻松编写自己的插件。 如果您想学习如何编写自己的插件，请查看指南。

Cuberite有一个插件存储库，您可以在其中公开上传插件并下载其他人拥有的插件 释放。

激活插件

下载插件后，您需要将其放入目录中。 然后，您应该编辑文件的各个部分并在那里添加一个插件条目。 下面是添加名为MyPlugin的插件的示例。Plugins/[Plugins]settings.iniMyNewPlugin

[Plugins]

Core=1

ChatLog=1

MyNewPlugin=1

MyDisabledPlugin=0

编写插件

要开始编写 Cuberite 插件，请阅读本文。Cuberite 插件是用 Lua 编程语言编写的。Cuberite有一个有据可查的API。

你很好！

如果您已经阅读了本文，那么您现在应该有足够的知识来操作 Cuberite 服务器。