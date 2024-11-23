<script lang="ts">
    import BackgroundMusic from "$lib/components/BackgroundMusic.svelte";
    import Door from "$lib/components/Door.svelte";
    import Snow from "$lib/components/Snow.svelte";
    import { shuffle, snippets } from "$lib/snippets";

    let image = Math.floor(Math.random() * 4);
</script>

<Snow></Snow>
<BackgroundMusic></BackgroundMusic>
<div class="doors">
    {#each shuffle(snippets) as snippet, index}
        <Door {snippet} {index} {image}></Door>
    {/each}
</div>

<style>
    .doors {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        height: calc(100svh - 1rem);
        width: calc(100svw - 1rem);
        margin: 0.5rem;
    }
</style>
