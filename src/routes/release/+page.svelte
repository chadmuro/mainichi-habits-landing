<script lang="ts">
	import releases from '../../data/release';
	import ReleaseNote from '../../components/ReleaseNote.svelte';
	console.log(releases);
</script>

<div class="container">
	<h1>Release Notes</h1>

	<ul>
		{#each releases as { version, date, releaseNotes }}
			<li>
				<ReleaseNote {version} {date} {releaseNotes} />
			</li>
		{/each}
	</ul>
</div>

<style>
	.container {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 800px;
	}

	ul {
		padding: 0;
	}
</style>
