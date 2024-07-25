<script>
  import WordsCycle from "./WordsCycle.svelte";
</script>

<div on:selectstart={(e) => e.preventDefault()}>
  Ask me about <span class="words"
    ><WordsCycle></WordsCycle><span class="cursor">_</span></span
  >
</div>

<style>
  div {
    font-size: 2.5rem;
    font-weight: 600;
    cursor: default;
    -webkit-user-select: none;
    user-select: none;
  }
  .words {
    color: rgb(172 148 250);
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  .cursor {
    display: inline-block;
    animation: blink 1s step-end infinite;
    margin-left: 0.3vw;
  }
</style>
