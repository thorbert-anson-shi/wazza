<script lang="ts">
	import { timeToString } from '../utils';
	import type { QuizData } from '$lib/types';
	import { pageRoutes } from '$lib/routes';
	import { CldImage } from 'svelte-cloudinary';

	let props: QuizData = $props();
</script>

<a draggable="false" href={pageRoutes.join.quiz(props.id)}>
	<div
		class="w-fit shrink-0 overflow-clip rounded-xl bg-white drop-shadow-md duration-100 ease-in hover:scale-[1.03] hover:cursor-pointer hover:drop-shadow-lg active:scale-[0.98]"
	>
		<CldImage
			id="quizThumbnail"
			draggable="false"
			class="border-leafy-200 h-48 w-fit border-b-4 object-cover"
			width="300"
			height="200"
			src={props.thumbnail == null ? 'default' : props.thumbnail}
		/>
		<div id="quizInfo" class="font-poppins p-5">
			<h3
				id="quizTitle"
				class="overflow-hidden text-ellipsis text-nowrap text-lg font-semibold text-black"
			>
				{props.title}
			</h3>
			<p id="quizCreator" class="text-grey-800">
				Created by {props.creatorName}
			</p>

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
