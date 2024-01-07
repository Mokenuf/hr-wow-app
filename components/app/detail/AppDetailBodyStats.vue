<template>
	<h2 class="text-xl text-black font-semibold">Stats</h2>
	<p v-for="(value, key) in statsDisplay" :key="key" class="text-gray-700 text-base">
		{{ key }}: <span :style="{ color: getStatColor(key) }">{{ value }}</span>
	</p>
</template>
<script setup lang="ts">
import { getStatColor } from '~/helpers/utils'
const props = defineProps({
	stats: {},
})

const statsDisplay = computed(() => {
	return {
		Health: props.stats.health,
		[props.stats.powerType]: props.stats.power,
		Strength: props.stats.strength,
		Agility: props.stats.agility,
		Intellect: props.stats.intellect,
		Stamina: props.stats.stamina,
		Crit: `${props.stats.crit} - ${props.stats.critValue}%`,
		Haste: `${props.stats.haste} - ${props.stats.hasteValue}%`,
		Mastery: `${props.stats.mastery} - ${props.stats.masteryValue}%`,
		Vers: `${props.stats.versatility} - ${props.stats.versValue}%`,
	}
})
</script>
