import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const HomePage = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  paddingTop: 120,
  display: 'flex',
  justifyContent: 'space-between',
  gap: 15,

  '& .HomePage-section': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 100px',

    '& h2': {
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 15,
    },

    '& h3': {
      fontSize: 20,
      fontWeight: 500,
      marginBottom: 15,
    },

    '& .HomePage-ticket-container': {
      width: 'clamp(25vw, 80%, 90vw)',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.primary.main,
      borderRadius: 5,
      overflow: 'hidden',

      '& .HomePage-ticket-container-title': {
        backgroundColor: theme.palette.secondary.light,
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
        fontWeight: 600,
      },

      '& .HomePage-ticket-container-body': {
        boxSizing: 'border-box',
        padding: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& button': {
          backgroundColor: theme.palette.secondary.light,
          padding: '15px 20px',
          textTransform: 'inherit',
          fontSize: '1.2em',
        },

        '& img': {
          margin: '25px 0',
        },

        '& p': {
          textAlign: 'center',
          color: '#686464',
          fontSize: 20,
        },
      },
    },

    '& .HomePage-open-tickets-container': {
      paddingTop: 5,
      width: '100%',

      '& .HomePage-open-tickets': {
        marginBottom: 30,
        width: '100%',

        '& .HomePage-ticket': {
          backgroundColor: theme.palette.primary.main,
          width: '100%',
          boxSizing: 'border-box',
          padding: '15px 35px',
          borderRadius: 10,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 50,
          marginBottom: 30,

          '& .HomePage-ticket-title': {
            fontWeight: 500,
            fontSize: '20px',
            color: theme.palette.text.secondary,
          },

          '& .HomePage-ticket-description': {
            fontWeight: 500,
            fontSize: '14px',
            color: theme.palette.text.secondary,
            marginTop: 15,
          },

          '& .HomePage-ticket-time': {
            fontWeight: 500,
            fontSize: '20px',
            color: 'rgba(216, 84, 84, 0.72)',
          },

          '& .HomePage-ticket-attendant': {
            fontWeight: 600,
            fontSize: '14px',
            color: '#686464',
            marginTop: 15,
          },
        },
      },
    },
  },

  '@media (max-width: 1400px)': {
    '& .HomePage-section': {
      gap: 5,
      padding: '0 2vw',
    },
  },

  '@media (max-width: 1024px)': {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '120px 2vw',

    '& .HomePage-section': {
      '& .HomePage-ticket-container': {
        width: '100%',
        padding: 0,
      },
      '& .HomePage-open-tickets-container': {
        paddingTop: 30,
      },
    },
  },
}));
