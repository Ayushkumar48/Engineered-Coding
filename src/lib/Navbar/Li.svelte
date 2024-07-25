<script>
  import { scrollTo } from "svelte-scrolling";
  export let href;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a use:scrollTo={href}>
  <li>
    <slot></slot>
  </li>
</a>

<style>
  li {
    padding: 0.1vh 0.7vw;
    border-radius: 0.375rem;
    font-weight: 500;
    font-size: 1.6vw;
  }
  li:hover {
    background-color: #374151;
    color: rgb(6, 174, 240);
    transition: all 0.3s ease-in-out;
  }
</style>
