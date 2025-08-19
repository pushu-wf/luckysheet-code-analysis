# 初始化

初始化这部分分析的是 `core.js` 内部的实现哈。

> index.html 内部执行的 create 方法来自 core.js

## 将 api 挂载到 luckysheet 对象上

`core.js` 正文的第一步，就是将导入的 api 挂载到 `luckysheet` 对象上：

```js
let luckysheet = {};

// mount api
// luckysheet.api = api;
// Object.assign(luckysheet, api);

luckysheet = common_extend(api, luckysheet);
```

## 实现 create 方法

我们来分析下 create 方法的实现,对方法内的关键节点做解析：

**1. 置空容器，并重置相关参数**

```js
method.destroy();
```

<p align="center">
    <img  src='/methods-destroy.png' />
</p>

**2. 合并用户传入的配置项**

```js
let extendsetting = common_extend(defaultSetting, setting);

let loadurl = extendsetting.loadUrl,
	menu = extendsetting.menu,
	title = extendsetting.title;

let container = extendsetting.container;
Store.container = container;
// other settings
```

**3. 初始化插件**

```js
// Register plugins
initPlugins(extendsetting.plugins, extendsetting);
Store.plugins = extendsetting.plugins;
```

**4. 创建 loading**

```js
//loading
const loadingObj = luckysheetlodingHTML("#" + container);
Store.loadingObj = loadingObj;
```

<p align="center">
    <img  src='/loading.png' />
</p>

很多对 loading 的操作，都通过这个 loadingObj 实现，`luckysheetlodingHTML` 内部返回一个对象：

```js
return {
	el: loading,
	show: show,
	close: close,
};
```

对 loading 的定制，可以看下具体的配置：

```js
const loadingHtml = `
    <div class="luckysheet-loading-content"> 
        <div class="${config.imageClass} luckysheet-loading-image">
            ${imageHtml}
        </div>
        <div class="${config.textClass} luckysheet-loading-text">
        <span>${config.text}</span>
        </div>    
    </div>`;
```

::: details 源码传送门
[https://gitee.com/mengshukeji/Luckysheet/tree/master/src/controllers/constant.js](https://gitee.com/mengshukeji/Luckysheet/tree/master/src/controllers/constant.js)

[https://github.com/dream-num/Luckysheet/tree/master/src/controllers/constant.js](https://github.com/dream-num/Luckysheet/tree/master/src/controllers/constant.js)

:::

**5. 是否动态获取表格数据**

获取表格需要提供一个 post 的接口，并返回规范的数据结构。

::: danger 注意

1. 源码中直接使用 $.post() 实现的，不支持添加请求头及其他数据类型，只能通过 params 参数进行传递
2. 后续这部分会告诉大家如何自定义请求头实现权限校验
3. 源码的实现，是支持单独传递 loadurl 而不需要 allowUpdate , 两者并非硬性绑定使用。

:::

```js
if (loadurl == "") {
	sheetmanage.initialjfFile(menu, title);
	// luckysheetsizeauto();
	initialWorkBook();
} else {
	$.post(loadurl, { gridKey: server.gridKey }, function (d) {
		let data = new Function("return " + d)();
		Store.luckysheetfile = data;

		sheetmanage.initialjfFile(menu, title);
		// luckysheetsizeauto();
		initialWorkBook();

		//需要更新数据给后台时，建立WebSocket连接
		if (server.allowUpdate) {
			server.openWebSocket();
		}
	});
}
```

**6. 总结**

1. 我们需要关注的是用户传递的参数是如何绑定到 luckysheet 上的，以及绑定到何处，后续我们需要实现自定义菜单、自定义请求头等都需要关注这个实现；
2. 同时对 loading 对象的方法也要清晰，大家可能需要主动调用 close 方法，亦或者根据不同的状态，显示不同的文本；
3. 还需要对 $.post 这个方法有所了解，对底层的请求(特别是 JQuery Ajax 方法有所了解),后续对请求做调整，都是基于此实现。

## initialWorkBook

initialWorkBook 是 luckysheet 初始化的关键方法，如何初始化一个工作簿呢？这里涉及一些 controllers 中的方法，直接跳转到到相应方法中，这里就不贴代码了，大家可以自行查看。

[luckysheetHandler]()

[initialFilterHandler]()

[initialMatrixOperation]()

[initialSheetBar]()

[formulaBarInitial]()

[rowColumnOperationInitial]()

[keyboardInitial]()

[orderByInitial]()

[zoomInitial]()

[initListener]()
