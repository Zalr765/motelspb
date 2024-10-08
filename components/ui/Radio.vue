<template>
    <div class="ui-radio"
        @click="toggleActive"
        :class="{ 'active': isChecked }"
        :style="{
            width: width,
            height: height,
            'border-radius': borderRadius
        }"
    >
        <icons-checkbox />
        <input
            type="hidden"
            @input="$emit('update:value')"
        />
    </div>
</template>

<script setup>

const props = defineProps({
    width: {
        type: String,
        default: '24px'
    },
    height: {
        type: String,
        default: '24px'
    },
    borderRadius: {
        type: String,
        default: '100%'
    },
    value: {
        type: [String, Number, Boolean],
        default: false
    },
    checked:
    {
        type: Boolean,
        default: false
    }
});

// Emit
const emit = defineEmits(['update:value']);

const toggleActive = () => emit('update:value', props.checked ? props.value : null);

// Computed
const isChecked = computed(() => props.checked);

// Watch
watch(() => props.value, (newValue) => props.checked = newValue === props.value);

</script>

<style lang='scss'>

.ui-radio
{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $black;
    cursor: pointer;
    transition: .3s all;

    svg
    {
        opacity: 0;
        transition: .3s all;
    }

    &.active
    {
        background-color: $orange;
        svg
        {
            opacity: 1;
        }
    }
}
</style>
