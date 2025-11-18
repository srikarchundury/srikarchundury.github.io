import Head from 'next/head';

import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import DownloadIcon from '@mui/icons-material/Download';
	
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { colors } from '../utils/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import { readJSON, readImage, readRaw } from '../utils/readRaw';
import { siteConfig } from '../utils/siteConfig';

export default function BioPage() {
		const [bio, setBio] = useState(null);
		const [avatarSrc, setAvatarSrc] = useState(null);
		const [avatarLoading, setAvatarLoading] = useState(true);
		const [resumeLoading, setResumeLoading] = useState(false);

		useEffect(() => {
			readJSON(siteConfig.data.bio)
				.then(setBio)
				.catch(err => {
					console.error('Failed to load bio:', err);
				});
		}, []);

		useEffect(() => {
		// Use me.img.bin for avatar (centralized in siteConfig)
		const meImg = siteConfig.remoteImages.meImg;
			setAvatarLoading(true);
			readImage(meImg)
				.then(src => {
					setAvatarSrc(src);
					setAvatarLoading(false);
				})
				.catch(() => {
					setAvatarSrc(null);
					setAvatarLoading(false);
				});
		}, []);

		async function handleDownloadResume() {
			if (resumeLoading) return;
			setResumeLoading(true);
			try {
				// readRaw returns a Uint8Array of decoded bytes
				const bytes = await readRaw(siteConfig.files.resume);
				const blob = new Blob([bytes], { type: 'application/pdf' });
				const url = URL.createObjectURL(blob);
				// create a temporary anchor to trigger download
				const a = document.createElement('a');
				a.href = url;
				a.download = 'resume.pdf';
				document.body.appendChild(a);
				a.click();
				a.remove();
				// release object URL after a short delay
				setTimeout(() => URL.revokeObjectURL(url), 15000);
			} catch (err) {
				console.error('Failed to download resume:', err);
				// fallback: open raw link in new tab
				window.open(siteConfig.files.resume, '_blank', 'noopener');
			} finally {
				setResumeLoading(false);
			}
		}

		if (!bio) {
			return (
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', width: '100%' }}>
					<CircularProgress />
				</div>
				);
			}

				return (
					<>
						<Head>
							<title>Bio | Srikar Chundury</title>
						</Head>
						<div style={{ marginBottom: 24 }}>
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
								<div>
									<h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 0.5, color: colors.primary, fontFamily: 'serif', margin: 0 }}>{bio.name}</h1>
									<div style={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
									<span style={{ color: colors.mutedText, fontSize: '1rem', fontStyle: 'italic' }}></span>
								</div>
								<div>
									<Button variant="contained" color="primary" startIcon={<DownloadIcon />} onClick={handleDownloadResume} disabled={resumeLoading}>
										{resumeLoading ? 'Downloading...' : 'RESUME'}
									</Button>
								</div>
							</div>

							<div style={{ display: 'flex', alignItems: 'flex-start', gap: 32, marginTop: 12, marginBottom: 18, justifyContent: 'flex-start' }}>
								{/* Avatar column commented out so Bio content lines up with other pages */}
								<div style={{ flex: 1 }}>
									<div style={{ fontSize: '1.15rem', color: colors.highlight, fontWeight: 600, marginBottom: 6 }}>{bio.title}</div>
									<div style={{ color: colors.text, fontSize: '1.05rem', marginBottom: 8 }}>{bio.location}</div>
									{/* Top skills */}
									<div style={{ marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
										{bio.top_skills && bio.top_skills.map((s, i) => (
											<Chip key={i} label={s} size="small" />
										))}
									</div>
									{/* Advisor */}
									{siteConfig.advisor && (
										<div style={{ marginTop: 10, fontSize: '0.95rem' }}>
											<strong>Advisor:</strong> <a href={siteConfig.advisor.url} target="_blank" rel="noopener noreferrer">{siteConfig.advisor.name}</a>
										</div>
									)}
									<div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
										{/* Contact icon buttons are intentionally hidden for now */}
									</div>
								</div>
							</div>
                            
							{bio.summary && (
								<div style={{ fontSize: '1.08rem', color: colors.bodyText, marginBottom: 18, fontStyle: 'italic', lineHeight: 1.6 }}>{bio.summary}</div>
							)}
							{bio.interests && bio.interests.length > 0 && (
								<div style={{ marginBottom: 8 }}>
									<div style={{ marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
										<span style={{ fontSize: '1.15rem', fontWeight: 700, color: colors.primary, fontFamily: 'serif' }}>Research Interests</span>
										<div style={{ flex: 1, height: 2, background: colors.highlight, borderRadius: 1, minWidth: 30 }} />
									</div>
									<ul style={{ paddingLeft: 18, margin: 0 }}>
										{bio.interests.map((interest, i) => (
											<li key={i} style={{ color: colors.highlight, fontWeight: 500, fontSize: '1.02em', marginBottom: 2, fontFamily: 'serif' }}>{interest}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</>
				);
	}
