<script lang="ts">
	import ListSection from '$lib/components/listSection.svelte';
	import SearchBar from '$lib/components/searchBar.svelte';
	import Loading from '$lib/components/loading.svelte';
	import leaf from '$lib/assets/leaf-modified.svg';
	import type { PageProps } from './$types';
	import { pageRoutes } from '$lib/routes';
	import Drawer from '$lib/components/drawer.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Wazza</title>
	<meta
		name="description"
		content="Wazza is an online quiz creation and participation platform, created and curated by Tobtoby"
	/>
</svelte:head>

<div class="flex w-full flex-row overscroll-y-none">
	<main id="main-container" class="bg-brown-100 flex w-0 flex-1 flex-col">
		<section id="search" class="flex h-[25vh] shrink-0 items-center justify-center">
			<img src={leaf} alt="" class="fixed -right-1/4 top-0 size-2/3" />
			<SearchBar class="w-1/2 drop-shadow-lg" />
		</section>
		<section class="flex w-full grow flex-col gap-y-10 rounded-t-3xl bg-white p-10 drop-shadow-lg">
			{#await data.quizzes}
				<Loading />
			{:then quizzes}
				<ListSection sectionTitle="All quizzes" quizData={quizzes} />
				<ListSection sectionTitle="Recommended quizzes" quizData={quizzes} />
			{:catch}
				<div class="flex h-full w-full flex-col items-center justify-center">
					<h1>Yikes! We got lost looking for your quizzes</h1>
					<a
						data-sveltekit-reload
						href={pageRoutes.home}
						class="font-poppins text-leafy-400 font-semibold underline">Reload</a
					>
				</div>
			{/await}
			<footer class="mx-auto"></footer>
		</section>
	</main>
</div>

<style>
	#main-container {
		scrollbar-width: none;
	}
</style>
