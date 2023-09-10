<script lang="ts">
	import { Head } from 'svead';
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok: {
		description: string;
		imageList: {
			alt: string;
			copyright: string;
			filename: string;
			id: number;
			title: string;
		}[];
	};
	export let title: string;
	export let url: string;
	let description = blok.description;
	// let image =
</script>

<Head {title} {description} {url} />
{#key blok}
	<div use:storyblokEditable={blok} class="container">
		<h1>{title}</h1>
		<p class="description">{blok.description}</p>
		<div class="photo-gallery">
			{#each blok.imageList as childBlok}
				<picture>
					<!-- FHD screen -->
					<source
						srcset={childBlok.filename + '/m/fit-in/0x800/filters:format(webp)'}
						media="(min-width: 1400px)"
						height="800"
					/>
					<!-- HD screen -->
					<source
						srcset={childBlok.filename + '/m/fit-in/0x650/filters:format(webp)'}
						media="(min-width: 900px)"
						height="650"
					/>
					<!-- default -->
					<img
						src={childBlok.filename + '/m/fit-in/0x800/filters:format(webp)'}
						alt={childBlok.alt}
					/>
				</picture>
			{/each}
		</div>
	</div>
{/key}

<style>
	@media screen and (max-width: 1400px) {
		.container {
			max-width: 90vw;
		}
	}
	.container {
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		max-width: 1280px;
	}
	.photo-gallery {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5rem;
		padding: 5rem 0;
	}
	.description {
		max-width: 75ch;
		text-align: left;
	}
</style>
