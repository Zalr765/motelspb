<template>
    <div class="hotel-room-form">
			<component
				:is="steps"
			/>
	</div>
</template>

<script setup>
import {  markRaw }    from 'vue';
import { useTabStore } from '@/stores/tabs.js';

const tabsStore = useTabStore();

const setComponent = () => {
    return markRaw(defineAsyncComponent(() => import(`../../${tabsStore.path.slice(1)}`)));
};

const steps = computed(() => {
    if (tabsStore.path)
        return setComponent();

    return null;
});

</script>


<style lang='scss'>
.hotel-room-form
{
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	max-width: 500px;
}
</style>
