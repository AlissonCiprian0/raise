import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const LandingCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  maxWidth: '460px',
  marginBottom: 50,

  '& img': {
    marginRight: 16,
  },

  '& p': {
    color: '#686464',
    fontSize: 18,
  },
}));
