import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';

// Custom SVG for three vertical lines
function VerticalMenuIcon(props) {
	return (
		<svg width={props.size || 28} height={props.size || 28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<rect x="4" y="4" width="3" height="20" rx="1.5" fill="currentColor" />
			<rect x="12.5" y="4" width="3" height="20" rx="1.5" fill="currentColor" />
			<rect x="21" y="4" width="3" height="20" rx="1.5" fill="currentColor" />
		</svg>
	);
}
import { colors } from '../utils/colors';
import { siteConfig } from '../utils/siteConfig';
import Breadcrumbs from './Breadcrumbs';
import { useRouter } from 'next/router';


export default function Header({ onMenuClick, sidebarOpen }) {
	const email = siteConfig.email;
	const name = siteConfig.name;
	const router = useRouter();
	return (
		<Box sx={{
			width: '100vw',
			maxWidth: '100vw',
			py: 2,
			background: colors.primary,
			color: colors.accent,
			fontFamily: 'serif',
			m: 0,
			p: 0,
			position: 'fixed',
			zIndex: 1300,
			boxSizing: 'border-box',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
			gap: 0,
			height: 64,
			minHeight: 64,
			padding: '0 16px',
		}}>
			{/* Sidebar toggle next to Home */}
			<IconButton
				onClick={onMenuClick}
				sx={{
					color: colors.accent,
					background: colors.primary,
					border: `1px solid ${colors.primary}`,
					borderRadius: 2,
					boxShadow: 1,
					ml: 2,
					mr: 2,
					'&:hover': { background: colors.primary, color: colors.accent },
					display: 'inline-flex',
					transition: 'transform 0.3s',
				}}
				aria-label="Toggle sidebar"
			>
				<MenuIcon
					sx={{
						fontSize: { xs: 28, sm: 32 },
						color: colors.accent,
						transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
						transform: sidebarOpen ? 'rotate(0deg)' : 'rotate(-90deg)'
					}}
				/>
			</IconButton>
			{/* Breadcrumbs beside the collapse button */}
			<Breadcrumbs pathname={router.pathname} />
			{/* Name, details, email icon on right */}
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-end', sm: 'flex-end' }, flexGrow: 1, justifyContent: 'center', minWidth: 0 }}>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'flex-end', width: '100%', minWidth: 0, overflowX: 'hidden' }}>
					<Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'serif', fontSize: { xs: '1.1rem', sm: '1.4rem' }, flexGrow: 1, textAlign: 'right', minWidth: 0, overflowX: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', color: colors.accent }}>
						{name}
					</Typography>
					<Tooltip title={email} placement="bottom">
						<IconButton
							size="small"
							sx={{ color: colors.accent, ml: 1 }}
							onClick={() => window.open(`mailto:${email}`)}
						>
							<EmailIcon sx={{ fontSize: { xs: 22, sm: 26 } }} />
						</IconButton>
					</Tooltip>
				</Box>
				<Typography variant="subtitle2" sx={{ color: colors.accent, fontFamily: 'serif', fontSize: { xs: '0.92rem', sm: '1.05rem' }, fontWeight: 400, mt: 0.2, textAlign: 'right', width: '100%', minWidth: 0, overflowX: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
					Computer Science Ph.D. Student
				</Typography>
			</Box>
		</Box>
	);
}
