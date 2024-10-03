<template>
    <div class="ui-select">
        <div
            class="ui-select-trigger"
            v-click-outside="closeDropdown"
            @click="toggleDropdown"
        >
            <div class="ui-select-trigger__text">
                <span>{{ title }}</span>
                <p v-if="currentText" >{{ currentText }}</p>
            </div>
            <icons-arrow-down
                class="ui-select-trigger__icons"
                :class="{ 'active' : isActive }"
            />
        </div>
        <div
            class="ui-select-content"
            :class="{ 'active' : isActive }"
        >
            <span
                v-for="item in selectData"
                :key="item"
                @click="selectItem(item)"
            >
                {{ item.text }}
            </span>
        </div>
    </div>
</template>

<script setup>
// Variables
const currentText = ref();
const isActive = ref(false);

// Props
const props = defineProps({
    title: String,
    selectData: Array
});

// Emits
const emit = defineEmits(['update:modelValue']);

// Functions
const toggleDropdown = () => isActive.value = !isActive.value;
const closeDropdown = () => isActive.value = false;


const selectItem = (item) => {
    currentText.value = item.text;
    emit('update:modelValue', item.value);
    closeDropdown();
};

watch(() => props.modelValue, (newValue) => {
    const selectedItem = props.selectData.find(item => item.value === newValue);
    if (selectedItem)
        currentText.value = selectedItem.text;
}, { immediate: true });
</script>

<style lang='scss'>
.ui-select
{
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.ui-select-trigger
{
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #282828;
    border-radius: 14px;
    cursor: pointer;
}

.ui-select-trigger__icons
{
    transition: .6s ease-in-out all;

    &.active { transform: rotateX(180deg) }
}

.ui-select-trigger__text
{
    display: flex;
    flex-direction: column;
    gap: 7px;

    span
    {
        color: #828282;
        font-size: 16px;
        line-height: 15.31px;
        letter-spacing: -0.03em;
    }

    p
    {
        color: white;
        font-size: 18px;
        font-weight: 400;
        line-height: 17.23px;
        letter-spacing: -0.03em;
    }
}

.ui-select-content
{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 0;
    overflow-y: hidden;
    // gap: 18px;
    background-color: #282828;
    border-radius: 14px;
    transition: .6s ease-in-out all;
    cursor: pointer;

    span
    {
        display: block;
        color: white;
        font-size: 18px;
        font-weight: 400;
        line-height: 17.23px;
        letter-spacing: -0.03em;
        padding: 0 0 0 15px;
        padding-top: 18px;
    }

    span:first-child { padding-top:    15px }
    span:last-child  { padding-bottom: 15px }


    &.active
    {
        max-height: 550px;
    }
}

</style>