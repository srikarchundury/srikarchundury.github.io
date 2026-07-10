import SeoHead from '../components/SeoHead';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { readJSON } from '../utils/readRaw';
import { useLinks } from '../components/LinksContext';
import { colors } from '../utils/colors';
import { Card, CardContent, Typography, Box, Link, Grid } from '@mui/material';
// import MainContainer from '../components/MainContainer';

export default function HonorsPage() {
	const [honors, setHonors] = useState(null);
	const { links } = useLinks();

	useEffect(() => {
		if (!links?.data?.honors) return;
		readJSON(links.data.honors)
			.then(setHonors)
			.catch(console.error);
	}, [links]);

	return (
		<>
			<SeoHead
				title="Honors & Awards"
				description="Awards, honors, and recognitions received by Srikar Chundury."
				path="/honors"
			/>
			<div>
				<div style={{ marginBottom: 24 }}>
					<h1 style={{ fontSize: 'clamp(1.55rem, 1.35rem + 1vw, 2rem)', fontWeight: 700, letterSpacing: 0.3, color: colors.sectionTitle, fontFamily: 'serif', margin: 0 }}>Honors & Awards</h1>
					<div style={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
				</div>
				{!honors ? (
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', width: '100%' }}>
						<CircularProgress />
					</Box>
				) : (
					<Grid container spacing={{ xs: 1.6, sm: 2.2, md: 2.8 }}>
						{honors.map((item, idx) => (
							<Grid item xs={12} md={6} key={idx}>
								<Card elevation={0} sx={{ borderLeft: `4px solid ${colors.shadowBlue}`, borderRadius: 2, height: '100%', boxShadow: 'none', paddingLeft: 'clamp(10px, 1.6vw, 16px)' }}>
									<CardContent>
										<Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary, mb: 0.5, fontSize: 'clamp(1rem, 0.95rem + 0.35vw, 1.15rem)' }}>
											{item.title}
											{item.year && (
												<span style={{ color: colors.subText, fontWeight: 400, fontSize: '0.94rem', marginLeft: 8 }}>({item.year})</span>
											)}
										</Typography>
										   <Typography variant="body2" sx={{ color: colors.bodyText, mb: 1, fontSize: '0.95rem', lineHeight: 1.55 }}>
											{item.description}
										</Typography>
										{item.link && (
											<Link href={item.link} target="_blank" rel="noopener noreferrer" sx={{ color: colors.highlight, fontSize: '0.92rem' }}>
												View Details
											</Link>
										)}
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				)}
			</div>
		</>
	);
	}
