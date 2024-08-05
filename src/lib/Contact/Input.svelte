<script>
</script>

<div>
  <label for="email">Your Email</label>
  <div id="input">
    <img src="./Icons/emailicon.png" alt="" />
    <input
      type="email"
      id="email"
      name="entry.1907958631"
      placeholder="name@example.com"
      required
    />
  </div>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 1vh;
  }
  label {
    font-size: 1.2rem;
  }
  input {
    width: 35vw;
    border-radius: 10px;
    padding-left: 45px;
  }
  #input {
    position: relative;
    width: max-content;
    display: inline-block;
    color: black;
  }
  img {
    position: absolute;
    width: 25px;
    left: 8px;
    top: 50%;
    opacity: 0.4;
    transform: translateY(-50%);
    pointer-events: none;
  }
</style>
