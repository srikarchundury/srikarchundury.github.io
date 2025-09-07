import Head from 'next/head';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { readJSON } from '../utils/readRaw';
import { colors } from '../utils/colors';
import { Card, CardContent, Typography, Box, Link, Divider, Grid } from '@mui/material';
// import MainContainer from '../components/MainContainer';

export default function HonorsPage() {
	const [honors, setHonors] = useState(null);

	useEffect(() => {
		readJSON('https://raw.githubusercontent.com/srikarchundury/srikarchundury-site-data/main/json_data/honors.json.bin')
			.then(setHonors)
			.catch(console.error);
	}, []);

	return (
		<>
			<Head>
				<title>Honors & Awards | Srikar Chundury</title>
			</Head>
			<div>
				<div style={{ marginBottom: 24 }}>
					<h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: 0.5, color: colors.sectionTitle, fontFamily: 'serif', margin: 0 }}>Honors & Awards</h1>
					<div style={{ width: 60, height: 4, background: colors.shadowBlue, borderRadius: 2, marginTop: 8, marginBottom: 4 }} />
					   <span style={{ color: colors.mutedText, fontSize: '1rem', fontStyle: 'italic' }}>
						Distinctions, fellowships, and academic recognition
					</span>
				</div>
				{!honors ? (
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', width: '100%' }}>
						<CircularProgress />
					</Box>
				) : (
					<Grid container spacing={3}>
						{honors.map((item, idx) => (
							<Grid item xs={12} md={6} key={idx}>
								<Card elevation={0} sx={{ borderLeft: `4px solid ${colors.shadowBlue}`, borderRadius: 2, height: '100%', boxShadow: 'none', paddingLeft: '18px' }}>
									<CardContent>
										<Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary, mb: 0.5 }}>
											{item.title}
											{item.year && (
												<span style={{ color: colors.accent, fontWeight: 400, fontSize: '1rem', marginLeft: 8 }}>({item.year})</span>
											)}
										</Typography>
										   <Typography variant="body2" sx={{ color: colors.bodyText, mb: 1 }}>
											{item.description}
										</Typography>
										{item.link && (
											<Link href={item.link} target="_blank" rel="noopener" sx={{ color: colors.accent, fontSize: '0.95rem' }}>
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
