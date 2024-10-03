<template>
	<div class="container">
		<header class="header">
			<ui-tabs
				:tabs="tabs"
				:active-tab="activeTab"
			/>
		</header>
	</div>
</template>

<script setup>
// Tabs
const activeTab = useCookie('activeTab', { maxAge: 5002000 });
const tabs = ref([])

// Onmounted
onMounted(() => {
	const tabComponents = import.meta.glob('@/components/HotelRoom/Steps/*.vue');

	for (const path in tabComponents) {
		tabComponents[path]()
			.then((module) => {

				if (!tabs.value)
					tabs.value = [];

					tabs.value.push({
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

<style lang='scss'>
.header
{
	width: 100%;
	height: 480px;
	max-height: 480px;
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