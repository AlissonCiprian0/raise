import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

const About = () => {
  const theme = useTheme();

  return (
    <Box
      className='Page'
      sx={{
        backgroundColor: theme.palette.secondary.light,
      }}
    >
      Sobre
    </Box>
  );
};

export default About;
