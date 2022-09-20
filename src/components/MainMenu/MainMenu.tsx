import Logo from '../Logo/Logo';
import MenuIcon from '../../assets/svg/menu.svg';
import { Box, Link, Toolbar } from '@mui/material';
import { MenuLink } from '../../constants/types';
import StyledMainMenu from './MainMenu.styles';

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
