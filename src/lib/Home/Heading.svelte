<h1 on:selectstart={(e) => e.preventDefault()}>
  Hi <span>👋</span>, I am Ayush
</h1>

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
  span {
    display: inline-block;
    animation: wave 1.9s infinite;
    transform-origin: 70% 70%;
  }
  h1 {
    font-size: 6.79rem;
    font-weight: bold;
    cursor: default;
    -webkit-user-select: none;
    user-select: none;
  }
</style>
