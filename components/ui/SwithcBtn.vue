<template>
	<div
		class="switch-btn"
		@click="toggleBtn"
		:class="{ 'active': isActive }"
	>
		<div class="switch-btn-rectangle" />
	</div>
</template>

<script setup>
const props = defineProps({
	value: {
		type: Object,
		required: true
	}
});

const emit = defineEmits(['update:modelValue']);

const isActive = computed({
	get: () => switchBtn.value === props.value.on,
	set: (newValue) => {
		switchBtn.value = newValue ? props.value.on : props.value.off;
		emit('update:modelValue', switchBtn.value);
	}
});

const switchBtn = ref(props.value.off);

const toggleBtn = () => {
	isActive.value = !isActive.value;
};
</script>

<style lang='scss'>
.switch-btn
{
    display: flex;
    align-items: center;
    width: 50px;
    height: 30px;
    background-color: #282828;
    box-sizing: border-box;
    border: 2px solid #2A2A2A;
    border-radius: 65px;
    position: relative;
    transition: .3s ease-in;
    cursor: pointer;

    &.active
    {
        background-color: $orange;
        .switch-btn-rectangle { left: 26px }
    }
}

.switch-btn-rectangle
{
    background: white;
    border-radius: 100%;
    width: 19px;
    height: 19px;
    position: relative;
    left: 2px;
    transition: .3s ease;

}
</style>