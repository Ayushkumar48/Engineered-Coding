<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
</script>

<div class="relative px-8">
  <Navbar
    class="mainnavdiv px-2 sm:px-4 py-0.8 fixed w-full z-20 top-0 start-0 border-b"
  >
    <NavBrand href="/">
      <a href="https://engineeredcoding.me/" class="navbar-brand">
        <img
          src="/Icons/mylogo.png"
          class="navbar-logo"
          alt="Engineered Coding Logo"
        />
      </a>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <div class="btns-div">
        <NavLi href="/" active={true} class="navbtns">Home</NavLi>
        <NavLi href="/about" class="navbtns">About</NavLi>
        <NavLi href="/docs/components/navbar" class="navbtns">Skills</NavLi>
        <NavLi href="/pricing" class="navbtns">Projects</NavLi>
        <NavLi href="/contact" class="navbtns">Contact</NavLi>
      </div>
    </NavUl>
  </Navbar>
</div>

<style>
  :global(.mainnavdiv) {
    background: linear-gradient(90deg, #111827, #2c3954, #111827);
  }
  .btns-div {
    display: flex;
    gap: 0;
  }
  :global(.navbtns) {
    padding: 1.244vh 1.125vw !important;
    font-size: 1.4rem;
    font-weight: 500;
    color: #ffffff !important;
    text-decoration: none;
    border-radius: 0.375rem;
    transition:
      background-color 0.3s,
      color 0.3s;
    margin-right: 0.5vw !important;
  }
  :global(.navbtns:hover) {
    background-color: #374151 !important;
    color: rgb(23, 151, 202) !important;
  }
  .navbar-logo {
    width: 32vh;
    height: auto;
  }
</style>
