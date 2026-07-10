import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	IconButton,
	Divider,
	Avatar,
	Box,
	Tooltip,
	Typography
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleScholarIcon from '@mui/icons-material/School';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { readImage } from '../utils/readRaw';
import { useAvatarCache } from './AvatarCacheContext';
import { useLinks } from './LinksContext';
import { colors } from '../utils/colors';
import { siteConfig } from '../utils/siteConfig';

const iconSx = {
	color: colors.primary,
	fontSize: 24,
	minWidth: 0,
};

const orcidIconSize = 25;
const iconMap = {
	Home: <HomeIcon sx={iconSx} />,
	Info: <InfoIcon sx={iconSx} />,
	Work: <WorkIcon sx={iconSx} />,
	Code: <CodeIcon sx={iconSx} />,
	Description: <DescriptionIcon sx={iconSx} />,
	School: <SchoolIcon sx={iconSx} />,
	MenuBook: <MenuBookIcon sx={iconSx} />,
};

const sections = siteConfig.navSections.map(section => ({
	...section,
	icon: iconMap[section.icon] || null,
}));

// Official ORCID iD SVG icon (per ORCID brand guidelines)
function OrcidIcon({ size = 40 }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 256 256"
			aria-label="ORCID iD icon"
			style={{ display: 'inline-block', verticalAlign: 'middle' }}
		>
			<circle cx="128" cy="128" r="128" fill={colors.orcid} />
			<g fill="#fff">
				<path d="M86.3 70.5v115h-18V70.5h18zm-9 132.8c-6 0-10.7 4.8-10.7 10.6 0 6 4.7 10.6 10.7 10.6s10.6-4.7 10.6-10.6-4.7-10.6-10.6-10.6z"/>
				<path d="M204 159.7c0 35-20.8 56.6-51.2 56.6-30.4 0-49.5-21.5-49.5-55.3 0-34.4 20.3-56 51-56 31 0 49.7 22 49.7 54.7zm-81.7 1c0 23.4 11.2 38.3 31 38.3 19.7 0 30.8-15.3 30.8-39 0-22.8-11-38-30.5-38-19.5 0-31.3 15.1-31.3 38.7z"/>
			</g>
		</svg>
	);
}

export default function Sidebar({ open, isMobile, layoutMode, onClose, onNavigate, headerHeight = 64 }) {
	const { avatarSrc, setAvatarSrc, setLoading } = useAvatarCache();
	const { links } = useLinks();
	const social = links?.social || {};
	const selfieUrl = links?.profileImages?.selfie;
	const router = useRouter();
	const isCvActive = router.pathname === '/cv';
	useEffect(() => {
		if (!avatarSrc && selfieUrl) {
			setLoading(true);
			readImage(selfieUrl)
				.then(src => {
					setAvatarSrc(src);
					setLoading(false);
				})
				.catch(() => {
					setLoading(false);
				});
		}
	}, [avatarSrc, selfieUrl, setAvatarSrc, setLoading]);
	return (
		<Drawer
			variant={isMobile ? 'temporary' : 'persistent'}
			anchor="left"
			open={open}
			ModalProps={{ keepMounted: true }}
			onClose={onClose}
			sx={{
				width: 240,
				flexShrink: 0,
				zIndex: 1200,
				height: layoutMode === 'between' ? `calc(100vh - ${headerHeight}px)` : '100vh',
				top: layoutMode === 'between' ? headerHeight : 0,
				position: layoutMode === 'between' ? 'sticky' : 'fixed',
				transition: 'width 350ms cubic-bezier(0.4,0,0.2,1)',
				'& .MuiDrawer-paper': {
					width: 240,
					boxSizing: 'border-box',
					background: colors.accent,
					// borderRight removed
					height: layoutMode === 'between' ? `calc(100vh - ${headerHeight}px)` : '100vh',
					top: layoutMode === 'between' ? headerHeight : 0,
					position: layoutMode === 'between' ? 'sticky' : 'fixed',
					transition: 'width 350ms cubic-bezier(0.4,0,0.2,1)',
				},
			}}
		>
			<Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
				<Divider />
				<Box sx={{ textAlign: 'center', py: 2 }}>
					<Avatar
						src={avatarSrc || undefined}
						alt={siteConfig.name}
						sx={{ width: 170, height: 170, margin: '0 auto', objectFit: 'cover', objectPosition: 'top', borderRadius: '10px', bgcolor: colors.imageBg, fontSize: 56, boxShadow: 2, opacity: avatarSrc ? 1 : 0.9, transition: 'opacity 200ms ease' }}
					>
						{!avatarSrc && (siteConfig.name ? siteConfig.name.split(' ').map(n => n[0]).join('').slice(0,2) : 'SC')}
					</Avatar>
					<Box>
						{social.github && (
						<Tooltip title="GitHub">
							<IconButton href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" sx={{ p: 0.5, m: 0.5, minWidth: 'unset', minHeight: 'unset', width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
								<GitHubIcon sx={{ color: colors.github, width: 24, height: 24, display: 'block' }} />
							</IconButton>
						</Tooltip>
						)}
						{social.linkedin && (
						<Tooltip title="LinkedIn">
							<IconButton href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" sx={{ p: 0.5, m: 0.5, minWidth: 'unset', minHeight: 'unset', width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
								<LinkedInIcon sx={{ color: colors.linkedin, width: 24, height: 24, display: 'block' }} />
							</IconButton>
						</Tooltip>
						)}
						{social.orcid && (
						<Tooltip title="ORCID">
							<IconButton href={social.orcid} target="_blank" rel="noopener noreferrer" aria-label="ORCID">
								<Box sx={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' }}>
									<OrcidIcon size={orcidIconSize} />
								</Box>
							</IconButton>
						</Tooltip>
						)}
						{social.googleScholar && (
						<Tooltip title="Google Scholar">
							<IconButton href={social.googleScholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" sx={{ p: 0.5, m: 0.5, minWidth: 'unset', minHeight: 'unset', width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
								<GoogleScholarIcon sx={{ color: colors.scholar, width: 24, height: 24, display: 'block' }} />
							</IconButton>
						</Tooltip>
						)}
						<Box sx={{ mt: 0.6 }}>
							<Box
								component="button"
								type="button"
								onClick={() => {
									if (!isCvActive) {
										router.push('/cv');
									}
									if (isMobile && onNavigate) onNavigate();
								}}
								aria-label="Open CV page"
								sx={{
									display: 'inline-block',
									color: isCvActive ? colors.primary : colors.highlight,
									fontSize: '0.84rem',
									fontWeight: 700,
									letterSpacing: 0.7,
									textTransform: 'uppercase',
									textDecoration: 'none',
									border: 0,
									background: 'transparent',
									cursor: 'pointer',
									borderBottom: `1px solid ${isCvActive ? colors.primary : colors.highlight}`,
									'&:hover': {
										color: colors.primary,
										borderBottomColor: colors.primary,
									},
								}}
							>
								CV
							</Box>
						</Box>
					</Box>
				</Box>
				<Divider />
				<List>
					{sections.map((section, index) => {
						const isActive = router.pathname === section.href || (section.href === '/' && router.pathname === '/home');
						return (
						<ListItem
							button
							key={index}
							selected={isActive}
							onClick={() => {
								if (!isActive) {
									router.push(section.href);
								}
								if (isMobile && onNavigate) onNavigate();
							}}
							sx={{
								borderRadius: '8px',
								mx: 1,
								mb: 0.5,
								transition: 'background-color 150ms ease',
								background: isActive ? colors.activeNavBg : 'transparent',
								'&:hover': { background: isActive ? colors.activeNavBg : colors.hoverNavBg },
							}}
						>
							<ListItemIcon sx={{ minWidth: 40, color: isActive ? colors.primary : colors.subText }}>{section.icon}</ListItemIcon>
							<ListItemText
								primary={section.title}
								primaryTypographyProps={{
									fontWeight: isActive ? 700 : 500,
									color: isActive ? colors.primary : colors.text,
								}}
							/>
						</ListItem>
						);
					})}
				</List>
				<Box sx={{ mt: 'auto', px: 2, py: 1, textAlign: 'center', borderTop: `1px solid ${colors.divider}` }}>
					<Typography sx={{ fontSize: '0.62rem', color: colors.secondaryText, lineHeight: 1.35, opacity: 0.55 }}>
						&copy; {new Date().getFullYear()} Srikar Chundury
					</Typography>
					<Typography sx={{ fontSize: '0.6rem', color: colors.secondaryText, lineHeight: 1.35, opacity: 0.5, mt: 0.25 }}>
						Built with AI-assisted development.
					</Typography>
				</Box>
			</Box>
		</Drawer>
	);
}
