<script lang="ts">
  import { Head } from 'svead';
  import { PUBLIC_BASE_URL } from '$env/static/public';
  import { onMount } from 'svelte';
  import { useStoryblokBridge, StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
  import type { Story } from '../../types/storyblok';

  export let data: { story: Story };
  onMount(() => {
    if (data.story) {
      useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
    }
  });

  let title = data.story.name;
  let description = data.story.content.description;
  let url = data.story.full_slug.includes('home')
    ? PUBLIC_BASE_URL + '/' + data.story.full_slug
    : PUBLIC_BASE_URL + '/';
  let image = data.story.content.image.filename;
</script>

<Head {title} {description} {url} {image} />
<svelte:head>
  <meta property="og:site_name" content="Mael Abgrall - Photographer" />
</svelte:head>
{#key data}
  {#if data.story}
    {#if data.story.content.pageType === 'page'}
      <div class="container mx-auto">
        <div use:storyblokEditable={data.story.content.body}>
          {#each data.story.content.body as blok}
            <StoryblokComponent
              {blok}
              title={data.story.name}
              description={data.story.content.description}
              tags={data.story.tag_list}
              first_published_at={data.story.first_published_at}
              published_at={data.story.published_at}
              image={data.story.content.image}
            />
          {/each}
        </div>
      </div>
    {/if}

    {#if data.story.content.pageType === 'hero'}
      <div
        use:storyblokEditable={data.story.content.body}
        class="hero"
        style="background-image: url({data.story.content.image.filename}/m/1920x0);"
      >
        {#each data.story.content.body as blok}
          <StoryblokComponent {blok} />
        {/each}
      </div>
    {/if}
  {/if}
{/key}

<style>
  .hero {
    min-height: 100%;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
