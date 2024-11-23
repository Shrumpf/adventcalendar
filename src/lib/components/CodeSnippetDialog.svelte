<script lang="ts">
    import type { Snippet } from "$lib/snippets";
    import { LineNumbers, Highlight } from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";
    import "svelte-highlight/styles/atom-one-dark.css";

    type Props = {
        snippet: Snippet;
        open: boolean;
    };

    let { snippet, open = $bindable() }: Props = $props();

    let dialog: HTMLDialogElement;

    $effect(() => {
        if (open) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    });

    function close_dialog(event: MouseEvent) {
        if (
            event.target === dialog ||
            (event.currentTarget as HTMLElement | null)?.classList.contains("button-close")
        ) {
            dialog.close();
        }
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog} onclose={() => (open = false)} onclick={close_dialog}>
    <div class="box">
        <div class="title">
            <h3>{snippet.heading}</h3>
            <button class="button-close" onclick={close_dialog}>&times;</button>
        </div>
        <p class="description">{snippet.description}</p>
        <Highlight language={javascript} code={snippet.content} let:highlighted>
            <LineNumbers {highlighted} hideBorder />
        </Highlight>
        <div class="gist-meta">
            {@html snippet.copyright}
        </div>
    </div>
</dialog>

<style>
    dialog {
        border: 1px solid #eaeaea;
    }

    .box {
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

    .button-close:hover {
        background-color: #242424;
    }

    .description {
        margin: 1em;
    }

    .gist-meta {
        color: #bbbab9;
        padding: 0.5rem;
        overflow: hidden;
        font:
            12px -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Helvetica,
            Arial,
            sans-serif,
            Apple Color Emoji,
            Segoe UI Emoji;
        background-color: #1d1f20;
        border-radius: 0 0 0.5rem 0.5rem;
    }

    .gist-meta :global(a) {
        color: #e9e7e5;
        font-weight: 600;
        text-decoration: none;
        text-decoration-line: none;
        text-decoration-color: currentcolor;
        border: 0;
        text-decoration-color: currentcolor;
        border-color: currentcolor;
    }

    .gist-meta :global(a:hover) {
        text-decoration: underline;
    }

    /* enable transitions */
    dialog,
    ::backdrop {
        transition:
            display 500ms allow-discrete,
            overlay 500ms allow-discrete,
            opacity 500ms;
        opacity: 0;
        margin: auto;
    }

    /* IN */
    [open],
    [open]::backdrop {
        opacity: 1;
    }

    /* OUT */
    @starting-style {
        [open],
        [open]::backdrop {
            opacity: 0;
        }
    }

    ::backdrop {
        background-color: hsl(0 0 0 / 65%);
    }
</style>
