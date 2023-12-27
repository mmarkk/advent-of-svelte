<script lang="ts">
	$: count = 0;

	function add() {
		count++;
	}

	function remove() {
		count--;
	}

	function reset() {
		count = 0;
	}
</script>

<div class="mx-auto flex justify-center gap-4 mt-6">
	<button type="button" class="btn btn-xl variant-filled" on:click={add}>Add</button>
	<button type="button" class="btn btn-xl variant-filled" on:click={remove}>Remove</button>
	<button type="button" class="btn btn-xl variant-filled" on:click={reset}>Reset</button>
</div>

<div class="py-10 mx-auto flex justify-center h1 font-extrabold">{count} Cookies Munched</div>

<img src="santa_cookies.webp" alt="Santa Cookies" class="mx-auto w-1/2" />
