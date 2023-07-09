<script lang="ts">
	export let version: string;
	export let date: string;
	export let releaseNotes: string;
</script>

<div>
	<h2>Version: {version}</h2>
	<date>{date}</date>

	<h3>What's new in this version?</h3>
	<p>{releaseNotes}</p>

	<a
		href="https://apps.apple.com/app/mainichi-habits/id6451048200"
		target="_blank"
		rel="noopener noreferrer">Download on the App Store</a
	>
</div>
<div class="spacer" />

<style>
	p {
		font-family: 'Roboto', sans-serif;
	}

	.spacer {
		width: 100%;
		border-bottom: 1px solid var(--text);
		padding: 16px 0;
	}
</style>
