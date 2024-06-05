import { Button, Paper, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ERoutesPath } from '../../../../core/router/domain/enums/routes-path.enum';
import { HomeBackground } from './components/home-background';

export function HomeWelcome() {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          zIndex: 1,
          alignItems: 'end',
          justifyContent: 'space-evenly',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '35vw',
            height: '40vh',
            margin: '50px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h4'>
            Bem-vindo ao Clima Travel!
          </Typography>

          <Typography component='p' variant='body1' textAlign='center'>
            Este protótipo tem como função principal prever determinados dados climáticos a partir
            de documentos disponibilizados pelo governo ao passar dos anos.
          </Typography>

          <Typography component='p' variant='body1' textAlign='center'>
            Para prosseguir para o sistema apenas clique no botão abaixo:
          </Typography>

          <Button
            variant='contained'
            color='info'
            onClick={() => {
              navigate(ERoutesPath.CLIMATE);
            }}
          >
            Continuar
          </Button>
        </Paper>
      </Stack>
      <HomeBackground />
    </>
  );
}
