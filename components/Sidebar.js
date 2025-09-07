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
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { readImage } from '../utils/readRaw';
import { useAvatarCache } from './AvatarCacheContext';
import { colors } from '../utils/colors';
import { siteConfig } from '../utils/siteConfig';

const selfieUrl = siteConfig.profileImages.selfie;

const iconSx = {
	color: colors.primary,
	fontSize: { xs: '7vw', sm: '2.5vw', md: '2vw', lg: '1.7vw', xl: '1.5vw' },
	minWidth: 0,
};

const githubIconSize = 50;
const linkedinIconSize = 50;
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
			<circle cx="128" cy="128" r="128" fill="#A6CE39" />
			<g fill="#fff">
				<path d="M86.3 70.5v115h-18V70.5h18zm-9 132.8c-6 0-10.7 4.8-10.7 10.6 0 6 4.7 10.6 10.7 10.6s10.6-4.7 10.6-10.6-4.7-10.6-10.6-10.6z"/>
				<path d="M204 159.7c0 35-20.8 56.6-51.2 56.6-30.4 0-49.5-21.5-49.5-55.3 0-34.4 20.3-56 51-56 31 0 49.7 22 49.7 54.7zm-81.7 1c0 23.4 11.2 38.3 31 38.3 19.7 0 30.8-15.3 30.8-39 0-22.8-11-38-30.5-38-19.5 0-31.3 15.1-31.3 38.7z"/>
			</g>
		</svg>
	);
}

export default function Sidebar({ open, isMobile, layoutMode }) {
	const { avatarSrc, setAvatarSrc, loading, setLoading } = useAvatarCache();
	const router = useRouter();
	useEffect(() => {
		if (!avatarSrc) {
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
	}, [avatarSrc, setAvatarSrc, setLoading]);
       return (
	       <Drawer
		       variant={isMobile ? 'temporary' : 'persistent'}
		       anchor="left"
		       open={open}
		       ModalProps={{ keepMounted: true }}
		       sx={{
			       width: 240,
			       flexShrink: 0,
			       zIndex: 1200,
			       height: layoutMode === 'between' ? 'calc(100vh - 64px - 20px)' : '100vh',
			       top: layoutMode === 'between' ? 64 : 0,
			       position: layoutMode === 'between' ? 'sticky' : 'fixed',
			       transition: 'width 350ms cubic-bezier(0.4,0,0.2,1)',
			       '& .MuiDrawer-paper': {
				       width: 240,
				       boxSizing: 'border-box',
				       background: colors.accent,
				       // borderRight removed
				       height: layoutMode === 'between' ? 'calc(100vh - 64px - 20px)' : '100vh',
				       top: layoutMode === 'between' ? 64 : 0,
				       position: layoutMode === 'between' ? 'sticky' : 'fixed',
				       transition: 'width 350ms cubic-bezier(0.4,0,0.2,1)',
			       },
		       }}
	       >
		       {loading ? (
			       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: 400 }}>
				       <CircularProgress size={40} thickness={4} sx={{ color: colors.sectionTitle, mb: 2 }} />
				       <Typography variant="body2" color="textSecondary">Loading...</Typography>
			       </Box>
		       ) : (
			       <>
				       <Divider />
				       <Box sx={{ textAlign: 'center', py: 2 }}>
			       <Avatar
				       src={avatarSrc || undefined}
				       alt={siteConfig.name}
				       sx={{ width: 160, height: 240, margin: '0 auto', objectFit: 'cover', objectPosition: 'top', bgcolor: '#bdbdbd', fontSize: 56, boxShadow: 2 }}
			       >
				       {!avatarSrc && (siteConfig.name ? siteConfig.name.split(' ').map(n => n[0]).join('').slice(0,2) : 'SC')}
			       </Avatar>
			       <Box>
				       <Tooltip title="GitHub">
					       <IconButton href={siteConfig.social.github} target="_blank" sx={{ p: 0.5, m: 0.5, minWidth: 'unset', minHeight: 'unset', width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
						       <GitHubIcon sx={{ color: colors.github, fontSize: { xs: 22, sm: 26 }, width: 26, height: 26, display: 'block' }} />
					       </IconButton>
				       </Tooltip>
				       <Tooltip title="LinkedIn">
					       <IconButton href={siteConfig.social.linkedin} target="_blank" sx={{ p: 0.5, m: 0.5, minWidth: 'unset', minHeight: 'unset', width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
						       <LinkedInIcon sx={{ color: colors.linkedin, fontSize: { xs: 22, sm: 26 }, width: 26, height: 26, display: 'block' }} />
					       </IconButton>
				       </Tooltip>
				       <Tooltip title="ORCID">
					       <IconButton href={siteConfig.social.orcid} target="_blank">
						       <Box sx={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' }}>
							       <OrcidIcon size={orcidIconSize} />
						       </Box>
					       </IconButton>
				       </Tooltip>
			       </Box>
				       </Box>
				       <Divider />
				       <List>
					       {sections.map((section, index) => (
						       <ListItem
							       button
							       key={index}
							       selected={router.pathname === section.href}
							       onClick={() => {
								       router.push(section.href);
								       if (isMobile) {
									       // Sidebar closes on mobile after navigation, handled by Layout
								       }
							       }}
						       >
							       <ListItemIcon sx={{ fontSize: { xs: '6vw', sm: '2vw', md: '1.7vw', lg: '1.5vw', xl: '1.3vw' }, minWidth: 40 }}>{section.icon}</ListItemIcon>
							       <ListItemText primary={section.title} />
						       </ListItem>
					       ))}
				       </List>
			       </>
		       )}
	       </Drawer>
       );
}