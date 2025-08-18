// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import backTop from "./components/backTop.vue";
import homePage from "./components/Home.vue";
import catalogue from "./components/catalogue.vue";
import catalogueItem from "./components/catalogue-item.vue";
import "./custom/index.css";

/** @type {import('vitepress').Theme} */
export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		// 注册自定义全局组件
		app.component("backTop", backTop);
		app.component("homePage", homePage);
		app.component("catalogue", catalogue);
		app.component("catalogueItem", catalogueItem);
	},
};
