import SeoHead from '../components/SeoHead';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { readJSON } from '../utils/readRaw';
import { useLinks } from '../components/LinksContext';
import { colors } from '../utils/colors';

export default function ExperiencePage() {
	const [experience, setExperience] = useState(null);
	const { links } = useLinks();

	useEffect(() => {
		if (!links?.data?.experience) return;
		readJSON(links.data.experience)
			.then(setExperience)
			.catch(console.error);
	}, [links]);

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
				<SeoHead
					title="Experience"
					description="Professional and research experience of Srikar Chundury in high-performance computing and machine learning."
					path="/experience"
				/>
				<div>
					<div style={{ marginBottom: 24 }}>
						<h1 style={{ fontSize: 'clamp(1.55rem, 1.35rem + 1vw, 2rem)', fontWeight: 700, letterSpacing: 0.3, color: colors.primary, fontFamily: 'serif', margin: 0 }}>Professional Experience</h1>
						<div style={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
						</div>
					{!experience ? (
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', width: '100%' }}>
							<CircularProgress />
						</div>
					) : (
						<ol style={{ paddingLeft: 0, margin: 0 }}>
							{flatExperience.map((job, idx) => (
								<li key={idx} style={{ marginBottom: 'clamp(16px, 2.2vw, 24px)', listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 'clamp(12px, 1.8vw, 18px)', boxShadow: 'none' }}>
									<div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
										   <span style={{ fontWeight: 600, fontSize: 'clamp(0.98rem, 0.94rem + 0.35vw, 1.08rem)', color: colors.bodyText, fontFamily: 'serif' }}>{job.position}</span>
										   <span style={{ marginLeft: 'auto', color: colors.subText, fontSize: '0.94rem', fontStyle: 'italic' }}>{job.duration}</span>
									</div>
									   <div style={{ fontSize: '0.95rem', color: colors.subText, marginTop: 2 }}>{job.company}</div>
									   <div style={{ fontSize: '0.95rem', color: colors.secondaryText, marginTop: 2, fontStyle: 'italic' }}>{job.location}</div>
									   <div style={{ fontSize: '0.95rem', color: colors.bodyText, marginTop: 2, lineHeight: 1.55 }}>{job.description}</div>
								</li>
							))}
						</ol>
					)}
				</div>
			</>
		);
}