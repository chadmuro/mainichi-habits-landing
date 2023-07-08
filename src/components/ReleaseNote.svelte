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

	<a href="/">View on the App Store</a>
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
