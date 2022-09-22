import Logo from '../Logo/Logo';
import MenuIcon from '../../assets/svg/menu.svg';
import LogoutIcon from '../../assets/svg/logout.svg';
import { Box, Link, Toolbar } from '@mui/material';
import { MenuLink } from '../../constants/types';
import StyledMainMenu from './MainMenu.styles';
import User from '../../models/User';
import menuLinks from '../../constants/menuLinks';

interface iMainMenuProps {
  links: MenuLink[];
}

const MainMenu = ({ links }: iMainMenuProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledMainMenu position='fixed'>
        <Toolbar>
          <Logo size={230} text />

          <Box>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    color='inherit'
                    sx={{ textDecoration: 'none' }}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}

              {User.isLogged() ? (
                <li>
                  <img
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => User.exit()}
                    src={String(LogoutIcon)}
                  />
                </li>
              ) : (
                <li>
                  <Link
                    href={menuLinks.login.url}
                    color='inherit'
                    sx={{ textDecoration: 'none' }}
                  >
                    {menuLinks.login.text}
                  </Link>
                </li>
              )}

              <li className='Menu-hamburger'>
                <img src={String(MenuIcon)} />
              </li>
            </ul>
          </Box>
        </Toolbar>
      </StyledMainMenu>
    </Box>
  );
};

export default MainMenu;
