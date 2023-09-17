<script lang="ts">
	import { Head } from 'svead';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent, storyblokEditable } from '@storyblok/svelte';

	export let data;
	let { story } = data;
	onMount(() => {
		if (story) {
			useStoryblokBridge(story.id, (newStory) => (story = newStory));
		}
	});
	console.log(story);
	let title = story.name;
	let description = story.content.description;
	let url = PUBLIC_BASE_URL + '/' + data.story.full_slug;
</script>

<Head {title} {description} {url} />
{#key story}
	<div>
		{#if story}
			<h1>name: {story.name}</h1>
			<div use:storyblokEditable={story.content.body}>
				{#each story.content.body as blok}
					<StoryblokComponent {blok} />
				{/each}
			</div>
		{/if}
	</div>
{/key}
