<script lang="ts">
  import { renderRichText } from '@storyblok/svelte';
  import type { SBImage } from '../../../types/storyblok';
  import RichText from '../../shared/media/RichText.svelte';
  import EmphasizedText from '../../shared/text/EmphasizedText.svelte';

  export let title: string;
  export let description: string;
  export let image: SBImage;
  export let tags: string[];
  export let first_published_at: string;
  export let published_at: string;
  export let blok: {
    content: any;
  };

  $: resolvedRichText = renderRichText(blok.content);
</script>

<div class="blog-head">
  <h1>{title}</h1>
  <p>{description}</p>
  <div class="date">
    <div>Posted on {first_published_at}</div>
    <div>Updated on {published_at}</div>
  </div>
  <img src={image.filename} alt={image.alt} />
</div>
<div class="blog-content">
  <RichText {resolvedRichText} />
</div>
<div class="blog-footer">
  <div class="tags">
    <div class="tag">#my tag</div>
    <div class="tag">#my tag</div>
    <div class="tag">#my tag</div>
  </div>
  <EmphasizedText text="about me" />
  <div class="author"></div>
</div>

<style>
  .blog-head,
  .blog-footer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
</style>