<script>
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";

  import { auth, googleProvider } from "./firebase.js";
  import { authState } from "rxfire/auth";

  let user;

  const unsubscribe = authState(auth).subscribe(u => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<style>
  h1,
  h2 {
    color: cornflowerblue;
    text-align: center;
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
    margin: 50px 10px 50px 10px;
  }
  .style-column {
    background-color: rgb(39, 39, 39);
    color: whitesmoke;
    border-radius: 10px;
  }
  button {
    color: rgb(39, 39, 39);
  }
</style>

<h1>ToDo List</h1>
<h2>made by using Svelte and RxFire</h2>

{#if user}
  <section>
    <article class="flex-column style-column">
      <Profile {...user} />
      <button on:click={() => auth.signOut()}>Logout</button>
    </article>
    <article class="flex-column style-column">
      <Todos uid={user.uid} />
    </article>
  </section>
{:else}
  <div class="flex-column">
    <button on:click={login}>Sign in with Google Account</button>
  </div>
{/if}
