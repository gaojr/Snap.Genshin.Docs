# 开发人员文档

本项目及所有子项目已经迁移至使用 .NET 6 × C# 10 + VS2022 编写环境下  
主程序使用了 WPF 作为基础 UI 框架  
*由于 Win UI 3 目前阶段存在大量  BUG  故暂时不使用*

## 实现文档

[Snap Genshin 接口与实现](ApiDoc)

## 克隆Snap Genshin 主项目

```
git clone --recurse-submodules --depth 1 https://github.com/DGP-Studio/Snap.Genshin.git
```

## 生成与调试

要求：`VS2022` ，工作负荷：`.NET 桌面开发（未来可能需要：使用C++的桌面开发，通用Windows平台开发）`
`.NET Compiler Platform SDK`
如果未在下方说明，正常的项目均可按常见的调试方法调试

### 调试 DGP.Genshin

1. 生成 `DGP.Genshin` 项目
1. 将 根目录的 `Metadata` 文件夹复制到 `Build\Debug\net6.0-windows10.0.18362.0`
1. 现在就可以正常调试程序了

## 提交代码

* 如果修改了子库的代码，一定要确保发起子库的PR，否则你的提交是不完整的
* 对主库的修改应当仅包含界面与界面的业务逻辑
* 对子库的修改应当仅包含相关API的交互代码