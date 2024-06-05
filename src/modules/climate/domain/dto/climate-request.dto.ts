import { ECities } from '../enums/cities.enum';
import { EMonths } from '../enums/months.enum';

export interface ClimateRequestDTO {
  city: ECities;
  month: EMonths;
}
