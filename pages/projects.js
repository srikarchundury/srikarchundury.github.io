import Head from 'next/head';

import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
// import MainContainer from '../components/MainContainer';
import { readJSON } from '../utils/readRaw';
import { siteConfig } from '../utils/siteConfig';
import { colors } from '../utils/colors';
import { Box } from '@mui/material';

function ProjectDuration({ duration }) {
	return duration;
}

export default function ProjectsPage() {
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		readJSON(siteConfig.data.projects)
			.then(setProjects)
			.catch(console.error);
	}, []);

				 return (
				 <>
					 <Head>
						 <title>Projects | Srikar Chundury</title>
					 </Head>
					 <div>
		       <div style={{ marginBottom: 24 }}>
				<h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 0.5, color: colors.heading, fontFamily: 'serif', margin: 0 }}>Projects & Initiatives</h1>
				<div style={{ width: 60, height: 4, background: colors.highlight, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
				<span style={{ color: colors.mutedText, fontSize: '1rem', fontStyle: 'italic' }}>
				       Research, software development, and open-source contributions
			       </span>
		       </div>
		       {!projects ? (
			       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', width: '100%' }}>
				       <CircularProgress />
			       </Box>
		       ) : (
			       <ol style={{ paddingLeft: 0, margin: 0 }}>
				       {projects.map((proj, idx) => (
						   <li key={idx} style={{ marginBottom: 24, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18, boxShadow: 'none' }}>
						       <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
								   <span style={{ fontWeight: 600, fontSize: '1.08rem', color: colors.bodyText, fontFamily: 'serif' }}>{proj.title}</span>
							       {proj.github && (
									   <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: colors.highlight, fontWeight: 500, fontSize: '0.98em', textDecoration: 'underline' }}>
									       [GitHub]
								       </a>
							       )}
								   <span style={{ marginLeft: 'auto', color: colors.subText, fontSize: '0.97em', fontStyle: 'italic' }}>{proj.duration}</span>
						       </Box>
							   <div style={{ fontSize: '0.97rem', color: colors.bodyText, marginTop: 4 }}>{proj.description}</div>
					       </li>
				       ))}
			       </ol>
		       )}
		</div>
		</>
		);
}
