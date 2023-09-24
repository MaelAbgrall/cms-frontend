// libs
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
// bloks
import imageList from '../components/storyblok/media/imageList.svelte';
import Button from '../components/storyblok/btns/Button.svelte';
import GalleryList from '../components/storyblok/singleUse/GalleryList.svelte';
import Hero from '../components/storyblok/singleUse/Hero.svelte';

export async function load() {
	storyblokInit({
		accessToken: 'FCQswmgOewFBct16N7P0xAtt',
		use: [apiPlugin],
		components: {
			Button,
			GalleryList,
			Hero,
			imageList
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
