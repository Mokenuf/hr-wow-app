<template>
	<BaseCard>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div>
				<h2 class="text-xl text-black font-semibold">Basic Info</h2>
				<p class="text-gray-700 text-base">Race: {{ character.race }}</p>
				<p class="text-gray-700 text-base">
					Class: <span :style="{ color: getClassColor(character.classId) }">{{ character.class }}</span>
				</p>
				<p class="text-gray-700 text-base">Spec: {{ character.spec }}</p>
			</div>
			<div>
				<h2 class="text-xl text-black font-semibold">Equipment</h2>
				<div v-for="item in character.equipment" :key="item.id">
					<p class="text-gray-700 text-base font-semibold">
						{{ item.slot }} -
						<NuxtLink
							:to="`https://www.wowhead.com/item=${item.id}`"
							data-wh-iconize-links="true"
							data-wh-rename-links="true"
							:style="{ color: getQualityColor(item.quality) }"
							>{{ item.name }}</NuxtLink
						>
					</p>
				</div>
			</div>
		</div>
	</BaseCard>
</template>
<script setup lang="ts">
import { classColors, qualityColors } from '~/helpers/catalogs'
defineProps({
	character: {},
})

const getClassColor = (classId: number) => {
	return classColors[classId] || '#000'
}
const getQualityColor = (quality: string) => {
	return qualityColors[quality] || '#000'
}
</script>
