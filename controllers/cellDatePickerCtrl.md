# cellDatePickerCtrl 源码解析

<backTop />

`cellDatePickerCtrl` 控制器负责处理 Luckysheet 中日期选择器的显示和交互。当用户在含有日期格式的单元格中进行编辑时，会弹出一个日期选择器，方便用户选择日期和时间。

该模块使用了 [flatpickr](https://flatpickr.js.org/) 作为日期选择器组件，并结合 [dayjs](https://day.js.org/) 进行日期处理。

<p align="center">
    <img  src='/cellDatePickerCtrl-demo.gif' />
</p>

### 引入的模块

```javascript
import menuButton from "./menuButton";
import formula from "../global/formula";
import Store from "../store";
import flatpickr from "flatpickr";
import dayjs from "dayjs";
import { update, datenum_local } from "../global/format";
import { setCellValue, setCellFormat } from "../global/api";
```

这些依赖模块分别负责：

-   `menuButton`：处理菜单按钮相关操作
-   `formula`：处理公式计算
-   `Store`：全局状态存储
-   [flatpickr](https://flatpickr.js.org/)：第三方日期选择器组件
-   [dayjs](https://day.js.org/)：第三方日期处理库
-   `update, datenum_local`：日期格式化相关函数
-   `setCellValue, setCellFormat`：设置单元格值和格式的 API

### 核心函数

#### fitFormat

```javascript
const fitFormat = (formatStr) => {
	let dateFormat = formatStr.replace(/y/g, "Y");
	dateFormat = dateFormat.replace(/d/g, "D");
	dateFormat = dateFormat.replace(/h/g, "H");

	dateFormat = dateFormat.replace(/上午\/下午/g, "A");
	dateFormat = dateFormat.replace(/上午/g, "A");
	dateFormat = dateFormat.replace(/下午/g, "A");

	dateFormat = dateFormat.replace(/AM\/PM/g, "A");
	dateFormat = dateFormat.replace(/AM/g, "A");
	dateFormat = dateFormat.replace(/PM/g, "A");
	dateFormat = dateFormat.replace(/\"/g, "");

	if (dateFormat.includes("A")) {
		dateFormat = dateFormat.replace(/H/g, "h");
	}
	return dateFormat;
};
```

该函数用于将 Excel 风格的日期格式转换为 flatpickr 可识别的格式：

1. 将 y、d、h 分别替换为大写的 Y、D、H
2. 将中文和英文的上午/下午标识统一替换为 A
3. 移除引号
4. 如果包含 A（上午/下午），将 H 替换为 h（12 小时制）

#### cellFocus

这是模块的核心方法，负责初始化并显示日期选择器。

##### 参数说明

-   `r`: 单元格行索引
-   `c`: 单元格列索引
-   `cell`: 单元格对象

##### 主要功能

1. 计算单元格的位置和尺寸：

```javascript
let row = Store.visibledatarow[r],
	row_pre = r == 0 ? 0 : Store.visibledatarow[r - 1];
let col = Store.visibledatacolumn[c],
	col_pre = c == 0 ? 0 : Store.visibledatacolumn[c - 1];
```

2. 处理合并单元格的情况：

```javascript
let margeset = menuButton.mergeborer(Store.flowdata, r, c);
if (!!margeset) {
	row = margeset.row[1];
	row_pre = margeset.row[0];
	col = margeset.column[1];
	col_pre = margeset.column[0];
}
```

3. 设置日期选择器的样式和位置：

```javascript
$(".cell-date-picker")
	.show()
	.css({
		width: col - col_pre + 1,
		height: row - row_pre + 1,
		left: col_pre,
		top: row_pre,
	});
```

4. 根据单元格的日期格式配置日期选择器选项：

```javascript
let type = cell.ct.fa || "YYYY-MM-DD";
let defaultDate = update("yyyy-MM-dd hh:mm:ss", cell.v);
let dateFormat = fitFormat(type);
```

    根据格式字符串判断是否启用时间选择、是否显示日历、是否启用秒选择等。

5. 初始化 flatpickr 实例：

```javascript
const fp = flatpickr("#luckysheet-input-box", {
	allowInput: false,
	noCalendar,
	enableSeconds,
	enableTime,
	dateFormat,
	time_24hr,
	defaultDate,
	// ... 其他配置项
});
```

6. 配置关键回调函数：
    - `onClose`: 关闭时销毁实例
    - `parseDate`: 使用 dayjs 解析日期
    - `formatDate`: 格式化日期显示，支持中文上午/下午
    - `onChange`: 选择日期后的处理逻辑，更新单元格值

### 工作流程

1. 当用户点击含有日期格式的单元格进入编辑状态时，触发 `cellFocus` 方法
2. 根据单元格的格式信息配置日期选择器
3. 计算单元格在界面上的位置和尺寸，设置日期选择器的位置
4. 初始化 flatpickr 实例并显示日期选择器
5. 用户选择日期后，更新单元格的值和格式
6. 如果不包含时间部分，触发公式更新

### 总结

cellDatePickerCtrl 模块通过集成 flatpickr 组件，为 Luckysheet 提供了直观的日期选择功能。它能够根据单元格的格式自动调整日期选择器的配置，支持多种日期时间格式，并与 Luckysheet 的数据更新机制良好集成。
