<template>
	<div class="container mx-auto p-6">
		<div class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
			<h1 class="text-2xl text-black font-bold mb-2">{{ character.name }}</h1>
			<div class="gird grid-cols-2 gap-4">
				<div>
					<h2 class="text-xl text-black font-semibold">Basic Info</h2>
					<p class="text-gray-700 text-base">Race: {{ character.race }}</p>
					<p class="text-gray-700 text-base">
						Class: <span :style="{ color: getClassColor(character.classId) }">{{ character.class }}</span>
					</p>
					<p class="text-gray-700 text-base">Spec: {{ character.spec }}</p>
				</div>
				<div>
					<h2 class="text-xl text-black font-semibold">Stats</h2>
					<p class="text-gray-700 text-base">Level: {{ character.level }}</p>
					<p class="text-gray-700 text-base">iLevel: {{ character.iLevel }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCharacterStore } from '~/stores/character'
import { classColors } from '~/helpers/catalogs'

const route = useRoute()
const characterStore = useCharacterStore()
const character = computed(() => characterStore.character)

definePageMeta({
	layout: 'public',
})

onMounted(() => {
	characterStore.fetchCharacter(route.params.name)
})

const getClassColor = (classId: number) => {
	return classColors[classId] || '#000'
}
</script>
