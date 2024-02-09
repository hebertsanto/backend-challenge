import { PrismaCardsRepository } from '../../adpaters/repositories/cards-repository';
import { TCard } from '../../helpers/types';


export class CreateCardUseCase {
  private cardRepository = new PrismaCardsRepository();

  async create({ amount, id_account}: TCard) {
    const createCard = await this.cardRepository.create({
      amount,
      id_account
    });

    return createCard;
  }
}
