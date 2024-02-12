# 快速开始

## 需求

| Leaves 版本 | 推荐的 Java 版本 |
| ----------- | ---------------- |
| 1.17.1+     | Java 21          |

## 下载 Leaves

Leaves 在我们的[网站的下载页面](https://leavesmc.top/downloads/leaves) 直接提供可运行的服务端。

点击构建号以下载文件。

## 运行服务端

要运行服务端，只需要像其它 Java 程序一样启动即可。

打开终端，导航到 Leaves 所在的位置，然后运行 `java -Xms2G -Xmx2G -jar leaves.jar --nogui`。别忘了将 `leaves.jar`
修改为你下载的文件名。

修改 `-Xms` 和 `-Xmx` 来设置使用的内存。`nogui` 用于禁用原版的 GUI，因此在使用命令行运行时不会出现双重界面。

有关更高级的 Java 调整，请参阅 [Aikar's Flags](https://docs.papermc.io/paper/aikars-flags)。

还可以使用[启动脚本生成器](https://docs.papermc.io/misc/tools/start-script-gen)为你的服务器生成启动脚本。

要配置服务端，请查看 [Leaves 配置](../reference/configuration)
和 [Paper 配置](https://docs.papermc.io/paper/reference/configuration)。
