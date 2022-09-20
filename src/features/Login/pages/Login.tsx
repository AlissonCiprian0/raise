import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { PageStyles } from '../../../styles';
import Logo from '../../../components/Logo/Logo';
import { StyledLogin, StyledTextField } from './Login.styles';

const Login = () => {
  const theme = useTheme();

  return (
    <StyledLogin
      className='Login Page'
      sx={{
        ...PageStyles,
      }}
    >
      <Box className='Login-container'>
        <Typography color='#696868' fontSize={22} fontWeight={500}>
          Ticket Management
        </Typography>

        <Typography
          sx={{
            color: '#9A9494',
            fontSize: 20,
            maxWidth: '22vw',
            marginTop: '5px',
            lineHeight: '35px',
          }}
        >
          Acesse agora para continuar utilizando a aplicação
        </Typography>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '35px',
          }}
        >
          <Logo size={170} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <StyledTextField
            id='filled-basic'
            label='Seu usuário aqui'
            variant='outlined'
            fullWidth
            sx={{
              borderRadius: theme.shape.borderRadius,
              marginTop: 5,
            }}
          />

          <StyledTextField
            id='filled-basic'
            label='Sua senha aqui'
            variant='outlined'
            fullWidth
            sx={{
              borderRadius: theme.shape.borderRadius,
              marginTop: 5,
            }}
          />

          <StyledTextField
            id='filled-basic'
            label='O código de sua empresa aqui'
            variant='outlined'
            fullWidth
            sx={{
              borderRadius: theme.shape.borderRadius,
              marginTop: 5,
            }}
          />
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '35px',
          }}
        >
          <Button
            variant='contained'
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              fontSize: 22,
              fontWeight: 600,
              padding: '12px 25px',
              borderRadius: theme.shape.borderRadius,
            }}
          >
            Acesse agora
          </Button>
        </Box>
      </Box>
    </StyledLogin>
  );
};

export default Login;
