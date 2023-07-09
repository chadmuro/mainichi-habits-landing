<div class="container">
	<div class="title-container">
		<div class="title-wrapper">
			<img src="/mainichi-logo.svg" alt="Mainichi logo" class="mainichi-img" />
			<h1><span class="focus-text">Mainichi</span> Habits</h1>
		</div>
		<p class="title-description">
			Make your <span class="focus-text">habits</span> stick and build your
			<span class="focus-text">streak</span>!
		</p>

		<a
			class="app-store-button"
			href="https://apps.apple.com/app/mainichi-habits/id6451048200"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src="/app-store-black.svg" alt="Download on the app store" class="app-store-img" />
		</a>
	</div>
	<div class="screenshot-container">
		<img src="/iphone.png" alt="Mainichi screenshot" class="screenshot-img" />
	</div>
</div>

<style>
	.container {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 1200px;

		@media only screen and (min-width: 768px) {
			flex-direction: row;
		}
	}

	/* Title container */
	.title-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.title-wrapper {
		display: flex;
		font-size: 16px;
		gap: 20px;

		@media only screen and (min-width: 768px) {
			font-size: 18px;
		}

		@media only screen and (min-width: 992px) {
			font-size: 24px;
		}
	}

	.mainichi-img {
		width: 40px;
		height: auto;
	}

	.title-description {
		text-align: center;
	}

	.app-store-button {
		max-width: 280px;
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
		justify-content: center;
		width: 100%;
		padding-top: 16px;

		@media only screen and (min-width: 768px) {
			padding-top: 0px;
		}
	}

	.screenshot-img {
		width: 100%;
		max-width: 380px;
	}
</style>
