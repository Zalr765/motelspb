// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 compatibilityDate: '2024-04-03',
 devtools: { enabled: true },
 css: ['@/assets/scss/main.scss'],

 vite: {
							css: {
											preprocessorOptions: {
															scss: {
																			additionalData: `@import "@/assets/scss/base/variables.scss";`,
									api: 'modern-compiler'
															},
											},
							},
			},

 modules: ['@pinia/nuxt'],
})