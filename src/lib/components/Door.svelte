<script lang="ts">
    import { can_open, type Snippet } from "$lib/snippets";
    import CodeSnippetDialog from "./CodeSnippetDialog.svelte";
    import { base } from "$app/paths";

    type Props = {
        snippet: Snippet;
        index: number;
        image: number;
    };
    let { snippet, index, image = 2 }: Props = $props();
    let open = $state(false);

    function open_door() {
        if (can_open(snippet)) {
            open = !open;
        }
    }
</script>

<button class="door" class:open onclick={open_door} style="--index: {index}; --image: url({base}/images/{image}.jpg);">
    <h1>{snippet.number}</h1>
</button>

<CodeSnippetDialog {snippet} bind:open></CodeSnippetDialog>

<style>
    .door {
        height: 100%;
        width: 100%;
        border: 1px solid darkgray;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-size: 600%;
        /* background-size: cover; */
        /* background-attachment: fixed; */

        transform-origin: left;
        transition: all 0.5s ease-in-out;

        background-image: var(--image);

        background-position-x: calc(100% / 5 * mod(var(--index), 6));
        background-position-y: calc(100% / 3 * round(down, calc(var(--index) / 6), 1));

        /* color: hsl(0 100 100); */
    }

    .open {
        transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg);
    }
</style>
