// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
	runtimeConfig: {
		public: {
			blizzardClientId: process.env.BLIZZARD_CLIENT_ID,
			blizzardClientSecret: process.env.BLIZZARD_CLIENT_SECRET,
		},
	},
})
