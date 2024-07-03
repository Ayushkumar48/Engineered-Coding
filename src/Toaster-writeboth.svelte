<script>
  import { Toast } from "flowbite-svelte";
  import { ExclamationCircleSolid } from "flowbite-svelte-icons";
</script>

<section>
  <Toast color="red" class="div">
    <svelte:fragment slot="icon">
      <ExclamationCircleSolid class="w-5 h-5" />
      <span class="sr-only">Warning icon</span>
    </svelte:fragment>
    Please fill in both the email and message fields.
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
