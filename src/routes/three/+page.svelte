<script lang="ts">
	import type { PageData } from './$types';
	import { SlideToggle } from '@skeletonlabs/skeleton';

	export let data: PageData;

	let list = data.items;

	$: totalWeight = 0;

	function addWeight(weight: number) {
		totalWeight += weight;
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 m-8">
		<h1 class="h1">Jingle Bell Balancer</h1>
		{#if totalWeight < 100}
			<h1 class="h1">Total Weight in Sleigh: {totalWeight} kgs</h1>
		{:else}
			<h1 class="h1 text-red-500 font-bold">Sleigh Overloaded! Total Weight: {totalWeight} kgs</h1>
		{/if}
	</div>
</div>

<div class="grid grid-cols-3">
	{#each list as listItem, i}
		<SlideToggle name="slider-label" class="m-3" on:click={() => addWeight(listItem.weight)}
			>{listItem.name}</SlideToggle
		>
	{/each}
</div>
