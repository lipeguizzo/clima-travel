import { Grid, Link, Paper, Stack } from '@mui/material';
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import { ClimateResponseDTO } from '../../domain/dto/climate-response.dto';
import { ResultDoughnut } from './components/result-doughnut';
import { ResultTemperature } from './components/result-temperature';
import { EMonths, EMonthsTranslate } from '../../domain/enums/months.enum';
import { ResultBars } from './components/result-bars';
import { ResultPie } from './components/result-pie';
import { ERoutesPath } from '../../../../core/router/domain/enums/routes-path.enum';

export function ClimateResults() {
  const location = useLocation();
  const { state } = location;
  const climate: ClimateResponseDTO = state;

  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: 'lightskyblue',
        width: '100%',
        height: '100%',
      }}
    >
      <Grid container spacing={2} alignItems='center' padding='20px'>
        <Grid item sm={12} md={12} xs={12}>
          <Paper
            elevation={3}
            sx={{
              position: 'relative',
              width: '100%',
              height: '40vh',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <ResultTemperature
              temperatureMax={climate.temperatureMax}
              temperatureMin={climate.temperatureMin}
            />
          </Paper>
        </Grid>
        <Grid item sm={4} md={4} xl={4}>
          <Paper elevation={3}>
            <ResultDoughnut
              title='Precipitação (mm)'
              labels={[EMonthsTranslate[climate.month as EMonths], 'Anual']}
              datasets={[
                {
                  label: 'Precipitação',
                  data: [parseFloat(climate.precipitation), parseFloat(climate.precipitationYear)],
                  backgroundColor: ['#7EA1FF', '#FFDB5C'],
                },
              ]}
            />
          </Paper>
        </Grid>
        <Grid item sm={4} md={4} xl={4}>
          <Paper elevation={3}>
            <ResultBars
              title='Umidade (%)'
              labels={[EMonthsTranslate[climate.month as EMonths], 'Anual']}
              datasets={[
                {
                  label: 'Umidade',
                  data: [parseFloat(climate.humidity), parseFloat(climate.humidityYear)],
                  backgroundColor: ['#D2649A', '#FFAF61'],
                },
              ]}
            />
          </Paper>
        </Grid>
        <Grid item sm={4} md={4} xl={4}>
          <Paper elevation={3}>
            <ResultPie
              title='Vento (m/s)'
              labels={[EMonthsTranslate[climate.month as EMonths], 'Anual']}
              datasets={[
                {
                  label: 'Vento',
                  data: [parseFloat(climate.wind), parseFloat(climate.windYear)],
                  backgroundColor: ['#E49BFF', '#A1DD70'],
                },
              ]}
            />
          </Paper>
        </Grid>
        <Grid item sm={12} md={12} xs={12} textAlign='center'>
          <Link component={LinkRouter} to={ERoutesPath.HOME} underline='hover' color='white'>
            Voltar a página inicial
          </Link>
        </Grid>
      </Grid>
    </Stack>
  );
}
