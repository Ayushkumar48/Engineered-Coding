<script>
  import { skills } from "./store";

  export let skill;
</script>

<span class="skill-card" on:selectstart={(e) => e.preventDefault()}>
  <span class="skill-img">
    <img src={skill.src} alt={skill.alt} draggable="false" class={skill?.img} />
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
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8vw;
    transition: transform 0.2s ease;
    padding: 0.65vh 0.8vw;
  }

  .skill-card:hover {
    box-shadow: 0 0.78vw 156vw rgba(234, 227, 227, 0.429);
    transform: scale(1.1);
    cursor: default;
  }

  .skill-img {
    width: 3.4vw;
  }
</style>
