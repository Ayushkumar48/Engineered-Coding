<script>
  export let descriptionData;
</script>

<div>
  <h3>{descriptionData.title}</h3>
  <p>{descriptionData.description}</p>
</div>

<style>
  p {
    font-size: 1.13rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ede781;
  }

  div {
    margin-right: 2vw;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2vh;
    padding: 5vh 0;
    align-items: center;
  }
</style>
