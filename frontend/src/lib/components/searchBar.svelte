<script>
	import search from '$lib/assets/search.svg';

	let props = $props();
</script>

<div class={props.class}>
	<div class="font-poppins flex h-full w-full items-center overflow-clip rounded-full bg-white">
		<img src={search} alt="" class="p-5" />
		<input
			type="text"
			name="search"
			id="search"
			placeholder="Search for quizzes by category..."
			class="h-full grow text-lg outline-none"
		/>
	</div>
</div>
