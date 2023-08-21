<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	// components
	import ImageCard from '../shared/media/ImageCard.svelte';

	export let blok: {
		image: {
			filename: string;
			alt: string;
		};
	};
</script>

<div use:storyblokEditable={blok}>
	<ImageCard
		src={blok.image.filename + '/m/fit-in/200x200/filters:fill(ffffff)'}
		alt={blok.image.alt}
	/>
</div>

<style>
	.img {
		border: 1px solid black;
	}
</style>
