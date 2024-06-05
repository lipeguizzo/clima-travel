import { z } from 'zod';
import { ECities } from '../enums/cities.enum';
import { EMonths } from '../enums/months.enum';

export const ClimateSchema = z.object({
  city: z.nativeEnum(ECities),
  month: z.nativeEnum(EMonths),
});

export type ClimateData = z.infer<typeof ClimateSchema>;
