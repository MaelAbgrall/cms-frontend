<script lang="ts">
	import LinkCard from '../../shared/cards/LinkCard.svelte';
	import { onMount } from 'svelte';
	import { useStoryblokApi } from '@storyblok/svelte';
	import type { APIStoryReturn, story } from '../../../types/storyblok';
	export let blok: any;
	let articles: story[] = [];
	onMount(async () => {
		const storyblokApi = useStoryblokApi();
		const { data }: { data: APIStoryReturn } = await storyblokApi.get('cdn/stories', {
			version: 'draft',
			starts_with: 'gallery',
			is_startpage: false
		});
		articles = data.stories;
		console.log(articles);
	});
</script>

<div class="py-24">
	<h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{blok.title}</h2>
	<div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
		{#each articles as article}
			<LinkCard article={article.content} slug={article.full_slug} />
		{/each}
	</div>
</div>
