<script>
  function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.querySelector('input[name="entry.16656168"]').value;
    const message = form.querySelector(
      'textarea[name="entry.1309397841"]',
    ).value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !message) {
      return;
    }
    if (!emailRegex.test(email)) {
      return;
    }
    form.submit();
  }
</script>

<div>
  <button type="submit" on:submit={handleFormSubmit}
    >Submit <img src="../Icons/paperairplane.png" alt="paperairplane" /></button
  >
</div>

<style>
  button {
    outline: 0;
    grid-gap: 8px;
    align-items: center;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    background-color: #0babaf;
    flex-shrink: 0;
    font-size: 1.2rem;
    gap: 2px;
    justify-content: center;
    line-height: 1.5;
    overflow: hidden;
    padding: 8px 45px;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: all 0.14s ease-out;
    white-space: nowrap;
  }
  button:hover {
    box-shadow: 0 0 10px #1ecfd2;
    transition: all 0.25s ease-in-out;
  }
  img {
    width: 17px;
  }

  div {
    display: flex;
    justify-content: center;
  }
</style>
