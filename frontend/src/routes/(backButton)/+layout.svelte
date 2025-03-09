<script>
	import arrowLeft from '$lib/assets/arrow-left.svg';
	import { pageRoutes } from '$lib/routes';
</script>

<div class="bg-brown-300 flex w-fit flex-col items-center justify-start p-5">
	<a
		draggable="false"
		href={pageRoutes.home}
		aria-label="Back"
		class="hover:bg-brown-800 flex h-fit w-fit items-center justify-center rounded-xl p-5 duration-100"
		><img draggable="false" src={arrowLeft} class="h-auto w-10 invert" alt="back button" /></a
	>
</div>
<main class="bg-brown-200 flex h-full w-full items-center justify-center p-10">
	<slot />
</main>
