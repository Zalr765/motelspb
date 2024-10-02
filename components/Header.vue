<template>
	<div class="container">
		<header class="header">
			<ui-tabs
				:tabs="tabs"
			/>
		</header>
	</div>
</template>

<script setup>
const tabs = ref([
	{ text:  'Выбор отеля', component: '', active: true  },
	{ text:  'Ввод даных',  component: '', active: false },
	{ text:  'Оплата',      component: '', active: false },
])
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

	background-image: url('/images/header_bg.png');
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