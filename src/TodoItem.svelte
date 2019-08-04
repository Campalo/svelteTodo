<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  function toggleStatus() {
    let newStatus = !complete;
    dispatch("toggle", {
      id,
      newStatus
    });
  }

  export let id; // document ID
  export let text;
  export let complete;
</script>

<style>
  .is-complete {
    text-decoration: line-through;
    color: rgb(31, 190, 31);
  }
</style>

<li>
  {#if complete}
    <span class="is-complete">{text}</span>
    <button on:click={toggleStatus}>✔️ Done</button>
  {:else}
    <span>{text}</span>
    <button on:click={toggleStatus}>❌ ToDo</button>
  {/if}

  <button on:click={remove}>🗑 Delete</button>
</li>
