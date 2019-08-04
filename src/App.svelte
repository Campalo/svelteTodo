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
    align-items: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<h1>ToDo List</h1>
<h2>made by using Svelte and RxFire</h2>

{#if user}
  <section>
    <div class="flex-column">
      <Profile {...user} />
      <button on:click={() => auth.signOut()}>Logout</button>
    </div>
    <Todos class="flex-column" uid={user.uid} />
  </section>
{:else}
  <div class="flex-column">
    <button on:click={login}>Sign in with Google Account</button>
  </div>
{/if}
