<script>
    export let props;
    export let bg;
    import Codesnippet from "./Codesnippet.svelte";

    let opened = false;

    let isToday = new Date().getDate() === props.number;

    function checkIfDoorIsOpenable() {
        if (props.number <= new Date().getDate()) {
            return true;
        }

        return false;
    }

    function toggleDoor() {
        if (checkIfDoorIsOpenable()) {
            opened = !opened;
        }
    }
</script>

<style>
    .door {
        height: 100%;
        width: 100%;
        border: 1px solid darkgray;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-attachment: fixed;

        transform-origin: left;
        /*Speed of the Door animation*/
        transition: all 0.5s ease-in-out;
    }

    .open {
        transform: perspective(1200px) translateZ(0px) translateX(0px)
            translateY(0px) rotateY(-105deg);
    }

    .image-1 {
        background-image: url("/images/1.jpg");
    }

    .image-2 {
        background-image: url("/images/2.jpg");
    }

    .image-3 {
        background-image: url("/images/3.jpg");
    }

    .image-0 {
        background-image: url("/images/0.jpg");
    }

    h1 {
        text-shadow: 4px 4px 2px rgb(75, 75, 75);
    }

    .highlight {
        color: rgb(255, 255, 255);
        text-shadow: rgb(255, 255, 255) 0px 0px 5px,
            rgb(255, 255, 255) 0px 0px 10px, rgb(255, 255, 255) 0px 0px 15px;
    }
</style>

<div class="door {bg} {opened ? 'open' : ''}" on:click={toggleDoor}>
    <h1 class={isToday ? 'highlight' : ''}>{props.number}</h1>
</div>
{#if opened}
    <Codesnippet content={props} on:toggleDoor={toggleDoor} />
{/if}
