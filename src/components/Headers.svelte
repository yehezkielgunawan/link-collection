<script>
  export let title = "YehezGun's Links";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<nav class="navbar bg-base-100">
  <div class="flex-1">
    <a href="/" class="text-lg font-bold">Link Collection</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Menu</summary>
          <ul class="p-2 bg-base-100 rounded-t-none">
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</nav>
