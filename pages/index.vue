<template>
	<HotelRoomForm />
</template>

<script setup>
// Store
import { useTabStore } from '@/stores/tabs.js';

const tabsStore = useTabStore();

// Cookie
const activeTab = useCookie('activeTab', { maxAge: 5002000 });

</script>

<style lang='scss'></style>
