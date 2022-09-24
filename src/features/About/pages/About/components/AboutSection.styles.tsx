import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

export const AboutSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: '8vw 8vw 5em 14vw',
  marginBottom: 80,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  '& p': {
    color: '#686464',
    fontSize: 20,
  },

  '& h2': {
    color: theme.palette.secondary.main,
    fontWeight: 800,
  },

  '& h3': {
    color: '#575757',
    fontWeight: 500,
    fontSize: 23,
  },

  '& .About-info': {
    paddingLeft: 5,
  },

  '& .About-banner-container': {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',

    '& .About-banner': {
      marginTop: -50,
    },
  },

  '&.AboutSection-cards': {
    padding: '5em 12vw',
    marginBottom: 0,

    '& .About-cards': {
      display: 'flex',
      gap: 70,

      '& .About-card': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& h3': {
          textAlign: 'center',
          marginBottom: 15,
        },

        '& img': {
          aligntSelf: 'center',
          width: 65,
          marginTop: 20,
        },
      },
    },
  },

  '@media (max-width: 1440px)': {
    flexDirection: 'column',
    paddingLeft: '8vw',

    '& .About-info': {
      paddingLeft: 0,
    },

    '& .About-banner-container': {
      width: '100%',

      '& .About-banner': {
        marginTop: 50,
        alignSelf: 'center',
        width: '50vw',
      },
    },
  },

  '@media (max-width: 1280px)': {
    '& .About-cards': {
      flexDirection: 'column',
    },
  },
}));
