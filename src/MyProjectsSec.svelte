<script>
  export let projects = [
    {
      url: "https://xotictactoe.vercel.app/",
      imgSrc: "./Images/tic-tac-toe.png",
      imgAlt: "Tic-Tac-Toe",
      title: "Tic Tac Toe Game",
      description:
        "A classic HTML, CSS, and JavaScript Tic-Tac-Toe game where two players mark X or O on a 3x3 grid, aiming for three marks in a row horizontally, vertically, or diagonally to win.",
    },
    {
      url: "https://battleshipthegame.vercel.app/",
      imgSrc: "./Images/Battleship.png",
      imgAlt: "Battleship",
      title: "BattleShip Game",
      description:
        "The Battleship game uses a 4x4 grid with hidden ship and water images. Players reveal cells, aiming to uncover four out of five ships in fewer than eight clicks to achieve victory.",
    },
    {
      url: "https://bigtrivia.vercel.app/",
      imgSrc: "./Images/Big-Trivia.png",
      imgAlt: "BigTrivia",
      title: "Big Trivia",
      description:
        "Big Trivia is a Svelte-based game with Tailwind and Flowbite UI, testing players on diverse topics. It offers an engaging, responsive interface for an interactive trivia experience.",
    },
  ];
</script>

<section>
  <h2>My Projects</h2>
  <div class="myprojects-div">
    <div class="myprojects-innerdiv">
      {#each projects as project}
        <div class="myprojects-allprojects">
          <a
            href={project.url}
            target="_blank"
            class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div class="myprojects-img">
              <img
                class="object-cover w-full h-full"
                src={project.imgSrc}
                alt={project.imgAlt}
              />
            </div>
            <div
              class="flex flex-col justify-between p-4 leading-normal myprojects-text"
            >
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {project.title}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    text-align: justify;
    color: lightgray;
    background-color: #111827;
    padding-top: 20vh;
    padding-bottom: 25vh;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: bold;
    color: burlywood;
    text-align: center;
  }

  .myprojects-div {
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .myprojects-innerdiv {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .myprojects-allprojects {
    margin-bottom: 5vh;
    background-color: #2b3852;
    position: relative;
    overflow: hidden;
    border-radius: 0.5vw;
    transition-duration: 0.1s;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
  }

  .myprojects-allprojects:hover {
    box-shadow: 0 0 0.781vw rgba(255, 255, 255, 0.8);
  }

  .myprojects-img {
    flex-shrink: 0;
    width: 19vw;
    height: 15vw;
    overflow: hidden;
    transition: transform 0.15s ease;
    position: relative;
    left: -5vw;
    bottom: -3vh;
  }

  .myprojects-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5vw;
  }

  .myprojects-allprojects:hover .myprojects-img {
    transform: rotate(8deg) translateX(5vw);
  }

  .myprojects-text {
    width: calc(100% - 20vw);
    padding-left: 2vw;
  }

  h5 {
    font-size: 1.5rem;
    color: #ede781;
    font-weight: 570;
  }

  p {
    color: #f8f7e5;
    font-size: 1.1rem;
  }
</style>
