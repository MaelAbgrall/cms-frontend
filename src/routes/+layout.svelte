<script>
	import '../app.postcss';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<main class="main">
	<Navbar />
	<slot />
	<Footer />
</main>

<style>
	.main {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
