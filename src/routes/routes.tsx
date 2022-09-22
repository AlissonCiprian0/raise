import About from '../features/About/pages/About';
import PasswordResetWindow from '../features/Account/components/PasswordResetWindow/PasswordResetWindow';
import Account from '../features/Account/pages/Account';
import AddTicket from '../features/Home/components/AddTicket/AddTicket';
import ConfirmAddWindow from '../features/Home/components/ConfirmAddWindow/ConfirmAddWindow';
import ConfirmDeleteWindow from '../features/Home/components/ConfirmDeleteWindow/ConfirmDeleteWindow';
import Home from '../features/Home/pages/Home/Home';
import Login from '../features/Login/pages/Login';
import Ticket from '../features/Ticket/pages/Ticket/Ticket';
import { Navigate } from 'react-router-dom';
import MainMenu from '../components/MainMenu/MainMenu';
import menuLinks from '../constants/menuLinks';

const AppRoutes = [
  {
    path: '*',
    element: <Navigate to='/home' />,
  },
  {
    path: '/home',
    element: (
      <>
        <MainMenu links={[menuLinks.home, menuLinks.about]} />
        <Home />
      </>
    ),
    children: [
      {
        path: 'add-ticket',
        element: <AddTicket />,
        children: [
          {
            path: 'confirm',
            element: <ConfirmAddWindow />,
          },
          {
            path: 'delete',
            element: <ConfirmDeleteWindow />,
          },
        ],
      },
    ],
  },
  {
    path: '/about',
    element: (
      <>
        <MainMenu links={[menuLinks.home, menuLinks.about]} />
        <About />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <MainMenu links={[menuLinks.home, menuLinks.about]} />
        <Login />
      </>
    ),
  },
  {
    path: '/account',
    element: <Account />,
    children: [
      {
        path: 'password-reset',
        element: <PasswordResetWindow />,
      },
    ],
  },
  {
    path: '/ticket/:ticketID',
    element: <Ticket />,
  },
];

export default AppRoutes;
