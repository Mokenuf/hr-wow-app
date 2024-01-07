<template>
	<BaseCard>
		<div class="gird grid-cols-2 gap-4">
			<div>
				<h2 class="text-xl text-black font-semibold">Basic Info</h2>
				<p class="text-gray-700 text-base">Race: {{ character.race }}</p>
				<p class="text-gray-700 text-base">
					Class: <span :style="{ color: getClassColor(character.classId) }">{{ character.class }}</span>
				</p>
				<p class="text-gray-700 text-base">Spec: {{ character.spec }}</p>
			</div>
		</div>
	</BaseCard>
</template>
<script setup lang="ts">
import { classColors } from '~/helpers/catalogs'
defineProps({
	character: {},
})

const getClassColor = (classId: number) => {
	return classColors[classId] || '#000'
}
</script>
