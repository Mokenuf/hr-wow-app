<template>
	<div class="overflow-x-auto rounded-lg">
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					<th
						v-for="column in columns"
						:key="column.key"
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						{{ column.label }}
					</th>
				</tr>
			</thead>
			<tbody class="bg-white divide-y divide-gray-200">
				<tr v-for="row in rows" :key="row.name">
					<td v-for="column in columns" :key="column.key" class="px-6 py-3 text-gray-500 whitespace-nowrap">
						<template v-if="isType(column.type, 'custom')">
							<slot name="custom-cell" :row="row" :column="column"></slot>
						</template>
						<template v-if="!column.type">
							{{ row[column.key] }}
						</template>
					</td>
				</tr>
				<tr>
					<td :colspan="columns.length" class="py-6"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
defineProps({
	columns: Array,
	rows: Array,
})

function isType(itemType: string | undefined, type: string): boolean {
	return itemType === type
}
</script>
