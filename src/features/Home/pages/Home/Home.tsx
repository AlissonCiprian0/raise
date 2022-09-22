import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import User from '../../../../models/User';
import Landing from '../Landing/Landing';

const Home = () => {
  const theme = useTheme();

  if (User.isLogged())
    return (
      <Box
        className='Page'
        sx={{
          backgroundColor: theme.palette.secondary.light,
        }}
      >
        Página do usuário
      </Box>
    );
  else return <Landing />;
};

export default Home;
