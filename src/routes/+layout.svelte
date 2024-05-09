<script>
  import Footer from "$components/Footer.svelte";
  import Headers from "$components/Headers.svelte";
  import "../app.css";
</script>

<Headers />
<main class="prose-base">
  <slot />
</main>
<Footer />
