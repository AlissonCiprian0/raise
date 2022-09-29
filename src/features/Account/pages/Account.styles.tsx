import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const HomePage = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& .Account-container': {
    backgroundColor: theme.palette.primary.main,
    padding: 50,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'space-between',
    gap: 60,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

    '& .Account-user': {
      '& h3': {
        color: theme.palette.text.primary,
        fontSize: 25,
        fontWeight: 600,
        margin: '30px 0 15px 0',
      },

      '& p': {
        color: theme.palette.text.primary,
        fontSize: 18,
        fontWeight: 600,
        margin: '2px 0',

        '& span': {
          color: theme.palette.secondary.main,
        },

        '&.Account-user-open-tickets': {
          color: theme.palette.text.disabled,
          marginTop: 8,
        },
      },

      '& .Account-user-collaborator': {
        width: '100%',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& p': {
          color: '#000',
        },
      },
    },

    '& .Account-form': {
      padding: 20,
      backgroundColor: '#FFF3F3',
      borderRadius: 10,

      '& form': {
        display: 'flex',
        flexDirection: 'column',

        '& button': {
          padding: 15,
          borderRadius: 10,
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          textTransform: 'inherit',
          fontWeight: 600,
          fontSize: 19,
          marginTop: 25,
        },
      },
    },
  },
}));
