<script>
  import Navbar from "./Navbar.svelte";
  import Home from "./HomeSec.svelte";
  import About from "./AboutMeSec.svelte";
  import Skills from "./MySkillsSec.svelte";
  import Projects from "./MyProjectsSec.svelte";
  import Contact from "./ContactMeSec.svelte";
  import Footer from "./Footer.svelte";
</script>

<main>
  <section><Navbar></Navbar></section>
  <section id="home"><Home></Home></section>
  <section id="about"><About></About></section>
  <section id="skills"><Skills></Skills></section>
  <section id="projects"><Projects></Projects></section>
  <section id="contact"><Contact></Contact></section>
  <section><Footer></Footer></section>
</main>

<style>
  main {
    background-color: #111827;
  }
</style>
