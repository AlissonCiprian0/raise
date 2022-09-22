import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const StyledFooter = styled(Box)(({ theme }) => ({
  borderTop: '1px solid #f7e1e1',

  '@media (max-width: 900px)': {
    flexDirection: 'column',

    '& .Footer-texts': {
      marginLeft: 0,
      marginTop: 20,
    },
  },

  '@media (max-width: 680px)': {
    padding: '10vw',

    '& .Footer-texts': {
      flexDirection: 'column',
      '& p': {
        marginTop: 30,
        marginRight: 0,
        wordBreak: 'break-word',
      },
    },
  },
}));
