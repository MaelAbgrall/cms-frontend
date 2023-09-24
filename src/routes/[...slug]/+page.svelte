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
	let url = PUBLIC_BASE_URL + '/' + data.story.full_slug;
	let image = data.story.content.image.filename;

	// // toggle the theme depending on the website
	///////// note do not work in SSR; trying this will also make a flash in client side
	// if (PUBLIC_BASE_URL.includes('photo')) {
	// 	document.documentElement.setAttribute('data-theme', 'photography');
	// }
</script>

<Head {title} {description} {url} {image} />
<svelte:head>
	<meta property="og:site_name" content="Mael Abgrall - Photographer" />
</svelte:head>
{#key data}
	{#if data.story}
		{#if data.story.content.pageType === 'blog'}
			<div class="container mx-auto">
				<h1>name: {data.story.name}</h1>
				<p>description: {data.story.content.description}</p>
				<div use:storyblokEditable={data.story.content.body}>
					{#each data.story.content.body as blok}
						<StoryblokComponent {blok} />
					{/each}
				</div>
			</div>
		{/if}

		{#if data.story.content.pageType === 'page'}
			<div class="container mx-auto">
				<div use:storyblokEditable={data.story.content.body}>
					{#each data.story.content.body as blok}
						<StoryblokComponent {blok} />
					{/each}
				</div>
			</div>
		{/if}

		{#if data.story.content.pageType === 'hero'}
			<div
				use:storyblokEditable={data.story.content.body}
				class="hero"
				style="background-image: url({image});"
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
