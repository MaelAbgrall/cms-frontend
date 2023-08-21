<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<img {src} {alt} class="img" />

<style>
	.img {
		border: 1px solid red;
	}
</style>
