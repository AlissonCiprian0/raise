import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { PageStyles } from '../../../../styles';

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      className='Login Page'
      sx={{
        ...PageStyles,
        backgroundColor: theme.palette.secondary.light,
      }}
    >
      Home
    </Box>
  );
};

export default Home;
