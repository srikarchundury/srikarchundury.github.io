import Head from 'next/head';

import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
	
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { colors } from '../utils/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import { readJSON, readImage } from '../utils/readRaw';

export default function BioPage() {
		const [bio, setBio] = useState(null);
		const [avatarSrc, setAvatarSrc] = useState(null);
		const [avatarLoading, setAvatarLoading] = useState(true);

		useEffect(() => {
			readJSON('https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/bio.json.bin')
				.then(setBio)
				.catch(err => {
					console.error('Failed to load bio:', err);
				});
		}, []);

		useEffect(() => {
			// Use me.img.bin for avatar
			const meImg = 'https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/image_data/me.img.bin';
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
						<div>
							<div style={{ display: 'flex', alignItems: 'flex-start', gap: 32, marginBottom: 18, justifyContent: 'flex-start' }}>
								<div style={{ position: 'relative', width: 120, height: 160, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
									{avatarLoading ? (
										<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 120, height: 160 }}>
											<CircularProgress size={48} thickness={4} />
										</Box>
									) : (
										<Avatar
											src={avatarSrc}
											alt={bio.name}
											sx={{ width: 120, height: 160, boxShadow: 1, border: `2px solid ${colors.blogBg}`, bgcolor: colors.blogBg, fontSize: 48 }}
										>
											{!avatarSrc && <SchoolIcon fontSize="large" />}
										</Avatar>
									)}
								</div>
								<div style={{ flex: 1 }}>
									<h1 style={{ fontSize: '2.1rem', fontWeight: 700, margin: 0, color: colors.primary, fontFamily: 'serif' }}>{bio.name}</h1>
									<div style={{ fontSize: '1.15rem', color: colors.highlight, fontWeight: 600, marginBottom: 4 }}>{bio.title}</div>
									<div style={{ color: colors.text, fontSize: '1.05rem', marginBottom: 8 }}>{bio.location}</div>
									<div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
										{bio.contact?.email && (
											<Tooltip title={bio.contact.email}>
												<IconButton href={`mailto:${bio.contact.email}`} size="small" color="primary"><EmailIcon /></IconButton>
											</Tooltip>
										)}
										{bio.contact?.linkedin && (
											<Tooltip title="LinkedIn">
												<IconButton href={bio.contact.linkedin} target="_blank" rel="noopener noreferrer" size="small" color="primary"><LinkedInIcon /></IconButton>
											</Tooltip>
										)}
										{bio.contact?.github && (
											<Tooltip title="GitHub">
												<IconButton href={bio.contact.github} target="_blank" rel="noopener noreferrer" size="small" color="primary"><GitHubIcon /></IconButton>
											</Tooltip>
										)}
									</div>
								</div>
							</div>
							<div style={{ width: 60, height: 4, background: colors.highlight, borderRadius: 2, marginTop: 8, marginBottom: 8 }} />
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
