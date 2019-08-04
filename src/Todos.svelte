<script>
  import TodoItem from "./TodoItem.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  // User ID passed from parent
  export let uid;

  // Form Text
  let text = "";

  // Create a query to the DB on collection "todos"
  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");

  // Start listening on the above query
  const todos = collectionData(query, "id").pipe(startWith([]));

  function add() {
    db.collection("todos").add({
      uid,
      text,
      complete: false,
      created: Date.now()
    });
    text = "";
  }

  function updateStatus(event) {
    const { id, newStatus } = event.detail;
    db.collection("todos")
      .doc(id)
      .update({ complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("todos")
      .doc(id)
      .delete();
  }
</script>

<style>
  input {
    display: inlineblock;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  ul {
    padding: 0;
    width: 100%;
  }
</style>

<ul>
  {#each $todos as todo}
    <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
  {/each}
</ul>

<div>
  <input bind:value={text} placeholder="What's your new task?" />
  <button on:click={add}>Add Task</button>
</div>
