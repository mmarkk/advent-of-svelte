<script lang="ts">
	export let data;

	var list = data.item;

	function isNaughty(tally: number): boolean {
		return tally <= 0;
	}

	let niceList = list.filter((item) => item.tally >= 0);
	let naughtyList = list.filter((item) => item.tally < 0);

	// niceList = niceList.sort((a, b) => b.tally - a.tally);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Naughty or Nice Tally</h1>
		<p></p>
		<div class="flex gap-8">
			<div class="w-1/2">
				<div class="h2 mx-auto justify-center px-3">Nice List</div>

				<div class="table-container w-60">
					<!-- Native Table Element -->

					<table class="table table-hover">
						<thead>
							<tr>
								<th>Name</th>
							</tr>
						</thead>
						<tbody>
							{#each niceList.sort((a, b) => b.tally - a.tally) as listItem, i}
								<tr>
									<td>{listItem.name}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			<div class="w-1/2 ...">
				<div class="table-container w-60">
					<!-- Native Table Element -->
					<div class="h2 mx-auto justify-center px-3">Naughty List</div>
					<table class="table table-hover">
						<thead>
							<tr>
								<th>Name</th>
							</tr>
						</thead>
						<tbody>
							{#each naughtyList.sort((a, b) => a.tally - b.tally) as listItem, i}
								<tr>
									<td>{listItem.name}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
