# 开发人员文档

本项目及所有子项目已经迁移至使用 .NET 6 × C# 10 + VS2022 编写环境下  
主程序使用了 WPF 作为基础 UI 框架  
*由于 Win UI 3 目前阶段存在大量  BUG  故暂时不使用*

## 实现文档

[Snap Genshin 项目结构](ApiDoc)

## 克隆Snap Genshin 主项目

```
git clone --recurse-submodules --depth 1 https://github.com/DGP-Studio/Snap.Genshin.git
```

## 生成与调试

要求：`Visual Studio 2022` 
，工作负荷：  
* `.NET 桌面开发`
* `.NET Compiler Platform SDK`
* 未来可能需要：使用C++的桌面开发，通用Windows平台开发）  

### 调试 DGP.Genshin

1. 生成 `DGP.Genshin` 项目
1. 将 根目录的 `Metadata` 文件夹复制到 `Build\Debug\net6.0-windows10.0.18362.0`
1. 现在就可以正常调试了