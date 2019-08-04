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
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
  }
  span {
    margin-right: 10px;
    margin-left: 10px;
  }
</style>

<li>
  <div>
    {#if complete}
      <button on:click={toggleStatus}>✔️ Done</button>
      <span class="is-complete">{text}</span>
    {:else}
      <button on:click={toggleStatus}>❌ ToDo</button>
      <span>{text}</span>
    {/if}
  </div>

  <button on:click={remove}>🗑</button>
</li>
