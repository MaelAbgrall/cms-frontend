<script lang="ts">
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok: {
		body: Object[];
	};
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="px-6">
		{#each blok.body as childBlok}
			<StoryblokComponent blok={childBlok} />
		{/each}
	</div>
{/key}
