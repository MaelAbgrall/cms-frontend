<script lang="ts">
	import { storyblokEditable, StoryblokComponent, type ISbRichtext } from '@storyblok/svelte';

	export let blok: {
		richText: ISbRichtext;
		images: Object[];
	};
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="px-6">
		{#each blok.images as childBlok}
			<StoryblokComponent blok={childBlok} />
		{/each}
	</div>
{/key}
