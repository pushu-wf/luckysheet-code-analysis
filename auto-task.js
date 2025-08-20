// 自动创建文件
const fs = require("fs");

// 定义文件列表
const fileList = [
	"alternateformat",
	"cellDataPickerCtrl",
	"cellFormat",
	"canditionFormat",
	"constant",
	"controlHistory",
	"dataVerificationCtrl",
	"dropCell",
	"expendPlugins",
	"filter",
	"formulaBar",
	"freezen",
	"handler",
	"hyperlinkCtrl",
	"ifFormulaGenerator",
	"imageCtrl",
	"imageUpdateCtrl",
	"inlineString",
	"insertFormula",
	"keyboard",
	"listener",
	"locationCell",
	"luckysheetConfigsetting",
	"matrixOperation",
	"menuButton",
	"mobile",
	"moreFormat",
	"orderBy",
	"pivotTable",
	"postil",
	"protection",
	"resize",
	"rowColumnOperation",
	"searchReplace",
	"select",
	"selection",
	"server",
	"sheetBar",
	"sheetmanage",
	"sheetMove",
	"sheetSearch",
	"sparkline",
	"splitColumn",
	"toolbar",
	"updateCell",
	"zoom",
];

// 文件路径
const path = "./controllers";

(async () => {
	for (let i = 0; i < fileList.length; i++) {
		const fileName = fileList[i];
		const filePath = `${path}/${fileName}.md`;
		// 先判断文件是否存在
		const exits = fs.existsSync(filePath);
		// 如果存在，则删除文件
		if (exits) fs.unlinkSync(filePath);
		// 创建文件
		fs.writeFileSync(
			filePath,
			`# ${fileName}
            <backTop />`
		);
	}
})();
