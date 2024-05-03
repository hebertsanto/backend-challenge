import { DbGetAllCards } from '../../../adpaters/repositories/prisma/cards/db-get-all-cards';
import { GetAllCardsUseCase } from '../../card/all-cards';

export default async function getAllCardsFactory() {
  const findCardRepository = new DbGetAllCards();
  const findAllCardsService = new GetAllCardsUseCase(findCardRepository);

  return findAllCardsService;
}
