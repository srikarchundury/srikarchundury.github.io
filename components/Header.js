import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { colors } from '../utils/colors';
import Breadcrumbs from './Breadcrumbs';
import { useRouter } from 'next/router';


export default function Header({ onMenuClick, sidebarOpen }) {
	const router = useRouter();
	return (
		<Box sx={{
			width: '100%',
			background: colors.primary,
			color: colors.accent,
			fontFamily: 'serif',
			m: 0,
			p: 0,
			position: 'fixed',
			left: 0,
			right: 0,
			zIndex: 1300,
			boxSizing: 'border-box',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			gap: 1,
			height: { xs: 58, sm: 62, md: 64 },
			minHeight: { xs: 58, sm: 62, md: 64 },
			padding: { xs: '0 10px', sm: '0 14px', md: '0 18px' },
		}}>
			<IconButton
				onClick={onMenuClick}
				sx={{
					color: colors.accent,
					background: 'transparent',
					borderRadius: 1,
					ml: 0,
					mr: { xs: 0.8, sm: 1.1, md: 1.4 },
					'&:hover': { background: colors.activeNavBg, color: colors.accent },
					display: 'inline-flex',
					transition: 'transform 0.3s',
				}}
				aria-label="Toggle sidebar"
			>
				<MenuIcon
					sx={{
						fontSize: { xs: 24, sm: 28, md: 30 },
						color: colors.accent,
						transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
						transform: sidebarOpen ? 'rotate(0deg)' : 'rotate(-90deg)'
					}}
				/>
			</IconButton>
			<Box sx={{ minWidth: 0, flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', overflow: 'hidden' }}>
				<Breadcrumbs pathname={router.pathname} />
			</Box>
		</Box>
	);
}
