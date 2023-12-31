<script lang="ts">
	import type { PageData } from './$types';

	type TaskType = 'CREATED_TOY' | 'WRAPPED_PRESENT';

	interface Task {
		elf: string;
		task: TaskType;
		minutesTaken: number;
		date: string;
	}

	export let data: PageData;
	let tasks: Task = data.tasks;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="card m-4 bg-tertiary-200">
		<div class="card-body">
			<div class="space-y-5 m-8">
				<h1 class="h1">Present Progress Monitor</h1>
			</div>
		</div>
	</div>
</div>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="card m-4 bg-tertiary-200">
		<div class="card-body">
			<div class="space-y-5 m-8">
				{#each tasks as task, i}
					<div class="text-2xl font-bold text-gray-800">
						{task.elf} took {task.minutesTaken} minutes to {task.task} on {task.date}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
