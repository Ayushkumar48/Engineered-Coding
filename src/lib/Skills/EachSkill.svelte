<script>
  export let skill;
</script>

<span class="skill-card" on:selectstart={(e) => e.preventDefault()}>
  <span class="skill-img">
    <img src={skill.src} alt={skill.alt} draggable="false" />
  </span>
  <p>{skill.name}</p>
</span>

<style>
  p {
    font-weight: 600;
  }
  .skill-card {
    background-color: lightgrey;
    color: #1f2937;
    border-radius: 0.9vw;
    font-size: 1.65rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.1vw;
    transition: transform 0.4s ease;
    padding: 1vh 1.2vw;
  }

  .skill-card:hover {
    box-shadow: 0 0.78vw 156vw rgba(234, 227, 227, 0.429);
    transform: scale(1.13);
    cursor: default;
    transition: all 0.4s ease;
  }

  .skill-img {
    width: 4vw;
  }
</style>
