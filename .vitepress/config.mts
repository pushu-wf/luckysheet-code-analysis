import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Luckysheet 源码解析",
	description: "",
	appearance: false, // 禁用主题切换
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config

		logo: "/logo.svg", // 表示docs/public/avartar.png
		outline: {
			label: "页面导航",
		},

		search: { provider: "local" },

		nav: [
			{ text: "文档", link: "https://dream-num.github.io/LuckysheetDocs/zh/guide/", target: "_blank" },
			{ text: "在线体验", link: "https://dream-num.github.io/LuckysheetDemo/", target: "_blank" },
		],

		sidebar: [
			{
				collapsed: true,
				text: "第 1 章：项目全景概览",
				items: [
					{ text: "1.1 项目概述", link: "/chapter1/overview.md" },
					{ text: "1.2 技术选型分析", link: "/chapter1/technical-selection.md" },
					{ text: "1.3 目录结构", link: "/chapter1/catalogue.md" },
				],
			},
			{
				collapsed: true,
				text: "第 2 章：核心模块精析",
				items: [
					{ text: "2.1 初始化", link: "/chapter2/core.md" },
					{ text: "2.2 打包处理", link: "/chapter2/build.md" },
					{ text: "2.3 静态资源", link: "/chapter2/assets.md" },
					{ text: "2.4 控制器模块", link: "/chapter2/controller.md" },
					{ text: "2.5 样式文件", link: "/chapter2/css.md" },
					{ text: "2.6 本地 Mock Data", link: "/chapter2/mock-data.md" },
					{ text: "2.7 插件系统", link: "/chapter2/expend-plugins.md" },
					{ text: "2.8 函数系统", link: "/chapter2/function.md" },
					{ text: "2.9 全局方法", link: "/chapter2/global.md" },
					{ text: "2.10 多语言实现", link: "/chapter2/locale.md" },
					{ text: "2.11 全局数据中心", link: "/chapter2/store.md" },
					{ text: "2.12 工具类", link: "/chapter2/utils.md" },
				],
			},
			{
				collapsed: true,
				text: "第 3 章：关键技术剖析",
				items: [
					{ text: "3.1 表格渲染", link: "/chapter3/draw.md" },
					{ text: "3.2 图表系统", link: "/chapter3/chart.md" },
					{ text: "3.3 公式解析与执行", link: "/chapter3/formula.md" },
					{ text: "3.4 协同实现", link: "/chapter3/server.md" },
				],
			},
			{
				collapsed: true,
				text: "第 4 章：拓展实践",
				items: [
					{ text: "4.1 自定义菜单", link: "/chapter4/custom-menu.md" },
					{ text: "4.2 自定义请求头", link: "/chapter4/request-header.md" },
					{ text: "4.3 拓展VChart", link: "/chapter4/vchart.md" },
					{ text: "4.4 打包后 dist 包处理", link: "/chapter4/vchart.md" },
				],
			},
			{
				collapsed: true,
				text: "第 5 章：附录",
				items: [
					{
						text: "5.1 配置说明",
						link: "https://dream-num.github.io/LuckysheetDocs/zh/guide/config.html#%E9%85%8D%E7%BD%AE%E9%A1%B9",
						target: "_blank",
					},
					{ text: "5.2 API 参考", link: "https://dream-num.github.io/LuckysheetDocs/zh/guide/api.html", target: "_blank" },
					{ text: "5.3 教程与资源", link: "https://dream-num.github.io/LuckysheetDocs/zh/guide/resource.html", target: "_blank" },
					{ text: "5.4 常见问题", link: "https://dream-num.github.io/LuckysheetDocs/zh/guide/FAQ.html", target: "_blank" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/pushu-wf/luckysheet-code-analysis" },
			{ icon: "gitee", link: "https://gitee.com/wfeng0/luckysheet-code-analysis" },
		],
	},
});
