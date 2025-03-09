<script>
	import Drawer from '$lib/components/drawer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-screen w-screen">
	<Drawer class="sticky top-0 h-full drop-shadow-lg" />
	{@render children()}
</div>
