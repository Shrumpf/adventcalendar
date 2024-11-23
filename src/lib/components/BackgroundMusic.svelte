<script lang="ts">
    let audio_element: HTMLAudioElement;
    let isPlaying = $state(false);
    let icon = $derived(isPlaying ? "play" : "mute");

    $effect(() => {
        if (localStorage.getItem("auto_play") === "true") {
            var promise = audio_element.play();
            promise
                .then(() => {
                    isPlaying = true;
                })
                .catch(() => {
                    audio_element.pause();
                    isPlaying = false;
                });
        }
    });

    function toggle_sound() {
        if (audio_element.paused || !isPlaying) {
            audio_element.play();
        } else {
            audio_element.pause();
        }
        isPlaying = !audio_element.paused;
        localStorage.setItem("auto_play", `${isPlaying}`);
    }
</script>

<audio bind:this={audio_element} src="sounds/Christmas_Eve_By_Filipps_Music_Team_Com.mp3" loop volume="0.2"></audio>

<button onclick={toggle_sound}>
    <img src="images/{icon}.svg" alt="Settings" />
</button>

<style>
    button {
        z-index: 2;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    button > img {
        height: 2rem;
        width: 2rem;
    }
</style>
