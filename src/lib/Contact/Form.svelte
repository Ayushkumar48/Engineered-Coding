<script>
  import Input from "./Input.svelte";
  import Textarea from "./Textarea.svelte";
  import Submit from "./Submit.svelte";
  import { toast, Toaster } from "svelte-french-toast";

  let formSubmitted = false;

  function handleIframeLoad() {
    if (formSubmitted) {
      toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
        loading: "Sending...",
        success: "Form sent successfully!!",
        error: "Error occured...",
      });

      const form = document.querySelector("form");
      setTimeout(() => {
        if (form) {
          form.reset();
        }
      }, 1000);
      formSubmitted = false;
    }
  }

  function handleSubmit(event) {
    formSubmitted = true;
  }
</script>

<div>
  <form
    method="POST"
    action="https://docs.google.com/forms/d/e/1FAIpQLSdvE3WK83PkgkUYPx6KTKyyHgxAAfp8c5CRaC0POGIhYXftfA/formResponse"
    target="hidden_iframe"
    on:submit={handleSubmit}
  >
    <Input />
    <Textarea />
    <Submit />
  </form>
  <iframe
    name="hidden_iframe"
    id="hidden_iframe"
    style="display:none;"
    title="for form"
    on:load={handleIframeLoad}
  ></iframe>
  <Toaster />
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 4vh;
  }
</style>
