<script>
  let src = "/Icons/mylogo.png";
  function redirect() {
    window.location.href = "https://engineeredcoding.me/";
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img {src} alt="my-logo" on:click={redirect} draggable="false" />

<style>
  img {
    width: 18vw;
    height: auto;
    -webkit-user-select: none;
    user-select: none;
  }
  img:hover {
    cursor: pointer;
  }
</style>
