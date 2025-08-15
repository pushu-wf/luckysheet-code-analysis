import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Luckysheet 源码解析",
	description: "",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config

		logo: "/logo.svg", // 表示docs/public/avartar.png
		outline: {
			label: "页面导航",
		},

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
					{ text: "1.2 Luckysheet 是什么", link: "/chapter1/what-is-luckysheet.md" },
					{ text: "1.3 技术选型分析", link: "/chapter1/technical-selection.md" },
				],
			},
			{
				collapsed: true,
				text: "第 2 章：目录结构深度解密",
				items: [
					{ text: "2.1 目录结构", link: "/chapter2/catalogue.md" },
					{ text: "2.2 核心初始化", link: "/chapter2/entry.md" },
				],
			},
			{
				collapsed: true,
				text: "第 3 章：核心模块源码精析",
				items: [
					{ text: "3.1 静态资源", link: "/chapter3/controller.md" },
					{ text: "3.2 控制器模块", link: "/chapter3/controller.md" },
					{ text: "3.3 样式文件", link: "/chapter3/controller.md" },
					{ text: "3.4 本地 Mock Data", link: "/chapter3/controller.md" },
					{ text: "3.5 函数系统", link: "/chapter3/controller.md" },
					{ text: "3.6 全局方法", link: "/chapter3/controller.md" },
					{ text: "3.7 多语言实现", link: "/chapter3/controller.md" },
					{ text: "3.8 全局数据中心", link: "/chapter3/controller.md" },
					{ text: "3.9 工具类", link: "/chapter3/controller.md" },
				],
			},
			{
				collapsed: true,
				text: "第 4 章：关键技术实现剖析",
				items: [
					{ text: "4.1 表格渲染", link: "/chapter4/controller.md" },
					{ text: "4.2 图表系统", link: "/chapter4/controller.md" },
					{ text: "4.3 公式解析与执行", link: "/chapter4/controller.md" },
					{ text: "4.4 协同实现", link: "/chapter4/controller.md" },
				],
			},
			{
				collapsed: true,
				text: "第 5 章：拓展实践",
				items: [
					{ text: "5.1 自定义菜单", link: "/chapter5/controller.md" },
					{ text: "5.2 自定义请求头", link: "/chapter5/controller.md" },
					{ text: "5.3 拓展VChart", link: "/chapter5/controller.md" },
				],
			},
			{
				collapsed: true,
				text: "第 6 章：附录",
				items: [
					{ text: "6.1 配置说明", link: "/chapter6/apis.md" },
					{ text: "6.2 API 参考", link: "/chapter6/apis.md" },
					{ text: "6.3 教程与资源", link: "/chapter6/apis.md" },
					{ text: "6.4 常见问题", link: "/chapter6/apis.md" },
				],
			},
		],

		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
	},
});
