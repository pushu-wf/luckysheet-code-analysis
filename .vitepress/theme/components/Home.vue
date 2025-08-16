<template>
	<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark">
		<header class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex h-16 items-center justify-between">
					<div class="flex items-center space-x-2">
						<div class="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-code-xml h-5 w-5 text-white">
								<path d="m18 16 4-4-4-4"></path>
								<path d="m6 8-4 4 4 4"></path>
								<path d="m14.5 4-5 16"></path>
							</svg>
						</div>
						<span class="font-serif font-bold text-xl text-slate-900">Luckysheet 源码解析</span>
					</div>
					<nav class="hidden md:flex items-center space-x-6">
						<a href="#overview" class="text-slate-600 hover:text-blue-600 transition-colors">概览</a>
						<a href="#features" class="text-slate-600 hover:text-blue-600 transition-colors">功能</a>
						<a
							href="https://dream-num.github.io/LuckysheetDocs/zh/guide/"
							target="_blank"
							class="text-slate-600 hover:text-blue-600 transition-colors">
							文档
						</a>
						<a
							href="https://github.com/dream-num/Luckysheet/"
							target="_blank"
							class="text-slate-600 hover:text-blue-600 transition-colors">
							源码
						</a>
						<a href="javascript:void 0;" @click="joinCommunity" class="text-slate-600 hover:text-blue-600 transition-colors">
							社区
						</a>
					</nav>
				</div>
			</div>
		</header>
		<section class="py-20 lg:py-32" id="main">
			<div class="absolute inset-0 overflow-hidden pointer-events-none">
				<div class="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full animate-pulse"></div>
				<div
					class="absolute top-40 right-20 w-24 h-24 bg-cyan-200/40 rounded-full animate-bounce"
					style="animation-delay: 1s"></div>
				<div
					class="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-300/25 rounded-full animate-pulse"
					style="animation-delay: 2s"></div>
				<div
					class="absolute top-1/3 right-1/3 w-16 h-16 bg-cyan-300/35 rounded-full animate-bounce"
					style="animation-delay: 0.5s"></div>
				<div
					class="absolute bottom-20 right-10 w-28 h-28 bg-blue-200/20 rounded-full animate-pulse"
					style="animation-delay: 1.5s"></div>
				<div
					class="absolute top-1/2 left-1/2 w-12 h-12 bg-cyan-200/30 rounded-full animate-bounce"
					style="animation-delay: 3s"></div>
			</div>
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="max-w-4xl mx-auto text-center">
					<span
						data-slot="badge"
						class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
						为开发者而生
					</span>
					<h1 class="font-serif font-bold text-4xl lg:text-6xl text-slate-900 mb-6 leading-tight">
						解锁 <span class="text-blue-600">Luckysheet</span> 的强大架构
					</h1>
					<p class="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
						深入探索 Luckysheet 电子表格的源码结构，理解核心组件设计，掌握前端表格应用的精髓
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							data-slot="button"
							class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 rounded-md has-[&gt;svg]:px-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
							<a href="/chapter1/overview" class="flex items-center justify-center">
								开始探索
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-arrow-right ml-2 h-5 w-5">
									<path d="M5 12h14"></path>
									<path d="m12 5 7 7-7 7"></path>
								</svg>
							</a>
						</button>
						<button
							style="border: #cad5e2 solid 1px"
							data-slot="button"
							class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[&gt;svg]:px-4 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 bg-transparent">
							<a href="https://dream-num.github.io/LuckysheetDemo/" target="_blank" class="flex items-center justify-center">
								<svg
									viewBox="0 0 1024 1024"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									stroke="none"
									width="32"
									height="32">
									<path
										d="M677.973333 599.893333a42.666667 42.666667 0 0 1-30.293333-12.373333l-45.653333-45.653333 60.586666-60.16 15.36 15.36 75.52-75.52a106.666667 106.666667 0 1 0-151.04-151.04l-75.52 75.52 13.653334 13.653333-60.16 60.16-42.666667-42.666667a42.666667 42.666667 0 0 1-12.373333-30.293333 42.666667 42.666667 0 0 1 12.373333-30.293333l105.813333-105.386667a192 192 0 0 1 271.36 271.36l-105.813333 105.813333a42.666667 42.666667 0 0 1-31.146667 11.52zM346.026667 869.546667a191.573333 191.573333 0 0 1-135.68-327.253334l105.386666-105.813333a42.666667 42.666667 0 0 1 60.586667 0l45.653333 45.653333-60.586666 60.16-15.36-15.36-75.52 75.52a106.24 106.24 0 0 0-31.146667 75.52 106.666667 106.666667 0 0 0 182.186667 75.52l75.52-75.52-13.653334-13.653333 60.16-60.586667 42.666667 42.666667a42.666667 42.666667 0 0 1 0 60.16l-105.813333 105.813333a190.293333 190.293333 0 0 1-134.4 57.173334z"></path>
									<path
										d="M422.826667 643.84a42.666667 42.666667 0 0 1-30.293334-12.373333 42.666667 42.666667 0 0 1 0-60.586667l177.066667-176.64a42.666667 42.666667 0 0 1 60.16 60.16l-176.64 177.066667a42.666667 42.666667 0 0 1-30.293333 12.373333z"></path>
								</svg>
								在线体验
							</a>
						</button>
					</div>
				</div>
			</div>
			<!-- 一共有 xxx 位小伙伴学习了 luckysheet 源码，快来加入他们吧！ -->
			<div class="absolute bottom-10 w-full text-center text-gray-500">
				🎉 一共有 <span id="vercount_value_site_pv">0</span> 位小伙伴学习了 luckysheet 源码，快来加入他们吧！
			</div>
		</section>
		<section id="overview" class="py-16 bg-white">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="max-w-3xl mx-auto text-center mb-16">
					<h2 class="font-serif font-bold text-3xl text-slate-900 mb-4">为什么选择我们的源码解析？</h2>
					<p class="text-lg text-slate-600">我们提供最全面、最深入的 Luckysheet 源码分析，帮助开发者快速理解复杂的电子表格架构</p>
				</div>
				<div class="grid md:grid-cols-3 gap-8">
					<div
						data-slot="card"
						class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-slate-200 hover:shadow-lg transition-shadow">
						<div
							data-slot="card-header"
							class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
							<div class="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-code-xml h-6 w-6 text-blue-600">
									<path d="m18 16 4-4-4-4"></path>
									<path d="m6 8-4 4 4 4"></path>
									<path d="m14.5 4-5 16"></path>
								</svg>
							</div>
							<div data-slot="card-title" class="font-semibold font-serif text-xl">架构解析</div>
							<div data-slot="card-description" class="text-muted-foreground text-sm">
								深入分析 Luckysheet 的模块化设计，理解组件间的依赖关系和数据流
							</div>
						</div>
					</div>
					<div
						data-slot="card"
						class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-slate-200 hover:shadow-lg transition-shadow">
						<div
							data-slot="card-header"
							class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
							<div class="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-zap h-6 w-6 text-cyan-600">
									<path
										d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
								</svg>
							</div>
							<div data-slot="card-title" class="font-semibold font-serif text-xl">性能优化</div>
							<div data-slot="card-description" class="text-muted-foreground text-sm">
								学习 Luckysheet 如何处理大量数据，掌握前端性能优化的最佳实践
							</div>
						</div>
					</div>
					<div
						data-slot="card"
						class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-slate-200 hover:shadow-lg transition-shadow">
						<div
							data-slot="card-header"
							class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
							<div class="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-file-text h-6 w-6 text-slate-600">
									<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
									<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
									<path d="M10 9H8"></path>
									<path d="M16 13H8"></path>
									<path d="M16 17H8"></path>
								</svg>
							</div>
							<div data-slot="card-title" class="font-semibold font-serif text-xl">实战案例</div>
							<div data-slot="card-description" class="text-muted-foreground text-sm">
								通过真实的代码示例，学习如何基于 Luckysheet 实现二次开发
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="features" class="py-16 bg-slate-50">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="max-w-6xl mx-auto">
					<div class="text-center mb-16">
						<h2 class="font-serif font-bold text-3xl text-slate-900 mb-4">核心功能模块</h2>
						<p class="text-lg text-slate-600">全面覆盖 Luckysheet 的各个核心模块，从基础到高级</p>
					</div>
					<div class="grid lg:grid-cols-2 gap-8">
						<div
							style="background-color: #fff"
							data-slot="card"
							class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6 border-slate-200">
							<div
								data-slot="card-header"
								class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-4">
								<div data-slot="card-title" class="font-semibold font-serif text-xl flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-book-open mr-3 h-5 w-5 text-blue-600">
										<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
										<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
									</svg>
									核心引擎分析
								</div>
							</div>
							<div data-slot="card-content" class="px-6 space-y-3">
								<div class="flex items-center justify-between">
									<span class="text-slate-600">渲染引擎</span>

									<span
										data-slot="badge"
										class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">
										Canvas
									</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-slate-600">数据管理</span>

									<span
										data-slot="badge"
										class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">
										状态管理
									</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-slate-600">事件系统</span>
									<span
										data-slot="badge"
										class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">
										观察者模式
									</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-slate-600">公式计算</span>
									<span
										data-slot="badge"
										class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">
										表达式解析
									</span>
								</div>
							</div>
						</div>
						<div
							style="background-color: #fff"
							data-slot="card"
							class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6 border-slate-200">
							<div
								data-slot="card-header"
								class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 pb-4">
								<div data-slot="card-title" class="font-semibold font-serif text-xl flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-users mr-3 h-5 w-5 text-cyan-600">
										<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
										<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									</svg>
									交互功能解析
								</div>
							</div>
							<div data-slot="card-content" class="px-6 space-y-3">
								<div class="flex items-center justify-between">
									<span class="text-slate-600">选择器</span>
									<span
										data-slot="badge"
										class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">
										多选支持
									</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-slate-600">编辑器</span>
									<span
										data-slot="badge"
										class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">
										富文本
									</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-slate-600">协同编辑</span>
									<span
										data-slot="badge"
										class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">
										实时同步
									</span>
								</div>
								<div class="flex items-center justify-between">
									<span class="text-slate-600">撤销重做</span>

									<span
										data-slot="badge"
										class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90">
										命令模式
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="py-20 bg-blue-600">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="max-w-3xl mx-auto text-center">
					<h2 class="font-serif font-bold text-3xl text-white mb-4">准备好深入探索了吗？</h2>
					<p class="text-xl text-blue-100 mb-8">加入我们的开发者社区，一起学习和分享 Luckysheet 的技术精髓</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							data-slot="button"
							class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 rounded-md has-[&gt;svg]:px-4 bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
							<a href="/chapter1/overview">立即开始学习</a>
						</button>

						<button
							@click="joinCommunity"
							data-slot="button"
							class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[&gt;svg]:px-4 border-blue-400 text-white hover:bg-blue-700 px-8 py-3 bg-transparent">
							加入社区讨论
						</button>
					</div>
				</div>
			</div>
		</section>
		<footer class="py-12 bg-slate-900">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex flex-col md:flex-row justify-between items-center">
					<div class="flex items-center space-x-2 mb-4 md:mb-0">
						<div class="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-code-xml h-5 w-5 text-white">
								<path d="m18 16 4-4-4-4"></path>
								<path d="m6 8-4 4 4 4"></path>
								<path d="m14.5 4-5 16"></path>
							</svg>
						</div>
						<span class="font-serif font-bold text-xl text-white">Luckysheet 源码解析</span>
					</div>
					<div class="text-slate-400 text-sm">© 2025 专为开发者打造的源码学习平台</div>
				</div>
			</div>
		</footer>

		<!-- dialog for community -->
		<div id="dialog-box" data-slot="dialog-overlay" class="fixed inset-0 z-50 bg-black/50" style="display: none">
			<div
				role="dialog"
				id="radix-_r_3_"
				data-slot="dialog-content"
				class="bg-white fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-md"
				tabindex="-1"
				style="pointer-events: auto">
				<!-- Header just us -->
				<div data-slot="dialog-header" class="flex flex-col gap-2 text-center sm:text-left">
					<h2 id="radix-_r_4_" data-slot="dialog-title" class="font-semibold font-serif text-xl text-center">加入我们的社区</h2>
				</div>
				<div dir="ltr" data-orientation="horizontal" data-slot="tabs" class="flex flex-col gap-2 w-full">
					<!-- tab list -->
					<div
						role="tablist"
						aria-orientation="horizontal"
						data-slot="tabs-list"
						class="bg-muted text-muted-foreground h-9 items-center justify-center rounded-lg p-[3px] grid w-full grid-cols-2"
						tabindex="0"
						data-orientation="horizontal"
						style="outline: none">
						<button
							type="button"
							role="tab"
							aria-selected="true"
							aria-controls="radix-_r_6_-content-qq"
							data-state="active"
							id="radix-_r_6_-trigger-qq"
							data-slot="tabs-trigger"
							class="py-1 px-2 data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
							tabindex="0"
							data-orientation="horizontal">
							QQ群
						</button>
						<button
							type="button"
							role="tab"
							aria-selected="false"
							aria-controls="radix-_r_6_-content-wechat"
							data-state="inactive"
							id="radix-_r_6_-trigger-wechat"
							data-slot="tabs-trigger"
							class="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4"
							tabindex="-1"
							data-orientation="horizontal">
							微信群
						</button>
					</div>
					<!-- qq -->
					<div
						data-state="active"
						data-orientation="horizontal"
						role="tabpanel"
						id="qq"
						tabindex="0"
						data-slot="tabs-content"
						class="flex-1 outline-none space-y-4"
						style="animation-duration: 0s">
						<div class="text-center">
							<h3 class="font-medium text-lg mb-2">QQ技术交流群</h3>
							<p class="text-sm text-slate-600 mb-4">扫码加入QQ群，与开发者一起讨论</p>
							<div class="flex justify-center">
								<div
									class="w-48 h-48 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center">
									<img
										alt="QQ群二维码"
										class="w-full h-full object-cover rounded-lg"
										src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/qq-group-qrcode-XdLDRxdDr04xGqXfHoLFhhApicvdX4.png" />
								</div>
							</div>
							<p class="text-sm text-slate-500 mt-2">群号：123456789</p>
						</div>
					</div>
					<!-- wechat -->
					<div
						data-state="inactive"
						hidden
						data-orientation="horizontal"
						role="tabpanel"
						id="wechat"
						tabindex="1"
						data-slot="tabs-content"
						class="flex-1 outline-none space-y-4">
						<div class="text-center">
							<h3 class="font-medium text-lg mb-2">微信技术交流群</h3>
							<p class="text-sm text-slate-600 mb-4">扫码加入微信群，实时交流学习</p>
							<div class="flex justify-center">
								<div
									class="w-48 h-48 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center">
									<img
										alt="微信群二维码"
										class="w-full h-full object-cover rounded-lg"
										src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/wechat-group-qr-code-UPfYN11XWH1M46Xfnld6ysI0mK6BHO.png" />
								</div>
							</div>
							<p class="text-sm text-slate-500 mt-2">添加管理员微信邀请入群</p>
						</div>
					</div>
				</div>
				<button
					type="button"
					data-slot="dialog-close"
					class="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-x">
						<path d="M18 6 6 18"></path>
						<path d="m6 6 12 12"></path>
					</svg>
					<span class="sr-only"> Close </span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from "vue";

// 加入社区讨论
function joinCommunity() {
	const dialogBox = document.querySelector("#dialog-box");
	// 如果已经显示了 则不处理 后续的很多内容 通过 data-state 区分处理
	if (dialogBox.style.display === "block") return;

	// 显示对话框蒙版
	dialogBox.style.display = "block";

	// 获取对话框内容元素
	const dialogContent = dialogBox.querySelector('[data-slot="dialog-content"]');
	dialogContent.style.opacity = "0";
	dialogContent.style.transform = "scale(0.6)";

	// 触发动画
	requestAnimationFrame(() => {
		dialogContent.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";
		dialogContent.style.opacity = "1";
		dialogContent.style.transform = "scale(1) translate(-50%, -50%)";
	});

	// 处理 tab 切换
	const tabList = dialogBox.querySelectorAll('[role="tablist"] button');
	const tabPanels = dialogBox.querySelectorAll('[role="tabpanel"]');
	tabList.forEach((tab, idx) => {
		tab.addEventListener("click", () => {
			tabList.forEach((tab) => (tab.dataset.state = "inactive"));
			tabPanels.forEach((panel) => (panel.style.display = "none"));
			tab.dataset.state = "active";
			tabPanels[idx].style.display = "block";
		});
	});

	// 处理关闭事件
	const closeDialog = () => {
		// 添加退出动画到对话框内容
		const dialogContent = dialogBox.querySelector('[data-slot="dialog-content"]');
		dialogContent.style.transition = "opacity 0.2s ease-in, transform 0.2s ease-in";
		dialogContent.style.opacity = "0";
		dialogContent.style.transform = "scale(0.6)";

		// 动画结束后隐藏整个对话框
		setTimeout(() => {
			dialogBox.style.display = "none";
			// 重置内容样式
			dialogContent.style.transition = "";
			dialogContent.style.transform = "";
		}, 100);
	};

	dialogBox.addEventListener("click", (e) => {
		if (e.target.id === "dialog-box") {
			closeDialog();
		}
	});

	// close button
	dialogBox.querySelector('[data-slot="dialog-close"]').addEventListener("click", closeDialog);
}

// 添加统计代码 | 引入 tailwindcss
onMounted(() => {
	// 向 head 添加中插入统计代码
	const countScript = document.createElement("script");
	countScript.defer = true;
	countScript.src = "https://cn.vercount.one/js";
	document.head.appendChild(countScript);

	// Total Page View <span id="vercount_value_page_pv">Loading</span>
	// Total Visits <span id="vercount_value_site_pv">Loading</span>
	// Site Total Visitors <span id="vercount_value_site_uv">Loading</span>

	// 添加 tailwind.min.js
	const script = document.createElement("script");
	script.src = "tailwind.min.js";
	document.head.appendChild(script);
	script.onload = () => {
		// 添加 tailwindcss
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "tailwind.min.css";
		document.head.appendChild(link);
	};
});
</script>

<style scoped>
section#main {
	position: relative;
	height: calc(100vh - 64px);
	display: flex;
	align-items: center;
}

div[data-slot="card"] span[data-slot="badge"] {
	color: #171717;
	padding: 2px 4px;
	background-color: #f5f5f5;
	border-radius: 8px;
	gap: 4px;
}

footer {
	padding: 2rem 0;
}

div[role="tablist"] {
	background-color: #f5f5f5;
}
div[role="tablist"] button[data-state="active"] {
	background-color: #fff;
}

:root {
	--background: oklch(1 0 0);
	--foreground: oklch(0.145 0 0);
	--card: oklch(1 0 0);
	--card-foreground: oklch(0.145 0 0);
	--popover: oklch(1 0 0);
	--popover-foreground: oklch(0.145 0 0);
	--primary: oklch(0.205 0 0);
	--primary-foreground: oklch(0.985 0 0);
	--secondary: oklch(0.97 0 0);
	--secondary-foreground: oklch(0.205 0 0);
	--muted: oklch(0.97 0 0);
	--muted-foreground: oklch(0.556 0 0);
	--accent: oklch(0.97 0 0);
	--accent-foreground: oklch(0.205 0 0);
	--destructive: oklch(0.577 0.245 27.325);
	--destructive-foreground: oklch(0.577 0.245 27.325);
	--border: oklch(0.922 0 0);
	--input: oklch(0.922 0 0);
	--ring: oklch(0.708 0 0);
	--chart-1: oklch(0.646 0.222 41.116);
	--chart-2: oklch(0.6 0.118 184.704);
	--chart-3: oklch(0.398 0.07 227.392);
	--chart-4: oklch(0.828 0.189 84.429);
	--chart-5: oklch(0.769 0.188 70.08);
	--radius: 0.625rem;
	--sidebar: oklch(0.985 0 0);
	--sidebar-foreground: oklch(0.145 0 0);
	--sidebar-primary: oklch(0.205 0 0);
	--sidebar-primary-foreground: oklch(0.985 0 0);
	--sidebar-accent: oklch(0.97 0 0);
	--sidebar-accent-foreground: oklch(0.205 0 0);
	--sidebar-border: oklch(0.922 0 0);
	--sidebar-ring: oklch(0.708 0 0);
	--font-open-sans: "Open Sans", sans-serif;
	--font-work-sans: "Work Sans", serif;
}

.dark {
	--foreground: oklch(0.985 0 0);
	--card: oklch(0.145 0 0);
	--card-foreground: oklch(0.985 0 0);
	--popover: oklch(0.145 0 0);
	--popover-foreground: oklch(0.985 0 0);
	--primary: oklch(0.985 0 0);
	--primary-foreground: oklch(0.205 0 0);
	--secondary: oklch(0.269 0 0);
	--secondary-foreground: oklch(0.985 0 0);
	--muted: oklch(0.269 0 0);
	--muted-foreground: oklch(0.708 0 0);
	--accent: oklch(0.269 0 0);
	--accent-foreground: oklch(0.985 0 0);
	--destructive: oklch(0.396 0.141 25.723);
	--destructive-foreground: oklch(0.637 0.237 25.331);
	--border: oklch(0.269 0 0);
	--input: oklch(0.269 0 0);
	--ring: oklch(0.439 0 0);
	--chart-1: oklch(0.488 0.243 264.376);
	--chart-2: oklch(0.696 0.17 162.48);
	--chart-3: oklch(0.769 0.188 70.08);
	--chart-4: oklch(0.627 0.265 303.9);
	--chart-5: oklch(0.645 0.246 16.439);
	--sidebar: oklch(0.205 0 0);
	--sidebar-foreground: oklch(0.985 0 0);
	--sidebar-primary: oklch(0.488 0.243 264.376);
	--sidebar-primary-foreground: oklch(0.985 0 0);
	--sidebar-accent: oklch(0.269 0 0);
	--sidebar-accent-foreground: oklch(0.985 0 0);
	--sidebar-border: oklch(0.269 0 0);
	--sidebar-ring: oklch(0.439 0 0);
}
</style>
