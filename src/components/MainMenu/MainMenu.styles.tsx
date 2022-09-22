import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

// const matches = useMediaQuery('(min-width: 960px)');

const StyledMainMenu = styled(AppBar)(({ theme }) => ({
  padding: '10px 10px 10px 5vw',

  '& .MuiToolbar-root': {
    display: 'flex',

    '& .MuiBox-root': {
      marginLeft: 'auto',

      '& ul': {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',

        '& li': {
          marginRight: '35px',
          fontWeight: 400,

          '&.Menu-hamburger': {
            display: 'none',
          },
        },
      },
    },
  },

  '@media(max-width: 768px)': {
    '& .MuiToolbar-root': {
      padding: '0',

      '& .MuiBox-root ul': {
        '& li': {
          margin: '0',
          display: 'block',

          '&:not(.Menu-hamburger)': {
            display: 'none',
          },
        },
      },
    },
  },
}));

export default StyledMainMenu;
