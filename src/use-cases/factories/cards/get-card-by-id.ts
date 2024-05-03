import { DbGetCardById } from '../../../adpaters/repositories/prisma/cards/db-get-card-by-id';
import { GetCardByIdUseCase } from '../../card/get-card-by-id';

export default async function findCardFactory() {
  const findCardRepository = new DbGetCardById();
  const findCardService = new GetCardByIdUseCase(findCardRepository);
  return findCardService;
}
