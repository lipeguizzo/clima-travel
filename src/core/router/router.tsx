import { useMemo } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import { Stack } from '@mui/material';
import { toRouter } from './mappers/to-router.tsx';
import { ALL_ROUTES } from './routes/all-routes.tsx';

export function Router() {
  const { unauthenticatedRoutes } = useMemo(
    () => ({
      unauthenticatedRoutes: toRouter(ALL_ROUTES),
    }),
    [],
  );

  return useRoutes([
    {
      element: (
        <Stack sx={{ width: '100vw', height: '100vh' }}>
          <Outlet />
        </Stack>
      ),
      children: unauthenticatedRoutes,
    },
  ]);
}
