import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Paper, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { ECities } from '../../domain/enums/cities.enum';
import { EMonths } from '../../domain/enums/months.enum';
import { ClimateData, ClimateSchema } from '../../domain/schemas/climate';
import { ClimateBackground } from './components/climate-background';
import { ClimateSendForm } from './components/climate-form';
import { ClimateRepository } from '../../repositories/climate.repository';
import { Bounce, toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { ERoutesPath } from '../../../../core/router/domain/enums/routes-path.enum';

export function ClimateSend() {
  const climateRepository = new ClimateRepository();
  const navigate = useNavigate();

  const methods = useForm<ClimateData>({
    defaultValues: {
      city: ECities.NONE,
      month: EMonths.NONE,
    },
    resolver: zodResolver(ClimateSchema),
  });

  async function submit(data: ClimateData) {
    try {
      const climateResults = await climateRepository.getClimate(data);
      toast.success('Dados gerados com sucesso!', {
        position: 'top-center',
        autoClose: 3000,
        pauseOnHover: false,
        theme: 'colored',
        transition: Bounce,
      });
      navigate(`${ERoutesPath.CLIMATE_RESULTS}`, { state: climateResults });
    } catch (error) {
      const data = (error as AxiosError).response?.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toast.error(`${(data as any).message}`, {
        position: 'top-center',
        autoClose: 3000,
        pauseOnHover: false,
        theme: 'colored',
        transition: Bounce,
      });
    }
  }

  return (
    <>
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          zIndex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          component='form'
          onSubmit={methods.handleSubmit(submit)}
          elevation={3}
          sx={{
            width: '35vw',
            height: '60vh',
            margin: '50px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h4'>
            Clima Travel
          </Typography>

          <Typography component='p' variant='body1' textAlign='center'>
            Para usar o sistema você terá que escolher a cidade e o mês que irá ocorrer sua viagem.
          </Typography>

          <FormProvider {...methods}>
            <ClimateSendForm />
          </FormProvider>

          <Link component={LinkRouter} to={ERoutesPath.HOME} underline='hover' color='lightskyblue'>
            Voltar a página inicial
          </Link>
        </Paper>
      </Stack>
      <ClimateBackground />
    </>
  );
}
