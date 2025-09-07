import { Box, Typography } from '@mui/material';
import { colors } from '../utils/colors';

export default function Footer() {
  return (
    <Box sx={{
      width: '100vw',
      maxWidth: '100vw',
      py: 2,
      background: colors.primary,
      color: colors.accent,
      textAlign: 'center',
      fontSize: '0.95rem',
      fontFamily: 'serif',
      m: 0,
      p: 0,
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1300,
      boxSizing: 'border-box',
      overflowX: 'hidden',
      height: 20,
      minHeight: 20,
    }}>
      <Typography variant="body2" sx={{ color: colors.accent, m: 0, p: 0 }}>
        &copy; {new Date().getFullYear()} Srikar Chundury. All rights reserved. <span style={{ opacity: 0.7, fontSize: '0.85em', marginLeft: 8 }}>Built with help from OpenAI GPT-4.1</span>
      </Typography>
    </Box>
  );
}
