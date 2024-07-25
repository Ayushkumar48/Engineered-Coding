<script>
  import Li from "./Li.svelte";
</script>

<ul>
  <Li href="home">Home</Li>
  <Li href="about">About</Li>
  <Li href="skills">Skills</Li>
  <Li href="projects">Projects</Li>
  <Li href="contact">Contact</Li>
</ul>

<style>
  ul {
    display: flex;
    flex-direction: row;
    gap: 0.5vw;
  }
</style>
