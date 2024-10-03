<template>
    <div class="ui-radio"
        @click="toggleActive"
        :class="{'active' : isActive}"
        :style="
            {
                width: width,
                height: height,
                'border-radius' : borderRadius
            }"
    >
        <icons-checkbox />
    </div>
</template>

<script setup>
import { computed } from 'vue';

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
    value: [String, Number],
    modelValue: [String, Number]
});

// Emits
const emit = defineEmits(['update:modelValue']);

const isActive = computed(() => {
    return props.modelValue === props.value;
});

const toggleActive = () => {
    emit('update:modelValue', isActive.value ? '' : props.value);
};
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