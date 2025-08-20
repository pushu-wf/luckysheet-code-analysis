# 打包处理

Luckysheet 使用 Gulp 作为构建工具，通过配置 `gulpfile.js` 文件来管理项目的构建流程,本文将详细分析该文件的结构和功能。

## 核心功能概述

gulpfile.js 文件主要负责以下功能：

1. 清理构建目录
2. 处理和打包核心 JavaScript 代码
3. 合并和压缩 CSS 文件
4. 合并和压缩第三方插件 JavaScript 文件
5. 复制静态资源文件
6. **启动开发服务器并支持热重载**
7. 提供开发和生产两种构建模式

## 依赖模块分析

```javascript
const gulp = require("gulp");
const { src, dest, series, parallel, watch } = require("gulp");
const uglify = require("gulp-uglify");
const gulpif = require("gulp-if");
const cleanCSS = require("gulp-clean-css");
const del = require("delete");
const browserSync = require("browser-sync").create();
const { createProxyMiddleware } = require("http-proxy-middleware");
const concat = require("gulp-concat");
const { rollup } = require("rollup");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("rollup-plugin-terser").terser;
const babel = require("@rollup/plugin-babel").default;
const production = process.env.NODE_ENV === "production" ? true : false;
```

这些模块构成了构建系统的核心：

-   `gulp` 及其核心函数提供了基础的构建能力
-   `uglify` 和 `cleanCSS` 用于压缩 JS 和 CSS 文件
-   `del` 用于清理目录
-   `browser-sync` 提供开发服务器和热重载功能
-   `rollup` 及其插件用于处理模块打包
-   `babel` 用于代码转译

## 路径配置

```javascript
const paths = {
	// 静态资源路径配置
	staticHtml: ["src/*.html"],
	staticFonts: ["src/fonts/**"],
	staticAssets: ["src/assets/**"],
	staticImages: ["src/plugins/images/*.png"],
	staticExpendPlugins: ["src/expendPlugins/**", "!src/expendPlugins/**/plugin.js"],
	staticDemoData: ["src/demoData/*.js"],
	staticCssImages: ["src/css/**", "!src/css/*.css"],

	// 静态资源目标路径
	destStaticHtml: ["dist"],
	destStaticFonts: ["dist/fonts"],
	destStaticAssets: ["dist/assets"],
	destStaticImages: ["dist/plugins/images"],
	destStaticExpendPlugins: ["dist/expendPlugins"],
	destStaticDemoData: ["dist/demoData"],
	destStaticCssImages: ["dist/css"],

	// 核心 ES 模块
	core: ["src/**/*.js", "!src/demoData/*.js", "src/expendPlugins/**/plugin.js", "!src/plugins/js/*.js"],

	// 插件相关路径
	pluginsCss: ["src/plugins/css/*.css"],
	plugins: ["src/plugins/*.css"],
	css: ["src/css/*.css", "node_modules/flatpickr/dist/themes/light.css"],
	pluginsJs: [
		"node_modules/jquery/dist/jquery.min.js",
		"node_modules/uuid/dist/umd/uuid.min.js",
		// 其他第三方库...
	],

	// 合并后的文件名
	concatPluginsCss: "pluginsCss.css",
	concatPlugins: "plugins.css",
	concatCss: "luckysheet.css",
	concatPluginsJs: "plugin.js",

	// 插件目标路径
	destPluginsCss: ["dist/plugins/css"],
	destPlugins: ["dist/plugins"],
	destCss: ["dist/css"],
	destPluginsJs: ["dist/plugins/js"],

	// 打包目录
	dist: "dist",
};
```

路径配置清晰地定义了各类资源的源路径和目标路径，便于管理整个构建流程。

## 核心任务解析

### 清理任务

```javascript
function clean() {
	return del([paths.dist]);
}
```

该任务用于在每次构建前清理 `dist` 目录，确保构建结果的纯净性。

### 核心代码打包

Luckysheet 提供了两种打包方式，但实际使用的是 esbuild：

```javascript
async function core() {
	await require("esbuild").buildSync({
		format: "iife",
		globalName: "luckysheet",
		entryPoints: ["src/index.js"],
		bundle: true,
		minify: production,
		banner: { js: banner },
		target: ["es2015"],
		sourcemap: true,
		outfile: "dist/luckysheet.umd.js",
	});
}
```

使用 esbuild 进行代码打包，具有更快的构建速度，并支持压缩、sourcemap 等功能。

### CSS 处理任务

```javascript
function css() {
	return src(paths.css).pipe(concat(paths.concatCss)).pipe(gulpif(production, cleanCSS())).pipe(dest(paths.destCss));
}
```

该任务将多个 CSS 文件合并为一个 `luckysheet.css` 文件，并在生产环境中进行压缩。

### JavaScript 插件处理

```javascript
function pluginsJs() {
	return src(paths.pluginsJs)
		.pipe(concat(paths.concatPluginsJs))
		.pipe(gulpif(production, uglify(uglifyOptions)))
		.pipe(dest(paths.destPluginsJs));
}
```

将第三方 JavaScript 库合并为一个 `plugin.js` 文件，并在生产环境中进行压缩。

### 静态资源复制

```javascript
function copyStaticHtml() {
	return src(paths.staticHtml).pipe(dest(paths.destStaticHtml));
}
// 类似函数处理其他静态资源
```

将 HTML、字体、图片等静态资源直接复制到目标目录。

## 开发服务器配置

```javascript
function serve(done) {
	browserSync.init(
		{
			server: {
				baseDir: paths.dist,
				middleware: [apiProxy],
			},
			ghostMode: false,
		},
		done
	);
}
```

配置了基于 `dist` 确保在协同编辑场景下不会出现干扰。

## 构建流程组合

```javascript
const dev = series(
	clean,
	parallel(
		pluginsCss,
		plugins,
		css,
		pluginsJs,
		copyStaticHtml,
		copyStaticFonts,
		copyStaticAssets,
		copyStaticImages,
		copyStaticExpendPlugins,
		copyStaticDemoData,
		copyStaticCssImages,
		core
	),
	watcher,
	serve
);
const build = series(
	clean,
	parallel(
		pluginsCss,
		plugins,
		css,
		pluginsJs,
		copyStaticHtml,
		copyStaticFonts,
		copyStaticAssets,
		copyStaticImages,
		copyStaticExpendPlugins,
		copyStaticDemoData,
		copyStaticCssImages,
		core
	)
);

exports.dev = dev;
exports.build = build;
exports.default = dev;
```

通过 Gulp 的 [series](https://www.gulpjs.com.cn/docs/api/series) 和 [parallel](https://www.gulpjs.com.cn/docs/api/parallel) 方法组合各种任务：

-   `dev` 任务用于开发环境，包含文件监听和服务器启动
-   `build` 任务用于生产环境构建

## 特色功能

### 环境区分

```javascript
const production = process.env.NODE_ENV === "production" ? true : false;
```

通过环境变量区分开发和生产环境，在生产环境中进行代码压缩等优化操作。

### 代理配置

```javascript
const apiProxy = createProxyMiddleware("/luckysheet/", {
	target: "http://luckysheet.lashuju.com/",
	changeOrigin: true,
	ws: true,
});
```

配置了 API 代理，方便开发时处理跨域请求。

## 总结

Luckysheet 的构建配置具有以下特点：

1. **模块化设计**：每个功能点都有独立的任务函数，便于维护和扩展
2. **开发体验优化**：提供热重载、代理等开发便利功能
3. **性能优化**：区分开发和生产环境，生产环境自动压缩代码
4. **灵活的资源处理**：支持多种类型资源的处理和复制
5. **现代化工具链**：使用 esbuild 提供快速构建能力

这套构建配置为 Luckysheet 的开发和部署提供了完整解决方案，既满足了开发阶段的便利性需求，又保证了生产环境的性能要求。
