import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { AboutSection } from './components/AboutSection.styles';
import AboutBanner from '../../../../assets/images/about.png';
import Goal from '../../../../assets/images/Goal.png';
import Binoculars from '../../../../assets/images/Binoculars.png';
import HoldingHeart from '../../../../assets/images/HoldingHeart.png';

const About = () => {
  const theme = useTheme();

  return (
    <Box
      className='Page'
      sx={{
        backgroundColor: theme.palette.secondary.light,
        padding: 0,
      }}
    >
      <AboutSection>
        <Box
          sx={{
            flex: 2,
          }}
        >
          <Typography variant='h2'>Sobre nós</Typography>

          <Box className='About-info'>
            <Typography marginTop={4}>
              A Raise Consultoria e Assessoria LTDA. é uma empresa fundada no
              ano de 2021, na cidade de Campinas - São Paulo.
            </Typography>

            <Typography marginTop={4}>
              Iniciada na Faculdade de Tecnologia de Campinas, tornou-se uma
              assessoria de referência! Por meio da tecnologia, a Raise visa
              aplicar melhorias em seus processos, a fim de aumentar a
              eficiência e lucratividade!
            </Typography>

            <Typography marginTop={4}>
              Sendo uma ferramenta Raise©, Ticket Management é o melhor que o
              mercado pode oferecer para sua empresa no que tange a gestão de
              tickets! Baseada na biblioteca ITIL® v.3, Ticket Management dispõe
              o melhor da tecnologia para administrar seus tickets.
            </Typography>
          </Box>
        </Box>

        <Box className='About-banner-container'>
          <img className='About-banner' src={AboutBanner} />
        </Box>
      </AboutSection>

      <AboutSection className='AboutSection-cards'>
        <Box className='About-cards'>
          <Box className='About-card'>
            <Typography variant='h3'>Missão</Typography>

            <Typography>
              Nossa missão é colaborar com o crescimento empresarial por meio da
              otimização de processos. Instaurar sistemas tecnológicos de ponta
              a fim de manter vantagem competitiva sobre as demais empresas.
              Tornar processos mais fluídos e menos cansativo para os
              colaboradores, diminuindo custos e tempo de execução.
            </Typography>

            <img src={Goal} />
          </Box>

          <Box className='About-card'>
            <Typography variant='h3'>Visão</Typography>

            <Typography>
              A projeção de um futuro é essencial para o sucesso de uma empresa.
              A visão da Raise Consultoria foi construída ainda em sua fase de
              planejamento, antes mesmo da criação da empresa. Nós buscamos
              reconhecimento pela excelência na entrega de resultados em
              assessoria e treinamento em gestão de empresas. Ansiamos pela
              confiança do mercado em cima de nossas soluções.
            </Typography>

            <img src={Binoculars} />
          </Box>

          <Box className='About-card'>
            <Typography variant='h3'>Valores</Typography>

            <Typography>
              As pessoas são o centro de tudo: são quem compõem as empresas, são
              os consumidores, são o motivo de tudo acontecer da maneira como é.
              Prezamos fortemente a humanização. O respeito. A qualidade.
              Esperamos que possamos construir uma duradoura relação de
              confiança. Estaremos à disposição, sempre.
            </Typography>

            <img src={HoldingHeart} />
          </Box>
        </Box>
      </AboutSection>
    </Box>
  );
};

export default About;
