import { Box } from '@mui/material';

/**
 * MainContainer: A reusable wrapper for main content area.
 * - Centers content
 * - Sets maxWidth
 * - Handles padding
 * - Ensures content never overflows
 */
export default function MainContainer({ children, sidebarWidth = 240, sidebarOpen = true, ...props }) {
  // Define your desired left/right and top/bottom padding here
  const horizontalPadding = 50; // px
  const verticalPadding = 30; // px

  // Always apply left and right padding for consistency, regardless of sidebar state
  return (
    <Box
      component="main"
      sx={theme => ({
        width: '100vw',
        minWidth: 0,
        ml: 0,
        mr: 0,
        pl: { xs: `${horizontalPadding}px`, sm: `${horizontalPadding}px` },
        pr: { xs: `${horizontalPadding}px`, sm: `${horizontalPadding}px` },
        pt: { xs: `${verticalPadding}px`, sm: `${verticalPadding}px` },
        pb: { xs: `${verticalPadding}px`, sm: `${verticalPadding}px` },
        textAlign: 'left',
        boxSizing: 'border-box',
        flexGrow: 1,
        maxWidth: '100vw',
        transition: 'padding 0.5s cubic-bezier(0.4,0,0.2,1), margin 0.5s cubic-bezier(0.4,0,0.2,1);',
      })}
      {...props}
    >
      {children}
    </Box>
  );
}
