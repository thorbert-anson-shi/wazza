<script lang="ts">
	import { timeToString } from '$lib/utils';
	import arrowLeft from '$lib/assets/arrow-left-iconify.svg';
	import type { PageProps } from './$types';
	import { pageRoutes } from '$lib/routes';

	let { data }: PageProps = $props();
</script>

<div class="flex h-screen w-full">
	<div class="bg-brown-400 flex w-24 flex-col items-center justify-start pt-5">
		<a
			href={pageRoutes.home}
			aria-label="Back"
			class="hover:bg-brown-800 flex items-center justify-center rounded-xl p-5 duration-100 hover:*:invert"
			><img src={arrowLeft} class="size-8 invert" alt="back button" /></a
		>
	</div>
	<main
		class="relative w-0 flex-1"
		style="background-image: url({data.thumbnail}); background-size: cover;"
	>
		<div class="absolute bottom-0 left-0 flex h-3/5 w-full flex-col justify-between bg-white">
			<div class="flex h-full w-1/2 flex-col justify-between p-10">
				<div id="text-container" class="flex w-full flex-col gap-y-5">
					<div>
						<h2 id="title" class="text-4xl">{data.title}</h2>
						<h2 id="creator">by {data.creatorName}</h2>
					</div>
					<p id="description" class="w-4/5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet convallis
						fringilla. Sed at scelerisque libero. Integer quis leo a lectus bibendum aliquam ut a
						est. Praesent in risus aliquet, eleifend justo id, ornare dui. Curabitur rhoncus
						porttitor mauris, a suscipit est suscipit ac. Fusce rhoncus dignissim leo id finibus.
					</p>
					<p id="last-updated">{data.lastUpdated}</p>
				</div>
				<div class="flex w-full justify-between">
					<span class="flex items-center gap-x-2"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="fill-brown-400"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							><path
								d="m13 12.175l2.25 2.25q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L11.3 13.3q-.15-.15-.225-.337T11 12.575V9q0-.425.288-.712T12 8t.713.288T13 9zM12 6q-.425 0-.712-.288T11 5V4h2v1q0 .425-.288.713T12 6m6 6q0-.425.288-.712T19 11h1v2h-1q-.425 0-.712-.288T18 12m-6 6q.425 0 .713.288T13 19v1h-2v-1q0-.425.288-.712T12 18m-6-6q0 .425-.288.713T5 13H4v-2h1q.425 0 .713.288T6 12m6 10q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m8-10q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20t5.675-2.325T20 12m-8 0"
							/></svg
						>
						<h2>
							{timeToString(data.durationInSeconds)}
						</h2>
					</span>
					<a
						href={pageRoutes.join.quiz(data.id)}
						class="font-poppins hover:bg-brown-700 bg-brown-950 rounded-xl px-5 py-3 text-white"
						>Take quiz</a
					>
				</div>
			</div>
		</div>
	</main>
</div>
