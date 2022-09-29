import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import User from '../../../../models/User';
import Landing from '../Landing/Landing';
import { HomePage } from './HomePage.styles';
import Flower from '../../../../assets/images/Orchid.png';
import { Ticket } from './Ticket';

const Home = () => {
  if (User.isLogged())
    return (
      <HomePage className='Page'>
        <Box className='HomePage-section'>
          <Typography variant='h2'>
            Boa tarde, {User.getUser().name}!
          </Typography>

          <Box className='HomePage-ticket-container'>
            <Typography
              variant='subtitle1'
              className='HomePage-ticket-container-title'
            >
              Boas-vindas de volta!
            </Typography>

            <Box className='HomePage-ticket-container-body'>
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
          <Box className='HomePage-open-tickets-container'>
            <Box className='HomePage-open-tickets'>
              <Typography variant='h3'>
                Seus chamados em atendimento!
              </Typography>

              <Ticket />
              <Ticket />
              <Ticket />
            </Box>

            <Box className='HomePage-open-tickets'>
              <Typography variant='h3'>Seus chamados encerrados!</Typography>

              <Ticket />
              <Ticket />
            </Box>
          </Box>
        </Box>
      </HomePage>
    );
  else return <Landing />;
};

export default Home;
