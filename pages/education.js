import Head from 'next/head';


import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { readJSON } from '../utils/readRaw';
import { useLinks } from '../components/LinksContext';
import { colors } from '../utils/colors';

export default function EducationPage() {
	const [education, setEducation] = useState(null);
	const { links } = useLinks();

	useEffect(() => {
		if (!links?.data?.education) return;
		readJSON(links.data.education)
			.then(setEducation)
			.catch(console.error);
	}, [links]);

	// Helper to render extra details if present
	function renderDetails(edu) {
		const details = [];
		if (edu.gpa) details.push(<div key="gpa"><b>GPA:</b> {edu.gpa}</div>);
		if (edu.courses) {
			const courseItems = Array.isArray(edu.courses)
				? edu.courses
				: String(edu.courses).split(',').map((course) => course.trim()).filter(Boolean);
			details.push(
				<div key="courses">
					<b>Relevant Courses:</b>
					<ul style={{ margin: '6px 0 0 18px', padding: 0 }}>
						{courseItems.map((course, idx) => (
							<li key={`${course}-${idx}`} style={{ marginBottom: 2 }}>{course}</li>
						))}
					</ul>
				</div>
			);
		}
		if (edu.specialization) details.push(<div key="spec"><b>Specialization:</b> {edu.specialization}</div>);
		if (edu.thesis) details.push(<div key="thesis"><b>Thesis:</b> {edu.thesis}</div>);
		if (edu.certificate) details.push(<div key="cert"><b>Certificate:</b> {edu.certificate}</div>);
		if (edu.details) details.push(<div key="details">{edu.details}</div>);
		return details.length > 0 ? <div style={{ fontSize: '0.97rem', color: colors.bodyText, marginTop: 2 }}>{details}</div> : null;
	}
	return (
		<>
			<Head>
				<title>Education | Srikar Chundury</title>
			</Head>
			<div>
				<div style={{ marginBottom: 24 }}>
					<h1 style={{ fontSize: 'clamp(1.55rem, 1.35rem + 1vw, 2rem)', fontWeight: 700, letterSpacing: 0.3, color: colors.primary, fontFamily: 'serif', margin: 0 }}>Education</h1>
					<div style={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
				</div>
	       {!education ? (
		       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', width: '100%' }}>
			       <CircularProgress />
		       </div>
			) : (
				<ol style={{ paddingLeft: 0, margin: 0 }}>
					{education.map((edu, idx) => (
						   <li key={idx} style={{ marginBottom: 'clamp(16px, 2.2vw, 24px)', listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 'clamp(12px, 1.8vw, 18px)' }}>
							<div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
								   <span style={{ fontWeight: 600, fontSize: 'clamp(0.98rem, 0.94rem + 0.35vw, 1.08rem)', color: colors.bodyText, fontFamily: 'serif' }}>{edu.degree}</span>
								   <span style={{ marginLeft: 'auto', color: colors.subText, fontSize: '0.94rem', fontStyle: 'italic' }}>{edu.start} – {edu.end}</span>
							</div>
							   <div style={{ fontSize: '0.95rem', color: colors.subText, marginTop: 2 }}>{edu.school}</div>
							{renderDetails(edu)}
						</li>
					))}
				</ol>
			)}
				</div>
			</>
		);
}