<template>
	<div>
		<AppRosterList />
	</div>
</template>

<script setup lang="ts">
const appStore = useAppStore()

definePageMeta({
	layout: 'public',
})

onMounted(() => {
	appStore.fetchPlayableClasses()
	appStore.fetchPlayableRaces()
})
</script>
