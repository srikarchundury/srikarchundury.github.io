import { createTheme } from '@material-ui/core/styles';

// Light theme settings
export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1976d2', // Example light theme primary color
    },
    secondary: {
      main: '#f50057', // Example light theme secondary color
    },
  },
});

// Dark theme settings
export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9', // Example dark theme primary color
    },
    secondary: {
      main: '#ff4081', // Example dark theme secondary color
    },
  },
});