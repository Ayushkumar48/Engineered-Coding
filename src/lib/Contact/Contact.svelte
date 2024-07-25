<script>
  import Form from "./Form.svelte";
  import { scrollRef } from "svelte-scrolling";
</script>

<section use:scrollRef={"contact"}>
  <h2>Contact Me</h2>
  <Form />
</section>

<style>
  h2 {
    color: burlywood;
    font-size: 3.2rem;
    font-weight: bold;
  }
  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
