<script>
	import './styles.css';
</script>

<main>
	<slot />
</main>
<footer>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/release">Release Notes</a>
		</li>
		<li>
			<a href="/privacy">Privacy</a>
		</li>
	</ul>
	<p>
		© <a href="https://www.chadmuro.com/" target="_blank" rel="noopener noreferrer"
			>Chad Murobayashi</a
		> 2023
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 16px;
		max-width: 100%;
	}
	footer {
		display: flex;
		gap: 0px;
		justify-content: center;
		align-items: center;
		padding: 0 16px 16px;
		overflow: wrap;
		flex-direction: column;

		@media only screen and (min-width: 768px) {
			flex-direction: row;
			gap: 20px;
		}
	}

	ul {
		display: flex;
		gap: 25px;
		padding: 0px;
		margin: 0px;
	}
</style>
