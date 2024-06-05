import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import backgroundHot from '../../../../../shared/assets/climate-hot.jpeg';
import backgroundCold from '../../../../../shared/assets/climate-cold.jpeg';
import backgroundNeutral from '../../../../../shared/assets/climate-neutral.jpeg';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';

interface Props {
  temperatureMax: string;
  temperatureMin: string;
}

export function ResultTemperature({ temperatureMax, temperatureMin }: Props) {
  const valueMax: number = parseFloat(temperatureMax);
  const valueMin: number = parseFloat(temperatureMin);
  const isCold = valueMax < 18 && valueMin < 10;
  const isHot = valueMax >= 25 && valueMin > 18;

  function handleIcon(): ReactNode {
    if (isHot) {
      return <WbSunnyIcon color='warning' sx={{ fontSize: '80px' }} />;
    }

    if (isCold) {
      return <AcUnitIcon color='info' sx={{ fontSize: '80px' }} />;
    }

    return <CloudIcon color='inherit' sx={{ fontSize: '80px' }} />;
  }

  function handleBackground(): string {
    if (isHot) {
      return backgroundHot;
    }

    if (isCold) {
      return backgroundCold;
    }

    return backgroundNeutral;
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${handleBackground()})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <Typography component='h1' variant='h3'>
        Min {temperatureMin}°C <DeviceThermostatIcon color='primary' sx={{ fontSize: '40px' }} />
      </Typography>

      <Typography component='h1' variant='h3'>
        {handleIcon()}
      </Typography>

      <Typography component='h1' variant='h3'>
        Max {temperatureMax}°C <DeviceThermostatIcon color='error' sx={{ fontSize: '40px' }} />
      </Typography>
    </Box>
  );
}
