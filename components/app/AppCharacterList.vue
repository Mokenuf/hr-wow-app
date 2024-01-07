<template>
	<BaseTable :columns="columns" :rows="paginatedCharacters">
		<template v-slot:custom-cell="{ row, column }">
			<span v-if="column.key === 'class'" :style="{ color: getClassColor(row.classId) }">{{ row.class }}</span>
			<NuxtLink v-if="column.key === 'name'" :to="`/detail/${row.name}`">{{ row.name }}</NuxtLink>
		</template>
	</BaseTable>
	<BasePagination :current-page="currentPage" :total-pages="totalPages" @update:current-page="updateCurrentPage" />
</template>

<script setup lang="ts">
import { useRosterStore } from '~/stores/roster'
import { useAppStore } from '~/stores/app'
import { classColors } from '~/helpers/catalogs'

interface ColumnProps {
	key: string
	label: string
	type?: string
}

const appStore = useAppStore()
const rosterStore = useRosterStore()

const columns: ColumnProps[] = [
	{
		key: 'name',
		label: 'Name',
		type: 'custom',
	},
	{
		key: 'level',
		label: 'Level',
	},
	{
		key: 'race',
		label: 'Race',
	},
	{
		key: 'class',
		label: 'Class',
		type: 'custom',
	},
]

const currentPage = ref(1)

const pageSize = ref(10)

const characters = computed(() =>
	rosterStore.roster.map((r) => ({
		id: r.id,
		name: r.name,
		level: r.level,
		race: appStore.playableRaces.find((pr) => pr.id === r.raceId)?.name ?? 'Unknown',
		class: appStore.playableClasses.find((pc) => pc.id === r.classId)?.name ?? 'Unknown',
		classId: r.classId,
	}))
)

const getClassColor = (classId: number) => {
	return classColors[classId] || '#000'
}

const totalPages = computed(() => {
	return Math.ceil(rosterStore.roster.length / pageSize.value)
})

const paginatedCharacters = computed(() => {
	const start = (currentPage.value - 1) * pageSize.value
	const end = start + pageSize.value
	return characters.value.slice(start, end)
})

onMounted(() => {
	rosterStore.fetchRoster()
})

function updateCurrentPage(page: number) {
	currentPage.value = page
}
</script>
