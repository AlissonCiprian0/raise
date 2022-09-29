import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Ticket = () => {
  return (
    <Box className='HomePage-ticket'>
      <Box className='HomePage-ticket-left'>
        <Typography className='HomePage-ticket-title'>
          Ticket #12086 - Agendamento de férias
        </Typography>

        <Typography className='HomePage-ticket-description'>
          Olá, boa noite! Gostaria de realizar o agendamento de min...
        </Typography>
      </Box>

      <Box className='HomePage-ticket-right'>
        <Typography className='HomePage-ticket-time'>
          Aberto há 14h27min
        </Typography>

        <Typography className='HomePage-ticket-attendant'>
          Em atendimento por: Erick Silva
        </Typography>
      </Box>
    </Box>
  );
};
