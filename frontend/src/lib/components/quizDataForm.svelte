<script lang="ts">
	interface FormAction {
		action: string;
	}

	let props: FormAction = $props();
</script>

<form method="post" action={props.action}>
	<label for="quiz-title-input">Title</label>
	<input type="text" name="quizTitle" id="quiz-title-input" />

	<label for="quiz-description-input">Description</label>
	<input type="text" name="quizDescription" id="quiz-description-input" />

	<label for="duration-input">Quiz duration</label>
	<div id="duration-input">
		<input type="number" name="hours" id="hours-input" />
		<input type="number" name="minutes" id="minutes-input" />
		<input type="number" name="seconds" id="seconds-input" />
	</div>

	<label for="category-input">Categories</label>
	<input type="checkbox" name="categories" id="category-input" />

	<button type="submit">Create quiz</button>
</form>
