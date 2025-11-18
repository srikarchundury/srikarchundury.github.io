import Head from 'next/head';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { readJSON } from '../utils/readRaw';
import { siteConfig } from '../utils/siteConfig';
import { colors } from '../utils/colors';
// import MainContainer from '../components/MainContainer';
import { Box } from '@mui/material';

const HIGHLIGHT_NAME = 'Srikar Chundury';

export default function PublicationsPage() {
	const [publications, setPublications] = useState(null);

	useEffect(() => {
		readJSON(siteConfig.data.publications)
			.then(setPublications)
			.catch(console.error);
	}, []);

		return (
			<>
				<Head>
					<title>Publications | Srikar Chundury</title>
				</Head>
				<div>
					<Box mb={2}>
						<h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 0.5, color: colors.primary, fontFamily: 'serif', margin: 0 }}>Publications</h1>
						<Box sx={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, mt: 1, mb: 0.5 }} />
						   <span style={{ color: colors.mutedText, fontSize: '1rem', fontStyle: 'italic' }}>
							Peer-reviewed articles, conference proceedings, and scholarly work
						</span>
					</Box>
					{!publications ? (
						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', width: '100%' }}>
							<CircularProgress />
						</Box>
					) : (
						<ol style={{ paddingLeft: 0, margin: 0 }}>
							{publications.map((pub, idx) => (
								<li key={idx} style={{ marginBottom: 24, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}>
									<Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5 }}>
										   <span style={{ fontWeight: 600, fontSize: '1.08rem', color: colors.bodyText, fontFamily: 'serif' }}>{pub.title}</span>
										   <span style={{ marginLeft: 'auto', color: colors.subText, fontSize: '0.97em', fontStyle: 'italic' }}>{pub.year}</span>
									</Box>
									   <div style={{ fontSize: '0.97rem', color: colors.subText }}>{highlightName(pub.authors)}</div>
									   <div style={{ fontSize: '0.97rem', color: colors.secondaryText, fontStyle: 'italic' }}>{pub.venue}</div>
									{pub.link && (
										   <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{ color: colors.highlight, fontWeight: 500, fontSize: '0.98em', textDecoration: 'underline', display: 'inline-block' }}>
											[Link]
										</a>
									)}
								</li>
							))}
						</ol>
					)}
				</div>
			</>
		);
}

function highlightName(authors) {
	// Highlight all occurrences of the user's name in the author string
	const parts = authors.split(new RegExp(`(${HIGHLIGHT_NAME})`, 'gi'));
	return parts.map((part, i) =>
		part.toLowerCase() === HIGHLIGHT_NAME.toLowerCase()
				   ? <span key={i} style={{ fontWeight: 'bold', color: colors.highlight, background: colors.highlightBg, borderRadius: 3, padding: '0 2px' }}>{part}</span>
			: part
	);
}
