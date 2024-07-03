<script>
  import Navbar from "./Navbar.svelte";
  import HomeSec from "./HomeSec.svelte";
  import AboutMeSec from "./AboutMeSec.svelte";
  import MySkillsSec from "./MySkillsSec.svelte";
  import MyProjectsSec from "./MyProjectsSec.svelte";
  import ContactMeSec from "./ContactMeSec.svelte";
</script>

<main>
  <section><Navbar></Navbar></section>
  <section id="home"><HomeSec></HomeSec></section>
  <section id="about"><AboutMeSec></AboutMeSec></section>
  <section id="skills"><MySkillsSec></MySkillsSec></section>
  <section id="projects"><MyProjectsSec></MyProjectsSec></section>
  <section id="contact"><ContactMeSec></ContactMeSec></section>
</main>

<style>
</style>
