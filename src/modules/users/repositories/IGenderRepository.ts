import { IFindAllPaginatedDTO } from "@modules/users/@types/IFindAllPaginatedDTO";
import { ICreateGenderDTO } from "@modules/users/@types/iCreateGenderDTO";
import { GenderEntity } from "@modules/users/infra/knex/entities/GenderEntity";

type IGenderRepository = {
  create(data: ICreateGenderDTO): Promise<GenderEntity>;
  findAllPaginated(data: IFindAllPaginatedDTO): Promise<GenderEntity[]>;
  findAll(): Promise<GenderEntity[]>;
  findById(gender_id: number): Promise<GenderEntity | undefined>;
};

export { IGenderRepository };
