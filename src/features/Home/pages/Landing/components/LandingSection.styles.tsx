import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const LandingSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  padding: 100,
  marginBottom: 60,

  '@media(max-width: 1280px)': {
    padding: '5vw',
    '& .Landing-section-ticket': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',

      '& img': {
        marginTop: 80,
        maxWidth: '100vw',
      },
    },

    '& .Landing-section-cards': {
      padding: 0,
    },
  },
}));
