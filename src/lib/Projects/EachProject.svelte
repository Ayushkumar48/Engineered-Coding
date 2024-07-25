<script>
  import Image from "./Image.svelte";
  import Description from "./Description.svelte";

  export let project;

  let imgData = {
    src: project.imgSrc,
    alt: project.imgAlt,
  };

  let descriptionData = {
    title: project.title,
    description: project.description,
  };

  let toggler = false;

  function handleMouseEnter() {
    toggler = true;
  }

  function handleMouseLeave() {
    toggler = false;
  }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<a
  href={project.url}
  target="_blank"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  class="project-link"
>
  <div>
    <Image {imgData} isHover={toggler} />
    <Description {descriptionData} />
  </div>
</a>

<style>
  div {
    display: flex;
    justify-content: start;
    overflow: hidden;
    background-color: #2b3852;
    width: 45vw;
    border-radius: 10px;
    transition: box-shadow 0.3s ease-in-out;
  }

  div:hover {
    box-shadow: 0 0 0.781vw rgba(255, 255, 255, 0.8);
  }
</style>
