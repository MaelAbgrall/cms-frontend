// libs
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
// bloks
import PhotoGrid from '../components/storyblok/pages/PhotoGrid.svelte';
import Feature from '../components/storyblok/Feature.svelte';
import Grid from '../components/storyblok/Grid.svelte';
import Page from '../components/storyblok/pages/Page.svelte';
import Teaser from '../components/storyblok/Teaser.svelte';
import Image from '../components/storyblok/Image.svelte';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: 'FCQswmgOewFBct16N7P0xAtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser,
			Image,
			PhotoGrid
		},
		apiOptions: {
			https: true
		}
	});
	const storyblokApi = await useStoryblokApi();

	return {
		storyblokApi
	};
}
