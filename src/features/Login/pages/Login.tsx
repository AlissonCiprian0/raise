import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import Logo from '../../../components/Logo/Logo';
import { StyledLogin } from './Login.styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import User from '../../../models/User';

import { StyledTextField } from '../../../components/StyledTextField/StyledTextField';

const schema = yup
  .object({
    user: yup.string().required('O nome é obrigatório!'),
    password: yup
      .string()
      .required('A senha é obrigatória!')
      .min(6, 'A senha deve ter pelo menos 6 caracteres!'),
    code: yup.string().required('O código da empresa é obrigatório!'),
  })
  .required();

const Login = () => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    User.authenticate(data.user, data.password, data.code, data.user);
  };

  return (
    <StyledLogin className='Login Page'>
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
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '35px',
          }}
        >
          <Logo size={170} />
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(errors).length > 0 && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '50px',
              }}
            >
              {Object.values(errors).map((error, index) => (
                <p
                  style={{
                    textAlign: 'center',
                    padding: '10px',
                    color: 'white',
                    borderRadius: '5px',
                    backgroundColor: '#ff000047',
                    margin: '2px 0',
                  }}
                  key={`error-${index}`}
                >
                  {error?.message as any}
                </p>
              ))}
            </Box>
          )}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              transition: '.5s all easy-in-out',
            }}
          >
            <StyledTextField
              {...register('user')}
              label='Seu usuário aqui'
              variant='outlined'
              fullWidth
              sx={{
                borderRadius: theme.shape.borderRadius,
                marginTop: 5,
              }}
            />

            <StyledTextField
              {...register('password')}
              type='password'
              label='Sua senha aqui'
              variant='outlined'
              fullWidth
              sx={{
                borderRadius: theme.shape.borderRadius,
                marginTop: 5,
              }}
            />

            <StyledTextField
              {...register('code')}
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
              type='submit'
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
        </form>
      </Box>
    </StyledLogin>
  );
};

export default Login;
