import { PrismaCardsRepository } from '../../adpaters/repositories/cards-repository';

export class ListCardByIdUseCase {
  private cardsRespository = new PrismaCardsRepository();

  async listCard(id: string) {
    const card = await this.cardsRespository.listCardById(id);

    return card;
  }
}
