<script>
  export let iconData;
  function redirect(dest) {
    window.open(dest, "_blank");
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li>
  <img
    src={iconData.src}
    alt={iconData.alt}
    on:click={() => redirect(iconData.dest)}
    draggable="false"
  />
</li>

<style>
  img {
    height: 6vh;
    -webkit-user-select: none;
    user-select: none;
  }
  img:hover {
    cursor: pointer;
  }
</style>
