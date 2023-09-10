<script>
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let data;
	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
		}
	});
	console.log(data);
</script>

<div>
	{#if data.story}
		<StoryblokComponent
			blok={data.story.content}
			title={data.story.name}
			url={PUBLIC_BASE_URL + '/' + data.story.full_slug}
		/>
	{/if}
</div>
