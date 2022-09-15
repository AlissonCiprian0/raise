import logo from '../../assets/images/Logo.png';
import logoText from '../../assets/images/LogoText.png';

interface iLogoProps {
  text?: boolean;
  size?: number;
}

const Logo = ({ text = false, size }: iLogoProps) => {
  return <img src={text ? logoText : logo} width={size ? size : 'auto'} />;
};

export default Logo;
