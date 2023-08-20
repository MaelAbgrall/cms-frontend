<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok: {
		image: {
			filename: string;
			alt: string;
		};
	};
</script>

<div
	use:storyblokEditable={blok}
	class="w-full bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden"
>
	<img src={blok.image.filename} alt={blok.image.alt} class="w-full h-48 xl:h-72 object-cover" />
</div>
