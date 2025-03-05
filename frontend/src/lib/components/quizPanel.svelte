<script lang="ts">
	import { timeToString } from '../utils';
	import type { QuizDetails } from '$lib/types';
	import { pageRoutes } from '$lib/routes';

	let props: QuizDetails = $props();
</script>

<a href={pageRoutes.join.quiz(props.id)}>
	<div
		class="w-96 shrink-0 overflow-clip rounded-xl bg-white drop-shadow-md duration-100 ease-in hover:scale-[1.03] hover:cursor-pointer hover:drop-shadow-lg active:scale-[0.98]"
	>
		<img
			id="quizThumbnail"
			class="border-leafy-200 h-48 w-full border-b-4 object-cover"
			src={props.thumbnail}
			alt=""
		/>
		<div id="quizInfo" class="font-poppins p-5">
			<h3
				id="quizTitle"
				class="overflow-hidden text-lg font-semibold text-nowrap text-ellipsis text-black"
			>
				{props.title}
			</h3>
			<p id="quizCreator" class="text-grey-800">
				Created by {props.creatorName}
			</p>

			<p id="lastUpdated">{props.lastUpdated}</p>
			<p id="quizDuration" class="text-grey-800">
				time: {timeToString(props.durationInSeconds)}
			</p>
		</div>
	</div>
</a>

<style>
	p {
		overflow: hidden;
		font-size: var(--text-sm);
		text-wrap-mode: nowrap;
		text-overflow: ellipsis;
	}
</style>
