<template>
	<div class="catalog-box"><catalogue-item :data="catalogueData" :openCatalogue="openCatalogue" @toggleCatalogue="open" /></div>
</template>

<script setup>
import { ref } from "vue";
import catalogueItem from "./catalogue-item.vue";
import catalogueData from "/public/catalogue.json";

// 当前应该展开的目录label 集合
const openCatalogue = ref([]);

// 打开文件夹
function open({ label }) {
	if (openCatalogue.value.includes(label)) {
		openCatalogue.value.splice(openCatalogue.value.indexOf(label), 1);
	} else {
		openCatalogue.value.push(label);
	}
}
</script>

<style lang="css" scoped>
.catalog-box {
	width: 100%;
	height: 100%;
	border: solid #dcdfe6 1px;
	border-radius: 6px;
	margin-top: 40px;
	padding: 20px;
}
</style>
