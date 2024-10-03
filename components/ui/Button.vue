<template>
    <button
        class="ui-button"
        :style="{ width: width, height: height }"
    >
        <slot />
    </button>
</template>

<script setup>
const porps = defineProps({
    width:
    {
        type: String,
        default: '100%'
    },
    height:
    {
        type: String,
        default: '100%'
    }
})
</script>

<style lang='scss'>
.ui-button
{
    background-color: #282828;
    color: white;
    border: none;
    border-radius: 18px;
    transition: all .2s ease-in;

    font-size: 20px;
    font-weight: 400;
    line-height: 19.14px;
    letter-spacing: -0.05em;

    &:hover { background-color: $orange }
}
</style>