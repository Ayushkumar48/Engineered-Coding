<script>
  import List from "./List.svelte";
  import Logo from "./Logo.svelte";
</script>

<nav>
  <Logo />
  <List />
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(90deg, #2c3954, #2c3954);
    display: flex;
    justify-content: space-between;
    padding: 0.55rem 1rem;
    padding-left: 1.8rem;
    margin: 1.5rem 20vw;
    border-radius: 1rem;
    z-index: 1000;
  }
</style>
