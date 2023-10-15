<script lang="ts">
  // libs
  import { onMount } from 'svelte';
  import { useStoryblokApi, storyblokEditable } from '@storyblok/svelte';
  // types
  import type { APIStoryReturn, Story } from '../../../types/storyblok';
  // services
  import { getReadableDate } from '../../../services/date';
  // store
  import { page } from '$app/stores';

  let version: 'published' | 'draft' = 'published';
  if ($page.url.hostname.includes('localhost') || $page.url.hostname.includes('editor')) {
    version = 'draft';
  }

  export let title: string;
  export let description: string;
  let stories: Story[] = [];
  onMount(async () => {
    const storyblokApi = useStoryblokApi();
    const { data }: { data: APIStoryReturn } = await storyblokApi.get('cdn/stories', {
      version: version,
      starts_with: 'blog',
      is_startpage: false,
    });
    stories = data.stories;
    console.log(stories);
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
      <div class="card-data">
        <h2>
          {story.name}
        </h2>
        <p class="description">
          {story.content.description.length < 120
            ? story.content.description
            : `${story.content.description.slice(0, 120)}...`}
        </p>
        {#await getReadableDate(story.published_at)}
          <p class="date">...</p>
        {:then readableDate}
          <p class="date">
            {story.published_at === story.first_published_at
              ? `Posted ${readableDate}`
              : `Updated ${readableDate}`}
          </p>
        {/await}
      </div>
    </a>
  {/each}
</div>

<style>
  .card-cols {
    @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-4;
  }

  img {
    height: 12rem;
    height: 50%;
    @apply object-cover w-full;
    /* @apply w-full h-48 xl:h-72 object-cover pointer-events-none; */
  }

  .card-link {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0px #61656b31;
    transition: transform 0.25s ease-in-out;
    color: var(--color-foreground);
    background-color: var(--foreground);
    @apply w-full h-full;
  }

  .card-link:hover {
    transform: translateY(-3px);
  }

  .card-data {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    /* gap: 0.5rem; */
    height: 100%;
  }
  h2 {
    font-family: 'Secuela', sans-serif;
    font-weight: 500;
    @apply text-xl;
  }
  .description {
    /* height: 100%; */
    flex-grow: 1;
  }
  .date {
    @apply text-sm;
  }
</style>
