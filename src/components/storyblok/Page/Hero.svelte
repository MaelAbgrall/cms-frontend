<script lang="ts">
  import { StoryblokComponent, renderRichText, storyblokEditable } from '@storyblok/svelte';
  // components
  import EmphasizedText from '../../shared/text/EmphasizedText.svelte';

  export let blok: {
    emphasizedText: string;
    links: any;
    additionalText: any;
  };

  $: resolvedRichText = renderRichText(blok.additionalText);
</script>

<div class="hero-inner" use:storyblokEditable={blok}>
  <h1 class="hero-title">Mael Abgrall</h1>

  {#if blok.emphasizedText}
    <EmphasizedText text={blok.emphasizedText} colorOverride="#dec267" shadow={true} />
    <!-- <EmphasizedText text="engineer | founder | photographer" /> -->
  {/if}
  <p>{@html resolvedRichText}</p>
  <div use:storyblokEditable={blok.links} class="btns">
    {#each blok.links as link}
      <StoryblokComponent blok={link} />
    {/each}
  </div>
</div>

<style>
  .hero-title {
    font-family: 'High Summit', 'Caveat Brush', cursive;
    @apply text-5xl md:text-8xl;
  }
  .hero-inner {
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    @apply max-w-prose;
  }

  .btns {
    color: var(--color);
    text-shadow: none;
    display: flex;
    gap: 1rem;
  }
</style>
