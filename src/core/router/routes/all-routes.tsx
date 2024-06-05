import { Navigate } from 'react-router-dom';

import { ERoutesPath } from '../domain/enums/routes-path.enum';
import { IRoute } from '../domain/interfaces/route.interface';
import { HomeWelcome } from '../../../modules/home/pages/welcome/welcome';
import { ClimateSend } from '../../../modules/climate/pages/send/send';
import { ClimateResults } from '../../../modules/climate/pages/results/results';

export const ALL_ROUTES: Array<IRoute> = [
  {
    name: 'Redirect',
    hidden: true,
    path: '*',
    element: <Navigate to={ERoutesPath.HOME} />,
  },
  {
    name: 'Página Inicial',
    element: <HomeWelcome />,
    path: ERoutesPath.HOME,
  },
  {
    name: 'Clima Travel',
    element: <ClimateSend />,
    path: ERoutesPath.CLIMATE,
  },
  {
    name: 'Clima Travel Resultados',
    element: <ClimateResults />,
    path: ERoutesPath.CLIMATE_RESULTS,
  },
];
