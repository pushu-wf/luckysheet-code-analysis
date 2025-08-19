# 目录结构

<backTop/>

::: danger 温馨提示
点击目录可直接跳转到详细介绍
:::

## 目录

<!-- 自定义目录组件实现 - 类似 Element  Collapse 折叠面板 -->
<catalogue />

## docs

/docs 文件夹主要为 Luckysheet 的文档，包含技术选型、目录结构、依赖库、目录结构、开发流程、部署流程、常见问题、贡献指南、许可协议等信息，使用 `vuepress` 构建的，内部分英文文档及中文文档，结构为：

```markdown
docs
| - .vuepress
| - about
| - guide
| - zh
| |- about
| |- guide
```

::: tip 温馨提示
该文档启动后与官网无异，想查看文档，可移步[官网](https://dream-num.github.io/LuckysheetDocs/zh/guide/)
:::

::: details 源码传送门
[https://gitee.com/mengshukeji/Luckysheet/tree/master/docs](https://gitee.com/mengshukeji/Luckysheet/tree/master/docs)

[https://github.com/dream-num/Luckysheet/tree/master/docs](https://github.com/dream-num/Luckysheet/tree/master/docs)

:::

## data

data 文件夹下只有一个 chartJson.js 文件，用于处理图表数据。提供了图表基础数据模板、字体大小、线宽等其他可配置选项。

::: details 源码传送门
[https://gitee.com/mengshukeji/Luckysheet/tree/master/src/data](https://gitee.com/mengshukeji/Luckysheet/tree/master/src/data)

[https://github.com/dream-num/Luckysheet/tree/master/src/data](https://github.com/dream-num/Luckysheet/tree/master/src/data)

:::

## fonts

fontawesome 字体。

::: details 源码传送门
[https://gitee.com/mengshukeji/Luckysheet/tree/master/src/fonts](https://gitee.com/mengshukeji/Luckysheet/tree/master/src/fonts)

[https://github.com/dream-num/Luckysheet/tree/master/src/fonts](https://github.com/dream-num/Luckysheet/tree/master/src/fonts)

:::

## methods

提供快捷的 getter 和 setter 方法，用于获取和设置表格数据。例如：

```js
// get.js
// 1. 获取选区数据
export function getluckysheet_select_save() {}
// 2. 获取可视区行数据
export function getvisibledatarow() {}
// ...

// set.js
// 1. 设置选区数据
export function setluckysheet_select_save(v) {}
// 2. 设置文件对象
export function setluckysheetfile(d) {}
```

::: details 源码传送门
[https://gitee.com/mengshukeji/Luckysheet/tree/master/src/methods](https://gitee.com/mengshukeji/Luckysheet/tree/master/src/methods)

[https://github.com/dream-num/Luckysheet/tree/master/src/methods](https://github.com/dream-num/Luckysheet/tree/master/src/methods)

:::

## plugins

plugins 是外部的依赖模块，用于扩展 Luckysheet 的功能。文件夹下存放的文件如下：

<p align="center">
    <img  src='/plugins-catalog.png' />
</p>

::: details 源码传送门
[https://gitee.com/mengshukeji/Luckysheet/tree/master/src/plugins](https://gitee.com/mengshukeji/Luckysheet/tree/master/src/plugins)

[https://github.com/dream-num/Luckysheet/tree/master/src/plugins](https://github.com/dream-num/Luckysheet/tree/master/src/plugins)

:::

## config.js

文件为 luckysheet 的默认配置文件，其用法就是与用户传入的配置项进行合并：

```js
import defaultSetting from "./config.js";

let extendsetting = common_extend(defaultSetting, setting);

// 执行后续操作
```

## index.html

index.html 文件为 luckysheet 的入口文件，其作用是初始化 luckysheet，提供一个页面操作，整体页面可以分为 4 部分，如下图：

**Part 1: Header 引入静态资源**

<p align="center">
    <img  src='/index-html-header.png' />
</p>

**Part 2: Container Root Element**

<p align="center">
    <img  src='/index-html-container.png' />
</p>

**Part 3: 引入本地模拟数据**

这里的所有文件均直接挂载到 window 对象上

<p align="center">
    <img  src='/index-html-demo-data.png' />
</p>

**Part 4: 执行 create 操作**

<p align="center">
    <img  src='/index-html-create.png' />
</p>

## index.js

这个 `index.js` 是项目的打包入口文件哈，它负责将项目依赖的模块进行打包。**大家对入口文件不要混淆了哈，core.js 是程序入口文件，index.js 是打包入口文件**，给大家对比下两个文件的内容就清晰了：

::: code-group

```js [gulpfile.js]
async function core() {
	await require("esbuild").buildSync({
		format: "iife",
		globalName: "luckysheet",
		entryPoints: ["src/index.js"], // esbuild 打包入口问价集合
		outfile: "dist/luckysheet.umd.js",
		// other options
	});
}
```

```js [index.js]
import { luckysheet } from "./core";

// export default luckysheet;
// use esbuild,bundle iife format
module.exports = luckysheet;
```

```js [core.js]
// Reset parameters after destroying the table
luckysheet.destroy = method.destroy;
luckysheet.create = () => {};

// other methods
export { luckysheet };
```

:::
