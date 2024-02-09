import { PrismaCardsRepository } from '../../adpaters/repositories/cards-repository';

export class ListCardsUseCase {
  private cardRepository = new PrismaCardsRepository();

  async listAllCards(id : string) {
    const cards = await this.cardRepository.listCards(id);

    return cards;
  }
}
