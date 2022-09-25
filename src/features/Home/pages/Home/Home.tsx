import { Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import User from '../../../../models/User';
import Landing from '../Landing/Landing';
import { HomePage } from './HomePage.styles';
import Flower from '../../../../assets/images/Orchid.png';
import { Call } from './Call';

const Home = () => {
  const theme = useTheme();

  if (User.isLogged())
    return (
      <HomePage className='Page'>
        <Box className='HomePage-section'>
          <Typography variant='h2'>
            Boa tarde, {User.getUser().name}!
          </Typography>

          <Box className='HomePage-call-container'>
            <Typography
              variant='subtitle1'
              className='HomePage-call-container-title'
            >
              Boas-vindas de volta!
            </Typography>

            <Box className='HomePage-call-container-body'>
              <Button variant='contained'>Abrir im novo chamado</Button>

              <img src={Flower} />

              <Typography>
                O conhecimento é a semente
                <br /> para seu crescimento!
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className='HomePage-section'>
          <Box className='HomePage-open-calls-container'>
            <Box className='HomePage-open-calls'>
              <Typography variant='h3'>
                Seus chamados em atendimento!
              </Typography>

              <Call />
              <Call />
              <Call />
            </Box>

            <Box className='HomePage-open-calls'>
              <Typography variant='h3'>Seus chamados encerrados!</Typography>

              <Call />
              <Call />
            </Box>
          </Box>
        </Box>
      </HomePage>
    );
  else return <Landing />;
};

export default Home;
