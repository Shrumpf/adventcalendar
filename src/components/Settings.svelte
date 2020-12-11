<script>
    import { backgroundmusic } from "../tools/sound";
    import { onMount } from "svelte";

    $: isPlaying = backgroundmusic.sound.paused ? "mute" : "play";

    onMount(() => {
        document
            .querySelector(".settings-icon > img")
            .addEventListener("click", () => {
                backgroundmusic.toggle();
                isPlaying = backgroundmusic.sound.paused ? "mute" : "play";
                localStorage.setItem("bgmusicstate", isPlaying);
            });
    });
</script>

<style>
    .settings-icon {
        position: absolute;
        top: 1em;
        right: 1em;
    }

    .settings-icon > img {
        height: 2em;
        width: 2em;
    }

    .settings {
        position: absolute;
        top: 5em;
        right: 1em;
        width: 300px;
        border: 1px solid #eaeaea;
        background-color: #141414;
    }
</style>

<div class="settings-icon">
    <img src="images/{isPlaying}.svg" alt="Settings" />
</div>
