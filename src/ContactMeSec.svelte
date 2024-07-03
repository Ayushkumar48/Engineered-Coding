<script>
  import { Label, Input, Textarea } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
  import ToasterSuccess from "./Toaster-success.svelte";
  import ToasterEmailFailure from "./Toaster-invalidemail.svelte";
  import ToasterWriteBoth from "./Toaster-writeboth.svelte";
  import { fade } from "svelte/transition";

  let showSuccess = false;
  let showEmailFailure = false;
  let showWriteBoth = false;

  let textareaprops = {
    id: "message",
    name: "message",
    label: "Your message",
    rows: 6,
    placeholder: "Write your thoughts here...",
  };

  function handleFormSubmit(event) {
    event.preventDefault();

    // Hide the toasts initially
    showEmailFailure = false;
    showWriteBoth = false;

    const form = event.target;
    const email = form.querySelector('input[name="entry.16656168"]').value;
    const message = form.querySelector(
      'textarea[name="entry.1309397841"]'
    ).value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !message) {
      showWriteBoth = true;
      return;
    }
    if (!emailRegex.test(email)) {
      showEmailFailure = true;
      return;
    }

    form.submit();
  }

  function handleIframeLoad() {
    showSuccess = true;
    const form = document.querySelector("form");
    setTimeout(() => {
      showSuccess = false;
      if (form) {
        form.reset();
      }
    }, 3000);
  }

  window.onload = () => {
    const iframe = document.getElementById("hidden_iframe");
    iframe.addEventListener("load", handleIframeLoad);
  };
</script>

<section>
  <h2>Contact Me</h2>

  <div class="formouterdiv">
    <form
      method="POST"
      action="https://docs.google.com/forms/d/e/1FAIpQLSdEbRWrFf9Bq860kMJF6_FMu0BdyQ8i8TbxmmH9q7iIflwYbA/formResponse"
      target="hidden_iframe"
      on:submit={handleFormSubmit}
    >
      <div class="mb-6">
        <Label for="input-group-1" class="block mb-2 label">Your Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          name="entry.16656168"
          class="inputs"
        >
          <EnvelopeSolid
            slot="left"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
          />
        </Input>
        <Label for="message" class="block mb-2 label">Your Message</Label>
        <Textarea {...textareaprops} name="entry.1309397841" class="inputs" />
      </div>
      <div class="submit-div">
        <button type="submit" class="btn-submit"
          >Submit <img
            src="../Icons/paperairplane.png"
            alt="paperairplane"
          /></button
        >
      </div>
    </form>
    <iframe
      name="hidden_iframe"
      id="hidden_iframe"
      style="display:none;"
      title="for form"
    ></iframe>
    {#if showSuccess}
      <div id="success" transition:fade={{ duration: 500 }}>
        <ToasterSuccess></ToasterSuccess>
      </div>
    {/if}
    {#if showEmailFailure}
      <div id="inavalidemail" transition:fade={{ duration: 500 }}>
        <ToasterEmailFailure></ToasterEmailFailure>
      </div>
    {/if}
    {#if showWriteBoth}
      <div id="writeboth" transition:fade={{ duration: 500 }}>
        <ToasterWriteBoth></ToasterWriteBoth>
      </div>
    {/if}
  </div>
</section>

<style>
  h2 {
    font-size: 3.5rem;
    font-weight: bold;
    color: burlywood;
    text-align: center;
  }

  section {
    padding-bottom: 30vh;
    padding-top: 28vh;
    background-color: #111827;
  }

  .formouterdiv {
    display: flex;
    justify-content: center;
  }

  :global(.inputs) {
    width: 35rem;
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
    box-sizing: border-box;
  }

  :global(.inputs:focus) {
    outline: none !important;
    border-color: #4773ec;
    --tw-ring-color: #1d4ed8;
    --tw-ring-opacity: 1;
  }

  :global(.inputs::placeholder) {
    font-size: 1.2rem;
  }

  :global(.label) {
    font-size: 1.2rem;
    margin-top: 2.3vh;
  }

  .btn-submit:hover {
    background-color: #1e40af;
  }

  .btn-submit {
    font-size: 1.2rem;
    text-align: center;
    background-color: #1d4ed8;
    color: white;
    border: none;
    padding: 0.5rem 2.5rem;
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  img {
    max-width: 1rem;
  }

  .submit-div {
    display: flex;
    justify-content: center;
  }
</style>
