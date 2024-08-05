<script>
  import { onMount } from "svelte";
  let data = {};

  const fetchData = async () => {
    try {
      const response = await fetch("/api/secret");
      if (!response.ok) throw new Error("Network response was not ok");
      data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  onMount(() => {
    fetchData();
  });
</script>

<main>
  <div>
    <span>
      <h2>LeetCode</h2>
      <embed src={data.leetcodeApi} width="600" height="400" type="image/png" />
    </span>
    <span>
      <h2>GitHub Heatmap</h2>
      <div class="github">
        <img src={data.githubApi} alt="GitHub Heatmap" draggable={false} />
      </div>
    </span>
  </div>
</main>

<style>
  h2 {
    color: burlywood;
    font-size: 3.2rem;
    font-weight: bold;
  }
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }
  embed {
    height: auto;
    width: 42vw;
    border-radius: 10px;
  }
  div {
    display: flex;
    gap: 2vw;
    flex-direction: row;
  }
  .github {
    background-color: darkslateblue;
    padding: 20px;
    border-radius: 10px;
    margin-top: 10%;
  }
</style>
