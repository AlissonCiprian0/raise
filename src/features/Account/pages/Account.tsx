import { useTheme } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { HomePage } from './Account.styles';
import Avatar from '../../../assets/images/Avatar.png';
import Podatempo from '../../../assets/images/Podatempo.png';
import User from '../../../models/User';
import { StyledTextField } from '../../../components/StyledTextField/StyledTextField';

const Account = () => {
  const theme = useTheme();

  return (
    <HomePage className='Page'>
      <Box className='Account-container'>
        <Box className='Account-user'>
          <img src={Avatar} />

          <Typography variant='h3'>{User.getUser().name}</Typography>
          <Typography>Empresa código: {User.getUser().code}</Typography>
          <Typography>Conectado desde: 21/09/2021</Typography>
          <Typography>
            Tipo de conta: <span>Usuário</span>
          </Typography>
          <Typography>Cargo: Analista de produtos</Typography>

          <Typography className='Account-user-open-tickets'>
            Chamados abertos: 93
          </Typography>

          <Box className='Account-user-collaborator'>
            <Typography>Colaborador(a):</Typography>
            <img src={Podatempo} />
          </Box>
        </Box>

        <Box className='Account-form'>
          <form>
            <StyledTextField
              // {...register('user')}
              label='Nome'
              variant='outlined'
              light
              sx={{
                borderRadius: theme.shape.borderRadius,
                marginTop: 3,
              }}
            />

            <StyledTextField
              // {...register('user')}
              label='Email'
              variant='outlined'
              light
              sx={{
                borderRadius: theme.shape.borderRadius,
                marginTop: 2,
              }}
            />

            <StyledTextField
              // {...register('user')}
              label='Data de nascimento'
              variant='outlined'
              light
              sx={{
                borderRadius: theme.shape.borderRadius,
                marginTop: 2,
              }}
            />

            <StyledTextField
              // {...register('user')}
              label='Usuário'
              variant='outlined'
              light
              sx={{
                borderRadius: theme.shape.borderRadius,
                marginTop: 2,
              }}
            />

            <StyledTextField
              // {...register('user')}
              label='Empresa'
              variant='outlined'
              light
              sx={{
                borderRadius: theme.shape.borderRadius,
                marginTop: 2,
              }}
            />

            <Button variant='contained'>Redefinir senha</Button>
          </form>
        </Box>
      </Box>
    </HomePage>
  );
};

export default Account;
