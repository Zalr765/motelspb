<template>
	<div>ssss</div>
</template>

<script setup>
// Store
import { useTabStore } from '@/stores/tabs.js';
import { onMounted } from 'vue';

const tabsStore = useTabStore();

// Cookie
const activeTab = useCookie('activeTab', { maxAge: 5002000 });

console.log(activeTab.value);

// OnMounted
onMounted(() => {
	const tabComponents = import.meta.glob('@/components/HotelRoom/Steps/*.vue');

	for (const path in tabComponents) {
		tabComponents[path]()
			.then((module) => {

				if (!tabsStore.tabs)
					tabsStore.tabs = [];

				tabsStore.tabs.push({
					component: path,
					name: module.default.name,
				});

				if (!activeTab.value)
				{
					activeTab.value = module.default.name;
					tabsStore.activeTab = module.default.name;
				}
			})
	}
});
</script>

<style lang='scss'></style>
