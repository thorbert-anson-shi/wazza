<script lang="ts">
	import Drawer from '$lib/components/drawer.svelte';
	import ListSection from '$lib/components/listSection.svelte';
	import SearchBar from '$lib/components/searchBar.svelte';
	import Loading from '$lib/components/loading.svelte';
	import leaf from '$lib/assets/leaf-modified.svg';
	import type { PageProps } from './$types';

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
	<Drawer class="sticky top-0 h-screen w-80 drop-shadow-xl" />
	<main id="main-container" class="bg-brown-100 flex w-0 flex-1 flex-col">
		<section id="search" class="flex h-[25vh] items-center justify-center">
			<img src={leaf} alt="" class="fixed top-0 -right-1/4 size-2/3" />
			<SearchBar class="w-1/2 drop-shadow-lg" />
		</section>
		<section class="flex w-full grow flex-col gap-y-10 rounded-t-3xl bg-white p-10 drop-shadow-lg">
			{#await data.quizzes}
				<Loading />
			{:then quizzes}
				<ListSection quizData={quizzes.recommended} sectionTitle="Recommended for you" />
				<ListSection quizData={quizzes.popular} sectionTitle="Popular quizzes" />
				<ListSection quizData={quizzes.communityFavorites} sectionTitle="Popular quizzes" />
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
