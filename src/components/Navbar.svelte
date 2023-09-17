<header class="navbar">
	<div class="container h-full mx-auto flex items-center justify-between">
		<a href="/">
			<div class="title">Mael Abgrall</div>
		</a>
		<nav>
			<ul>
				<li>
					<a href="/gallery"> Gallery </a>
				</li>
				<!-- <li class="hover:text-[#50b0ae]">
					<a href="/"> Services </a>
				</li> -->
				<li>
					<a href="/about"> About </a>
				</li>
			</ul>
		</nav>
	</div>
</header>
<div class="nav-spacer" />

<style>
	.nav-spacer {
		/* Must be the same as the navbar height
				Push back the content for the same amount as the navbar height
				this is due to it being "fixed"
		*/
		height: 3rem;
	}

	.navbar {
		font-family: 'Caveat', cursive;

		width: 100%;
		position: fixed;
		z-index: 1;
		background-color: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(5px);
		height: 3rem;
	}

	.title {
		font-family: 'Caveat Brush', cursive;
		@apply text-3xl;
	}

	ul {
		display: flex;
		font-size: x-large;
		gap: 1rem;
	}

	li :hover {
		color: var(--pomelo);
		/* background-color: var(--teal); */
		text-shadow: 1px 2px 4px #8a8a8a;
	}
</style>
