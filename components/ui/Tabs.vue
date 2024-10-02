<template>
    <div class="tabs">
        <div
            class="tabs-item"
            :class="{ 'active' : tab.name == activeTab }"
            v-for="(tab, index) in tabs"
            :key=index
        >
            {{ tab.name }}
        </div>
    </div>
</template>

<script setup>

const props = defineProps(
{
    tabs: Array,
    activeTab: String
})

</script>

<style lang='scss'>
.tabs
{
    height: fit-content;
    width: fit-content;
    background-color: $black;
    padding: 15px 18px;
    border-radius: 12px;

    display: flex;
    align-items: center;
    gap: 13px;
}

.tabs-item
{
    font-size: 16px;
    font-weight: 400;
    line-height: 15.31px;
    letter-spacing: -0.03em;
    color: $gray;
    cursor: pointer;
    display: flex;
    align-items: center;

    &.active { color: white }


    &:first-child::before
    {
        display: none;
    }

    &::before
    {
        content: url('/icons/arrow-right.svg');
        margin-right: 13px;
    }
}
</style>