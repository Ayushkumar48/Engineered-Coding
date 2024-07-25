<script>
  import Heading from "./Heading.svelte";
  import { scrollRef } from "svelte-scrolling";
  import AskMeAbout from "./AskMeAbout.svelte";
  import Icons from "./Icons.svelte";
  import BoyImg from "./BoyImg.svelte";
</script>

<section use:scrollRef={"home"}>
  <div>
    <Heading />
    <AskMeAbout />
    <Icons />
  </div>
  <BoyImg />
</section>

<style>
  div {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2vh;
  }
  section {
    min-height: 100vh;
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 5vw;
  }
</style>
