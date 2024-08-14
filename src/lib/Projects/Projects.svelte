<script>
  import EachProject from "./EachProject.svelte";
  import { scrollRef } from "svelte-scrolling";
  let projects = [
    {
      url: "https://xotictactoe.vercel.app/",
      imgSrc: "./Images/tic-tac-toe.png",
      imgAlt: "Tic-Tac-Toe",
      title: "Tic Tac Toe Game",
      description:
        "A classic HTML, CSS, and JavaScript Tic-Tac-Toe game where two players mark X or O on a 3x3 grid, aiming for three marks in a row horizontally, vertically, or diagonally to win.",
    },
    {
      url: "https://pokeden.vercel.app/",
      imgSrc: "./Images/PokeDen.png",
      imgAlt: "PokeDen",
      title: "PokeDen",
      description:
        "Developed using SvelteKit and Supabase, featuring user account creation and dynamic Pokémon profiles. A nostalgic platform where users can share and personalize their favorite Pokémon profiles.",
    },
    {
      url: "https://bigtrivia.vercel.app/",
      imgSrc: "./Images/Big-Trivia.png",
      imgAlt: "BigTrivia",
      title: "Big Trivia",
      description:
        "Big Trivia is a Svelte-based game with Tailwind and Flowbite UI, testing players on diverse topics. Offers an responsive interface for an interactive trivia experience.",
    },
  ];
</script>

<section use:scrollRef={"projects"}>
  <h2>My Projects</h2>
  <div>
    {#each projects as project}
      <EachProject {project} />
    {/each}
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
