<script>
  import Input from "./Input.svelte";
  import Textarea from "./Textarea.svelte";
  import Submit from "./Submit.svelte";
  import { toast, Toaster } from "svelte-french-toast";
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

  let formSubmitted = false;

  function handleIframeLoad() {
    if (formSubmitted) {
      toast.promise(new Promise((resolve) => setTimeout(resolve, 500)), {
        loading: "Sending...",
        success: "Form sent successfully!!",
        error: "Error occurred...",
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
    action={data.googleFormUrl}
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
