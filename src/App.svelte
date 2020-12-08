<script>
	export let doors;
	import Snow from "./components/Snow.svelte";
	import Door from "./components/Door.svelte";

	import {backgroundmusic} from "./tools/sound";
	backgroundmusic.play();

	let bg = `image-` + ~~(Math.random() * 4);
</script>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #141414;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.doors-wrapper {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 8px;
		grid-row-gap: 8px;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}

	@media only screen and (max-width: 600px) {
		.doors-wrapper {
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(6, 1fr);
		}
	}
</style>

<main>
	<Snow />
	<div class="doors-wrapper">
		{#each doors as door}
			<Door props={door} bg={bg} />
		{/each}
	</div>
</main>
