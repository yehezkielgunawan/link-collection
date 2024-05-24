<script>
  import Icon from "@iconify/svelte";

  export let title = "YehezGun's Links";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<nav class="navbar bg-base-100">
  <div class="flex-1">
    <div class="flex items-center gap-1">
      <img src="/icons8-link-48.png" alt="icon" width="24" height="24" />
      <a href="/" class="text-lg font-bold">YehezGun's Links Collection</a>
    </div>
  </div>
  <div class="flex-none">
    <a
      href="https://github.com/yehezkielgunawan/link-collection"
      class="btn btn-ghost"
      target="_blank"
    >
      <Icon icon={`bxl:github`} width={24} height={24} /> Github Repo</a
    >
  </div>
</nav>
