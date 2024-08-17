import { readable } from "svelte/store";
export let projectsData = readable([
  {
    url: "https://torbin.vercel.app/",
    imgSrc: "./Images/TorbinTechStore.png",
    imgAlt: "torbintechstore",
    title: "Torbin Tech Store",
    description:
      "Developed an e-commerce platform using SvelteKit, Tailwind CSS, and MongoDB, featuring dynamic product listings, secure user authentication, and seamless checkout.",
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
    url: "https://xotictactoe.vercel.app/",
    imgSrc: "./Images/tic-tac-toe.png",
    imgAlt: "Tic-Tac-Toe",
    title: "Tic Tac Toe Game",
    description:
      "A classic HTML, CSS, and JavaScript Tic-Tac-Toe game where two players mark X or O on a 3x3 grid, aiming for three marks in a row horizontally, vertically, or diagonally to win.",
  },
]);
