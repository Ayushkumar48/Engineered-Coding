<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  import { scrollTo } from "svelte-scrolling";
  import { onMount } from "svelte";

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  onMount(() => {
    const hamburger = document.querySelector(".navbar-hamburger");
    const menu = document.querySelector("#mobile-menu");

    if (hamburger && menu) {
      hamburger.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  });
</script>

<div class="relative main-div">
  <Navbar class="mainnavdiv px-2 sm:px-4 py-2.5 fixed z-20">
    <div class="mainnavdiv2">
      <NavBrand href="/">
        <a href="https://engineeredcoding.me/" class="navbar-brand">
          <img
            src="/Icons/mylogo.png"
            class="navbar-logo"
            alt="Engineered Coding Logo"
          />
        </a>
      </NavBrand>
      <NavHamburger
        class="navbar-hamburger block md:hidden"
        on:click={toggleMenu}
      />
      <div
        class={`w-full md:flex md:w-auto ${isMenuOpen ? "" : "hidden"}`}
        id="mobile-menu"
      >
        <NavUl class="flex flex-col md:flex-row items-center justify-end gap-4">
          <div class="btns-div flex flex-col md:flex-row gap-4">
            <a href="#home" use:scrollTo={"home"}>
              <NavLi href="#home" active={true} class="navbtns">Home</NavLi>
            </a>
            <a href="#about" use:scrollTo={"about"}>
              <NavLi href="#about" class="navbtns">About</NavLi>
            </a>
            <a href="#skills" use:scrollTo={"skills"}>
              <NavLi href="#skills" class="navbtns">Skills</NavLi>
            </a>
            <a href="#projects" use:scrollTo={"projects"}>
              <NavLi href="#projects" class="navbtns">Projects</NavLi>
            </a>
            <a href="#contact" use:scrollTo={"contact"}>
              <NavLi href="#contact" class="navbtns">Contact</NavLi>
            </a>
          </div>
        </NavUl>
      </div>
    </div>
  </Navbar>
</div>

<style>
  .main-div {
    margin-left: 5vw;
    margin-right: 5vw;
  }
  .mainnavdiv2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 2vw;
    padding-right: 2vw;
    margin-top: -1.2vh;
    margin-bottom: -1.2vh;
  }
  :global(.mainnavdiv) {
    background: linear-gradient(90deg, #2c3954, #2c3954);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5rem;
    top: 3vh;
    left: 5vw;
    right: 5vw;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 35vw);
  }
  .btns-div {
    display: flex;
    gap: 0;
  }
  .btns-div:last-child {
    margin-right: -1.5vw;
  }
  :global(.navbtns) {
    padding: 1vh 1.125vw !important;
    font-size: 1.4rem;
    font-weight: 500;
    color: #ffffff !important;
    text-decoration: none;
    border-radius: 0.375rem;
    transition:
      background-color 0.3s,
      color 0.3s;
  }
  :global(.navbtns:hover) {
    background-color: #374151 !important;
    color: rgb(23, 151, 202) !important;
  }
  .navbar-logo {
    width: 18rem;
    height: auto;
  }
  @media (max-width: 768px) {
    .mainnavdiv2 {
      flex-direction: column;
      align-items: flex-start;
    }
    .btns-div {
      flex-direction: column;
      width: 100%;
      background-color: #ffffff;
      padding: 1rem;
      border-radius: 0.375rem;
    }
    .mainnavdiv {
      max-width: 100%;
      left: 0;
      right: 0;
    }
    :global(.navbtns) {
      color: #000000 !important;
    }
  }
</style>
