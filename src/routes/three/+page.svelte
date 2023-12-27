<script lang="ts">
	import type { PageData } from './$types';
	import { SlideToggle } from '@skeletonlabs/skeleton';

	export let data: PageData;

	let list = data.items;

	type item = {
		name: string;
		weight: number;
		selected: boolean;
	};

	// add selected: false to each item in the list
	list = list.map((item: item) => {
		return {
			...item,
			selected: false
		};
	});

	$: totalWeight = 0;

	function addWeight(item: item) {
		if (item.selected) {
			item.selected = false;
			totalWeight -= item.weight;
		} else {
			item.selected = true;
			totalWeight += item.weight;
		}
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="card m-4 bg-tertiary-200">
		<div class="card-body">
			<div class="space-y-5 m-8">
				<h1 class="h1">Jingle Bell Balancer</h1>
				{#if totalWeight < 100}
					<h1 class="h1">Total Weight in Sleigh: {totalWeight.toFixed(1)} kgs</h1>
				{:else}
					<h1 class="h1 text-red-500 font-bold">
						Sleigh Overloaded! Total Weight: {totalWeight.toFixed(1)} kgs
					</h1>
				{/if}
			</div>
		</div>
	</div>
</div>

<div class="card m-4 bg-tertiary-200">
	<div class="card-body">
		<div class="grid grid-cols-3">
			{#each list as listItem, i}
				<SlideToggle name="slider-label" class="m-3 " on:click={() => addWeight(listItem)}
					>{listItem.name}</SlideToggle
				>
			{/each}
		</div>
	</div>
</div>
