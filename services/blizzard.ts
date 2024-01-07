export function getBlizzConfig() {
	const config = useRuntimeConfig()
	return {
		clientId: config.public.blizzardClientId,
		clientSecret: config.public.blizzardClientSecret,
		region: 'us',
	}
}
