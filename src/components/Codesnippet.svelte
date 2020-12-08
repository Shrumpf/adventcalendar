<script>
    export let content;

    import { Highlight } from "svelte-highlight";
    import { javascript } from "svelte-highlight/languages";
    import "svelte-highlight/styles/atom-one-dark.css";

    $: code = content.content;

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function toggleDoor() {
        dispatch("toggleDoor");
    }
</script>

<style>
    .codesnippet {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        width: 100%;
        background-color: #14141488;
        display: flex;
        justify-content: center;
        align-items: center;

        transition: all 0.5s ease-in-out;
    }

    .box {
        border: 1px solid #eaeaea;
        max-width: 100%;
        max-height: 100%;
        background-color: #141414;
    }

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 3em;
    }

    .title > h3 {
        margin-left: 1em;
        flex: 1;
    }

    .button-close {
        margin-right: 1em;
        font-size: 1.17em;
        cursor: pointer;
        height: 2em;
        width: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .description {
        margin: 1em;
    }

    .button-close:hover {
        background-color: #242424;
    }

    .gist-meta {
        color: #bbbab9;
        padding: 10px;
        overflow: hidden;
        font: 12px -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
            sans-serif, Apple Color Emoji, Segoe UI Emoji;
        background-color: #1D1F20;
        border-radius: 0 0 6px 6px;
    }
    
</style>

<div class="codesnippet">
    <div class="box">
        <div class="title">
            <h3>{content.heading}</h3>
            <span class="button-close" on:click={toggleDoor}>&times;</span>
        </div>
        <p class="description">{content.description}</p>
        <Highlight language={javascript} {code} />
        <div class="gist-meta">
            {@html content.copyright}
        </div>
    </div>
</div>
