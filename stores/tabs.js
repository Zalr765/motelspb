import { defineStore } from 'pinia';

export const useTabStore = defineStore('tabs', {
	state: () => ({
		tabs: [],
        activeTab: null
	}),
	actions: {
        setTabs(tabs)
        {
            this.tabs = tabs
        }
	}
})