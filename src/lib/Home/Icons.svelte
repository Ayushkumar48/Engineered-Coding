<script>
  import Icon from "./Icon.svelte";
  let icons = [
    {
      src: "./Icons/resumeicon.png",
      dest: "https://drive.google.com/file/d/1Y5vGRtIV3tcg_Du1T9EsmcYmba-ru-AP/view?usp=drive_link",
      alt: "resume",
    },
    {
      src: "./Icons/leetcodeicon.png",
      dest: "https://leetcode.com/u/ayushkumar48/",
      alt: "leetcode",
    },
    {
      src: "./Icons/linkedinicon.png",
      dest: "https://www.linkedin.com/in/ayushkumar48/",
      alt: "linkedin",
    },
    {
      src: "./Icons/githubicon.png",
      dest: "https://github.com/Ayushkumar48/",
      alt: "github",
    },
  ];
</script>

<ul>
  {#each icons as icon}
    <Icon iconData={icon} />
  {/each}
</ul>

<style>
  ul {
    display: flex;
    flex-direction: row;
    gap: 4vw;
  }
</style>
