
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
import MainContainer from './MainContainer';
import { Box, useMediaQuery } from '@mui/material';

export default function Layout({ children }) {
	const SIDEBAR_WIDTH = 240;
	const isMobile = useMediaQuery('(max-width:900px)');
	const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
	// Keep sidebar open on desktop, closed on mobile
	React.useEffect(() => {
		setSidebarOpen(!isMobile);
	}, [isMobile]);
	const toggleSidebar = () => setSidebarOpen((open) => !open);
	const closeSidebar = () => setSidebarOpen(false);
		return (
			<Box sx={{ minHeight: '100vh', background: '#f9f9f9', display: 'flex', flexDirection: 'column' }}>
				{/* Header always full width, fixed */}
				<Header onMenuClick={toggleSidebar} sidebarOpen={sidebarOpen} />
				{/* Add top and bottom padding to prevent content being hidden */}
				<Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', minHeight: 0, pt: '64px', pb: '20px' }}>
					{/* Sidebar only fills between header and footer */}
					{(sidebarOpen || isMobile) && (
						<Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} isMobile={isMobile} layoutMode="between" />
					)}
					{/* Main content area, flexes to fill space */}
					<MainContainer px={0} py={0} sidebarWidth={SIDEBAR_WIDTH} sidebarOpen={sidebarOpen}>
						{children}
					</MainContainer>
				</Box>
				{/* Footer always full width at bottom, fixed */}
				<Footer />
			</Box>
		);
}
