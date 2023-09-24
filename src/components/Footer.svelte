<div class="footer">
	<div class="cols">
		<div>
			<p>Mael Abgrall &copy {new Date().getFullYear()}</p>
		</div>
		<div>
			<a href="/about" class="footer-link">Disclaimer / using my pictures</a>
		</div>
	</div>
</div>

<style>
	.footer {
		margin-top: auto;
		padding: 1rem 1.7rem;
		background-color: var(--foreground);
		box-shadow: 0 0 3px #aaaaaa50;
	}

	.cols {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		align-items: flex-start;
		@apply container justify-start sm:justify-around;
	}

	.cols > div {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.footer-link {
		text-decoration: underline;
	}

	.footer-link:hover {
		text-decoration: none;
		color: var(--pomelo);
	}
</style>
