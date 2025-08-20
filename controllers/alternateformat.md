# 交替格式控制器源码分析 (alternateformat.js)

<backTop />

交替格式（Alternate Format）控制器负责实现电子表格中的交替行颜色功能，这是一种常见的数据展示优化方式，可以提高数据的可读性和视觉效果。该控制器提供了预设颜色模板、自定义颜色、范围选择等功能。

<p align="center">
    <img src="/alternateformat-demo.gif" />
</p>

### 核心结构

```javascript
//交替颜色
const alternateformat = {
    rangefocus: false,
    modelfocusIndex: null,
    FixedModelColor: [...],
    getModelBox: function(hasRowHeader, hasRowFooter){...},
    init: function(){...},
    perfect: function(){...},
    checkboxChange: function(hasRowHeader, hasRowFooter){...},
    modelboxOn: function(){...},
    modelToningColor: function(){...},
    addCustomModel: function(format){...},
    colorSelectDialog: function(currenColor, colorType, source){...},
    rangeDialog: function(value){...},
    rangeIsExists: function(range, index){...},
    getRangeMap: function(row, column){...},
    getIndexByFormat: function(format){...},
    getFormatByIndex: function(){...},
    new: function(cellrange){...},
    update: function(){...},
    checksAF: function(r, c, computeMap){...},
    getComputeMap: function(){...},
    compute: function(obj){...},
    ref: function(historyRules, currentRules){...}
}
```

### 核心功能分析

#### 1. 预设颜色模板

在 `FixedModelColor` 数组中定义了 24 组预设颜色方案，每组包含四个部分的颜色配置：

-   `head`：页眉颜色
-   `one`：第一行颜色
-   `two`：第二行颜色
-   `foot`：页脚颜色

每部分都包含前景色（fc）和背景色（bc）两个属性。

<p align="center">
    <img src="/fixed-model-color.png"  />
</p>

#### 2. 初始化功能 (init)

init 函数负责初始化交替格式功能的界面和事件绑定：

1. 创建交替格式对话框
2. 绑定关闭事件
3. 绑定范围选择相关事件
4. 绑定页眉页脚复选框事件
5. 绑定样式模板点击事件
6. 绑定颜色选择事件
7. 绑定移除交替颜色按钮事件

#### 3. 范围处理

范围处理是交替格式功能的重要部分，涉及以下几个关键函数：

-   `rangeDialog`：显示范围选择对话框 [**注意此方法，后续可能用到**]
-   `rangeIsExists`：检查范围是否已存在
-   `getRangeMap`：将行列范围转换为坐标映射

::: warning 注意`rangeDialog`方法

1. 打开获取选区对话框，可以直接调用这个方法。

:::

#### 4. 颜色模板处理

交替格式支持预设模板和自定义模板：

-   `getModelBox`：生成模板选择界面
-   `getIndexByFormat`：根据格式获取模板索引
-   `getFormatByIndex`：根据索引获取格式
-   `addCustomModel`：添加自定义模板

::: tip 注意

1. 自定义颜色这后面是有 div 支持选择颜色的哈，可能源码没有对这个样式做优化，导致用户看不清；
2. 这部分可以对源码做优化，比如：给这个 div 添加一个背景色，或者给这个 div 添加一个边框，或者给这个 div 添加一个阴影等。

<p align="center">
    <img  src='/alternateformat-custom-color.png' />
</p>

3. 这是优化完的效果：

<p align="center">
    <img  src='/alternateformat-custom-color-success.png' />
</p>

前一个表示文本颜色，后一个表示背景颜色。
:::

### 总结

交替格式控制器通过预设模板和自定义功能为用户提供灵活的表格美化选项。其核心在于根据范围和模板计算出颜色映射，并与主渲染流程集成，实现高效的视觉效果展示。同时，通过完善的历史记录机制，支持撤销/重做操作，提升了用户体验。
