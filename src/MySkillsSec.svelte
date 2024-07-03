<script>
  let images = [
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
      src: "./Icons/MySkills-Icons/tailwind.png",
      alt: "tailwind",
      name: "Tailwind",
    },
    {
      src: "https://flowbite.com/docs/images/logo.svg",
      alt: "flowbite",
      name: "Flowbite",
    },
    {
      src: "./Icons/MySkills-Icons/bootstrap.png",
      alt: "bootstrap",
      name: "Bootstrap",
    },
    {
      src: "./Icons/MySkills-Icons/c++.png",
      alt: "c++",
      name: "C++",
    },
    {
      src: "./Icons/MySkills-Icons/python.png",
      alt: "python",
      name: "Python",
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
      src: "./Icons/MySkills-Icons/nodejs.png",
      alt: "nodejs",
      name: "Node.js",
    },
  ];
</script>

<section>
  <div class="myskills-div">
    <h2>My Skills</h2>
    <div class="myskills-innerdiv">
      {#each images as skill}
        <div class="skill-card">
          <span class="skills-img-span">
            <img src={skill.src} alt={skill.alt} />
          </span>
          <p>{skill.name}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    text-align: justify;
    color: lightgray;
    padding-bottom: 25vh;
    padding-top: 20vh;
    /* background-color: #7996a0; */
  }

  .myskills-div {
    text-align: center;
    margin: 2vw 0;
  }

  .myskills-innerdiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.7vw;
    margin-left: 13vw;
    margin-right: 13vw;
    margin-top: 2vw;
  }

  .skill-card {
    background-color: lightgrey;
    color: #1f2937;
    padding: 0.5vw 1.8vw;
    border-radius: 0.9vw;
    box-shadow: 0 0.78vw 156vw rgba(0, 0, 0, 0.1);
    font-size: 1.65rem;
    margin: 0.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  .skill-card:hover {
    transform: scale(1.13);
  }

  .skills-img-span {
    max-width: 4vw;
    margin-right: 1vw;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: bold;
    color: burlywood;
  }
</style>
