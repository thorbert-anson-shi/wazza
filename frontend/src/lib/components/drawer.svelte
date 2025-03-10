<script>
	import { pageRoutes } from '$lib/routes';

	let props = $props();
</script>

<nav>
	<div
		id="navbar-wrapper"
		class="bg-brown-400 flex w-80 flex-col items-center justify-between text-white {props.class}"
	>
		<h1
			class="font-sansita text-brown-200 w-full cursor-default py-10 text-center text-7xl font-bold"
		>
			Wazza
		</h1>
		<div
			id="btn-group"
			class="font-poppins flex flex-col gap-y-10 px-16 py-8 tracking-wider *:text-xl *:font-[400]"
		>
			<a
				href={pageRoutes.join.byCode}
				class="visual-button flex justify-center text-wrap rounded-lg p-3 text-white"
				><h2 class="text-center">Join by code</h2>
			</a>
			<a
				href={pageRoutes.quizzes.create}
				class="visual-button flex justify-center text-wrap rounded-lg p-3 text-white"
				><h2 class="text-center">Create a quiz</h2>
			</a>
			<a
				href={pageRoutes.account}
				class="visual-button flex justify-center text-wrap rounded-lg p-3 text-white"
				><h2 class="text-center">Manage your quizzes</h2>
			</a>
		</div>
		<div class="bg-brown-950 w-full p-2">
			<a
				href={pageRoutes.account}
				class="hover:bg-brown-800 flex items-center space-x-4 rounded-md p-2"
			>
				<img src="" alt="Profile" class="size-14 rounded-full bg-white" />
				<div>
					<h3 class="font-bold">Username</h3>
					<p>View profile</p>
				</div>
			</a>
		</div>
	</div>
</nav>

<style>
	.visual-button:hover {
		transition: ease-in;
		transition-duration: 100ms;
		background: var(--color-brown-800);
		box-shadow: 0 0 3px black;
	}

	.visual-button {
		transition: ease-in;
		transition-duration: 100ms;
	}
</style>
