<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	// get the value returned from https://advent.sveltesociety.dev/data/2023/day-four.json every second
	// and display it in the heart rate monitor
	import { fade } from 'svelte/transition';

	interface HistoryItem {
		// Define the structure of your history items here
		// timestamp: Date;
		heartRate: number;
	}

	let history: HistoryItem[] = [];

	$: heartRate = 0;
	function addHistory(rate: HistoryItem) {
		history = [...history, { heartRate: rate }];
	}

	// Function to perform the fetch operation
	async function fetchHeartRate() {
		try {
			const response = await fetch('https://advent.sveltesociety.dev/data/2023/day-four.json');
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			const data = await response.json();
			heartRate = data.heartRate;
			addHistory(data);
		} catch (error) {
			console.error('Fetch error:', error);
		}
	}

	// Setting up the interval to fetch every 1 second
	setInterval(fetchHeartRate, 5000);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="card m-4 bg-tertiary-200">
		<div class="card-body">
			<div class="space-y-5 m-8">
				<h1 class="h1">Santa's Heart Rate Monitor</h1>
			</div>
		</div>
	</div>
</div>

<div class="card m-4 bg-tertiary-200 w-80 mx-auto">
	<div class="card-body text-center"><h2 class="h2">Heart Rate</h2></div>
	<div class="card-body text-center">
		<img src="heartbeat.webp" alt="Heartbeat" />
		<div class="text-8xl font-extrabold text-red-500">
			{heartRate}
			<div class="card m-4 bg-tertiary-200 w-80 mx-auto">
				<div class="card-body text-center">
					<h2 class="h2">History</h2>
				</div>
				<div class="card-body text-center">
					{#each history as item (item.heartRate)}
						<div class="text-2xl font-bold text-gray-800">
							{item.heartRate.heartRate}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
