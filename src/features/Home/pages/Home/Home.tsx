import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import User from '../../../../models/User';

const Home = () => {
  const theme = useTheme();

  if (User.isLogged() === true)
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
  else return <Box className='Page'>Home</Box>;
};

export default Home;
