<script lang="ts">
  import { onMount } from 'svelte';
  import { useStoryblokApi, storyblokEditable } from '@storyblok/svelte';
  import type { APIStoryReturn, Story } from '../../../types/storyblok';

  export let title: string;
  export let description: string;
  let stories: Story[] = [];
  onMount(async () => {
    const storyblokApi = useStoryblokApi();
    const { data }: { data: APIStoryReturn } = await storyblokApi.get('cdn/stories', {
      version: 'draft',
      starts_with: 'gallery',
      is_startpage: false,
    });
    stories = data.stories;
  });
</script>

<h1>{title}</h1>
<p>{description}</p>
<div class="card-cols">
  {#each stories as story}
    <a href="/{story.full_slug}" use:storyblokEditable={story.content} class="card-link">
      <img
        src="{story.content.image.filename}/m/600x0"
        alt={story.content.image.alt}
        height="325px"
        width="600px"
      />
      <h2>
        {story.name}
      </h2>
    </a>
  {/each}
</div>

<style>
  .card-cols {
    @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-4;
  }

  img {
    @apply object-cover w-full h-full;
    /* @apply w-full h-48 xl:h-72 object-cover pointer-events-none; */
  }

  .card-link {
    position: relative;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0px #61656b31;
    transition: transform 0.25s ease-in-out;
    @apply w-full h-full overflow-hidden;
  }

  .card-link:hover {
    transform: translateY(-3px);
  }

  h2 {
    position: absolute;
    background-color: var(--foreground);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: 'Secuela', sans-serif;
    font-weight: 500;
    padding: 0.5rem;
    @apply text-xl;
  }
</style>
