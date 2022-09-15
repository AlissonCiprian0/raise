import { BrowserRouter, useRoutes } from 'react-router-dom';

import AppRoutes from './routes/routes';
import { AppThemeProvider } from './shared/contexts';
import { ThemeProvider } from '@mui/material/styles';
import { LightTheme } from './shared/themes';

const Routes = () => {
  return useRoutes(AppRoutes);
};

const App = () => {
  return (
    //<AppThemeProvider>
    <ThemeProvider theme={LightTheme}>
      <div className='App' data-testid='App'>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
    //</AppThemeProvider>
  );
};
export default App;
