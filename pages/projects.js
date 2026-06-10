import Head from 'next/head';

import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// import MainContainer from '../components/MainContainer';
import { readJSON } from '../utils/readRaw';
import { useLinks } from '../components/LinksContext';
import { colors } from '../utils/colors';
import { Box } from '@mui/material';

function ProjectDuration({ duration }) {
	return duration;
}

export default function ProjectsPage() {
	const [projects, setProjects] = useState(null);
	const { links } = useLinks();

	useEffect(() => {
		if (!links?.data?.projects) return;
		readJSON(links.data.projects)
			.then(setProjects)
			.catch(console.error);
	}, [links]);

				 return (
				 <>
					 <Head>
						 <title>Projects | Srikar Chundury</title>
					 </Head>
					 <div>
		       <div style={{ marginBottom: 24 }}>
				<h1 style={{ fontSize: 'clamp(1.55rem, 1.35rem + 1vw, 2rem)', fontWeight: 700, letterSpacing: 0.3, color: colors.heading, fontFamily: 'serif', margin: 0 }}>Projects & Initiatives</h1>
				<div style={{ width: 60, height: 4, background: colors.highlight, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
		       </div>
		       {!projects ? (
			       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', width: '100%' }}>
				       <CircularProgress />
			       </Box>
		       ) : (
			       <ol style={{ paddingLeft: 0, margin: 0 }}>
				       {projects.map((proj, idx) => (
						   <li key={idx} style={{ marginBottom: 'clamp(14px, 2vw, 22px)', listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 'clamp(12px, 1.8vw, 18px)', boxShadow: 'none' }}>
						       <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
								   <span style={{ fontWeight: 600, fontSize: 'clamp(0.98rem, 0.94rem + 0.35vw, 1.08rem)', color: colors.bodyText, fontFamily: 'serif' }}>{proj.title}</span>
							       {proj.github && (
									   <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: colors.highlight, fontWeight: 500, fontSize: '0.98em', textDecoration: 'underline' }}>
									       [GitHub]
								       </a>
							       )}
								   <span style={{ marginLeft: 'auto', color: colors.subText, fontSize: '0.94rem', fontStyle: 'italic' }}>{proj.duration}</span>
						       </Box>
							   <div style={{ fontSize: '0.95rem', color: colors.bodyText, marginTop: 4, lineHeight: 1.55 }}>{proj.description}</div>
					       </li>
				       ))}
			       </ol>
		       )}
		</div>
		</>
		);
}
