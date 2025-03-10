<script>
	import Drawer from '$lib/components/drawer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-full w-full">
	<Drawer class="sticky top-0 h-screen drop-shadow-lg" />
	{@render children()}
</div>
