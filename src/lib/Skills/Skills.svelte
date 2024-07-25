<script>
  import EachSkill from "./EachSkill.svelte";
  import { scrollRef } from "svelte-scrolling";
  let images = [
    {
      src: "./Icons/MySkills-Icons/c++.png",
      alt: "c++",
      name: "C++",
    },
    {
      src: "./Icons/MySkills-Icons/javascript.png",
      alt: "javascript",
      name: "JavaScript",
    },
    {
      src: "./Icons/MySkills-Icons/svelte.png",
      alt: "svelte",
      name: "Svelte",
    },
    {
      src: "./Icons/MySkills-Icons/python.png",
      alt: "python",
      name: "Python",
    },
    {
      src: "./Icons/MySkills-Icons/nodejs.png",
      alt: "nodejs",
      name: "Node.js",
    },
    {
      src: "./Icons/MySkills-Icons/git.png",
      alt: "git",
      name: "Git",
    },
    {
      src: "./Icons/MySkills-Icons/github.png",
      alt: "github",
      name: "GitHub",
    },
    {
      src: "./Icons/MySkills-Icons/sql.png",
      alt: "sql",
      name: "SQL",
    },
    {
      src: "./Icons/MySkills-Icons/mongodb.png",
      alt: "mongodb",
      name: "MongoDB",
    },
    {
      src: "./Icons/MySkills-Icons/html.png",
      alt: "html",
      name: "HTML",
    },
    {
      src: "./Icons/MySkills-Icons/css.png",
      alt: "css",
      name: "CSS",
    },
    {
      src: "./Icons/MySkills-Icons/tailwind.png",
      alt: "tailwind",
      name: "Tailwind",
    },
    {
      src: "./Icons/MySkills-Icons/flowbite.png",
      alt: "flowbite",
      name: "Flowbite UI",
    },
    {
      src: "./Icons/MySkills-Icons/bootstrap.png",
      alt: "bootstrap",
      name: "Bootstrap",
    },
  ];
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
    margin: 0 9vw;
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
    gap: 1.8vw;
    row-gap: 5vh;
  }
  .outerdiv {
    display: flex;
    flex-direction: column;
    gap: 7vh;
  }
</style>
