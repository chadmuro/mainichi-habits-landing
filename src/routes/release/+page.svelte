<script lang="ts">
	import ReleaseNote from '../../components/ReleaseNote.svelte';

	export let data;
</script>

<div class="container">
	<h1>Release Notes</h1>

	<ul>
		{#each data.data as { name, published_at, body }}
			<li>
				<ReleaseNote version={name} date={published_at} releaseNotes={body} />
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
		list-style: none;
		margin-top: 0;
	}
</style>
