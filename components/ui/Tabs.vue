<template>
    <div class="ui-tabs">
        <div
            class="ui-tabs__item"
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
.ui-tabs
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

.ui-tabs__item
{
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 15.31px;
    letter-spacing: -0.03em;
    color: $gray;

    user-select: none;
    cursor: pointer;

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