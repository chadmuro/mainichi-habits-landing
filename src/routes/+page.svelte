<script>
	import './styles.css';
</script>

<main>
	<div class="title-container">
		<div class="title-wrapper">
			<img src="/mainichi-logo.svg" alt="Mainichi logo" class="mainichi-img" />
			<h1>Mainichi <span class="focus-text">Habits</span></h1>
		</div>
		<p>
			Make your <span class="focus-text">habits</span> stick and build your
			<span class="focus-text">streak</span>!
		</p>

		<a
			class="app-store-button"
			href="https://www.chadmuro.com"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/app-store-black.svg" alt="Download on the app store" class="app-store-img" />
		</a>
	</div>
	<div class="screenshot-container">
		<p>Screenshot of app</p>
	</div>
</main>

<footer>
	<p>© Chad Murobayashi 2023</p>
</footer>

<style>
	/* Laayout */
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		@media only screen and (min-width: 768px) {
			flex-direction: row;
		}
	}
	footer {
		/* background-color: red; */
		display: flex;
		justify-content: center;
	}

	/* Title container */
	.title-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title-wrapper {
		display: flex;
		gap: 20px;
	}
	.focus-text {
		color: var(--primary);
	}

	.mainichi-img {
		width: 40px;
		height: auto;
	}

	.app-store-button {
		max-width: 300px;
		width: 100%;
		height: auto;
		background-color: inherit;
		border: none;
		cursor: pointer;
	}

	.app-store-img {
		max-width: 300px;
		width: 100%;
		height: 100%;
	}

	/* Screenshot container */
	.screenshot-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
