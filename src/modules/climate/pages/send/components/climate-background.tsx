import { Box } from '@mui/system';
import background from '../../../../../shared/assets/climate-background.jpg';

export function ClimateBackground() {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    ></Box>
  );
}
