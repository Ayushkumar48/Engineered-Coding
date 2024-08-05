<main>
  <div>
    <span>
      <h2>LeetCode</h2>
      <embed src={import.meta.env.VITE_LEETCODE_API} width="600" height="400" />
    </span>
    <span>
      <h2>GitHub Heatmap</h2>
      <div class="github">
        <img
          src={import.meta.env.VITE_GITHUB_API}
          alt="githubheatmap"
          draggable={false}
        />
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
