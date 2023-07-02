<script>
	import './styles.css';
</script>

<slot />
<footer>
	<ul>
		<li>
			<a href="/">Top</a>
		</li>
		<li>
			<a href="/privacy">Privacy</a>
		</li>
	</ul>
	<p>© Chad Murobayashi 2023</p>
</footer>

<style>
	footer {
		/* background-color: red; */
		display: flex;
		gap: 0px;
		justify-content: center;
		align-items: center;
		padding: 16px;
		overflow: wrap;
		flex-direction: column;

		@media only screen and (min-width: 768px) {
			flex-direction: row;
			gap: 20px;
		}
	}

	ul {
		list-style: none;
		display: flex;
		gap: 20px;
		padding: 0px;
		margin: 0px;
	}

	a {
		color: var(--primary);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
