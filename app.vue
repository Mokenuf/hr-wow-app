<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
useHead({
	title: 'Hair Recovery',
	script: [
		{
			children: 'const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};',
			type: 'text/javascript',
		},
		{
			src: 'https://wow.zamimg.com/js/tooltips.js',
			async: true,
		},
	],
})
</script>
