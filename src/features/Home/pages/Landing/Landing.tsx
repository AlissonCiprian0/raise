import { useTheme } from '@mui/material/styles';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LandingSection } from './components/LandingSection.styles';
import Slides from '../../../../assets/images/slideShow.png';
import { LandingCard } from './components/LandingCard.styles';
import Medal from '../../../../assets/images/MedalFirstPlace.png';
import PC from '../../../../assets/images/LaptopAlert.png';
import Arrow from '../../../../assets/images/Symantec.png';

import Hand from '../../../../assets/images/Service.png';
import Graphic from '../../../../assets/images/Increase.png';
import Plus from '../../../../assets/images/Plus.png';

const Landing = () => {
  const theme = useTheme();

  return (
    <Box className='Page' sx={{ padding: 0 }}>
      <LandingSection>
        <Box
          className='Landing-section-ticket'
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box flex={3}>
            <Typography variant='h2' fontWeight={600} fontSize={30}>
              Ticket Management
            </Typography>

            <Typography marginTop={3} fontSize={18} color='#686464'>
              Sendo uma ferramenta Raise©, Ticket Management é o melhor que o
              mercado pode oferecer para sua empresa no que tange a gestão de
              tickets! Baseada na biblioteca ITIL® v.3, Ticket Management dispõe
              o melhor da tecnologia para administrar seus tickets.
            </Typography>

            <Button
              variant='contained'
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                fontSize: 18,
                fontWeight: 600,
                padding: '12px 25px',
                borderRadius: theme.shape.borderRadius,
                textTransform: 'initial',
                marginTop: 3,
              }}
            >
              Saiba mais
            </Button>
          </Box>

          <Box
            flex={5}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <img src={Slides} />
          </Box>
        </Box>
      </LandingSection>

      <LandingSection>
        <Typography
          variant='h2'
          fontWeight={800}
          fontSize={30}
          textAlign='center'
          marginTop={8}
          marginBottom={8}
        >
          NOSSOS SERVIÇOS
        </Typography>

        <Box
          className='Landing-section-cards'
          sx={{
            width: '100%',
            display: 'flex',
            padding: '50px 0',
            paddingBottom: 0,
            paddingLeft: '12vw',
            boxSizing: 'border-box',
            justifyContent: 'center',
          }}
        >
          <Grid container rowSpacing={1} columns={{ sm: 1, md: 12 }}>
            <Grid xs={6}>
              <LandingCard>
                <img src={Medal} />
                <Typography>
                  Sistema de gestão de tickets líder
                  <br /> no mercado!
                </Typography>
              </LandingCard>
            </Grid>

            <Grid xs={6}>
              <LandingCard>
                <img src={PC} />
                <Typography>
                  Suporte a SLAs (Service Level Agreement). Responda rapidamente
                  aos seus clientes prioritários!
                </Typography>
              </LandingCard>
            </Grid>

            <Grid xs={6}>
              <LandingCard>
                <img src={Arrow} />
                <Typography>
                  Ambiente extremamente seguro! Mantenha a integridade,
                  privacidade e disponibilidade da informação de seus clientes e
                  colaboradores!
                </Typography>
              </LandingCard>
            </Grid>

            <Grid xs={6}>
              <LandingCard>
                <img src={Hand} />
                <Typography>
                  Suporte especializado e com atendimento 24h para resolver
                  qualquer problema ou dúvidas de sua aplicação!
                </Typography>
              </LandingCard>
            </Grid>

            <Grid xs={6}>
              <LandingCard>
                <img src={Graphic} />
                <Typography>
                  Aumente seus indicadores através da gestão de tempo! Levante
                  sua lucratividade através de nosso sistema!
                </Typography>
              </LandingCard>
            </Grid>

            <Grid xs={6}>
              <LandingCard>
                <img src={Plus} />
                <Typography>
                  Tudo isso, e muito mais! Venha expandir seus negócios com a
                  gente!
                </Typography>
              </LandingCard>
            </Grid>
          </Grid>
        </Box>
      </LandingSection>
    </Box>
  );
};

export default Landing;
