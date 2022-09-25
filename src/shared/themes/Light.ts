import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      light: '#ffffff',
      dark: 'rgba(244, 244, 244, 1)',
      contrastText: 'rgba(0, 0, 0, 1)',
    },
    secondary: {
      main: 'rgba(232, 130, 130, 1)',
      light: 'rgba(254, 240, 240, 1)',
      dark: 'rgba(0, 0, 0, 1)',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    text: {
      primary: '#5B5555',
      secondary: 'rgba(91, 85, 85, 1)',
      disabled: 'rgba(91,85,85,0.68)',
    },
    error: {
      main: 'rgba(255, 0, 0, 1)',
    },
    success: {
      main: 'rgba(21, 198, 70, 1)',
      contrastText: 'rgba(255,255,255,0.87)',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '2.5rem',
    },
  },
  shape: {
    borderRadius: 3,
  },
});
