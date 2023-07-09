type Release = {
	version: string;
	date: string;
	releaseNotes: string;
};
const releases: Release[] = [
	{
		version: '1.0.0',
		date: '2023-07-09',
		releaseNotes:
			'Version 1.0.0 of the app has been released to the App Store. Start tracking your habits and build up your streak. '
	}
];

export default releases;
