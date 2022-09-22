import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import Logo from '../Logo/Logo';
import { StyledFooter } from './StyledFooter';

export const Footer = () => {
  const theme = useTheme();

  return (
    <StyledFooter
      sx={{
        backgroundColor: theme.palette.secondary.light,
        padding: 10,
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <Logo size={100} noBackground />

      <Box
        className='Footer-texts'
        sx={{
          display: 'flex',
          marginLeft: 8,
        }}
      >
        <Typography
          sx={{
            maxWidth: '400px',
            marginRight: 15,
          }}
        >
          | CAMPINAS Av. Cônego Antônio Roccato, 593 - Jardim Santa Monica -
          Campinas – SP Fone: (19) 98709-8642 | 0800 000 00 00 E-mail:
          contato@raiseconsultoria.com.br RAISE CONSULTORIA E ASSESSORIA LTDA.
          CNPJ: 01.0101.010/0001-00
        </Typography>

        <Typography
          sx={{
            maxWidth: '400px',
          }}
        >
          | SERVIÇOS Gestão empresarial estratégica Soluções tecnológicas para
          empresas Consultoria e assessoria empresarial From raise, to rise! 🚀
        </Typography>
      </Box>
    </StyledFooter>
  );
};
