import { Octokit } from 'octokit';

import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';

import { GITHUB_API_TOKEN } from '$env/static/private';

export async function load({ setHeaders }) {
	setHeaders({
		'Cache-Control': 'max-age-3600'
	});

	const octokit = new Octokit({
		auth: GITHUB_API_TOKEN
	});

	const { data }: { data: { name: string; published_at: string; body: string }[] } =
		await octokit.request('GET /repos/chadmuro/mainichi-habits/releases', {
			headers: {
				'X-GitHub-Api-Version': '2022-11-28'
			}
		});

	marked.use({
		langPrefix: 'language-',
		mangle: false,
		headerIds: false,
		headerPrefix: undefined
	});

	const releases = data.map((release) => {
		return {
			name: release.name,
			published_at: release.published_at,
			body: sanitizeHtml(marked.parse(release.body))
		};
	});

	return { data: releases };
}
