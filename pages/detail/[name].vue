<template>
	<div class="container mx-auto p-6">
		<div v-if="characterStore.isLoading">LOADING...</div>
		<div v-else>
			<AppDetailHeader class="mb-2" :character="character" />
			<AppDetailBody :character="character" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { PrefixTitle } from '~/helpers/config'

useHead({
	title: `${PrefixTitle} Detail`,
})

const route = useRoute()
const characterStore = useCharacterStore()
const character = computed(() => characterStore.character)

definePageMeta({
	layout: 'public',
})

onMounted(async () => {
	await characterStore.fetchCharacter(route.params.name)
	await characterStore.fetchCharacterItems(route.params.name)
	await characterStore.fetchCharacterMythicRating(route.params.name)
	await characterStore.fetchCharacterStats(route.params.name)
})
</script>
