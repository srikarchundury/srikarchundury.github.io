import Head from 'next/head';


import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { readJSON } from '../utils/readRaw';
import { siteConfig } from '../utils/siteConfig';
import { colors } from '../utils/colors';

export default function EducationPage() {
	const [education, setEducation] = useState(null);

	useEffect(() => {
		readJSON(siteConfig.data.education)
			.then(setEducation)
			.catch(console.error);
	}, []);

	// Helper to render extra details if present
	function renderDetails(edu) {
		const details = [];
		if (edu.gpa) details.push(<div key="gpa"><b>GPA:</b> {edu.gpa}</div>);
		if (edu.courses) details.push(<div key="courses"><b>Relevant Courses:</b> {edu.courses}</div>);
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
					<h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 0.5, color: colors.primary, fontFamily: 'serif', margin: 0 }}>Education</h1>
					<div style={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
					   <span style={{ color: colors.mutedText, fontSize: '1rem', fontStyle: 'italic' }}>
						Formal education, degrees, and institutions attended
					</span>
				</div>
	       {!education ? (
		       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', width: '100%' }}>
			       <CircularProgress />
		       </div>
			) : (
				<ol style={{ paddingLeft: 0, margin: 0 }}>
					{education.map((edu, idx) => (
							   <li key={idx} style={{ marginBottom: 28, listStyle: 'none', borderLeft: `3px solid ${colors.shadowBlue}`, paddingLeft: 18 }}>
							<div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
								   <span style={{ fontWeight: 600, fontSize: '1.08rem', color: colors.bodyText, fontFamily: 'serif' }}>{edu.degree}</span>
								   <span style={{ marginLeft: 'auto', color: colors.subText, fontSize: '0.97em', fontStyle: 'italic' }}>{edu.start} – {edu.end}</span>
							</div>
							   <div style={{ fontSize: '0.97rem', color: colors.subText, marginTop: 2 }}>{edu.school}</div>
							{renderDetails(edu)}
						</li>
					))}
				</ol>
			)}
				</div>
			</>
		);
}