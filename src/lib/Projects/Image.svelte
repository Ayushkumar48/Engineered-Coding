<script>
  export let imgData;
  export let isHover;
</script>

<div>
  <img src={imgData.src} alt={imgData.alt} class:hovered={isHover} />
</div>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.15s ease-in-out;
  }

  div {
    flex-shrink: 0;
    width: 25vw;
    height: 20vw;
    position: relative;
    transform: translate(-5vw, 10vh);
  }

  .hovered {
    transform: rotate(5deg) translateX(3vw);
  }
</style>
