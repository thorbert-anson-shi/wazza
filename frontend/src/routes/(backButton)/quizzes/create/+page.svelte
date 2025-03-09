<script lang="ts">
	import { CldUploadWidget, CldImage } from 'svelte-cloudinary';
	import type { PageData } from './$types';
	import type { ActionData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	let imgPubID: string = $state('');

	function onSuccess(results: any) {
		imgPubID = results.info!.public_id;
	}
</script>

<div
	id="form-container"
	class="bg-brown-100 font-poppins flex w-1/2 flex-col items-start justify-center space-y-5 rounded-2xl p-10"
>
	<h1 class="text-3xl font-semibold">Create a quiz</h1>
	<form method="post" class="flex w-full flex-col space-y-5">
		<div class="flex grow flex-col items-start">
			<input
				class="w-full"
				placeholder="Title"
				type="text"
				name="quizTitle"
				id="quiz-title-input"
			/>
			{#if form?.errors?.quizTitle}{form.errors.quizTitle}{/if}
		</div>

		<div class="flex grow flex-col items-start">
			<input
				class="w-full"
				placeholder="Creator"
				type="text"
				name="quizCreator"
				id="quiz-creator-input"
			/>
			{#if form?.errors?.quizCreator}{form.errors.quizCreator}{/if}
		</div>

		<div class="flex grow flex-col items-start">
			<textarea
				class="w-full"
				placeholder="Description"
				rows="5"
				name="quizDescription"
				id="quiz-description-input"
			></textarea>
			{#if form?.errors?.quizDescription}{form.errors.quizDescription}{/if}
		</div>

		<div class="flex flex-col space-y-2">
			<label for="duration-input">Time limit</label>
			<div id="duration-input" class="flex space-x-5">
				<span class="flex items-center space-x-2">
					<input type="number" class="w-24" name="hours" id="hours-input" />
					<p>h</p>
				</span>
				<span class="flex items-center space-x-2">
					<input type="number" class="w-24" name="minutes" id="minutes-input" />
					<p>min</p>
				</span>
				<span class="flex items-center space-x-2">
					<input type="number" class="w-24" name="seconds" id="seconds-input" />
					<p>sec</p>
				</span>
			</div>
			<div id="time-errors" class="flex flex-col text-red-700">
				{#if form?.errors?.hours}{form.errors.hours}{/if}
				{#if form?.errors?.minutes}{form.errors.minutes}{/if}
				{#if form?.errors?.seconds}{form.errors.seconds}{/if}
			</div>
		</div>

		<input
			bind:value={imgPubID}
			type="text"
			name="quizThumbnail"
			id="quiz-thumbnail-input"
			hidden
		/>
		<div>
			{#if imgPubID == ''}
				<div
					class="border-brown-500 flex h-24 w-full flex-col items-center justify-center border-2 border-dashed"
				>
					<p>No thumbnail uploaded</p>
					<CldUploadWidget uploadPreset="thumbnails" let:open let:isLoading {onSuccess}>
						<button
							onclick={(e) => {
								open();
								e.preventDefault();
							}}
							disabled={isLoading}
							class="text-leafy-400 font-semibold underline hover:cursor-pointer"
						>
							Upload
						</button>
					</CldUploadWidget>
				</div>
			{:else}
				<CldImage src={imgPubID} width="400" height="200"></CldImage>
				<CldUploadWidget uploadPreset="thumbnails" let:open let:isLoading {onSuccess}>
					<button
						onclick={(e) => {
							open();
							e.preventDefault();
						}}
						disabled={isLoading}
						class="font-semibold underline hover:cursor-pointer"
					>
						Change thumbnail
					</button>
				</CldUploadWidget>
			{/if}
		</div>
		<!--  
		<label for="category-input">Categories</label>
		<input type="checkbox" name="categories" id="category-input" /> -->

		<div class="flex items-baseline justify-end space-x-3">
			<button type="reset" class="underline hover:cursor-pointer">Reset form</button>
			<button
				type="submit"
				class="bg-leafy-400 hover:bg-leafy-500 rounded-lg p-2 hover:cursor-pointer hover:text-white"
				>Create quiz</button
			>
		</div>
	</form>
</div>

<style>
	input,
	textarea {
		border: 2px solid var(--color-leafy-400);
		background-color: #e0ccb8;
		padding: 5px;
		border-radius: 5px;
		width: 100%;
		resize: none;
	}

	#form-container {
		box-shadow: inset 0px 3px 5px var(--color-brown-500);
	}
</style>
