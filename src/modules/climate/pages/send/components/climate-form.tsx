import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { ECities, ECitiesTranslate } from '../../../domain/enums/cities.enum';
import { ClimateData } from '../../../domain/schemas/climate';
import { useFormContext } from 'react-hook-form';
import { EMonths, EMonthsTranslate } from '../../../domain/enums/months.enum';

export function ClimateSendForm() {
  const { register, watch } = useFormContext<ClimateData>();
  const city = watch('city');
  const month = watch('month');

  function handleCityTranslate(cityKey: string) {
    return Object.entries(ECitiesTranslate)
      .filter(([key]) => key === cityKey)
      .map(([, value]) => {
        return value;
      });
  }

  return (
    <Grid container spacing={3}>
      <Grid item sm={12} md={12} xl={12}>
        <FormControl fullWidth>
          <InputLabel>Cidade:</InputLabel>
          <Select {...register('city')} name='city' label='Cidade:' color='info' value={city}>
            {Object.entries(ECities).map(([key, value]) => (
              <MenuItem key={key} value={value} disabled={value === ECities.NONE}>
                {handleCityTranslate(key)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={12} md={12} xl={12}>
        <FormControl fullWidth>
          <InputLabel>Mês:</InputLabel>
          <Select {...register('month')} name='month' label='Mês:' color='info' value={month}>
            {Object.entries(EMonths).map(([key, value]) => (
              <MenuItem key={key} value={value} disabled={value === EMonths.NONE}>
                {EMonthsTranslate[value]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={12} md={12} xl={12}>
        <Button variant='contained' color='info' type='submit' size='large' fullWidth>
          Enviar
        </Button>
      </Grid>
    </Grid>
  );
}
