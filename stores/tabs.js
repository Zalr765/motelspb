import { defineStore } from 'pinia';
import { useCookie } from '#app';

export const useTabStore = defineStore('tabs', {
	state: () => {
		const activeTab = useCookie('activeTab');

		return {
			tabs: [],
			activeTab: activeTab.value || '',
            path: ''
		};
	},
    actions:
    {
        setCurrentPath()
        {
            const currentPath = this.tabs.find(tab => tab.name === this.activeTab)?.component;
            this.path = currentPath
        }
    }
})