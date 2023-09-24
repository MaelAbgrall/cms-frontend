<script lang="ts">
	import { renderRichText, storyblokEditable } from '@storyblok/svelte';

	export let blok: {
		content: any;
	};
	$: resolvedRichText = renderRichText(blok.content);
</script>

<div class="rich-text" use:storyblokEditable={blok}>
	{@html resolvedRichText}
</div>

<style>
	.rich-text {
		@apply prose;
		display: flex;
		flex-direction: column;
		margin: auto;
		gap: 1.25rem;
		padding: 1.25rem 0;
	}
</style>
