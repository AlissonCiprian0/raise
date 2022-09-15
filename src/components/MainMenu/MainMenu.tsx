import Logo from '../Logo/Logo';
import { AppBar, Box, Link, Toolbar } from '@mui/material';
import { MenuLink } from '../../constants/types';
import { menuItemStyles, menuListStyles } from './constants';

interface iMainMenuProps {
  links: MenuLink[];
}

const MainMenu = ({ links }: iMainMenuProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{ padding: '10px 10px 10px 5vw' }}>
        <Toolbar sx={{ display: 'flex' }}>
          <Logo size={230} text />

          <Box sx={{ marginLeft: 'auto' }}>
            <ul style={menuListStyles}>
              {links.map((link, index) => (
                <li style={menuItemStyles} key={index}>
                  <Link
                    href={link.url}
                    color='inherit'
                    sx={{ textDecoration: 'none' }}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainMenu;
