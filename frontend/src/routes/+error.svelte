<script>
	import { page } from '$app/state';
	import { pageRoutes } from '$lib/routes';
</script>

<div class="bg-brown-500 flex h-screen w-screen items-center justify-center">
	<div class="bg-brown-400 flex h-3/4 w-3/4 flex-col items-center justify-center">
		<div class="bg-brown-300 flex h-3/4 w-3/4 flex-col items-center justify-center">
			<div class="bg-brown-200 flex h-3/4 w-3/4 flex-col items-center justify-center">
				<h1 class="text-8xl font-bold">{page.status}</h1>
				<h2 class="text-2xl">{page.error?.message}</h2>
				<a
					class="font-poppins bg-leafy-300 inset-shadow-leafy-600 inset-shadow-md mt-6 rounded-xl px-8 py-4 text-2xl active:inset-shadow-xs"
					href={pageRoutes.home}>Go back</a
				>
			</div>
		</div>
	</div>
</div>
