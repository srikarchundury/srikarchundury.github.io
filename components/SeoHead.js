import Head from 'next/head';

const SITE_URL = 'https://srikarchundury.github.io';
const SITE_NAME = 'Srikar Chundury';

export default function SeoHead({ title, description, path = '/', noindex = false, ogImage = null }) {
	const fullTitle = `${title} | ${SITE_NAME}`;
	const url = `${SITE_URL}${path}`;
	const image = ogImage ? `${SITE_URL}${ogImage}` : null;

	return (
		<Head>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			{noindex && <meta name="robots" content="noindex" />}
			<link rel="canonical" href={url} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			{image && <meta property="og:image" content={image} />}
			<meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			{image && <meta name="twitter:image" content={image} />}
		</Head>
	);
}
