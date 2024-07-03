<script>
  import { Toast } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<section>
  <Toast color="green" class="div">
    <svelte:fragment slot="icon">
      <CheckCircleSolid class="w-5 h-5" />
      <span class="sr-only">Check icon</span>
    </svelte:fragment>
    Form submitted successfully.
  </Toast>
</section>

<style>
  section {
    position: fixed;
    top: 10vh;
    right: 0vw;
    z-index: 9999;
  }
  :global(.div) {
    background-color: #1f2937;
  }
</style>
