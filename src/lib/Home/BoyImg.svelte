<script>
  let src = "./Images/manonlaptop.png";
</script>

<img {src} alt="manonlaptop" draggable="false" />

<style>
  img {
    -webkit-user-select: none;
    user-select: none;
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
</style>
