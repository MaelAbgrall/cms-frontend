<script lang="ts">
  // libs
  import { onMount } from 'svelte';
  import { renderRichText, useStoryblokApi } from '@storyblok/svelte';
  // types
  import type { Story, SBImage } from '../../../types/storyblok';
  // components
  import RichText from '../../shared/media/RichText.svelte';
  import EmphasizedText from '../../shared/text/EmphasizedText.svelte';
  // services
  import { getReadableDate } from '../../../services/date';
  // store
  import { page } from '$app/stores';

  export let title: string;
  export let description: string;
  export let image: SBImage;
  export let tags: string[];
  export let first_published_at: string;
  export let published_at: string;
  export let blok: {
    content: any;
  };

  let version: 'published' | 'draft' = 'published';
  if ($page.url.hostname.includes('localhost') || $page.url.hostname.includes('editor')) {
    version = 'draft';
  }

  let aboutData: Story | undefined;
  let published: string | null;
  let first_published: string | null;
  onMount(async () => {
    const storyblokApi = useStoryblokApi();
    const { data }: { data: { story: Story } } = await storyblokApi.get('cdn/stories/about', {
      version: version,
    });
    aboutData = data.story;

    published = await getReadableDate(published_at);
    first_published = await getReadableDate(first_published_at);
  });

  $: resolvedRichText = renderRichText(blok.content);
</script>

<div class="blog-head">
  <h1>{title}</h1>
  <p>{description}</p>
  <div class="date">
    {#if published !== first_published}
      <div>Updated on {published}</div>
    {/if}
    <div>Posted on {first_published}</div>
  </div>
  <img src="{image.filename}/m/0x800" alt={image.alt} />
</div>
<div class="blog-content">
  <RichText {resolvedRichText} />
</div>
<div class="blog-footer">
  <div class="tags">
    {#if tags.length === 0}
      <p>Oops, I forgot to put tags...</p>
    {:else}
      {#each tags as tag}
        <a href="/blog?tag={tag}" class="tag">#{tag}</a>
      {/each}
    {/if}
  </div>
  <EmphasizedText text="about me" />
  <div class="author">
    <img src="{aboutData?.content.image.filename}/m/300x0" alt={aboutData?.content.image.alt} />
    <div class="author-meta">
      <p>Mael Abgrall</p>
      <p>{aboutData?.content.description}</p>
    </div>
  </div>
</div>

<style>
  .blog-head,
  .blog-footer {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    margin: auto;
    @apply max-w-prose;
  }
  .blog-head > h1 {
    @apply text-5xl;
  }

  .date {
    display: flex;
    gap: 0.5rem;
    color: #595959;
    @apply text-sm;
  }

  .tags {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  .tag {
    text-decoration: underline;
  }
  .tag:hover {
    text-decoration: none;
    color: var(--pomelo);
  }

  img {
    border-radius: 0.5rem;
    /* max-width: 55%; */
    margin: auto;
    border: 1px solid #61656b31;
    box-shadow: 5px 5px 10px 0px #61656b31;
  }

  .author {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;
  }
  .author > img {
    max-width: 150px;
  }
  .author-meta {
    max-width: 46ch;
  }
</style>
