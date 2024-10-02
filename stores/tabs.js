import { defineStore } from 'pinia';
import { useCookie } from '#app';

export const useTabStore = defineStore('tabs', {
	state: () => {
		const activeTab = useCookie('activeTab');

		return {
			tabs: [],
			activeTab: activeTab.value || '', // Установка activeTab из куки или пустая строка
		};
	},
})