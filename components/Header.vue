<template>
	<div class="container">
		<header class="header">
			<ui-tabs
				:tabs="tabsStore?.tabs"
				:active-tab="activeTab"
			/>
		</header>
	</div>
</template>

<script setup>
// Store
import { useTabStore } from '@/stores/tabs.js';
const tabsStore = useTabStore();

// Tabs
const activeTab = useCookie('activeTab', { maxAge: 5002000 });

// OnMounted
onMounted(async () => {
    const tabComponents = import.meta.glob('@/components/HotelRoom/Steps/*.vue');

    for (const path in tabComponents) {
        try
		{
            const module = await tabComponents[path]();

            if (!tabsStore.tabs)
                tabsStore.tabs = [];

            tabsStore.tabs.push({
                name: module.default.name,
                component: path,
            });

            if (!activeTab.value)
                activeTab.value = module.default.name;

        }

		catch (error)
		{
            console.error(`Ошибка загрузки компонента по пути ${path}:`, error);
        }
    }
	console.log(tabsStore.path);
	tabsStore.setCurrentPath();
});

</script>

<style lang='scss'>
.header
{
	width: 100%;
	height: 60vh;
	max-height: 60vh;
	padding: 20px;
	position: relative;
	border-radius: 32px;

	background-image: url('/images/header_bg.webp');
	background-size: cover;
    background-repeat: no-repeat;
	aspect-ratio: 21 / 9;

	@media (max-width: 1024px)
	{
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 20px;

		padding: 0px;
		padding-top: 20px;
	}
	@media (max-width: 768px)
	{
		padding: 0;
		height: 250px;
		aspect-ratio: 4 / 3;
	}

	display: flex;
	justify-content: center;

	&::before
	{
		content: url('/icons/logo.svg');
		position: absolute;
		top: 20px;
		left: 20px;

		@media (max-width: 1024px) { position: static }
	}
}

</style>