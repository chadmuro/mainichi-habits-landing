<script lang="ts">
	export let version: string;
	export let date: string;
	export let releaseNotes: string[];
</script>

<div>
	<h2>Version: {version}</h2>
	<date>{date}</date>

	<h3>What's New in This Version?</h3>
	<ul>
		{#each releaseNotes as releaseNote}
			<li><p>{releaseNote}</p></li>
		{/each}
	</ul>
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

	li {
		list-style: initial;
	}

	.spacer {
		width: 100%;
		border-bottom: 1px solid var(--text);
		padding: 16px 0;
	}
</style>
