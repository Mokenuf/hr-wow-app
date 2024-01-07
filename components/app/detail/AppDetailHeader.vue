<template>
	<BaseCard>
		<div class="flex items-baseline gap-2">
			<h1 class="text-2xl text-black font-bold">{{ character.name }}</h1>
			<p class="text-gray-700 text-base">Level: {{ character.level }}</p>
			<p class="text-gray-700 text-base">iLevel: {{ character.iLevel }}</p>
		</div>
	</BaseCard>
</template>

<script setup lang="ts">
defineProps({
	character: {},
})
</script>
