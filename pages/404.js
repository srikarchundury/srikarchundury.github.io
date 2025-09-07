import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../utils/colors';

export default function Custom404() {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h2" sx={{ color: colors.primary, fontWeight: 700, mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ color: colors.text, mb: 2 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for does not exist.
      </Typography>
    </Box>
  );
}
