
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContainer from './MainContainer';
import { Box, useMediaQuery } from '@mui/material';
import { colors } from '../utils/colors';

export default function Layout({ children }) {
	const SIDEBAR_WIDTH = 240;
	const HEADER_HEIGHT = 64;
	const isMobile = useMediaQuery('(max-width:900px)');
	const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
	// Keep sidebar open on desktop, closed on mobile
	React.useEffect(() => {
		setSidebarOpen(!isMobile);
	}, [isMobile]);
	const toggleSidebar = () => setSidebarOpen((open) => !open);
	const closeSidebar = () => setSidebarOpen(false);
		return (
			<Box sx={{ minHeight: '100vh', background: colors.pageBg, display: 'flex', flexDirection: 'column' }}>
				<a
					href="#main-content"
					style={{
						position: 'absolute',
						left: 8,
						top: -40,
						zIndex: 3000,
						padding: '8px 12px',
						borderRadius: 6,
						background: colors.primary,
						color: colors.white,
						textDecoration: 'none',
					}}
					onFocus={(e) => {
						e.currentTarget.style.top = '8px';
					}}
					onBlur={(e) => {
						e.currentTarget.style.top = '-40px';
					}}
				>
					Skip to main content
				</a>
				{/* Header always full width, fixed */}
				<Header onMenuClick={toggleSidebar} sidebarOpen={sidebarOpen} />
				{/* Add top padding to prevent content being hidden behind the fixed header */}
				<Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', minHeight: 0, pt: `${HEADER_HEIGHT}px` }}>
					{/* Sidebar fills from below the header to the bottom of the viewport */}
					{(sidebarOpen || isMobile) && (
						<Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} layoutMode="between" onClose={closeSidebar} onNavigate={closeSidebar} headerHeight={HEADER_HEIGHT} />
					)}
					{/* Main content area, flexes to fill space */}
					<MainContainer px={0} py={0} sidebarWidth={SIDEBAR_WIDTH} sidebarOpen={sidebarOpen}>
						{children}
					</MainContainer>
				</Box>
			</Box>
		);
}
