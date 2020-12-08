<script>
    export let props;
    export let bg;
    import Codesnippet from "./Codesnippet.svelte";

    let opened = false;

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
        transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-105deg);
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
</style>

<div class="door {bg} {opened ? 'open' : ''}" on:click={toggleDoor}>
    <h1>{props.number}</h1>
</div>
{#if opened}
    <Codesnippet content={props} on:toggleDoor={toggleDoor} />
{/if}
