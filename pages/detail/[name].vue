<template>
	<div class="container mx-auto p-6">
		<AppDetailHeader class="mb-2" :character="character" />
		<AppDetailBody :character="character" />
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

onMounted(() => {
	characterStore.fetchCharacter(route.params.name)
})
</script>
