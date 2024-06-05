import { Repository } from '../../../core/http/repository';
import { ClimateRequestDTO } from '../domain/dto/climate-request.dto';
import { ClimateResponseDTO } from '../domain/dto/climate-response.dto';

export class ClimateRepository extends Repository {
  static instance: ClimateRepository;

  constructor() {
    super('climate');

    if (ClimateRepository.instance) {
      return ClimateRepository.instance;
    }

    ClimateRepository.instance = this;
  }

  public async getClimate(dataDTO: ClimateRequestDTO): Promise<ClimateResponseDTO> {
    const { status, data } = await this.http.post<ClimateResponseDTO, ClimateRequestDTO>(
      '',
      dataDTO,
    );

    if (this.isOK(status)) {
      return data;
    }

    throw new Error('Erro ao gerar valores!');
  }
}
