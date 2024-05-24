<script>
  import Icon from "@iconify/svelte";

  export let title = "YehezGun's Links";
</script>

<svelte:head>
  <title>{title}</title>
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://links.yehezgun.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Link Collections" />
  <meta
    property="og:description"
    content="This is my personalized link collections made using Svelte Kit and Google Spreadsheet API"
  />
  <meta
    property="og:image"
    content="https://og-v2.yehezgun.com/api/og?title=Link%20Collections&desc=This%20is%20my%20personalized%20link%20collections%20made%20using%20Svelte%20Kit%20and%20Google%20Spreadsheet%20API&imgUrl=https://img.icons8.com/fluency/48/link.png&siteName=links.yehezgun.com"
  />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="description"
    content="This is my personalized link collections made using Svelte Kit and Google Spreadsheet API"
  />

  <meta property="twitter:domain" content="yehezgun.com" />
  <meta property="twitter:url" content="https://links.yehezgun.com" />
  <meta name="twitter:title" content="Link Collections" />
  <meta
    name="twitter:description"
    content="This is my personalized link collections made using Svelte Kit and Google Spreadsheet API"
  />
  <meta
    name="twitter:image"
    content="https://og-v2.yehezgun.com/api/og?title=Link%20Collections&desc=This%20is%20my%20personalized%20link%20collections%20made%20using%20Svelte%20Kit%20and%20Google%20Spreadsheet%20API&imgUrl=https://img.icons8.com/fluency/48/link.png&siteName=links.yehezgun.com"
  />
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
