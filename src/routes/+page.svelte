<script>
  import Icon from "@iconify/svelte";
  export let data;

  const links = data.links;
  const socialMedias = data.socialMedias;
</script>

<div class="space-y-6">
  {#if links}
    {#each links as link}
      <a
        href={link.url}
        class="border border-black rounded-lg flex items-center justify-center hover:underline hover:underline-offset-2 hover:scale-105 hover:transition-transform ease-in duration-300 hover:border-primary group hover:decoration-primary"
        target="_blank"
      >
        <p class="font-semibold group-hover:text-primary">{link.name}</p>
      </a>
    {/each}
  {/if}
</div>

<div class="flex items-center justify-center gap-4 mt-8">
  {#if socialMedias}
    {#each socialMedias as socialMedia}
      <a
        href={socialMedia.url}
        target="_blank"
        class="hover:scale-105 hover:transition-transform ease-in duration-300 group"
      >
        <Icon
          icon={`bxl:${socialMedia.social_media_name}`}
          width={32}
          height={32}
          class="group-hover:text-primary"
        />
      </a>
    {/each}
  {/if}
</div>
