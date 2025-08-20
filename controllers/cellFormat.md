# cellFormat 源码解析

<backTop />

`cellFormat.js` 控制器模块负责处理 Luckysheet 中单元格格式保护相关的功能。主要包括单元格锁定和隐藏功能，这是电子表格保护机制的重要组成部分，允许用户保护特定单元格不被意外修改或查看。

<p align="center">
    <img src="/cellFormat-demo.gif" />
</p>

::: tip 提示
这部分可以实现精细的单元格权限控制，结合 server.js 协同用户体系，实现不同用户对不同单元格的权限控制。
:::

#### 核心功能

1. **单元格锁定(lo)**：防止单元格被编辑
2. **单元格隐藏(hi)**：隐藏单元格内容，使其对用户不可见
3. **批量设置**：支持对选中区域的多个单元格同时设置保护属性
4. **状态显示**：在界面中显示当前选中单元格的保护状态

### 模块结构

```javascript
import Store from '../store';
import { replaceHtml,transformRangeToAbsolute,openSelfModel } from '../utils/util';
import { modelHTML } from './constant';
import sheetmanage from './sheetmanage';
import menuButton from './menuButton';
import {checkProtectionNotEnable} from './protection';
import { jfrefreshgrid } from '../global/refresh';
import locale from '../locale/locale';
import { setcellvalue } from '../global/setdata';

let isInitialCellFormatModel = false;

function initialCellFormatModelEvent(){...}
function recycleSeletion(cycleFunction, dataIsNullFunction){...}
function initialCellFormatModel(){...}
export function openCellFormatModel(){...}
```

该模块主要依赖以下模块：

-   `Store`：全局状态管理
-   `util`：工具函数集合
-   `constant`：常量定义
-   `sheetmanage`：工作表管理
-   `menuButton`：菜单按钮处理
-   `protection`：保护功能相关
-   `refresh`：界面刷新
-   `locale`：国际化
-   `setdata`：数据设置

### 核心函数解析

#### openCellFormatModel

这是模块的入口函数，负责打开单元格格式设置对话框。

```javascript
export function openCellFormatModel() {
	initialCellFormatModel();

	const _locale = locale();
	const local_cellFormat = _locale.cellFormat;
	const locale_button = _locale.button;

	$("#luckysheet-rightclick-menu").hide();

	if (!checkProtectionNotEnable(Store.currentSheetIndex)) {
		return;
	}
	// ... 其他代码
}
```

该函数首先初始化单元格格式模型，然后检查当前工作表是否启用了保护功能。如果保护功能未启用，则直接返回。

#### initialCellFormatModel

初始化单元格格式设置模型，包括创建对话框和绑定事件。

```javascript
function initialCellFormatModel() {
	if (isInitialCellFormatModel) {
		return;
	}

	isInitialCellFormatModel = true;
	// ... 创建对话框和绑定事件
}
```

使用 `isInitialCellFormatModel` 标志避免重复初始化。

#### recycleSeletion

这是一个工具函数，用于遍历当前选中的所有单元格并执行指定操作。

```javascript
function recycleSeletion(cycleFunction, dataIsNullFunction) {
	if (Store.luckysheet_select_save != null && Store.luckysheet_select_save.length > 0) {
		let sheetFile = sheetmanage.getSheetByIndex(),
			data = sheetFile.data;
		if (data != null) {
			// 遍历选中区域的所有单元格
			for (let i = 0; i < Store.luckysheet_select_save.length; i++) {
				let selection = Store.luckysheet_select_save[i];
				let row = selection.row,
					column = selection.column;
				for (let r = row[0]; r <= row[1]; r++) {
					for (let c = column[0]; c <= column[1]; c++) {
						// 处理合并单元格
						let margeset = menuButton.mergeborer(data, r, c);
						if (!!margeset) {
							let row_index = margeset.row[2];
							let col_index = margeset.column[2];
							cell = data[row_index][col_index];
						} else {
							cell = data[r][c];
						}
						cycleFunction(cell, r, c, data);
					}
				}
			}
		} else {
			dataIsNullFunction();
		}
		return data;
	}
}
```

该函数考虑了合并单元格的情况，确保对合并单元格只处理一次。

#### initialCellFormatModelEvent

绑定单元格格式设置对话框的事件处理函数。

```javascript
function initialCellFormatModelEvent() {
	const _locale = locale();
	const local_cellFormat = _locale.cellFormat;

	$("#luckysheet-cellFormat-confirm").click(function () {
		let locked = $("#luckysheet-protection-check-locked").is(":checked");
		let hidden = $("#luckysheet-protection-check-hidden").is(":checked");

		locked = locked == true ? 1 : 0;
		hidden = hidden == true ? 1 : 0;

		let d = recycleSeletion(
			function (cell, r, c, data) {
				if (cell == null) {
					setcellvalue(r, c, data, {
						lo: locked,
						hi: hidden,
					});
				} else {
					cell.lo = locked;
					cell.hi = hidden;
				}
			},
			function () {
				alert(local_cellFormat.sheetDataIsNullAlert);
			}
		);

		jfrefreshgrid(d, undefined, undefined, false);

		$("#luckysheet-cellFormat-config").hide();
		$("#luckysheet-modal-dialog-mask").hide();
	});
}
```

在确认按钮的点击事件中，获取用户设置的锁定和隐藏状态，并应用到所有选中的单元格。

### 数据结构

单元格保护属性通过以下两个字段存储：

-   `lo`：锁定状态 (locked)
    -   `1`：锁定（默认）
    -   `0`：未锁定
-   `hi`：隐藏状态 (hidden)
    -   `1`：隐藏
    -   `0`：不隐藏（默认）

### 保护机制

模块通过 `checkProtectionNotEnable` 函数检查当前工作表是否启用了保护：

```javascript
if (!checkProtectionNotEnable(Store.currentSheetIndex)) {
	return;
}
```

只有在工作表未启用保护或用户有权限编辑的情况下，才能修改单元格的保护属性。

### 总结

`cellFormat.js` 模块实现了 Luckysheet 中的单元格保护功能，通过锁定和隐藏两种方式保护单元格数据。该模块设计合理，考虑了合并单元格等特殊情况，并与系统的其他部分良好集成。
