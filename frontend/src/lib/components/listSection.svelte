<script lang="ts">
	import QuizPanel from '$lib/components/quizPanel.svelte';
	import type { QuizDetails } from '$lib/types';

	let { sectionTitle, quizData }: { sectionTitle: string; quizData: QuizDetails[] } = $props();
</script>

<section class="flex w-full flex-col *:px-2">
	<h1 class="font-poppins text-2xl font-semibold text-black">{sectionTitle}</h1>
	<div id="quizList" class="flex gap-x-5 overflow-x-scroll overscroll-x-none py-5">
		{#if quizData.length == 0}
			<h1>No quizzes found on the server</h1>
		{:else}
			{#each quizData as quiz}
				<QuizPanel
					id={quiz.id}
					title={quiz.title}
					creatorName={quiz.creatorName}
					durationInSeconds={quiz.durationInSeconds}
					thumbnail={quiz.thumbnail}
					description={quiz.description}
				/>
			{/each}
		{/if}
	</div>
</section>
