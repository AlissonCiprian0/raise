import { BrowserRouter, useRoutes } from 'react-router-dom';

import AppRoutes from './routes/routes';
// import { AppThemeProvider } from './shared/contexts';
import { ThemeProvider } from '@mui/material/styles';
import { LightTheme } from './shared/themes';
import User from './models/User';

const Routes = () => {
  return useRoutes(AppRoutes);
};

const App = () => {
  // User.authenticate('alisson', '123', '23');

  return (
    // <AppThemeProvider>
    <ThemeProvider theme={LightTheme}>
      <div className='App' data-testid='App'>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
    // </AppThemeProvider>
  );
};
export default App;
