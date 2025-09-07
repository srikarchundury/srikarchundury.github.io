import Head from 'next/head';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { readJSON } from '../utils/readRaw';
import { colors } from '../utils/colors';

export default function ExperiencePage() {
	const [experience, setExperience] = useState(null);

	useEffect(() => {
		readJSON('https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/experience.json.bin')
			.then(setExperience)
			.catch(console.error);
	}, []);

		// Flatten the nested organization/roles structure for rendering
		const flatExperience = experience
			? experience.flatMap(org =>
				org.roles.map(role => ({
					position: role.title,
					company: org.organization,
					duration: role.start + (role.end ? ` – ${role.end}` : ''),
					location: role.location,
					description: role.description
				}))
			)
			: [];

		return (
			<>
				<Head>
					<title>Experience | Srikar Chundury</title>
				</Head>
				<div>
					<div style={{ marginBottom: 24 }}>
						<h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 0.5, color: colors.primary, fontFamily: 'serif', margin: 0 }}>Professional Experience</h1>
						<div style={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
						   <span style={{ color: colors.mutedText, fontSize: '1rem', fontStyle: 'italic' }}>
							Research appointments, industry roles, and academic positions
						</span>
					</div>
					{!experience ? (
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', width: '100%' }}>
							<CircularProgress />
						</div>
					) : (
						<ol style={{ paddingLeft: 0, margin: 0 }}>
							{flatExperience.map((job, idx) => (
								<li key={idx} style={{ marginBottom: 28, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18, boxShadow: 'none' }}>
									<div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
										   <span style={{ fontWeight: 600, fontSize: '1.08rem', color: colors.bodyText, fontFamily: 'serif' }}>{job.position}</span>
										   <span style={{ marginLeft: 'auto', color: colors.subText, fontSize: '0.97em', fontStyle: 'italic' }}>{job.duration}</span>
									</div>
									   <div style={{ fontSize: '0.97rem', color: colors.subText, marginTop: 2 }}>{job.company}</div>
									   <div style={{ fontSize: '0.97rem', color: colors.secondaryText, marginTop: 2, fontStyle: 'italic' }}>{job.location}</div>
									   <div style={{ fontSize: '0.97rem', color: colors.bodyText, marginTop: 2 }}>{job.description}</div>
								</li>
							))}
						</ol>
					)}
				</div>
			</>
		);
}