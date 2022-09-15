import { BrowserRouter, useRoutes } from 'react-router-dom';

import AppRoutes from './routes/routes';
import { AppThemeProvider } from './shared/contexts';

const Routes = () => {
  return useRoutes(AppRoutes);
};

const App = () => {
  return (
    <AppThemeProvider>
      <div className='App' data-testid='App'>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </AppThemeProvider>
  );
};
export default App;
