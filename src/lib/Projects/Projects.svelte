<script>
  import EachProject from "./EachProject.svelte";
  import { scrollRef } from "svelte-scrolling";
  import { projectsData } from "./store";
  let projects;
  $: projects = $projectsData;
</script>

<section use:scrollRef={"projects"}>
  <h2>My Projects</h2>
  <div>
    {#each projects as project}
      <EachProject {project} />
    {/each}
  </div>
  <div class="text-xl">
    <div>And many more. To see all the projects I build,</div>
    <a
      href="https://github.com/Ayushkumar48/"
      target="_blank"
      class="underline text-blue-600">click here</a
    >
  </div>
</section>

<style>
  section {
    min-height: 100vh;
    padding-top: 12vh;
    display: flex;
    flex-direction: column;
    gap: 7vh;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: bold;
    color: burlywood;
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
  }
</style>
