<script lang="ts">
  import { renderRichText, storyblokEditable } from '@storyblok/svelte';
  import RichText from '../../shared/media/RichText.svelte';

  export let blok: {
    content: any;
  };
  $: resolvedRichText = renderRichText(blok.content);
</script>

<div class="rich-text" use:storyblokEditable={blok}>
  <RichText {resolvedRichText} />
</div>
