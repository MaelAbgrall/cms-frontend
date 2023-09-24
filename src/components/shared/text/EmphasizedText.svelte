<script lang="ts">
	export let text: string;
	export let colorOverride: string | undefined = 'black';
</script>

<div class="classy-bar" style="color: {colorOverride};">
	<div class="bar" style="background-color: {colorOverride};"></div>
	<p>{text.toUpperCase()}</p>
	<div class="bar" style="background-color: {colorOverride};"></div>
</div>

<style>
	.classy-bar {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		padding: 1rem;
		width: 100%;
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
	}
	.classy-bar > p {
		flex-shrink: 0;
		font-family: 'Secuela', sans-serif;
		font-weight: 550;
		letter-spacing: 0.055rem;
		font-size: small;
		width: max-content;
	}
	.bar {
		height: 0.1rem;
		width: 100%;
		border-radius: 1rem;
		box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
	}
</style>
