<script lang="ts">
	import dayjs from 'dayjs';

	export let version: string;
	export let date: string;
	export let releaseNotes: string;
</script>

<div>
	<h2>{version}</h2>
	<date>{dayjs(date).format('YYYY-MM-DD')}</date>

	{@html releaseNotes}
</div>
<div class="spacer" />

<style>
	.spacer {
		width: 100%;
		border-bottom: 1px solid var(--text);
		padding: 16px 0;
	}
</style>
