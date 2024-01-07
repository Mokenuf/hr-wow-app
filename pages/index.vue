<template>
	<div>
		<AppCharacterList />
	</div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()

definePageMeta({
	layout: 'public',
})

onMounted(() => {
	appStore.fetchPlayableClasses()
	appStore.fetchPlayableRaces()
})
</script>
