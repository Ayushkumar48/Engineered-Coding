<script>
  import { Button } from "flowbite-svelte";
  import WordCycler from "./WordCycler.svelte";
</script>

<section
  class="bg-gray-900 text-white flex items-center justify-center min-h-screen"
>
  <div
    class="outermostdiv flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-8 py-16 space-y-8 md:space-y-0"
  >
    <div class="space-y-4 text-start md:text-left">
      <div class="text-8xl font-bold" style="font-size: 6.79rem;">
        Hi <span class="inline-block animate-wave">👋</span>, I am Ayush
      </div>
      <div style="font-size: 2.5rem;">
        Ask me about <span class="text-purple-400"
          ><WordCycler></WordCycler><span class="cursor">_</span></span
        >
      </div>
      <div class="flex btndiv">
        <a
          href="https://drive.google.com/file/d/1kUZHy51GI0-EzH7LkTCG5-pXYmV7nvst/view?usp=sharing"
          target="_blank"
        >
          <Button class="btns" color="none">
            <img src="./Icons/resumeicon.png" alt="resume" class="btnimg" />
          </Button>
        </a>
        <a href="https://leetcode.com/u/ayushkumar48/" target="_blank">
          <Button class="btns" color="none">
            <img src="./Icons/leetcodeicon.png" alt="leetcode" class="btnimg" />
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/ayushkumar48/" target="_blank">
          <Button class="btns" color="none">
            <img src="./Icons/linkedinicon.png" alt="linkedin" class="btnimg" />
          </Button>
        </a>
        <a href="https://github.com/Ayushkumar48/" target="_blank">
          <Button class="btns" color="none">
            <img src="./Icons/githubicon.png" alt="github" class="btnimg" />
          </Button>
        </a>
      </div>
    </div>
    <img
      src="/Images/manonlaptop.png"
      alt="person_with_a_laptop"
      class="personimg w-80 h-80 md:w-96 md:h-96"
    />
  </div>
</section>

<style>
  @keyframes wave {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(10deg);
    }
  }
  .animate-wave {
    animation: wave 1.9s infinite;
  }
  section {
    padding-top: 10rem;
    background-color: #111827;
  }
  .personimg {
    width: 35vw;
    height: auto;
    /* Code for flipping the image about y axis */
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
  }
  .cursor {
    display: inline-block;
    animation: blink 1s step-end infinite;
    margin-left: 0.3vw;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  .btnimg {
    height: 6vh;
    margin-top: 2vh;
  }
  .btndiv {
    gap: 2vw;
  }
</style>
