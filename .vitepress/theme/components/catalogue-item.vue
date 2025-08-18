<template>
	<div class="catalog-item" v-for="item in data" :key="item.label">
		<div class="catalog-item-label" :style="{ paddingLeft: (item.level - 1) * 30 + 'px' }" @click="open(item.label, item.children)">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				v-if="item.children"
				viewBox="0 0 1024 1024"
				:class="{ open: openCatalogue.includes(item.label) }">
				<path
					fill="currentColor"
					d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
			</svg>
			<!-- 📁 📂 📄 -->
			<span class="icon" v-if="openCatalogue.includes(item.label)">📂</span>
			<span class="icon" v-else-if="item.type === 'file'">📄</span>
			<span class="icon" v-else>📁</span>
			<div class="title">
				{{ item.label }}

				<!-- <div class="tips" v-show="item.tips">
					{{ item.tips }}
				</div> -->
			</div>
		</div>

		<catalogue-item
			v-if="item.children && openCatalogue.includes(item.label)"
			:key="item.label"
			:data="item.children"
			:openCatalogue="openCatalogue"
			@toggleCatalogue="open" />
	</div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
const { data, openCatalogue } = defineProps({ data: Array, openCatalogue: Array });
const emit = defineEmits(["toggleCatalogue"]);
function open(label, haveChildren = false) {
	if (!haveChildren) return;
	emit("toggleCatalogue", label);
}
</script>

<style lang="css" scoped>
.catalog-item {
	user-select: none;
	cursor: pointer;
}

.catalog-item svg {
	width: 16px;
	height: 16px;
}
.catalog-item svg.open {
	transform: rotate(90deg);
}

.catalog-item-label {
	position: relative;
	transition: all 0.3s;
	padding: 10px;
	border-bottom: #dcdfe6 1px solid;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
}

.catalog-item-label .title {
	position: relative;
}

.catalog-item-label .tips {
	width: fit-content;
	border-radius: 4px;
	position: absolute;
	right: 100%;
	top: -20px;
	padding: 4px;
	background-color: #000;
	color: #f5f5f5;
	box-sizing: border-box;
	font-size: 12px;
}

.catalog-item-label:hover {
	background-color: #f5f5f5;
}
.catalog-item-label .icon {
	margin: 0 10px;
}
</style>
