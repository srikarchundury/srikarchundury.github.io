import { Box, Typography } from '@mui/material';
import { colors } from '../utils/colors';

export default function Footer() {
  return (
    <Box sx={{
      width: '100%',
      py: 0,
      background: colors.primary,
      color: colors.accent,
      textAlign: 'center',
      fontSize: '0.9rem',
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
      height: { xs: 36, sm: 36 },
      minHeight: { xs: 36, sm: 36 },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Typography variant="body2" sx={{ color: colors.accent, m: 0, p: 0, fontSize: { xs: '0.78rem', sm: '0.85rem' }, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', px: 1 }}>
        &copy; {new Date().getFullYear()} Srikar Chundury. All rights reserved.
      </Typography>
    </Box>
  );
}
