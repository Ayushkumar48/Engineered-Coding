<script>
  import { onMount } from "svelte";

  let words = [
    "Data Structures",
    "Algorithms",
    "Web Development",
    "SQL",
    "C++ with STL",
    "JavaScript",
    "Python",
  ];

  let currentWord = "";
  let currentIndex = 0;
  let adding = true;
  let interval;
  let pause = false;

  onMount(() => {
    startCycling();
    return () => clearInterval(interval);
  });

  function startCycling() {
    interval = setInterval(() => {
      if (!pause) {
        if (adding) {
          currentWord += words[currentIndex][currentWord.length];
          if (currentWord.length === words[currentIndex].length) {
            adding = false;
            pause = true;
            setTimeout(() => (pause = false), 1200);
          }
        } else {
          currentWord = currentWord.slice(0, -1);
          if (currentWord.length === 0) {
            adding = true;
            pause = true;
            currentIndex = (currentIndex + 1) % words.length;
            setTimeout(() => (pause = false), 200);
          }
        }
      }
    }, 80);
  }
</script>

<span>{currentWord}</span>
