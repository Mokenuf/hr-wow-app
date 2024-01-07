<template>
	<nav class="flex justify-center md:justify-end mt-4">
		<ul class="flex space-x-1">
			<li>
				<button
					:class="[
						'w-8 h-8 rounded-full flex items-center justify-center text-gray-500 bg-gray-50 hover:bg-gray-100',
						{ disabled: (currentPage ?? 1) <= 1 },
					]"
					@click="changePage((currentPage ?? 1) - 1)"
				>
					<span aria-hidden="true">&laquo;</span>
					<span class="sr-only">-</span>
				</button>
			</li>
			<li v-for="page in totalPages" :key="page">
				<button
					@click="changePage(page)"
					:class="[
						'w-8 h-8 rounded-full flex items-center justify-center text-gray-500 border border-gray-50 hover:border-gray-100',
						{
							'bg-gray-50': currentPage === page,
							'text-gray-50 hover:bg-gray-100 hover:text-gray-500': currentPage !== page,
						},
					]"
				>
					{{ page }}
				</button>
			</li>
			<li>
				<button
					:class="[
						'w-8 h-8 rounded-full flex items-center justify-center text-gray-500 bg-gray-50 hover:bg-gray-100',
						{ disabled: currentPage ?? 0 >= (totalPages ?? 0) },
					]"
					@click="changePage((currentPage ?? 0) + 1)"
				>
					<span aria-hidden="true">&raquo;</span>
					<span class="sr-only">+</span>
				</button>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
const props = defineProps({
	currentPage: Number,
	totalPages: Number,
})

const emit = defineEmits(['update:currentPage'])

function changePage(page: number): void {
	if (page < 1 || page > (props.totalPages ?? 0)) return
	emit('update:currentPage', page)
}
</script>
