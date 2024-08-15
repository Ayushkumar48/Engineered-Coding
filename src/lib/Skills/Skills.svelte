<script>
  import EachSkill from "./EachSkill.svelte";
  import { scrollRef } from "svelte-scrolling";
  import { skills } from "./store";
  let images;
  $: images = $skills;
</script>

<section use:scrollRef={"skills"}>
  <div class="outerdiv">
    <h2>My Skills</h2>
    <div class="innerdiv">
      {#each images as skill}
        <EachSkill {skill} />
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: lightgray;
    min-height: 100vh;
    margin: 0 8vw;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: bold;
    color: burlywood;
    text-align: center;
  }
  .innerdiv {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.6vw;
    row-gap: 4.5vh;
  }
  .outerdiv {
    display: flex;
    flex-direction: column;
    gap: 7vh;
  }
</style>
