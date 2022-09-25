import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Call = () => {
  return (
    <Box className='HomePage-call'>
      <Box className='HomePage-call-left'>
        <Typography className='HomePage-call-title'>
          Ticket #12086 - Agendamento de férias
        </Typography>

        <Typography className='HomePage-call-description'>
          Olá, boa noite! Gostaria de realizar o agendamento de min...
        </Typography>
      </Box>

      <Box className='HomePage-call-right'>
        <Typography className='HomePage-call-time'>
          Aberto há 14h27min
        </Typography>

        <Typography className='HomePage-call-attendant'>
          Em atendimento por: Erick Silva
        </Typography>
      </Box>
    </Box>
  );
};
