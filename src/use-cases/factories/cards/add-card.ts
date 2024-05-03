import { DbGetAccountById } from '../../../adpaters/repositories/prisma/account/db-find-account-by-id';
import { DbAddCard } from '../../../adpaters/repositories/prisma/cards/db-add-card';
import { AddCardUseCase } from '../../card/add-card';

export default async function addCardFactory() {
  const addCardRepository = new DbAddCard();
  const findAccountRepository = new DbGetAccountById();
  const addCard = new AddCardUseCase(addCardRepository, findAccountRepository);

  return addCard;
}
