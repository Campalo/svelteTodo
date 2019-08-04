<script>
  export let displayName;
  export let photoURL;
  export let uid;
</script>

<style>
  h3,
  p {
    color: rgb(174, 196, 236);
  }
</style>

<h3>Hello {displayName}!</h3>

<img src={photoURL} width="100" alt="user avatar" />
<p>Your userID is {uid}</p>
