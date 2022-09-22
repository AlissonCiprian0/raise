import logo from '../../assets/images/Logo.png';
import logoText from '../../assets/images/LogoText.png';

interface iLogoProps {
  text?: boolean;
  size?: number;
  noBackground?: boolean;
}

const Logo = ({ text = false, size, noBackground = false }: iLogoProps) => {
  return (
    <img
      src={text ? logoText : logo}
      width={size ? size : 'auto'}
      style={noBackground ? { mixBlendMode: 'darken' } : {}}
    />
  );
};

export default Logo;
