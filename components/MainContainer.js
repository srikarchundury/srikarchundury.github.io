import { Box } from '@mui/material';

/**
 * MainContainer: A reusable wrapper for main content area.
 * - Centers content
 * - Sets maxWidth
 * - Handles padding
 * - Ensures content never overflows
 */
export default function MainContainer({ children, sidebarWidth = 240, sidebarOpen = true, ...props }) {
  return (
    <Box
      component="main"
      id="main-content"
      sx={{
        width: '100%',
        minWidth: 0,
        ml: 0,
        mr: 0,
        pl: { xs: '16px', sm: '24px', md: '32px', lg: '48px' },
        pr: { xs: '16px', sm: '24px', md: '32px', lg: '48px' },
        pt: { xs: '20px', sm: '24px', md: '28px', lg: '30px' },
        pb: { xs: '20px', sm: '24px', md: '28px', lg: '30px' },
        textAlign: 'left',
        boxSizing: 'border-box',
        flexGrow: 1,
        maxWidth: '1400px',
        marginInline: 'auto',
        transition: 'padding 0.5s cubic-bezier(0.4,0,0.2,1), margin 0.5s cubic-bezier(0.4,0,0.2,1);',
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
